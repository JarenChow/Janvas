var taichi = new janvas.Canvas({
  container: "#app",
  props: {
    interval: 16.67,
    times: -1,
    addCount: 0,
    taichi: []
  },
  components: {
    factory: (function () {
      function Taichi(ctx, x, y, r) {
        var outer = new janvas.Arc(ctx, x, y, r);
        outer.getStyle().setLineWidth(r / 8);
        var left = new janvas.Arc(ctx, x, y, r, Math.PI / 2, -Math.PI / 2, false, x, y);
        var right = new janvas.Arc(ctx, x, y, r, Math.PI / 2, -Math.PI / 2, true, x, y);
        right.getStyle().setFillStyle("white");
        var top = new janvas.Arc(ctx, x, y - r / 2, r / 2, 0, Math.PI * 2, false, x, y);
        var bottom = new janvas.Arc(ctx, x, y + r / 2, r / 2, 0, Math.PI * 2, false, x, y);
        bottom.getStyle().setFillStyle("white");
        var topSmall = new janvas.Arc(ctx, x, y - r / 2, r / 8, 0, Math.PI * 2, false, x, y);
        var bottomSmall = new janvas.Arc(ctx, x, y + r / 2, r / 8, 0, Math.PI * 2, false, x, y);
        topSmall.getStyle().setFillStyle("white");
        this.x = x;
        this.y = y;
        this.r = r;
        this.rotateSpeed = janvas.Utils.randSign() * Math.PI / 2000 * 16.67 * 42 / r;
        this.cp = new janvas.Point();
        this.outer = outer;
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
        this.topSmall = topSmall;
        this.bottomSmall = bottomSmall;
        this.grd = { // 颜色渐变的对象
          rgb: new janvas.Rgb(0, 0, 0),
          outerStart: new janvas.Rgb(255, 255, 255).sRgbInverseCompanding(),
          black: new janvas.Rgb(0, 0, 0).sRgbInverseCompanding(),
          white: new janvas.Rgb(255, 255, 255).sRgbInverseCompanding(),
          lambda: 0,
          lambdaMax: Math.ceil(1000 / 16.67)
        };
      }

      Taichi.prototype = {
        init: function (x, y) {
          this.x = x;
          this.y = y;
          this.outer.initXY(x, y);
          this.left.init(x, y, x, y);
          this.right.init(x, y, x, y);
          this.top.init(x, y - this.r / 2, x, y);
          this.bottom.init(x, y + this.r / 2, x, y);
          this.topSmall.init(x, y - this.r / 2, x, y);
          this.bottomSmall.init(x, y + this.r / 2, x, y);
        },
        update: function () {
          this.rotate();
          if (!this.gradient()) this.update = this._update;
        },
        _update: function () {
          this.rotate();
        },
        draw: function () {
          this.outer.stroke();
          this.left.fill();
          this.right.fill();
          this.top.fill();
          this.bottom.fill();
          this.topSmall.fill();
          this.bottomSmall.fill();
        },
        rotate: function () {
          var angle = this.left.getMatrix().getAngle() + this.rotateSpeed;
          this.left.getMatrix().setAngle(angle);
          this.right.getMatrix().setAngle(angle);
          this.top.getMatrix().setAngle(angle);
          this.bottom.getMatrix().setAngle(angle);
          this.topSmall.getMatrix().setAngle(angle);
          this.bottomSmall.getMatrix().setAngle(angle);
        },
        gradient: function () {
          var grd = this.grd;
          if (grd.lambda < grd.lambdaMax) {
            var lambda = grd.lambda / grd.lambdaMax;
            this.outer.getStyle().setStrokeStyle(
              grd.rgb.sRgbMarksGammaMixing(grd.outerStart, grd.black, lambda)
                .sRgbCompanding().toRgbString()
            );
            this._grd(this.left, grd.white, grd.black, lambda);
            this.top.getStyle().setFillStyle(this.left.getStyle().getFillStyle());
            this.bottomSmall.getStyle().setFillStyle(this.left.getStyle().getFillStyle());
            this._grd(this.right, grd.black, grd.white, lambda);
            this.bottom.getStyle().setFillStyle(this.right.getStyle().getFillStyle());
            this.topSmall.getStyle().setFillStyle(this.right.getStyle().getFillStyle());
            grd.lambda++;
            return true;
          } else {
            this.outer.getStyle().setStrokeStyle(janvas.FillStrokeStyle.DEFAULT_STROKE_STYLE);
            this.left.getStyle().setFillStyle(janvas.FillStrokeStyle.DEFAULT_FILL_STYLE);
            this.top.getStyle().setFillStyle(janvas.FillStrokeStyle.DEFAULT_FILL_STYLE);
            this.bottomSmall.getStyle().setFillStyle(janvas.FillStrokeStyle.DEFAULT_FILL_STYLE);
            this.right.getStyle().setFillStyle("white");
            this.bottom.getStyle().setFillStyle("white");
            this.topSmall.getStyle().setFillStyle("white");
            return false;
          }
        },
        _grd: function (obj, start, end, lambda) {
          obj.getStyle().setFillStyle(
            this.grd.rgb.sRgbMarksGammaMixing(start, end, lambda)
              .sRgbCompanding().toRgbString()
          );
        },
        collide: function (taichi) {
          var x1 = this.x, y1 = this.y, r1 = this.r * 17 / 16, // 添加了 outer linewidth 的一半
            x2 = taichi.x, y2 = taichi.y, r2 = taichi.r * 17 / 16,
            cp1 = this.cp, cp2 = taichi.cp, r = Math.min(r1, r2); // collision point
          if (janvas.Collision.arc(x1, y1, r1, x2, y2, r2)) {
            cp1.init(x1, y1).subtract(cp2.init(x2, y2)).unit().scale(r, r);
            if (isNaN(cp1.x)) {
              Math.random() > 0.5 ? cp1.init(r, 0) : cp1.init(0, r);
            }
            this.init(x1 + cp1.x / r1, y1 + cp1.y / r1);
            cp1.inverse();
            taichi.init(x2 + cp1.x / r2, y2 + cp1.y / r2);
          }
        },
        inRect: function (rect) {
          return janvas.Collision.arcRect(this.x, this.y, this.r,
            rect.getStartX(), rect.getStartY(), rect.getWidth(), rect.getHeight());
        }
      };

      return {
        createTaichi: function (x, y, r) {
          return new Taichi(this.$ctx, x, y, r);
        }
      };
    }())
  },
  methods: {
    init: function () {
      this.background = new janvas.Rect(this.ctx, 0, 0, this.width, this.height);
      this.raf.start();
    },
    update: function (ts) {
      if (ts > this.addCount * 1000) {
        this.addCount++;
        this.add();
      }
      var flag = false;
      this.taichi.forEach(function (tc1) {
        tc1.update();
        this.taichi.forEach(function (tc2) {
          if (tc1 === tc2) return;
          tc1.collide(tc2);
        });
        tc1.in = tc1.inRect(this.background);
        if (!tc1.in) flag = true;
      }, this);
      if (flag) this.taichi = this.taichi.filter(function (tc) {
        return tc.in;
      });
    },
    draw: function () {
      this.background.clear(0, 0, this.width, this.height);
      this.taichi.forEach(function (tc) {
        tc.draw();
      });
    }
  },
  events: {
    mousedown: function () {
      this.add(this.x, this.y);
    },
    visibility: function (visible) {
      if (visible) this.raf.resume();
      else this.raf.pause();
    },
    resize: function () {
      this.background.setWidth(this.width).setHeight(this.height);
    }
  },
  functions: {
    add: function (x, y) {
      this.taichi.push(this.factory.createTaichi(
        x || janvas.Utils.randInt(0, this.width),
        y || janvas.Utils.randInt(0, this.height),
        janvas.Utils.randInt(20, 100)
      ));
    }
  }
});
