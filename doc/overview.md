# Janvas

## core

### Utils

- static

	- 存储

		- ls

			- get(key)
			- set(key, value)
			- remove(key)
			- clear()

	- 动画

		- ease

			- in

				- linear(t)
				- sine(t)
				- quad(t)
				- cubic(t)
				- quart(t)
				- quint(t)
				- expo(t)
				- circ(t)
				- back(t)
				- elastic(t)
				- bounce(t)

			- out

				- linear(t)
				- sine(t)
				- quad(t)
				- cubic(t)
				- quart(t)
				- quint(t)
				- expo(t)
				- circ(t)
				- back(t)
				- elastic(t)
				- bounce(t)

			- inout

				- linear(t)
				- sine(t)
				- quad(t)
				- cubic(t)
				- quart(t)
				- quint(t)
				- expo(t)
				- circ(t)
				- back(t)
				- elastic(t)
				- bounce(t)

	- 继承

		- inheritPrototype(subType, superType, ...)
		- defineConstructor(subType)

	- 文字

		- measureTextWidth(font, text)
		- measureTextFontSize(text, width, fontFamily, [min], [max])
		- measureText(text, font)

	- 图像

		- loadImage(src, callback, context)
		- loadImages(src, callback, context)

	- 样式

		- createLinearGradient(x0, y0, x1, y1, [basicShape])
		- createRadialGradient(x0, y0, r0, x1, y1, r1, [basicShape])
		- createPattern(image, [repetition], [matrix])

	- 数学

		- factorial(n)
		- permutation(n, m)
		- combination(n, m)
		- pythagorean(a, b)
		- deg2rad(degree)
		- rad2deg(radian)

	- 随机

		- randInt(start_or_end, [end], [containsEnd])
		- randSign()

	- 防抖节流

		- debounce(func, delay, immediate)
		- throttle(func, delay, useTime)
		- nextTick(func)

	- 其他

		- noop()
		- unique(array)
		- jsonClone(obj)
		- speedTest(func, times, [tag])

### Rgb

- new Rgb(red, green, blue, alpha)
- static

	- mixing(back, front, ratio, result)
	- extract(back1, mix1, back2_or_alpha, mix2_or_result, result)
	- sRgbMixing(srgb1, srgb2, ratio, result)
	- sRgbGammaMixing(srgb1, srgb2, ratio, result)

- prototype

	- fromRgbString(rgbString)
	- fromHexString(hexString)
	- fromHsl(hsl)
	- random(red, green, blue, alpha)
	- sRgbInverseCompanding()
	- sRgbCompanding()
	- toRgbString(containsAlpha)
	- toHexString(containsAlpha)
	- init(red, green, blue, alpha)
	- equals(rgb)
	- copy(rgb)
	- clone()
	- getter/setter

		- getRed()
		- setRed(red)
		- getGreen()
		- setGreen(green)
		- getBlue()
		- setBlue(blue)
		- getAlpha()
		- setAlpha(alpha)

### Hsl

- new Hsl(hue, saturation, lightness, alpha)
- prototype

	- fromHslString(hslString)
	- fromRgb(rgb)
	- random(hue, saturation, lightness, alpha)
	- toHslString([containsAlpha])
	- init(hue, saturation, lightness, alpha)
	- equals(hsl)
	- copy(hsl)
	- clone()
	- getter/setter

		- getHue()
		- setHue(hue)
		- getSaturation()
		- setSaturation(saturation)
		- getLightness()
		- setLightness(lightness)
		- getAlpha()
		- setAlpha(alpha)

### Matrix

- new Matrix()
- prototype

	- equals(matrix)
	- getM11()
	- getM11i()
	- getM12()
	- getM12i()
	- getM21()
	- getM21i()
	- getM22()
	- getM22i()
	- getM41()
	- getM41i()
	- getM42()
	- getM42i()
	- getter/setter

		- getSkewX()
		- setSkewX(skewX)
		- getSkewY()
		- setSkewY(skewY)
		- setSkew(skewX, skewY)
		- getScaleX()
		- setScaleX(scaleX)
		- getScaleY()
		- setScaleY(scaleY)
		- setScale(scaleX, scaleY)
		- getAngle()
		- setAngle(angle)
		- getOffsetX()
		- setOffsetX(offsetX)
		- getOffsetY()
		- setOffsetY(offsetY)
		- setOffset(offsetX, offsetY)

### FillStrokeStyle

- new FillStrokeStyle()
- prototype

	- getter/setter

		- getFillStyle()
		- setFillStyle(fillStyle)
		- getStrokeStyle()
		- setStrokeStyle(strokeStyle)

