var aboutEdge = new janvas.Canvas({
  container: "#app",
  props: {
    points: [],
    current: void (0)
  },
  methods: {
    init: function () {
      this.start = new janvas.Arc(this.ctx, 200, 250, 5);
      this.start.getStyle().setFillStyle("hsl(0, 80%, 60%)");
      this.end = new janvas.Arc(this.ctx, 500, 250, 5);
      this.end.getStyle().setFillStyle("hsl(90, 80%, 60%)");
      this.an = new janvas.Arc(this.ctx, 525, 300, 5);
      this.an.getStyle().setFillStyle("hsl(180, 80%, 60%)");
      this.points.push(this.start, this.end, this.an);
      this.edge = new janvas.Edge(this.ctx);
      this.text = new janvas.Text(this.ctx, 0, 0, "Janvas");
      this.text.getStyle().setFont("12px sans-serif").setTextAlign("center")
        .setTextBaseline("middle");
      this.edge.setEmptyLength(janvas.Utils.measureTextWidth(this.text.getText(),
        this.text.getStyle().getFont()) / 0.809);
      this.head = new janvas.ArrowHead(this.ctx).setArrowLength(12);
      this.head.getStyle().setFillStyle("hsl(270, 80%, 60%)");
      this.setCurvePropsAndDraw();
    },
    draw: function () {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.edge.stroke();
      if (this.edge.lambdaInRange()) {
        var an = this.edge.getLineAngle();
        this.text.getMatrix().setAngle(an > -Math.PI / 2 && an < Math.PI / 2 ? an : an + Math.PI);
        this.text.init(this.edge.getTargetX(), this.edge.getTargetY(),
          this.edge.getTargetX(), this.edge.getTargetY()).fill();
      }
      this.start.fill();
      this.end.fill();
      this.an.fill();
      this.head.setAngle(this.edge.getAngle()).fill();
    }
  },
  events: {
    mousedown: function () {
      this._mousedown = true;
      this.points.forEach(function (point) {
        point.lastX = point.getStartX();
        point.lastY = point.getStartY();
      });
    },
    mousemove: function (ev) {
      if (this._mousedown) {
        if (ev.buttons === 2) {
          this.points.forEach(function (point) {
            point.initXY(point.lastX + this.moveX, point.lastY + this.moveY);
          }, this);
          this.setCurvePropsAndDraw();
        } else {
          if (!this.current) return;
          this.current.initXY(this.current.lastX + this.moveX,
            this.current.lastY + this.moveY);
          this.setCurvePropsAndDraw();
        }
      } else {
        this.current = void (0);
        this.points.forEach(function (point) {
          if (point.isPointInPath(this.x, this.y)) {
            this.current = point;
            this.setCursor("pointer");
          }
        }, this);
        if (!this.current) this.setCursor("");
      }
    },
    mouseup: function () {
      this._mousedown = false;
    }
  },
  functions: {
    setCurvePropsAndDraw: function () {
      this.edge.initXY(this.start.getStartX(), this.start.getStartY())
        .setEndX(this.end.getStartX()).setEndY(this.end.getStartY())
        .setAngleX(this.an.getStartX()).setAngleY(this.an.getStartY());
      this.head.initXY(this.end.getStartX(), this.end.getStartY());
      this.draw();
    },
    setCursor: function (cursor) {
      if (this.canvas.style.cursor !== cursor) this.canvas.style.cursor = cursor;
    }
  }
});
