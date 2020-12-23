var flyDots = new janvas.Canvas({
  container: "#app",
  props: {
    interval: 16.67,
    times: -1,
    dots: [],
    lines: []
  },
  components: {
    factory: (function () {
      function Dot(ctx, width, height) {
        this._left = this._top = -50;
        this._right = width + 50;
        this._bottom = height + 50;
        this._x = janvas.Utils.randInt(this._left, this._right, true);
        this._y = janvas.Utils.randInt(this._top, this._bottom, true);
        this._r = 3;
        this._lvx = this._vx = janvas.Utils.randSign() * janvas.Utils.randInt(10, 100, true) / 100;
        this._lvy = this._vy = janvas.Utils.randSign() * janvas.Utils.randInt(10, 100, true) / 100;
        this._relateStart = [];
        this._relateEnd = [];
        this.arc = new janvas.Arc(ctx, this._x, this._y, this._r);
        this.arc.getStyle().setFillStyle("hsl(0, 0%, 40%)");
      }

      Dot.prototype = {
        initXY: function (x, y) {
          this._x = x;
          this._y = y;
          this.arc.initXY(x, y);
          this._relateStart.forEach(this.startCallback, this);
          this._relateEnd.forEach(this.endCallBack, this);
        },
        closer: function (x, y) {
          this._vx = (x - this._x) / Math.abs(x - this._x);
          this._vy = (y - this._y) / Math.abs(y - this._y);
        },
        restore: function () {
          this._vx = this._lvx;
          this._vy = this._lvy;
        },
        relateStart: function (line) {
          this._relateStart.push(line);
        },
        relateEnd: function (line) {
          this._relateEnd.push(line);
        },
        startCallback: function (line) {
          line.initXY(this._x, this._y);
        },
        endCallBack: function (line) {
          line.setEndX(this._x).setEndY(this._y);
        },
        update: function () {
          this._x += this._vx;
          this._y += this._vy;
          this.initXY(this._x, this._y);
          if (this._x < this._left || this._x > this._right) this._vx *= -1;
          if (this._y < this._top || this._y > this._bottom) this._vy *= -1;
        },
        draw: function () {
          this.arc.fill();
        }
      };

      function Line(ctx, source, target) {
        this.line = new janvas.Line(ctx);
        source.relateStart(this.line);
        target.relateEnd(this.line);
        this._rgb = new janvas.Rgb(0, 0, 0, 0);
      }

      Line.prototype = {
        update: function () {
          var _lambda = 255 - janvas.Utils.pythagorean(
            this.line.getStartX() - this.line.getEndX(),
            this.line.getStartY() - this.line.getEndY()) / 100 * 255;
          this._lambda = _lambda < 0 ? 0 : _lambda;
          this.line.getStyle().setStrokeStyle(this._rgb.setAlpha(this._lambda).toRgbString(true));
        },
        draw: function () {
          if (this._lambda) this.line.stroke();
        }
      };

      return {
        newDot: function (width, height) {
          return new Dot(this.$ctx, width, height);
        },
        newLine: function (source, target) {
          return new Line(this.$ctx, source, target);
        }
      };
    }())
  },
  methods: {
    init: function () {
      for (var i = 0; i < 100; i++) {
        var dot = this.factory.newDot(this.width, this.height);
        this.dots.forEach(function (target) {
          this.lines.push(this.factory.newLine(dot, target));
        }, this);
        this.dots.push(dot);
      }
      this.cursor = this.factory.newDot();
      this.dots.forEach(function (target) {
        this.lines.push(this.factory.newLine(this.cursor, target));
      }, this);
      this.raf.start();
    },
    update: function (ts) {
      this.dots.forEach(function (dot) {
        dot.update();
      }, this);
      this.lines.forEach(function (line) {
        line.update();
      });
    },
    draw: function () {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.lines.forEach(function (line) {
        line.draw();
      });
      this.dots.forEach(function (dot) {
        dot.draw();
      });
    }
  },
  events: {
    mousedown: function () {
      this.dots.forEach(function (dot) {
        dot.closer(this.x, this.y);
      }, this);
    },
    mousemove: function () {
      this.cursor.initXY(this.x, this.y);
    },
    mouseup: function () {
      this.dots.forEach(function (dot) {
        dot.restore();
      });
    }
  }
});
