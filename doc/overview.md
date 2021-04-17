# Janvas

## core

### Utils

- static

	- 存储

		- LRU

			- new LRU(maxSize)
			- prototype

				- get(key)
				- set(key, value)
				- clear()
				- length

		- ls

			- get(key)
			- set(key, value)
			- remove(key)
			- clear()

	- 动画

		- ease

			- in

				- linear
				- sine
				- quad
				- cubic
				- quart
				- quint
				- expo
				- circ
				- back
				- elastic
				- bounce

			- out

				- linear
				- sine
				- quad
				- cubic
				- quart
				- quint
				- expo
				- circ
				- back
				- elastic
				- bounce

			- inout

				- linear
				- sine
				- quad
				- cubic
				- quart
				- quint
				- expo
				- circ
				- back
				- elastic
				- bounce

	- 继承

		- inheritPrototype(subType)
		- defineConstructor(subType)

	- 文本

		- measureTextWidth(text, font)
		- measureTextFontSize(text, width, fontFamily, min, max)
		- measureText(text, font, textAlign, textBaseline, direction)

	- 图片

		- loadImage(src, callback, context)
		- loadImages(srcs, callback, context)

	- 渐变

		- createLinearGradient(x0, y0, x1, y1, basicShape)
		- createRadialGradient(x0, y0, r0, x1, y1, r1, basicShape)
		- createPattern(image, repetition, matrix)

	- 数学

		- randInt(start_or_end, end, containsEnd)
		- rad2deg(radian)
		- deg2rad(degree)
		- combination(n, m)
		- permutation(n, m)
		- factorial(n)
		- randSign()

	- 防抖节流

		- debounce(func, delay, immediate)
		- throttle(func, delay, useTime)
		- nextTick(func)

	- 其他

		- unique(array)
		- clone(obj)
		- noop()

### Collision

- static

	- arc(x1, y1, r1, x2, y2, r2)
	- rect(x1, y1, x2, y2, x3, y3, x4, y4)
	- arcRect(x, y, r, x1, y1, x2, y2, cx, cy, cos, sin)
	- light(x, y, vx, vy, x1, y1, x2, y2)
	- sepAxis(points1, points2)
	- sepAxisArc(points, x, y, r)

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
	- toHslString(containsAlpha)
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

### Point

- new Point(x, y)
- static

	- basisX = new Point(1, 0);
	- basisY = new Point(0, 1);
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
	- clone()
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

### Matrix

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

### Style

- prototype

	- getter/setter

		- getAlpha()
		- setAlpha(alpha)
		- getCompositeOperation()
		- setCompositeOperation (compositeOperation)
		- getFilter()
		- setFilter(filter)

- subclass

	- ShadowStyle

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

		- subclass

			- FillStrokeStyle

				- prototype

					- getter/setter

						- getFillStyle()
						- setFillStyle(fillStyle)
						- getStrokeStyle()
						- setStrokeStyle(strokeStyle)

				- subclass

					- ShapeStyle

						- prototype

							- getter/setter

								- getLineDash()
								- setLineDash(lineDash)
								- getLineDashOffset()
								- setLineDashOffset(lineDashOffset)
								- getLineWidth()
								- setLineWidth(lineWidth)
								- getLineCap()
								- setLineCap(lineCap)
								- getLineJoin()
								- setLineJoin(lineJoin)
								- getMiterLimit()
								- setMiterLimit(miterLimit)

						- subclass

							- TextStyle

								- prototype

									- getter/setter

										- getFont()
										- setFont(font)
										- getTextAlign()
										- setTextAlign(textAlign)
										- getTextBaseline()
										- setTextBaseline(textBaseline)
										- getDirection()
										- setDirection(direction)

							- ImageStyle

								- prototype

									- getter/setter

										- getSmoothingEnabled()
										- setSmoothingEnabled(smoothingEnabled)
										- getSmoothingQuality()
										- setSmoothingQuality(smoothingQuality)

### Animate

- prototype

	- bindTo(object, duration, interval)
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

		- new AnimateITV(func, duration, interval)

	- AnimateRAF

		- new AnimateRAF(func, duration, interval)

### Canvas

- new Canvas(options)

	- options

		- container
		- duration
		- interval
		- props
		- components
		- methods

			- init()
			- resize()
			- update(timestamp, interval)
			- draw()

		- events

			- mousedown(ev)
			- mousemove(ev)
			- mouseup(ev)
			- mouseover(ev)
			- mouseout(ev)
			- click(ev)
			- dblclick(ev)
			- contextmenu(ev)
			- wheel(ev)
			- keydown(ev)
			- keyup(ev)
			- keypress(ev)
			- touchstart(ev)
			- touchmove(ev)
			- touchend(ev)
			- touchcancel(ev)
			- focus(ev)
			- blur(ev)
			- focusin(ev)
			- focusout(ev)
			- visibilitychange(visible)

		- functions
		- callbacks

	- this

		- $container
		- $wrapper
		- $canvas
		- $ctx
		- $dpr
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

	- $clear()
	- $isVisible()
	- $destroy()