- subclass

	- ShapeStyle

		- new ShapeStyle()
		- prototype

			- getter/setter

				- getLineDash()
				- setLineDash(lineDash)
				- getLineDashOffset()
				- setLineDashOffset(lineDashOffset)
				- getLineWidth()
				- setLineWidth(lineWidth)

	- TextStyle

		- new TextStyle()
		- prototype

			- getter/setter

				- getFont()
				- setFont(font)
				- getTextAlign()
				- setTextAlign(textAlign)
				- getTextBaseline()
				- setTextBaseline(textBaseline)

### ShadowStyle

- new ShadowStyle()
- prototype

	- getter/setter

		- getShadowBlur()
		- setShadowBlur(shadowBlur)
		- getShadowColor()
		- setShadowColor(shadowColor)
		- getShadowOffsetX()
		- setShadowOffsetX(shadowOffsetX)
		- getShadowOffsetY()
		- setShadowOffsetY(shadowOffsetY)

### OtherStyle

- new OtherStyle()
- prototype

	- getter/setter

		- getLineCap()
		- setLineCap(lineCap)
		- getLineJoin()
		- setLineJoin(lineJoin)
		- getMiterLimit()
		- setMiterLimit(miterLimit)
		- getDirection()
		- setDirection(direction)
		- getImageSmoothingEnabled()
		- setImageSmoothingEnabled(imageSmoothingEnabled)
		- getImageSmoothingQuality()
		- setImageSmoothingQuality(imageSmoothingQuality)

### Point

- new Point(x, y)
- static

	- basisX
	- basisY
	- vertical2point(point1, point2, result)
	- vertical2line(point1, point2, point3, result)
	- line2line(point1, point2, point3, point4, result)
	- line2arc(point1, point2, point, radius, result1, result2)
	- arc2arc(point1, radius1, point2, radius2, result1, result2)
	- arc(point1, point2, point3, result)

- prototype

	- init(x, y)
	- equals(point)
	- ratio2point(point)
	- ratio2line(point1, point2)
	- anti2point(point)
	- anti2line(point1, point2)
	- modulus()
	- slope()
	- radian()
	- dotProduct(point)
	- crossProduct(point)
	- theta(point)
	- offsetX(point)
	- offsetY(point)
	- copy(point)
	- clone(point)
	- unit()
	- abs()
	- inverse()
	- inverseX()
	- inverseY()
	- vertical()
	- verticalAnti()
	- add(point)
	- subtract(point)
	- multiply(point)
	- divide(point)
	- inline(point, ratio)
	- skewX(skewX)
	- skewY(skewY)
	- skew(skewX, skewY)
	- scaleX(scaleX)
	- scaleY(scaleY)
	- scale(scaleX, scaleY)
	- rotate(angle)
	- translateX(offsetX)
	- translateY(offsetY)
	- translate(offsetX, offsetY)
	- transform(mat)
	- resetTransform(mat)
	- getter/setter

		- getX()
		- setX(x)
		- getY()
		- setY(y)

### Collision

- static

	- arc(x1, y1, r1, x2, y2, r2)
	- rect(x1, y1, x2, y2, x3, y3, x4, y4)
	- arcRect(x, y, r, x1, y1, x2, y2, [cx], [cy], [cos], [sin])
	- light(x, y, vx, vy, x1, y1, x2, y2)
	- sepAxis(points1, points2)
	- sepAxisArc(points, x, y, r)

### Config

- prototype

	- setGlobalAlpha(alpha)
	- resetGlobalAlpha()
	- setGlobalCompositeOperation(operation)
	- resetGlobalCompositeOperation()
	- setFilter(filter)
	- resetFilter()
	- setShadowStyles(shadowStyle)
	- resetShadowStyles()
	- setOtherStyles(otherStyle)
	- resetOtherStyles()

### ImageData

- new ImageData(ctx, sx, sy, sw_or_imageData, sh_or_sw, dx, dy, dw, dh)
- prototype

	- initXY(x, y)
	- toDataURL(type)
	- saveAsImage(filename, type)
	- resetPut()
	- put()
	- isPointInPath(x, y)
	- isPointInStroke(x, y)
	- getPixelIndex(x, y)
	- forEach(callback, context, [x], [y], [w], [h])
	- mosaic(t, [x], [y], [w], [h])
	- transparencyDisposal(ratio, [x], [y], [w], [h])
	- reverseColor([x], [y], [w], [h])
	- greyProcessing([x], [y], [w], [h])
	- blackWhite(ratio, [x], [y], [w], [h])
	- relief()
	- sunGlass()
	- frostedGlass()
	- getter/setter

		- getImageData()
		- setImageData(sx, sy, sw_or_imageData, sh_or_sw)
		- getRight()
		- getBottom()
		- getData()
		- getWidth()
		- getHeight()
		- getStartX()
		- setStartX(sx)
		- getStartY()
		- setStartY(sy)
		- getDirtyX()
		- setDirtyX(dx)
		- getDirtyY()
		- setDirtyY(dy)
		- getDirtyWidth()
		- setDirtyWidth(dw)
		- getDirtyHeight()
		- setDirtyHeight(dh)

