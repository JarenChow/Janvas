# Janvas

A lightweight&amp;simple 2D javascript library based on HTML5 Canvas.

一款轻量、简单的 2d JavaScript 绘图库，基于 HTML5 Canvas 2d 绘图上下文，使用寄生组合式继承，完全面向对象方式开发，不仅便于 *拓展*，拥有极佳的 *灵活度* 和超越原生 canvas API 开发的 *性能*，更是 *渐进迭代式* 开发的绝佳选择。

## Janvas 目前能做

1. 高度定制化图表
2. 可视化大屏
3. 特效
4. 物理模拟
5. 数学可视化
6. 游戏
7. 其他 janvas 能做的都能做（笑

## Janvas 的特点

1. 简单，要什么就 new 出来；
2. 高效，比原生 API 开发更快（几乎没有比它更快的了）；
3. 易用，图形变形 getMatrix().set...()，样式 getStyle().set...()；
4. 强大，原生绘制、SVG Path 支持、坐标点等等计算的支持；
5. 兼容，只需一个容器 div，不管它在哪里，**janvas** 都能精准地填充它并适配高分屏。

## 安装

1. `<script src="https://cdn.jsdelivr.net/npm/janvas/dist/janvas.min.js"></script>`
2. `npm install janvas --save`

## [Hello World](https://jarenchow.github.io/JanvasExamples/html/hello_world.html)

- 与既有 Canvas 项目整合
  1. `<canvas></canvas>`
  2. `<script src="https://cdn.jsdelivr.net/npm/janvas/dist/janvas.min.js"></script>`
  3. `var ctx = document.querySelector("canvas").getContext("2d");`
  4. `var text = new janvas.Text(ctx, 50, 50, "HelloWorld"); // new 一个文本`
  5. `text.fill(); // 文本绘制`

- 使用 janvas.Canvas 开发

```html
<body>

<div id="app" style="width: 100%;height: 100%;"></div>

<script src="https://cdn.jsdelivr.net/npm/janvas/dist/janvas.min.js"></script>
<script>
  // 在 div 容器 中央绘制 "HelloWorld"
  var helloWorld = new janvas.Canvas({
    container: "#app", // 找到容器 id 或 Element 的引用
    methods: {
      init: function () { // 初始化
        this.text = new janvas.Text(this.ctx, 0, 0, "HelloWorld"); // new 一个 Text
        this.text.getStyle().setFont("small-caps bold 128px courier")
          .setTextAlign("center").setTextBaseline("middle"); // 给 Text 设置样式
      },
      draw: function () {
        this.text.fill(); // 让 Text 进行绘制
      }
    },
    events: {
      resize: function () { // 添加 resize 事件监听
        this.text.initXY(this.width / 2, this.height / 2); // 置于中间
        this.draw(); // 绘制一次
      }
    }
  });
</script>

</body>
```

## Janvas 示例

详见 [JanvasExamples](https://github.com/JarenChow/JanvasExamples)

## 源代码

从一开始 **janvas** 本只想以最简洁的方式应用到项目中，所以没有以 npm 方式管理包，之后有需求与精力再重写。

目前 [janvas.min.js](./dist/janvas.min.js) 仅使用 [uglifyjs](https://github.com/mishoo/UglifyJS) --compress 简单压缩无任何混淆。

## 文档

### Utils

### Rgb

### Hsl

### Matrix

### FillStrokeStyle

### TextStyle

### ShapeStyle

### ShadowStyle

### OtherStyle

### Point

### Collision

### Config

### ImgData

目前对于 ImageData 的处理都挂载在 ImgData 类上，后续如有需求可能会考虑改写静态方法，改写成挂载在 ImageData.prototype 上。

### Animate

### AnimateITV

### AnimateRAF

### BasicShape

### Shape

### Rect

### RoundRect

### Image

**janvas** 中加载一张图片非常容易：`var img = new janvas.Image(ctx, 0, 0, src);`。

janvas.Image 会自动加载图片并进行一次绘制，如果已经存在了图片，可以使用 `img.setImage(img)` 来设置其图片。

### Arc

### Sector

### Ellipse

### Line

### BezierLine

### Edge

### ArrowHead

### Arrow

### RegularPolygon

### RegularStar

### Text

### DotShape

### Polyline

### Bezier

### Polygon

### PolyRect

### PolyArc

### SmoothLine

### Dots

### FixedShape

### FixedRect

### FixedArc

### Canvas

...

挂载在 janvas.Canvas 上的 components，如 `factory: (function () {...}())` 为立即调用函数表达式(IIFE, Immediately-invoked function expressions)，返回一个会被默认挂载 $ctx/$cfg 的工厂对象，这意味着仅一次编写好的组件完全可以在不同的 janvas.Canvas 框架下复用。

## 特殊说明（不重要）

1. 为了便于进行样式的判断，**janvas** 在绘制的过程中在绘图上下文 ctx 上相对应的挂载用于读写的属性值，如 ctx.fillStyle 则会挂载一个 ctx.CURRENT_FILL_STYLE。如果使用过 clip/clipEvenOdd/clear/clearEvenOdd 这种唯一使用过 ctx.save() 的方法，会额外挂载 ctx._CURRENT_FILL_STYLE 用于回退样式。
2. 为了仅使用一次 transform 进行变换，**janvas** 可能时时刻刻都在进行坐标系变换，并在 ctx 上挂载 m11/m11i 等值（若如上用过 ctx.save() 会挂载 _m11/_m11i 等值），所以如果需与原生融合开发（不太推荐），需在 ** janvas** 代码的前后使用 `ctx.save()` 和 `ctx.restore()` 来确保变换和样式的还原。

## License

[MIT](https://opensource.org/licenses/MIT)
