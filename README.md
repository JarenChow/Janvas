# Janvas

A lightweight&amp;simple 2D javascript library based on HTML5 Canvas.

一款轻量、简单的 2d JavaScript 绘图库，基于 HTML5 Canvas 2d 绘图上下文，使用寄生组合式继承，完全面向对象方式开发，不仅便于 *拓展*，拥有极佳的 *灵活度*，更是 *渐进迭代式* 开发的绝佳选择。

这意味着 **janvas** 从不强迫开发者遵循太多固定的概念或规则，概念或规则可由开发者根据应用的方向而定。

同时也表示 **janvas** 中的所有内容都可单独使用，并且不存在过多的配置，还你一个书写原生 JavaScript 的体验。

## Janvas 目前能做

1. 高度定制化图表
2. 可视化大屏
3. 特效
4. 物理模拟
5. 数学可视化
6. 游戏
7. 其他 janvas 能做的都能做（笑

## Janvas 的特点

1. 每个 **janvas** 子模块都能单独使用，无需整个项目都使用全新规则开发；
2. 每个 **janvas** 的形状对象均含有绘制坐标与中心点坐标，且均：
    - 内置一个用于变形的矩阵 Matrix，可轻松错切\(*skew*\)、缩放\(*scale*\)、旋转\(*angle*\)、平移\(*offset*\)；
    - 内置一个用于自动应用样式的 Style；
3. **janvas** 库处理变形的方式仅使用 ctx.transform\(matrix\)，从不使用 ctx.scale/ctx.rotate/ctx.translate 等耗时方法，从不在无须变形的时候应用矩阵；
4. **janvas** 库处理样式的方式从不使用 ctx.save\(\)/ctx.restore\(\)，且从不在无须更改样式的时候应用导致影响性能；
5. **janvas** 的所有内置图形使用寄生组合式继承构建层级关系，如 DotShape 继承于 Shape 继承于 BasicShape；
6. 如果说 BasicShape 处理好了矩阵，Shape 处理好了样式，那么 DotShape 就处理好了图形中的所有点的位置，可以轻松获取 DotShape 的数据点，并且 DotShape 内置 “缓存”，仅在数据发生改变的时候才会自动应用变化。

## Janvas 示例

### [About AntV Performance Test](https://jarenchow.github.io/Janvas/examples/about_antv_performance_test.html)

原示例：[https://g6.antv.vision/zh/examples/performance/perf#moreData](https://g6.antv.vision/zh/examples/performance/perf#moreData)，如其所说：

> 对 G6 的性能测试，用来验证 G6 能够承载的数据量，分别使用 5000+ 图元、将近 20000 图元及 50000+ 图元的示例进行了测试，从结果来看，20000 左右图元时，G6 是可以正常交互的，当数据量达到 50000+ 时，交互就会出现一定的卡顿，但对于绝大部分业务来说，都不建议在画布上展示如此多的数据，具体的做法可以参考 AntV G6 团队的大图可视化方案，预计 1122 发布

而使用 **janvas** 从低抽象角度来定制，数据量即使达到 **50000\+** 时，依然可以**缩放**、**拖曳**以及**自定义更多交互**。

### [Hello World](https://jarenchow.github.io/Janvas/examples/hello_world.html)

- 与既有 Canvas 项目整合
  1. `<canvas></canvas>`
  2. `<script src="janvas.min.js"></script>`
  3. `var ctx = document.querySelector("canvas").getContext("2d");`
  4. `var text = new janvas.Text(ctx, 50, 50, "Hello World");`
  5. `text.fill();`

- 使用 janvas.Canvas 开发

```html
<body>

<div id="app" style="width: 100%;height: 100%;"></div>

<script src="../dist/janvas.min.js"></script>
<script>
  var helloWorld = new janvas.Canvas({
    container: "#app", // janvas 会在后台自动将画布适应容器大小
    methods: { // 同时会生成 ctx, width, height 属性，使用 this 调用
      init: function () { // 为控件添加名为 init 的初始化方法
        var text = new janvas.Text(this.ctx, this.width / 2, this.height / 2, "Hello World");
        text.getStyle().setFont("128px sans-serif").setTextAlign("center").setTextBaseline("middle");
        text.fill();
      }
    }
  });
</script>

</body>
```

### [TaiChi](https://jarenchow.github.io/Janvas/examples/taichi.html)

太极图可由外圆，左半圆，右半圆，上下中小圆，一共 **7** 个圆形组成，不到两百行代码构建太极屏保，包含旋转、渐变、碰撞检测等。

### [SVG Support](https://jarenchow.github.io/Janvas/examples/tiger.html)

依据 svg 数据生成的组合图形仍然具有范围检测、样式自定义及矩阵变形的功能。

### [Clock](https://jarenchow.github.io/Janvas/examples/clock.html)

秒针使用了 **janvas** 中自带的高阶贝塞尔曲线实现动画，阴影偏移量随时间偏移。

[![image-20200316105934566](https://cdn.jsdelivr.net/gh/JarenChow/ImageHosting@master/image/janvas/clock.gif)](https://jarenchow.github.io/Janvas/examples/clock.html)

### [BezierMaker](https://jarenchow.github.io/Janvas/examples/beziermaker.html)

- 鼠标点击生成一个数据点
- 鼠标右键拖曳所有数据点
- 响应键盘 wasd/方向键 控制节点位置
- 响应键盘 q/e 切换当前节点
- 响应键盘 Delete 删除节点
- 响应 Enter 从控制台打印原始数据点与计算后的数据点

### [FlyDots](https://jarenchow.github.io/Janvas/examples/flydots.html)

使用 **janvas** 简单轻松绘制的不算特效的特效。

### [AboutWheel](https://jarenchow.github.io/Janvas/examples/about_wheel.html)

缩放公式：target = event + (source - event) * scale / lastScale;

在 **janvas** 中读取一张 SVG 图片，并随时间旋转，随鼠标响应范围检测并拖曳，随滚轮实现无损缩放的示例。

### [AboutEdge](https://jarenchow.github.io/Janvas/examples/about_edge.html)

v2.1.0 新增绘制连线的 Edge 类，实现了图数据库中的连线的样式。

## 源代码

[janvas.min.js](./dist/janvas.min.js) 仅使用 [uglifyjs](https://github.com/mishoo/UglifyJS) --compress 简单压缩无任何混淆。

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

### Setting

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

挂载在 janvas.Canvas 上的 components，如 `factory: (function () {...}())` 为立即调用函数表达式(IIFE, Immediately-invoked function expressions)，返回一个会被默认挂载 $ctx/$stg 的工厂对象，这意味着仅一次编写好的组件完全可以在不同的 janvas.Canvas 框架下复用。

## 特殊说明

仅为了便于进行样式的判断，**janvas** 在绘制的过程中在绘图上下文 ctx 上相对应的挂载用于读写的属性值，如 ctx.fillStyle 则会挂载一个 ctx.CURRENT_FILL_STYLE。

## License

[MIT](https://opensource.org/licenses/MIT)