### Animate

- new Animate(func, duration, interval)
- static

	- bind(object, $raf, duration)

- prototype

	- init()
	- start()
	- pause()
	- resume()
	- stop()
	- isRunning()
	- isStopped()
	- inProgress()

- subclass

	- AnimateITV
	- AnimateRAF

### Canvas

- new Canvas(options)

	- container
	- duration
	- interval
	- props
	- components
	- methods

		- init()
		- update(ts)
		- draw()

	- events

		- mousedown(ev)
		- mousemove(ev)
		- mouseup(ev)
		- touchstart(ev)
		- touchmove(ev)
		- touchend(ev)
		- touchcancel(ev)
		- mouseover(ev)
		- mouseout(ev)
		- click(ev)
		- dblclick(ev)
		- contextmenu(ev)
		- wheel(ev)
		- resize()
		- visibilitychange(visible)
		- blur(ev)
		- focus(ev)
		- focusin(ev)
		- focusout(ev)
		- keydown(ev)
		- keyup(ev)
		- keypress(ev)

	- functions
	- callbacks

- $

	- $container
	- $wrapper
	- $canvas
	- $dpr
	- $ctx
	- $cfg
	- $raf
	- $duration
	- $interval
	- event

		- $x
		- $y
		- $moveX
		- $moveY
		- $scale
		- $lastScale
		- $scaling

- prototype

	- merge(object)
	- isVisible()
	- destroy()

## view

### BasicShape

- new BasicShape(ctx, sx, sy, cx, cy)
- prototype

	- init(sx, sy, cx, cy)
	- initXY(sx, sy)
	- initCXY(cx, cy)
	- fill(fillRule)
	- stroke()
	- fillStroke(fillRule)
	- clip(fillRule)
	- clear(sx, sy, sw, sh, fillRule)
	- setTransform()
	- resetTransform()
	- isPointInPath(x, y)
	- isPointInStroke(x, y)
	- getter/setter

		- getStartX()
		- setStartX(sx)
		- getStartY()
		- setStartY(sy)
		- getCenterX()
		- setCenterX(cx)
		- getCenterY()
		- setCenterY(cy)
		- getMatrix()
		- setMatrix(matrix)

