var aboutWheel = new janvas.Canvas({
  container: "#app",
  props: {
    size: 50
  },
  methods: {
    init: function () {
      this.background = new janvas.Rect(this.ctx, 0, 0, this.width, this.height);
      var cx = this.width / 2, cy = this.height / 2;
      this.img = new janvas.Image(this.ctx, cx - this.size, cy - this.size,
        "img/complex.svg", cx, cy, this.size * 2, this.size * 2);
      this.img.getStyle().setStrokeStyle("grey");
      this.raf.start();
    },
    update: function (ts) {
      this.img.getMatrix().setAngle(Math.PI / 2000 * ts);
    },
    draw: function () {
      this.background.clear(0, 0, this.width, this.height);
      this.img.draw();
      if (this.img._mousein) this.img.stroke();
    }
  },
  events: {
    mousedown: function () {
      if (this.img._mousein) {
        this._mousedown = true;
        this.img.lastX = this.img.getStartX();
        this.img.lastY = this.img.getStartY();
      }
    },
    mousemove: function () {
      if (this._mousedown) {
        var mx = this.img.lastX + this.moveX, my = this.img.lastY + this.moveY;
        this.img.init(mx, my, mx + this.size, my + this.size);
      } else {
        this.img._mousein = this.img.isPointInPath(this.x, this.y);
      }
    },
    mouseup: function () {
      this._mousedown = false;
    },
    wheel: function () {
      /**
       * 当我们缩放一个对象的时候，有两种情况
       *   1. 中心点为 0, 0
       *     这种情况只能去缩放对象的 startX, startY
       *   2. 中心点不为 0, 0
       *     这种情况可选择缩放对象的 startX, startY
       *       因为存在中心点，所以在缩放后，需校准一次 offset，值为 _sx|_sy*(1-scale)
       *     也可以优先选择缩放对象的 centerX, centerY
       *       这样子就无需校准对象的 offset
       * 以上为笛卡尔坐标系内对象的缩放内容，当存在中心点时优先缩放中心点而不是起始绘制点
       * 其实就是一个比例问题（以下内容：target为目标点，event为事件点，point为对象点）
       *   缩放：(target-event)/scale=(point-event)/lastScale
       *   偏移：_sx|sy/1 = offset/(scale-1) // 存在中心点且缩放起始绘制点导致缩放图形而产生的偏移量
       */
      // 方式一（不推荐）：
      /*var targetSx = this.x + (this.img.getStartX() - this.x) * this.scaling,
        targetSy = this.y + (this.img.getStartY() - this.y) * this.scaling;
      this.img.init(targetSx, targetSy, targetSx + this.size, targetSy + this.size);
      this.img.getMatrix().setScale(this.scale, this.scale).setOffset(
        this.img._sx * (1 - this.scale), // 校正偏移量，不推荐此做法
        this.img._sy * (1 - this.scale)
      );*/
      // 方式二（推荐）：
      var targetSx = this.x + (this.img.getCenterX() - this.x) * this.scaling,
        targetSy = this.y + (this.img.getCenterY() - this.y) * this.scaling;
      this.img.init(targetSx - this.size, targetSy - this.size, targetSx, targetSy)
        .getMatrix().setScale(this.scale, this.scale);
    }
  }
});
