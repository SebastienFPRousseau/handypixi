/*
|--------------------------------------------------------------------------
| Circle
|--------------------------------------------------------------------------
|
| This file defines the Circle Object.
| This object build a PIXI.Graphics for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Shape } = require("./Shape.js");

class Circle extends Shape
{
	/**
	 * constructor
	 * This function is used in order to build a Circle.
	 * @param {Number}  x  The X coordinate of the center of this circle.
	 * @param {Number}  y  The Y coordinate of the center of this circle.
	 * @param {Number}  radius  The radius of the circle.
	 * @param {Object}  options  Options for drawing.
	 * @param {PIXI.Circle}  x  The Pixi object to build the HandyPixi object.
	 */
	constructor(x = 0, y = 0, radius = 0, options = {})
	{
		super();

		if ({}.toString.call(y) !== "[object Number]")
			throw new TypeError("y must be a number.");

		if ({}.toString.call(radius) !== "[object Number]")
			throw new TypeError("radius must be a number.");

		if (!(typeof options === "object" && {}.toString.call(options) === "[object Object]"))
			throw new TypeError("options must be an object.");

		this._options = {};
		this.options = options;

		if (x instanceof PIXI.Circle)
		{
			this._properties = x;
		}
		else
		{
			if ({}.toString.call(x) !== "[object Number]")
				throw new TypeError("x must be a number.");

			this._properties = new PIXI.Circle(x, y, radius);
		}

		this.beginFill(options.fillColor, options.fillAlpha);
		this.lineStyle({lineWidth: options.lineWidth, color: options.lineColor, alpha: options.lineAlpha});
		this._out.drawShape(this._properties);
		this.endFill();
	}

	/**
	 * radius
	 * @getter
	 * This function is a getter for the member radius.
	 * @return {Number} The radius of the circle. 
	 */
	get radius()
	{
		return this._properties.radius;
	}

	/**
	 * radius
	 * @setter
	 * This function is a setter for the member radius.
	 * @param {Number}  radius  The radius of the circle. 
	 */
	set radius(radius)
	{
		if ({}.toString.call(radius) !== "[object Number]")
			throw new TypeError("radius must be a number.");

		this._properties.radius = radius;
		this.redraw();
	}

	/**
	 * x
	 * @getter
	 * This function is a getter for the member x.
	 * @return {Number} The X coordinate of the center of this circle. 
	 */
	get x()
	{
		return this._properties.x;
	}

	/**
	 * x
	 * @setter
	 * This function is a setter for the member x.
	 * @param {Number}  x  The X coordinate of the center of this circle. 
	 */
	set x(x)
	{
		if ({}.toString.call(x) !== "[object Number]")
			throw new TypeError("x must be a number.");

		this._properties.x = x;
		this.redraw();
	}

	/**
	 * y
	 * @getter
	 * This function is a getter for the member y.
	 * @return {Number} The Y coordinate of the center of this circle. 
	 */
	get y()
	{
		return this._properties.y;
	}

	/**
	 * y
	 * @setter
	 * This function is a setter for the member y.
	 * @param {Number}  y  The Y coordinate of the center of this circle. 
	 */
	set y(y)
	{
		if ({}.toString.call(y) !== "[object Number]")
			throw new TypeError("y must be a number.");

		this._properties.y = y;
		this.redraw();
	}

	/**
	 * options
	 * @getter
	 * This function is a getter for the member _options.
	 * @return {Object} Options for drawing.
	 */
	get options()
	{
		return this._options;
	}

	/**
	 * options
	 * @setter
	 * This function is a setter for the member _options.
	 * @param {Object}  options  Options for drawing.
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
	 * redraw
	 * This function is used in order to clear and redraw the Circle.
	 */
	redraw()
	{
		this.clear();
		this.beginFill(this._options.fillColor, this._options.fillAlpha);
		this.lineStyle({lineWidth: this._options.lineWidth, color: this._options.lineColor, alpha: this._options.lineAlpha});
		this._out.drawShape(this._properties);
		this.endFill();
	}
}

module.exports = {
	Circle: Circle,
};