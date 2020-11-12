# Janvas

A lightweight&amp;simple 2D javascript library based on HTML5 Canvas.

## 示例

#### Example001

原示例：[https://g6.antv.vision/zh/examples/performance/perf#moreData](https://g6.antv.vision/zh/examples/performance/perf#moreData)，如其所说：

> 对 G6 的性能测试，用来验证 G6 能够承载的数据量，分别使用 5000+ 图元、将近 20000 图元及 50000+ 图元的示例进行了测试，从结果来看，20000 左右图元时，G6 是可以正常交互的，当数据量达到 50000+ 时，交互就会出现一定的卡顿，但对于绝大部分业务来说，都不建议在画布上展示如此多的数据，具体的做法可以参考 AntV G6 团队的大图可视化方案，预计 1122 发布

而使用 [janvas](./janvas.min.js)，数据量即使达到 **50000\+** 时，依然可以**缩放拖曳**以及**自定义更多交互**。[点击打开示例](https://jarenchow.github.io/Janvas/example001.html)。

## 开始

```html
<body>

<canvas></canvas>

<script src="janvas.min.js"></script>
<script>
  // Your code here.
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

q