## view

### BasicShape

- prototype

	- init(sx, sy, cx, cy)
	- fill(fillRule)
	- stroke()
	- fillStroke(fillRule)
	- strokeFill(fillRule)
	- clip(fillRule)
	- restore()
	- clear(sx, sy, width, height, fillRule)
	- isPointInPath(x, y)
	- isPointInStroke(x, y)
	- isPointInPath$1(x, y)
	- isPointInStroke$1(x, y)
	- getter/setter

		- getStartX()
		- setStartX(sx)
		- getStartY()
		- setStartY(sy)
		- setStart(sx, sy)
		- getCenterX()
		- setCenterX(cx)
		- getCenterY()
		- setCenterY(cy)
		- setCenter(cx, cy)
		- getMatrix()
		- setMatrix(mat)

- subclass

	- Shape

		- prototype

			- getter/setter

				- getStyle()
				- setStyle(sty)

		- subclass

			- Rect

				- new Rect(ctx, sx, sy, width, height, cx, cy)
				- prorotype

					- getter/setter

						- getWidth()
						- setWidth(width)
						- getHeight()
						- setHeight(height)
						- getLeft()
						- getTop()
						- getRight()
						- getBottom()

				- subclass

					- RoundRect

						- new RoundRect(ctx, sx, sy, width, height, radius, cx, cy)
						- prototype

							- getter/setter

								- inherit Arc

									- getRadius()
									- setRadius(radius)

					- Image

						- new Image(ctx, sx, sy, src, cx, cy, width, height, cropX, cropY, cropWidth, cropHeight)
						- prototype

							- toImageData()
							- isComplete()
							- resetDraw()
							- draw()
							- getter/setter

								- getSrc()
								- setSrc(src)
								- getImage()
								- setImage(image)
								- getAdjustSize()
								- setAdjustSize(adjustSize)
								- getCropX()
								- setCropX(cropX)
								- getCropY()
								- setCropY(cropY)
								- setCrop(cropX, cropY)
								- getCropWidth()
								- setCropWidth(cropWidth)
								- getCropHeight()
								- setCropHeight(cropHeight)

			- Arc

				- new Arc(ctx, sx, sy, radius, startAngle, endAngle, anticlockwise, cx, cy)
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

						- new Sector(ctx, sx, sy, radius, startAngle, endAngle, anticlockwise, cx, cy)

					- Ellipse

						- new Ellipse(ctx, sx, sy, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise, cx, cy)
						- prototype

							- getter/setter

								- getRadiusX()
								- setRadiusX(radiusX)
								- getRadiusY()
								- setRadiusY(radiusY)
								- setRadius(radiusX, radiusY)
								- getRotation()
								- setRotation(rotation)

					- RegularPolygon

						- new RegularPolygon(ctx, sx, sy, radius, sides, cx, cy)
						- prototype

							- getter/setter

								- getSides()
								- setSides(sides)

						- subclass

							- RegularStar

								- new RegularStar(ctx, sx, sy, radius, sides, cx, cy)

			- Line

				- new Line(ctx, sx, sy, ex, ey, cx, cy)
				- prototype

					- getter/setter

						- getEndX()
						- setEndX(ex)
						- getEndY()
						- setEndY(ey)
						- setEnd(ex, ey)

				- subclass

					- BezierLine

						- new BezierLine(ctx, sx, sy, ex, ey, cp1x, cp1y, cp2x, cp2y, cx, cy)
						- prototype

							- getter/setter

								- getControlPoint1X()
								- setControlPoint1X(cp1x)
								- getControlPoint1Y()
								- setControlPoint1Y(cp1y)
								- setControlPoint1(cp1x, cp1y)
								- getControlPoint2X()
								- setControlPoint2X(cp2x)
								- getControlPoint2Y()
								- setControlPoint2Y(cp2y)
								- setControlPoint2(cp2x, cp2y)

					- Edge

						- new Edge(ctx, sx, sy, ex, ey, ax, ay, el, cx, cy)
						- prototype

							- getter/setter

								- getAnchorX()
								- setAnchorX(ax)
								- getAnchorY()
								- setAnchorY(ay)
								- setAnchor(ax, ay)
								- getEmptyLength()
								- setEmptyLength(el)
								- getTargetX()
								- getTargetY()
								- getAnchorAngle()
								- getAngle()
								- ratioInRange()

			- ArrowHead

				- new ArrowHead(ctx, sx, sy, anchorAngle, closed, headLength, headAngle, cx, cy)
				- prototype

					- getter/setter

						- getAnchorAngle()
						- setAnchorAngle(anchorAngle)
						- getClosed()
						- setClosed(closed)
						- getHeadLength()
						- setHeadLength(headLength)
						- getHeadAngle()
						- setHeadAngle(headAngle)

				- subclass

					- Arrow

						- new Arrow(ctx, sx, sy, ex, ey, ax, ay, el, closed, headLength, headAngle, cx, cy)
						- prototype

							- getter/setter

								- inherit Line

									- getEndX()
									- setEndX(ex)
									- getEndY()
									- setEndY(ey)
									- setEnd(ex, ey)

								- inherit Edge

									- getAnchorX()
									- setAnchorX(ax)
									- getAnchorY()
									- setAnchorY(ay)
									- setAnchor(ax, ay)
									- getEmptyLength()
									- setEmptyLength(el)
									- getTargetX()
									- getTargetY()
									- getAngle()
									- ratioInRange()

					- Pin

						- new Pin(ctx, sx, sy, anchorAngle, closed, headLength, headAngle, cx, cy)

			- Text

				- new Text(ctx, sx, sy, text, cx, cy)
				- prototype

					- getter/setter

						- getText()
						- setText(text)
						- getMetrics()
						- getWidth()
						- getActualBoundingBoxWidth()
						- getActualBoundingBoxHeight()
						- getLeft()
						- getRight()
						- getTop()
						- getBottom()

			- DotShape

				- prototype

					- insert(x, y)
					- insertAt(x, y, index)
					- delete(index)
					- update(x, y, index)
					- select(index, offset)
					- getter/setter

						- getProcessedPoints()
						- getTransformedPoints()
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

							- SuperEllipse

								- new SuperEllipse(ctx, sx, sy, points, length, cx, cy)
								- prototype

									- getter/setter

										- getExponent()
										- setExponent(exponent)

					- SmoothLine

						- new SmoothLine(ctx, sx, sy, points, length, cx, cy)
						- prototype

							- getter/setter

								- getTension()
								- setTension(tension)

					- Dots

						- new Dots(ctx, sx, sy, points, length, cx, cy)
						- prototype

							- getter/setter

								- inherit Arc

									- getRadius()
									- setRadius(radius)

			- FixedShape

				- new FixedShape(ctx, sx, sy, path, cx, cy)
				- prototype

					- addPath(path)
					- addFixedShape(fixedShape)
					- getter/setter

						- getPath()
						- setPath(path)
						- getOffsetPath()

				- subclass

					- FixedRect

						- new FixedRect(ctx, sx, sy, width, height, cx, cy)
						- prototype

							- getter/setter

								- inherit Rect

									- getWidth()
									- getHeight()
									- getLeft()
									- getTop()
									- getRight()
									- getBottom()

					- FixedArc

						- new FixedArc(ctx, sx, sy, radius, startAngle, endAngle, anticlockwise, cx, cy)
						- prototype

							- getter/setter

								- inherit Arc

									- getRadius()
									- getStartAngle()
									- getEndAngle()
									- getAnticlockwise()

