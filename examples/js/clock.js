var clock = new janvas.Canvas({
  container: "#app",
  methods: {
    init: function () {
      var bezier = new janvas.Bezier(this.ctx, 0, 0, [0, 0, 100, 1457, 200, -460, 300, 989, 400, 405, 500, 500]);
      bezier.getMatrix().setScale(1 / 500, 1 / 500);
      this.animation = bezier.setTransform().getTransformedPoints().filter(function () {
        return arguments[1] % 2 === 1;
      });
      this.background = new janvas.Rect(this.ctx); // 背景
      this.bottom = new janvas.RoundRect(this.ctx); // 时钟底
      this.bottom.border = new janvas.RoundRect(this.ctx);
      this.outer = new janvas.Arc(this.ctx); // 主圆
      this.outer.border = new janvas.Arc(this.ctx); // 主圆阴影
      this.second = new janvas.RoundRect(this.ctx);
      this.minute = new janvas.RoundRect(this.ctx);
      this.hour = new janvas.RoundRect(this.ctx);
      this.dot = new janvas.Arc(this.ctx);
      this.initStyles();
      this.resize();
      this.visibility(true);
    },
    initStyles: function () {
      this.shadow = new janvas.ShadowStyle().setShadowColor("hsla(0, 0%, 0%, 0.8)");
      this.shadow.basis = new janvas.Point(0, 0);
      this.shadow.cursor = new janvas.Point(0, 0);
      this.background.getStyle().setFillStyle("hsl(0, 0%, 63%)"); // 背景
      this.bottom.shadow = new janvas.ShadowStyle().setShadowColor("hsla(0, 0%, 0%, 0.5)");
      this.outer.shadow = new janvas.ShadowStyle().setShadowColor("hsla(0, 0%, 0%, 0.5)");
      this.dot.getStyle().setStrokeStyle("hsl(0, 0%, 63%)");
    },
    resizeStyles: function () {
      var min = Math.min(this.width, this.height);
      this.shadow.setShadowBlur(min / 140);
      this.shadow.basis.init(min / 35, 0);
      this.gradient("hsl(0, 0%, 100%)", "hsl(0, 0%, 90%)",
        this.bottom, this.hour, this.minute, this.dot);
      this.bottom.border.getStyle().setLineWidth(min / 35);
      this.bottom.shadow.setShadowBlur(min / 140 * 3).setShadowOffsetX(-this.width);
      this.gradient("hsl(0, 0%, 40%)", "hsl(0, 0%, 23%)", this.outer);
      this.outer.border.getStyle().setLineWidth(min / 35);
      this.outer.shadow.setShadowBlur(min / 70).setShadowOffsetX(-this.width);
      this.gradient("hsl(0, 80%, 70%)", "hsl(0, 80%, 50%)", this.second);
    },
    update: function (ts) {
      ts += this.milliseconds;
      if (ts > this._secondIncrement * 1000) {
        this._secondIncrement++;
        if (++this.seconds % 60 === 0) {
          this.seconds = 0;
          if (++this.minutes % 60 === 0) {
            this.minutes = 0;
            if (++this.hours % 24 === 0) this.hours = 0;
          }
        }
        this._allSeconds++; // 维护一个总秒数，避免重复操作 hours/minutes/seconds
        this.setAngle();
        this.onEvent(this.hours, this.minutes, this.seconds);
      } else if (ts % 1000 > 600) { // 动画间隔为 400，动画效果为五阶贝塞尔曲线
        this.second.getMatrix().setAngle(this._secondLastAngle
          + Math.PI / 30 // secondIncrementAngle: 1/60*2PI
          * this.animation[Math.floor((ts % 1000 - 600) / 400 * this.animation.length)]);
      }
    },
    draw: function () {
      this.background.fill();
      this.cfg.setShadowStyles(this.shadow);
      this.bottom.fill();
      this.cfg.setShadowStyles(this.bottom.shadow);
      this.bottom.clip().border.stroke().restore();
      this.cfg.resetShadowStyles();
      this.outer.fill();
      this.cfg.setShadowStyles(this.outer.shadow);
      this.outer.border.stroke();
      this.cfg.setShadowStyles(this.shadow);
      this.hour.fill();
      this.minute.fill();
      this.second.fill();
      this.dot.fill();
      this.cfg.resetShadowStyles();
      this.dot.stroke();
    }
  },
  events: {
    resize: function () {
      var goldenRatio = 0.809,
        size = Math.min(this.width, this.height) * goldenRatio,
        cx = this.width / 2, cy = this.height / 2;
      this._sizeBy2 = size / 2;
      this.background.initXY(0, 0).setWidth(this.width).setHeight(this.height);
      this.bottom.init(cx - this._sizeBy2, cy - this._sizeBy2, cx, cy)
        .setWidth(size).setHeight(size).setRadius(size / 4);
      this.bottom.border.initXY(this.bottom.getStartX() + this.width, this.bottom.getStartY())
        .setWidth(size).setHeight(size).setRadius(size / 4);
      this.outer.initXY(cx, cy).setRadius(size * goldenRatio / 2);
      this.outer.border.initXY(cx + this.width, cy).setRadius(this.outer.getRadius());
      var offset = this.outer.getRadius() * Math.pow(goldenRatio, 18);
      this.second.init(cx - offset * 8, cy - offset, cx, cy)
        .setWidth(this.outer.getRadius() * goldenRatio + offset * 8)
        .setHeight(offset * 2).setRadius(offset);
      offset /= Math.pow(goldenRatio, 2);
      this.minute.init(cx - offset, cy - offset, cx, cy)
        .setWidth(this.outer.getRadius() * Math.pow(goldenRatio, 2) + offset)
        .setHeight(offset * 2).setRadius(offset);
      offset /= Math.pow(goldenRatio, 2);
      this.hour.init(cx - offset, cy - offset, cx, cy)
        .setWidth(this.outer.getRadius() * Math.pow(goldenRatio, 4) + offset)
        .setHeight(offset * 2).setRadius(offset);
      this.dot.initXY(cx, cy).setRadius(offset / Math.pow(goldenRatio, 2));
      this.resizeStyles();
    },
    visibility: function (visible) {
      if (visible) {
        this.resetTime();
        this.raf.start();
      } else {
        this.raf.stop();
      }
    },
    onEvent: janvas.Utils.noop
  },
  functions: {
    gradient: function (start, stop) {
      var grd = janvas.Utils.createLinearGradient(-this._sizeBy2, -this._sizeBy2,
        this._sizeBy2, this._sizeBy2, arguments[2]);
      grd.addColorStop(0, start);
      grd.addColorStop(1, stop);
      for (var i = 2; i < arguments.length; i++) arguments[i].getStyle().setFillStyle(grd);
    },
    resetTime: function () {
      var date = new Date();
      this.hours = date.getHours();
      this.minutes = date.getMinutes();
      this.seconds = date.getSeconds();
      this.milliseconds = date.getMilliseconds();
      this._allSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds;
      this._secondIncrement = 1;
      this.setAngle();
    },
    setAngle: function () {
      this.hour.getMatrix().setAngle(this._allSeconds / 3600 / 12 * Math.PI * 2 - Math.PI / 2);
      this.minute.getMatrix().setAngle(this._allSeconds / 60 / 60 * Math.PI * 2 - Math.PI / 2);
      this.second.getMatrix().setAngle(this._allSeconds / 60 * Math.PI * 2 - Math.PI / 2);
      this._secondLastAngle = this.second.getMatrix().getAngle();
      // if (this.hours === 5) {
      //   if (this.minutes >= 45) this.shadow.cursor.copy(this.shadow.basis).scaleX(this._allSeconds % 900 / 900);
      // } else
      //   if (this.hours >= 6 && this.hours < 18) { // 设置 shadow 随时间变化的“角度”
      this.shadow.cursor.copy(this.shadow.basis).rotate((this._allSeconds - 6 * 3600) % 43200 / (12 * 3600) * Math.PI);
      // }
      // else if (this.hours === 18) {
      // if (this.minutes < 15) this.shadow.cursor.copy(this.shadow.basis).inverseX().scaleX(1 - this._allSeconds % 900 / 900);
      // }
      this.shadow.setShadowOffsetX(this.shadow.cursor.getX()).setShadowOffsetY(this.shadow.cursor.getY());
    }
  }
});
clock.onEvent = function (hours, minutes, seconds) {
  console.log(pad(hours) + ":" + pad(minutes) + ":" + pad(seconds));

  function pad(num) {
    return num < 10 ? "0" + num : "" + num
  }
};
