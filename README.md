# Janvas\[暂停更新\]

A lightweight&amp;simple 2D javascript library based on HTML5 Canvas.

一款轻量、简单的基于 HTML5 Canvas 2d 绘图上下文的 JavaScript 绘图库。

它不是框架，它只做了它该做的基础建设。

## 安装

1. `<script src="https://cdn.jsdelivr.net/npm/janvas"></script>`
2. `npm install janvas --save`

## [Hello World](https://jarenchow.github.io/JanvasExamples/html/hello_world.html)

- 与既有 Canvas 项目整合（功能受限）
  1. `<canvas></canvas>`
  2. `<script src="https://cdn.jsdelivr.net/npm/janvas"></script>`
  3. `var ctx = document.querySelector("canvas").getContext("2d");`
  4. `var text = new janvas.Text(ctx, 50, 50, "HelloWorld"); // new 一个文本`
  5. `text.fill(); // 文本绘制`

- 使用 janvas.Canvas 开发（全部功能）

```html
<body>

<div id="app" style="width: 100%;height: 100%;"></div>

<script src="https://cdn.jsdelivr.net/npm/janvas"></script>
<script>
  // 在 div 容器 中央绘制 "HelloWorld"，以下内容为核心特性
  var helloWorld = new janvas.Canvas({
    container: "#app", // 找到容器 id
    methods: {
      init: function () { // 初始化，此回调仅会调用一次
        this.text = new janvas.Text(this.$ctx, 0, 0, "HelloWorld"); // new 一个 Text
        this.text.getStyle().setFont("small-caps bold 128px courier") // 设置字体
          .setTextAlign("center").setTextBaseline("middle") // 设置文字对齐
          .setShadowOffsetY(32).setShadowColor("dimgrey").setShadowBlur(5); // 设置阴影
        this.text.getMatrix().setSkewX(Math.PI / 6).setAngle(-Math.PI / 6); // 设置变形

        this.grid = new janvas.Grid(this.$ctx, 0, 0, 0, 0, 50); // new 一个网格
        this.grid.getStyle().setAlpha(0.4); // 给网格设置透明度 0.4
        this.grid.getMatrix().setSkewX(Math.PI / 6).setAngle(-Math.PI / 6); // 变形
      },
      resize: function () { // 在每次 <canvas> 大小发生改变时回调
        var w = this.$width, h = this.$height, x = w / 2, y = h / 2; // 中心点
        this.text.init(x, y, x, y); // 绘制起点与绘制原点均置于屏幕中央
        this.grid.init(0, 0, x, y) // 绘制起点 0, 0，绘制原点置于屏幕中央
          .setWidth(w).setHeight(h); // 为网格设置宽高
      },
      draw: function () { // 在此回调时
        this.grid.stroke(); // 网格率先绘制
        this.text.fill(); // 让 Text 进行绘制
      }
    },
    events: {
      mousemove: function (ev) { // 为 <canvas> 注册事件监听回调
        console.log(this.text.isPointInPath(ev.$x, ev.$y)); // 打印坐标点是否处于图形内部
      }
    }
  });
</script>

</body>
```

## Janvas 示例

详见 [JanvasExamples](https://github.com/JarenChow/JanvasExamples)

其他一些小示例写在 [CSDN](https://blog.csdn.net/M3oM3oChong) 和 [CodePen](https://codepen.io/jarenchow)

## 源代码

从一开始 **janvas** 本只想以最简洁的方式应用到项目中，所以没有以 npm 方式管理包，之后有需求与精力再重写。

目前 [janvas.min.js](./dist/janvas.min.js) 仅使用 [uglifyjs](https://github.com/mishoo/UglifyJS) --compress 简单压缩无混淆。

## 总览

[Janvas.jmind](./doc/README.md)

### janvas.Canvas

#### 生命周期

1. 创建：`var obj = new janvas.Canvas(options);`
2. 周期：![lifecircle](./doc/lifecircle.png)
3. 销毁：`obj.$destroy();`，将发生：
   - 移除事件监听器
   - 停止动画
   - 移除 `<canvas>` 元素
   - `resize/intersection unobserve`
   - 移除自身属性引用

## License

[MIT](https://opensource.org/licenses/MIT)
