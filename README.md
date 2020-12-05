# Janvas

A lightweight&amp;simple 2D javascript library based on HTML5 Canvas.

一款轻量、简单的 2d JavaScript 绘图库，基于 HTML5 Canvas 2d 绘图上下文，摒弃了之前的闭包模块化模式的开发，避免了冗余的无法释放的资源，选择使用寄生组合式继承，完全面向对象方式开发，最大程度的代码复用，同时便于拓展且不再大量入侵全局作用域，目前仅向外提供一个 **janvas** 接口，而 **janvas** 中的所有内容都可单独使用。

## Janvas 示例

### [About AntV Performance Test](https://jarenchow.github.io/Janvas/examples/about_antv_performance_test.html)

原示例：[https://g6.antv.vision/zh/examples/performance/perf#moreData](https://g6.antv.vision/zh/examples/performance/perf#moreData)，如其所说：

> 对 G6 的性能测试，用来验证 G6 能够承载的数据量，分别使用 5000+ 图元、将近 20000 图元及 50000+ 图元的示例进行了测试，从结果来看，20000 左右图元时，G6 是可以正常交互的，当数据量达到 50000+ 时，交互就会出现一定的卡顿，但对于绝大部分业务来说，都不建议在画布上展示如此多的数据，具体的做法可以参考 AntV G6 团队的大图可视化方案，预计 1122 发布

而使用 [janvas](./dist/janvas.min.js) 从低抽象角度来定制，数据量即使达到 **50000\+** 时，依然可以**缩放**、**拖曳**以及**自定义更多交互**。

### [Hello World](https://jarenchow.github.io/Janvas/examples/hello_world.html)

```html
<body>

<div id="app" style="width: 100%;height: 100%;"></div>

<script src="../dist/janvas.min.js"></script>
<script>
  // Your code here.
  var helloWorld = new janvas.Canvas({
    container: "#app",
    methods: {
      init: function () {
        var text = new janvas.Text(this.ctx, this.width / 2, this.height / 2, "Hello World");
        text.getStyle().setFont("128px sans-serif").setTextAlign("center").setTextBaseline("middle");
        text.fill();
      }
    }
  });
</script>

</body>
```

### [绘制太极图](https://jarenchow.github.io/Janvas/examples/taichi.html)

太极图可由外圆，左半圆，右半圆，上下中小圆，一共 **7** 个圆形组成，不到两百行代码构建太极屏保，包含旋转、渐变、碰撞检测等。

### [SVG 支持，绘制老虎](https://jarenchow.github.io/Janvas/examples/tiger.html)

依据 svg 数据生成的组合图形仍然具有范围检测、样式自定义及矩阵变形的功能。

### [百行代码，绘制时钟](https://jarenchow.github.io/Janvas/examples/clock.html)

秒针使用了 janvas 中自带的高阶贝塞尔曲线实现动画，阴影偏移量随时间偏移。

<video id="video" controls="" preload="none">
    <source id="mp4" src="https://cdn.jsdelivr.net/gh/JarenChow/ImageHosting@master/image/janvas/clock.mp4" type="video/mp4">
</video>

### [贝塞尔生成器](https://jarenchow.github.io/Janvas/examples/beziermaker.html)

- 鼠标点击生成一个数据点
- 鼠标右键拖曳所有数据点
- 响应键盘 wasd/方向键
- 响应键盘 Delete 删除数据点
- 响应 Enter 从控制台打印原始数据点与计算后的数据点

### [FlyDots](https://jarenchow.github.io/Janvas/examples/flydots.html)

使用 janvas 简单轻松绘制的不算特效的特效。

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

### Animate

### AnimateITV

### AnimateRAF

### BasicShape

### Shape

### Rect

### RoundRect

### ImageShape

### Arc

### Sector

### Ellipse

### Line

### BezierLine

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

## 特殊说明

为了便于进行样式的判断，**janvas** 在绘制的过程中会在绘图上下文 ctx 上相对应的挂载用于读写的属性值，如 ctx.fillStyle 则会挂载一个 ctx.CURRENT_FILL_STYLE。
