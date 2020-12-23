var coordinate = new janvas.Canvas({
  container: "#app",
  props: {
    _backgroundColor: "rgb(237, 237, 237)",
    _font: "12px Consolas",
    _span: 50,
    _dash: [10, 5],
    _dashColor: "rgba(0, 0, 0, 0.2)"
  },
  methods: {
    init: function () {
      this.background = new janvas.Rect(this.ctx, 0, 0, 0, 0);
      this.xAxis = new janvas.Arrow(this.ctx, 0, 0, 0, 0);
      this.yAxis = new janvas.Arrow(this.ctx, 0, 0, 0, 0);
      this.xLines = [];
      this.xTexts = [];
      this.yLines = [];
      this.yTexts = [];
      this.oText = new janvas.Text(this.ctx, 0, 0, "0");
      this.resize();
    },
    draw: function () {
      this.background.fill();
      this.xAxis.stroke();
      this.yAxis.stroke();
      this.xLines.forEach(function (line) {
        line.stroke();
      });
      this.yLines.forEach(function (line) {
        line.stroke();
      });
      this.xTexts.forEach(function (text) {
        text.fill();
      });
      this.yTexts.forEach(function (text) {
        text.fill();
      });
      this.oText.fill();
    }
  },
  events: {
    resize: function () {
      this.background.setWidth(this.width).setHeight(this.height);
      this.xAxis.initXY(this.width, 0);
      this.yAxis.initXY(0, this.height);
      this.adjustLength(Math.floor(this.width / this._span - 0.2), this.xTexts, this.xLines, true);
      this.adjustLength(Math.floor(this.height / this._span - 0.2), this.yTexts, this.yLines, false);
      this.setStyles();
      this.draw();
    }
  },
  functions: {
    setStyles: function () {
      this.background.getStyle().setFillStyle(this._backgroundColor);
      this.oText.getStyle().setFont(this._font).setTextBaseline("top");
      this.xLines.forEach(function (line) {
        line.getStyle().setStrokeStyle(this._dashColor).setLineDash(this._dash);
      }, this);
      this.yLines.forEach(function (line) {
        line.getStyle().setStrokeStyle(this._dashColor).setLineDash(this._dash);
      }, this);
      this.xTexts.forEach(function (text) {
        text.getStyle().setFont(this._font).setTextAlign("center").setTextBaseline("top");
      }, this);
      this.yTexts.forEach(function (text) {
        text.getStyle().setFont(this._font).setTextBaseline("middle");
      }, this);
    },
    adjustLength: function (count, texts, lines, inAxisX) {
      var len, pos;
      while ((len = lines.length) < count) {
        pos = (len + 1) * this._span;
        if (inAxisX) {
          texts.push(new janvas.Text(this.ctx, pos, 0, pos + ""));
          lines.push(new janvas.Line(this.ctx, pos, 0, pos, 0));
        } else {
          texts.push(new janvas.Text(this.ctx, 0, pos, pos + ""));
          lines.push(new janvas.Line(this.ctx, 0, pos, 0, pos));
        }
      }
      if (count >= 0) texts.length = lines.length = count;
      lines.forEach(function (line) {
        inAxisX ? line.setEndY(this.height) : line.setEndX(this.width);
      }, this);
    }
  }
});