### ImageData

- prototype

	- getImageData()
	- setImageData(sx, sy, sw_or_imageData, sh_or_sw)
	- toDataURL(type)
	- saveAsImage(filename, type)
	- resetPut()
	- put()
	- isPointInPath(x, y)
	- isPointInStroke(x, y)
	- forEach(callback, context, x, y, w, h)
	- mosaic(t, x, y, w, h)
	- transparencyDisposal(ratio, x, y, w, h)
	- reverseColor(x, y, w, h)
	- greyProcessing(x, y, w, h)
	- blackWhite(ratio, x, y, w, h)
	- relief()
	- sunGlass()
	- frostedGlass(t)
	- getter/setter

		- inherit Rect

			- getWidth()
			- getHeight()
			- getStartX()
			- getStartY()
			- getLeft()
			- getTop()
			- getRight()
			- getBottom()

		- getData()
		- setStartX(sx)
		- setStartY(sy)
		- setStart(sx, sy)
		- init(sx, sy)
		- getPixelIndex(x, y)
		- getDirtyX()
		- setDirtyX(dx)
		- getDirtyY()
		- setDirtyY(dy)
		- setDirty(dx, dy)
		- getDirtyWidth()
		- setDirtyWidth(dw)
		- getDirtyHeight()
		- setDirtyHeight(dh)
