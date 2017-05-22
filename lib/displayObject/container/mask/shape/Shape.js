/*
|--------------------------------------------------------------------------
| Shape
|--------------------------------------------------------------------------
|
| This file defines the Shape Object.
| This object build a PIXI.Graphics for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { Mask } = require("./../Mask.js");
const { Point } = require("./../../../../support/geometry/Point.js");
const { ShapeData } = require("./ShapeData.js");

class Shape extends Mask
{
	/**
	* constructor
	* This function is used in order to build a Shape.
	* @param {Object}  options  Default options for drawing.
	* @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
	* @param {PIXI.Graphics}  options  The Pixi object to build the HandyPixi object.
	*/
	constructor(options = {}, nativeLines = false)
	{
		super();

		if ({}.toString.call(nativeLines) !== "[object Boolean]")
				throw new TypeError("nativeLines must be a boolean.");

		this._options = {};
		this._properties = null;
		
		if (options instanceof PIXI.Graphics)
		{
			this._out = options;
		}
		else 
		{
			if (!(typeof options === "object" && {}.toString.call(options) === "[object Object]"))
				throw new TypeError("options must be an object.");
			
			this.options = options;
			this._out = new PIXI.Graphics(nativeLines);
		}
	}

	/**
	 * out
	 * @getter
	 * This function is a getter for the member _out.
	 * @return  {PIXI.Graphics} The PIXI Object used by this object. 
	 */
	get out()
	{
		return this._out;
	}

	/**
	 * boundsPadding
	 * @getter
	 * This function is a getter for the member boundsPadding.
	 * @return {Number} The bounds' padding used for bounds calculation. 
	 */
	get boundsPadding()
	{
		return this._out.boundsPadding;
	}

	/**
	 * boundsPadding
	 * @setter
	 * This function is a setter for the member boundsPadding.
	 * @param {Number}  padding  The bounds' padding used for bounds calculation. 
	 */
	set boundsPadding(padding)
	{
		if ({}.toString.call(padding) !== "[object Number]")
			throw new TypeError("padding must be a number.");

		this._out.boundsPadding = padding;
	}

	/**
	 * fillAlpha
	 * @getter
	 * This function is a getter for the member fillAlpha.
	 * @return {Number} The alpha value used when filling the Shape object. 
	 */
	get fillAlpha()
	{
		return this._out.fillAlpha;
	}

	/**
	 * fillAlpha
	 * @setter
	 * This function is a setter for the member fillAlpha.
	 * @param {Number}  alpha  The alpha value used when filling the Shape object. 
	 */
	set fillAlpha(alpha)
	{
		if ({}.toString.call(alpha) !== "[object Number]")
			throw new TypeError("alpha must be a number.");

		this._out.fillAlpha = alpha;
	}

	/**
	 * lineColor
	 * @getter
	 * This function is a getter for the member lineColor.
	 * @return {String} The color of any lines drawn. 
	 */
	get lineColor()
	{
		return this._out.lineColor;
	}

	/**
	 * lineColor
	 * @setter
	 * This function is a setter for the member lineColor.
	 * @param {String}  color  The color of any lines drawn. 
	 */
	set lineColor(color)
	{
		if (!(typeof color === "string" && {}.toString.call(color) === "[object String]"))
			throw new TypeError("color must be a string.");

		this._out.lineColor = color;
	}

	/**
	 * lineWidth
	 * @getter
	 * This function is a getter for the member lineWidth.
	 * @return {Number} The width (thickness) of any lines drawn. 
	 */
	get lineWidth()
	{
		return this._out.lineWidth;
	}

	/**
	 * lineWidth
	 * @setter
	 * This function is a setter for the member lineWidth.
	 * @param {Number}  width  The width (thickness) of any lines drawn. 
	 */
	set lineWidth(width)
	{
		if ({}.toString.call(width) !== "[object Number]")
			throw new TypeError("width must be a number.");

		this._out.lineWidth = width;
	}

	/**
	 * options
	 * @getter
	 * This function is a getter for the member _options.
	 * @return {Object} Default options for drawing.
	 */
	get options()
	{
		return this._options;
	}

	/**
	 * options
	 * @setter
	 * This function is a setter for the member _options.
	 * @param {Object}  options  Default options for drawing.
	 */
	set options(options)
	{
		if (!(typeof options === "object" && {}.toString.call(options) === "[object Object]"))
			throw new TypeError("options must be an object.");

		if (options.fillColor !== undefined)
		{
			if ({}.toString.call(options.fillColor) !== "[object Number]")
				throw new TypeError("options.fillColor must be a number.");

			this._options.fillColor = options.fillColor;
		}
		
		if (options.fillAlpha !== undefined)
		{
			if ({}.toString.call(options.fillAlpha) !== "[object Number]")
				throw new TypeError("options.fillAlpha must be a number.");
			
			this._options.fillAlpha = options.fillAlpha;
		}

		if (options.lineWidth !== undefined)
		{
			if ({}.toString.call(options.lineWidth) !== "[object Number]")
				throw new TypeError("options.lineWidth must be a number.");
			
			this._options.lineWidth = options.lineWidth;
		}

		if (options.lineColor !== undefined)
		{
			if ({}.toString.call(options.lineColor) !== "[object Number]")
				throw new TypeError("options.lineColor must be a number.");
			
			this._options.lineColor = options.lineColor;
		}

		if (options.lineAlpha !== undefined)
		{
			if ({}.toString.call(options.lineAlpha) !== "[object Number]")
				throw new TypeError("options.lineAlpha must be a number.");
			
			this._options.lineAlpha = options.lineAlpha;
		}
	}

	/**
	 * addHole
	 * This function is used in order to add a hole in the current path.
	 */
	addHole()
	{
		this._out.addHole();
	}
	
	/**
	 * arc
	 * This function is used in order to draw an arc/curve.
	 * @param {Object}  params  Coordinates, radius, angles.
	 * @return {Shape} This Shape object. Good for chaining method calls.
	 */
	arc(params)
	{
		if (!(typeof params === "object" && {}.toString.call(params) === "[object Object]"))
			throw new TypeError("params must be an object.");

		if ({}.toString.call(params.cx) !== "[object Number]")
			throw new TypeError("params.cx must exist and be a number.");

		if ({}.toString.call(params.cy) !== "[object Number]")
			throw new TypeError("params.cy must exist and be a number.");

		if ({}.toString.call(params.radius) !== "[object Number]")
			throw new TypeError("params.radius must exist and be a number.");

		if ({}.toString.call(params.startAngle) !== "[object Number]")
			throw new TypeError("params.startAngle must exist and be a number.");

		if ({}.toString.call(params.endAngle) !== "[object Number]")
			throw new TypeError("params.endAngle must exist and be a number.");

		this._out.arc(params.cx, params.cy, params.radius, params.startAngle, params.endAngle, params.anticlockwise);
		return this;
	}

	/**
	 * arcTo
	 * This function is used in order to draw an arc/curve between two tangents on the canvas.
	 * @param {Object}  params  Coordinates, radius.
	 * @return {Shape} This Shape object. Good for chaining method calls.
	 */
	arcTo(params)
	{
		if (!(typeof params === "object" && {}.toString.call(params) === "[object Object]"))
			throw new TypeError("params must be an object.");

		if ({}.toString.call(params.x1) !== "[object Number]")
			throw new TypeError("params.x1 must exist and be a number.");

		if ({}.toString.call(params.y1) !== "[object Number]")
			throw new TypeError("params.y1 must exist and be a number.");

		if ({}.toString.call(params.x2) !== "[object Number]")
			throw new TypeError("params.x2 must exist and be a number.");

		if ({}.toString.call(params.y2) !== "[object Number]")
			throw new TypeError("params.y2 must exist and be a number.");

		if ({}.toString.call(params.radius) !== "[object Number]")
			throw new TypeError("params.radius must exist and be a number.");

		this._out.arcTo(params.x1, params.y1, params.x2, params.y2, params.radius);

		return this;
	}

	
	/**
	 * beginFill
	 * This function is used in order to specify a color to draw with others methods.
	 * @param {Number}  color  The color of the fill.
	 * @param {Number}  alpha  The alpha of the fill.
	 * @return {Shape} This Shape object. Good for chaining method calls.
	 */
	beginFill(color = this.options.fillColor || 0, alpha = this.options.fillAlpha || 1)
	{
		if ({}.toString.call(color) !== "[object Number]")
			throw new TypeError("color must be a number.");

		if ({}.toString.call(alpha) !== "[object Number]")
			throw new TypeError("alpha must be a number.");

		this._out.beginFill(color, alpha);
		this.lineStyle({lineWidth: this._options.lineWidth, color: this._options.lineColor, alpha: this._options.lineAlpha});

		return this;
	}

	/**
	 * bezierCurveTo
	 * This function is used in order to draw the points for a bezier curve.
	 * @param {Object}  points  Controls points, destination point.
	 * @return {Shape} This Shape object. Good for chaining method calls.
	 */
	bezierCurveTo(points)
	{
		if (!(typeof points === "object" && {}.toString.call(points) === "[object Object]"))
			throw new TypeError("points must be an object.");

		if ({}.toString.call(points.cpX1) !== "[object Number]")
			throw new TypeError("points.cpX1 must exist and be a number.");

		if ({}.toString.call(points.cpY1) !== "[object Number]")
			throw new TypeError("points.cpY1 must exist and be a number.");

		if ({}.toString.call(points.cpX2) !== "[object Number]")
			throw new TypeError("points.cpX2 must exist and be a number.");

		if ({}.toString.call(points.cpY2) !== "[object Number]")
			throw new TypeError("points.cpY2 must exist and be a number.");

		if ({}.toString.call(points.toX) !== "[object Number]")
			throw new TypeError("points.toX must exist and be a number.");

		if ({}.toString.call(points.toY) !== "[object Number]")
			throw new TypeError("points.toY must exist and be a number.");

		this._out.bezierCurveTo(points.cpX1, points.cpY1, points.cpX2, points.cpY2, points.toX, points.toY);

		return this;
	}

	/**
	 * clear
	 * This function is used in order to clear shapes that were drawn and reset settings.
	 * @return {Shape} This Shape object. Good for chaining method calls.
	 */
	clear()
	{
		this._out.clear();

		return this;
	}

	/**
	 * clone
	 * This function is used in order to clone this Shape.
	 * @return {Shape} A copy of this object.
	 */
	clone()
	{
		return new Shape(this._out.clone());
	}

	/**
	 * closePath
	 * This function is used in order to close the current path.
	 */
	closePath()
	{
		this._out.closePath();
	}

	/**
	 * containsPoint
	 * This function is used in order to check if a point is inside this filled shape.
	 * @param {Point}  point  The point to check.
	 * @return {Boolean} Whether or not the shape contains the point.
	 */
	containsPoint(point)
	{
		if (!(point instanceof Point))
			throw new TypeError("point must be a Point.");

		return this._out.containsPoint(point.out);
	}
	
	/**
	 * endFill
	 * This function is used in order to apply a fill to the lines and shapes drawn since the last call to the beginFill method.
	 * @return {Shape} This Shape object. Good for chaining method calls.
	 */
	endFill()
	{
		this._out.endFill();

		return this;
	}

	/**
	 * lineStyle
	 * This function is used in order to set the line style parameters for drawing methods.
	 * @param {Object}  style  Width, color and alpha of the line to draw. 
	 * @return {Shape} This Shape object. Good for chaining method calls.
	 */
	lineStyle(style)
	{
		if (!(typeof style === "object" && {}.toString.call(style) === "[object Object]"))
			throw new TypeError("style must be an object.");

		this._out.lineStyle(style.lineWidth, style.color, style.alpha);

		return this;
	}

	/**
	 * lineTo
	 * This function is used in order to draw a line between two points.
	 * @param {Point}  from  The point to start the draw.
	 * @param {Point}  to  The point to end the draw.
	 * @return {Shape} This Shape object. Good for chaining method calls.
	 */
	lineTo(from, to)
	{
		if (!(from instanceof Point))
			throw new TypeError("from must be a Point.");

		if (!(to instanceof Point))
			throw new TypeError("to must be a Point.");

		this._out.moveTo(from.x, from.y);
		this._out.lineTo(to.x, to.y);

		return this;
	}

	/**
	 * quadraticCurveTo
	 * This function is used in order to draw a quadratic bezier curve.
	 * @param {Object}  points Control and destination point.
	 * @return {Shape} This Shape object. Good for chaining method calls.
	 */
	quadraticCurveTo(points)
	{
		if (!(typeof points === "object" && {}.toString.call(points) === "[object Object]"))
			throw new TypeError("points must be an object.");

		if ({}.toString.call(points.cpX) !== "[object Number]")
			throw new TypeError("points.cpX must exist and be a number.");

		if ({}.toString.call(points.cpY) !== "[object Number]")
			throw new TypeError("points.cpY must exist and be a number.");

		if ({}.toString.call(points.toX) !== "[object Number]")
			throw new TypeError("points.toX must exist and be a number.");

		if ({}.toString.call(points.toY) !== "[object Number]")
			throw new TypeError("points.toY must exist and be a number.");

		this._out.quadraticCurveTo(points.cpX, points.cpY, points.toX, points.toY);

		return this;
	}

	/**
	 * updateLocalBounds
	 * This function is used in order to
	 * @return {Shape} This Shape object. Good for chaining method calls.
	 */
	updateLocalBounds()
	{
		this._out.updateLocalBounds();

		return this;
	}

	/**
	 * getShapeData
	 * This function is used in order to get the related ShapeData object of this Shape.
	 * @return {ShapeData} The ShapeData.
	 */
	getShapeData()
	{
		let fill = false;

		if (this._options.fillColor !== undefined)
			fill = true;

		return new ShapeData(this._options, fill, this._out.nativeLines, this._properties);
	}

	/**
	 * drawCircle
	 * This function is used in order to draw a circle into this Shape.
	 * @param {Number}  x  The X coordinate of the center of this circle.
	 * @param {Number}  y  The Y coordinate of the center of this circle.
	 * @param {Number}  radius  The radius of the circle.
	 * @return {Shape} This Shape object. Good for chaining method calls.
	 */
	drawCircle(x, y, radius)
	{
		if ({}.toString.call(x) !== "[object Number]")
			throw new TypeError("x must be a number.");

		if ({}.toString.call(y) !== "[object Number]")
			throw new TypeError("y must be a number.");

		if ({}.toString.call(radius) !== "[object Number]")
			throw new TypeError("radius must be a number.");

		this._out.drawCircle(x, y, radius);

		return this;
	}

	
	/**
	 * drawEllipse
	 * This function is used in order to draw an ellipse into this Shape.
	 * @param {Number}  x  The X coordinate of the center of this Ellipse.
	 * @param {Number}  y  The Y coordinate of the center of this Ellipse.
	 * @param {Number}  width  The half width of this ellipse.
	 * @param {Number}  height  The half height of this ellipse.
	 * @return {Shape} This Shape object. Good for chaining method calls.
	 */
	drawEllipse(x, y, width, height)
	{
		if ({}.toString.call(x) !== "[object Number]")
			throw new TypeError("x must be a number.");

		if ({}.toString.call(y) !== "[object Number]")
			throw new TypeError("y must be a number.");

		if ({}.toString.call(width) !== "[object Number]")
			throw new TypeError("width must be a number.");

		if ({}.toString.call(height) !== "[object Number]")
			throw new TypeError("height must be a number.");

		this._out.drawEllipse(x, y, width, height);

		return this;
	}

	/**
	 * drawPolygon
	 * This function is used in order to draw a polygon into this Shape.
	 * @param {Point[]}  points  An array of Points that form the polygon.
	 * @return {Shape} This Shape object. Good for chaining method calls.
	 */
	drawPolygon(points)
	{
		if (!Array.isArray(points))
			throw new TypeError("points must be an array.");

		let pixiPoints = [];
		for(let i = 0, l = points.length; i < l; i++)
		{
			if (!(points[i] instanceof Point))
				throw new TypeError("Can't use the "+ i +" element, it must be a Point");

			pixiPoints.push(points[i].out);
		}
		this._out.drawPolygon(pixiPoints);

		return this;
	}

	/**
	 * drawRectangle
	 * This function is used in order to draw a rectangle into this Shape.
	 * @param {Number}  x  The X coordinate of the center of this Rectangle.
	 * @param {Number}  y  The Y coordinate of the center of this Rectangle.
	 * @param {Number}  width  The overall width of this rectangle.
	 * @param {Number}  height  The overall height of this rectangle.
	 * @return {Shape} This Shape object. Good for chaining method calls.
	 */
	drawRectangle(x, y, width, height)
	{
		if ({}.toString.call(x) !== "[object Number]")
			throw new TypeError("x must be a number.");

		if ({}.toString.call(y) !== "[object Number]")
			throw new TypeError("y must be a number.");

		if ({}.toString.call(width) !== "[object Number]")
			throw new TypeError("width must be a number.");

		if ({}.toString.call(height) !== "[object Number]")
			throw new TypeError("height must be a number.");

		this._out.drawRect(x, y, width, height);

		return this;
	}

	/**
	 * drawRoundedRectangle
	 * This function is used in order to draw a rounded rectangle into this Shape.
	 * @param {Number}  x  The X coordinate of the center of this RoundedRectangle.
	 * @param {Number}  y  The Y coordinate of the center of this RoundedRectangle.
	 * @param {Number}  width  The overall width of this RoundedRectangle.
	 * @param {Number}  height  The overall height of this RoundedRectangle.
	 * @param {Number}  radius  Controls the radius of the rounded corners.
	 * @return {Shape} This Shape object. Good for chaining method calls.
	 */
	drawRoundedRectangle(x, y, width, height, radius)
	{
		if ({}.toString.call(x) !== "[object Number]")
			throw new TypeError("x must be a number.");

		if ({}.toString.call(y) !== "[object Number]")
			throw new TypeError("y must be a number.");

		if ({}.toString.call(width) !== "[object Number]")
			throw new TypeError("width must be a number.");

		if ({}.toString.call(height) !== "[object Number]")
			throw new TypeError("height must be a number.");

		if ({}.toString.call(radius) !== "[object Number]")
			throw new TypeError("radius must be a number.");

		this._out.drawRoundedRect(x, y, width, height, radius);

		return this;
	}
};

module.exports = {
	Shape: Shape,
};