- subclass

	- Shape

		- new Shape(ctx, sx, sy, cx, cy)
		- prototype

			- getStyle()
			- setStyle(style)

		- subclass

			- Rect

				- new Rect(ctx, sx, sy, sw, sh, cx, cy)
				- prototype

					- getter/setter

						- getWidth()
						- setWidth(sw)
						- getHeight()
						- setHeight(sh)

				- subclass

					- RoundRect

						- new RoundRect(ctx, sx, sy, sw, sh, r, cx, cy)
						- prototype

							- getter/setter

								- getRadius()
								- setRadius(radius)

					- Image

						- new Image(ctx, sx, sy, src, cx, cy, sw, sh, isx, isy, isw, ish)
						- prototype

							- draw()
							- onload()
							- toImageData()
							- isComplete()
							- resetDraw()
							- getter/setter

								- getSrc()
								- setSrc(src)
								- getImage()
								- setImage(image)
								- getAdjustSize()
								- setAdjustSize(adjustSize)
								- getCropX()
								- setCropX(isx)
								- getCropY()
								- setCropY(isy)
								- getCropWidth()
								- setCropWidth(isw)
								- getCropHeight()
								- setCropHeight(ish)

			- Arc

				- new Arc(ctx, sx, sy, r, startAngle, endAngle, anticlockwise, cx, cy)
				- prototype

					- getter/setter

						- getRadius()
						- setRadius(radius)
						- getStartAngle()
						- setStartAngle(startAngle)
						- getEndAngle()
						- setEndAngle(endAngle)
						- getAnticlockwise()
						- setAnticlockwise(anticlockwise)

				- subclass

					- Sector

						- new Sector(ctx, sx, sy, r, startAngle, endAngle, anticlockwise, cx, cy)

					- Ellipse

						- Ellipse(ctx, sx, sy, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise, cx, cy)
						- prototype

							- getter/setter

								- getRadiusX()
								- setRadiusX(radiusX)
								- getRadiusY()
								- setRadiusY(radiusY)
								- setRadius(radiusX, radiusY)
								- getRotation()
								- setRotation(rotation)

			- Line

				- new Line(ctx, sx, sy, ex, ey, cx, cy)
				- prototype

					- getter/setter

						- getEndX()
						- setEndX(ex)
						- getEndY()
						- setEndY(ey)

				- subclass

					- BezierLine

						- new BezierLine(ctx, sx, sy, ex, ey, cp1x, cp1y, cp2x, cp2y, cx, cy)
						- prototype

							- getter/setter

								- getControlPoint1X()
								- setControlPoint1X(cp1x)
								- getControlPoint1Y()
								- setControlPoint1Y(cp1y)
								- getControlPoint2X()
								- setControlPoint2X(cp2x)
								- getControlPoint2Y()
								- setControlPoint2Y(cp2y)

					- Edge

						- new Edge(ctx, sx, sy, ex, ey, ax, ay, el, cx, cy)
						- prototype

							- getTargetX()
							- getTargetY()
							- getAngle()
							- getLineAngle()
							- ratioInRange()
							- getter/setter

								- getAngleX()
								- setAngleX(ax)
								- getAngleY()
								- setAngleY(ay)
								- getEmptyLength()
								- setEmptyLength(el)

			- ArrowHead

				- new ArrowHead(ctx, sx, sy, an, closed, al, aa, cx, cy)
				- prototype

					- getter/setter

						- getAngle()
						- setAngle(an)
						- getClosed()
						- setClosed(closed)
						- getArrowLength()
						- setArrowLength(al)
						- getArrowAngle()
						- setArrowAngle(aa)

				- subclass

					- Arrow

						- new Arrow(ctx, sx, sy, ex, ey, ax, ay, el, closed, al, aa, cx, cy)
						- prototype

							- getTargetX()
							- getTargetY()
							- getLineAngle()
							- ratioInRange()
							- getter/setter

								- getEndX()
								- setEndX(ex)
								- getEndY()
								- setEndY(ey)
								- getAngleX()
								- setAngleX(ax)
								- getAngleY()
								- setAngleY(ay)
								- getEmptyLength()
								- setEmptyLength(el)

			- RegularPolygon

				- new RegularPolygon(ctx, sx, sy, r, sides, cx, cy)
				- prototype

					- getter/setter

						- getRadius()
						- setRadius(radius)
						- getSides()
						- setSides(sides)

				- subclass

					- RegularStar

						- new RegularStar(ctx, sx, sy, r, sides, cx, cy)

	- DotShape

		- new DotShape(ctx, sx, sy, points, length, cx, cy)
		- prototype

			- getProcessedPoints()
			- getTransformedPoints()
			- insert(x, y)
			- insertAt(x, y, index)
			- delete(index)
			- update(x, y, index)
			- getter/setter

				- getPoints()
				- setPoints(points)
				- getLength()
				- setLength(length)

		- subclass

			- Polyline

				- new Polyline(ctx, sx, sy, points, length, cx, cy)
				- subclass

					- Bezier

						- new Bezier(ctx, sx, sy, points, length, cx, cy)

			- Polygon

				- new Polygon(ctx, sx, sy, points, length, cx, cy)
				- subclass

					- PolyRect

						- new PolyRect(ctx, sx, sy, points, length, cx, cy)

					- PolyArc

						- new PolyArc(ctx, sx, sy, points, length, cx, cy)

			- SmoothLine

				- new SmoothLine(ctx, sx, sy, points, length, cx, cy)
				- prototype

					- getter/setter

						- getTension()
						- setTension(tension)

			- Dots

				- new Dots(ctx, sx, sy, points, length, r, cx, cy)
				- prototype

					- getter/setter

						- getRadius()
						- setRadius(radius)

	- FixedShape

		- new FixedShape(ctx, sx, sy, path, cx, cy)
		- prototype

			- getPath()
			- getOffsetPath()
			- setPath(path)
			- addPath(path)
			- addFixedShape(fixedShape)

		- subclass

			- FixedRect

				- new FixedRect(ctx, sx, sy, sw, sh, cx, cy)
				- prototype

					- getter

						- getWidth()
						- getHeight()

			- FixedArc

				- new FixedArc(ctx, sx, sy, r, startAngle, endAngle, anticlockwise, cx, cy)
				- prototype

					- getter

						- getRadius()
						- getStartAngle()
						- getEndAngle()
						- getAnticlockwise()

	- Text

		- new Text(ctx, sx, sy, text, cx, cy)
		- prototype

			- getter/setter

				- getText()
				- setText(text)
				- getStyle()
				- setStyle(style)
