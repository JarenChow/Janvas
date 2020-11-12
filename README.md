# Janvas

A lightweight&amp;simple 2D javascript library based on HTML5 Canvas.

## 示例

#### About AntV Performance Test

原示例：[https://g6.antv.vision/zh/examples/performance/perf#moreData](https://g6.antv.vision/zh/examples/performance/perf#moreData)，如其所说：

> 对 G6 的性能测试，用来验证 G6 能够承载的数据量，分别使用 5000+ 图元、将近 20000 图元及 50000+ 图元的示例进行了测试，从结果来看，20000 左右图元时，G6 是可以正常交互的，当数据量达到 50000+ 时，交互就会出现一定的卡顿，但对于绝大部分业务来说，都不建议在画布上展示如此多的数据，具体的做法可以参考 AntV G6 团队的大图可视化方案，预计 1122 发布

而使用 [janvas](./dist/janvas.min.js) 从低抽象角度来定制，数据量即使达到 **50000\+** 时，依然可以**缩放**、**拖曳**以及**自定义更多交互**。[点击打开示例](https://jarenchow.github.io/Janvas/examples/about_antv_performance_test.html)。

## [Hello World](./examples/hello_world.html)

```html
<body>

<canvas style="width: 100%;height:100%"></canvas>

<script src="janvas.min.js"></script>
<script>
  // Your code here.
  var helloWorld = function (canvas) {
    var ctx = canvas.getContext("2d"),
      width = canvas.width = canvas.offsetWidth,
      height = canvas.height = canvas.offsetHeight;

    var text = new Text(ctx, width / 2, height / 2, "Hello World");
    text.getStyle().setFont("96px sans-serif")
      .setTextAlign("center").setTextBaseline("middle");
    text.fill();

    return {};
  }

  var closure = helloWorld(document.querySelector("canvas"));
</script>

</body>
```

## 源代码

...

## 文档

### Utils

### Rgb&Hsl

### Matrix

### Style

### Point

### Collision

### Setting

### ImgData

### Animate

### Shape

### DotShape

### FixedShape

## 特殊说明

库中的几十个类，会直接入侵全局作用域。

