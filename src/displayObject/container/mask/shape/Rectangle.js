/*
|--------------------------------------------------------------------------
| Rectangle
|--------------------------------------------------------------------------
|
| This file defines the Rectangle Object.
| This object build a PIXI.Graphics for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Shape } = require("./Shape.js");

class Rectangle extends Shape
{
	/**
	 * constructor
	 * This function is used in order to build a Rectangle.
	 * @param {Number}  x  The X coordinate of the center of this Rectangle.
	 * @param {Number}  y  The Y coordinate of the center of this Rectangle.
	 * @param {Number}  width  The overall width of this rectangle.
	 * @param {Number}  height  The overall height of this rectangle.
	 * @param {Options}  options  Default options for drawing.
	 * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
	 * @param {PIXI.Rectangle}  x  The Pixi object to build the HandyPixi object.
	 */
	constructor(x = 0, y = 0, width = 0, height = 0, options = {}, nativeLines = false)
	{
		super(options, nativeLines);

		if (this.constructor.name !== "Rectangle")
     		return ;

		if ({}.toString.call(y) !== "[object Number]")
			throw new TypeError("y must be a number.");

		if ({}.toString.call(width) !== "[object Number]")
			throw new TypeError("width must be a number.");

		if ({}.toString.call(height) !== "[object Number]")
			throw new TypeError("height must be a number.");

		if (x instanceof PIXI.Rectangle)
		{
			this._properties = x;
		}
		else
		{
			if ({}.toString.call(x) !== "[object Number]")
				throw new TypeError("x must be a number.");

			this._properties = new PIXI.Rectangle(x, y, width, height);
		}

		this.beginFill();
		this._out.drawShape(this._properties);
		this.endFill();
	}

	/**
	 * rectangleWidth
	 * @getter
	 * This function is a getter for the member rectangleWidth.
	 * @return {Number} The overall width of this rectangle. 
	 */
	get rectangleWidth()
	{
		return this._properties.width;
	}

	/**
	 * rectangleWidth
	 * @setter
	 * This function is a setter for the member rectangleWidth.
	 * @param {Number}  width  The overall width of this rectangle. 
	 */
	set rectangleWidth(width)
	{
		if ({}.toString.call(width) !== "[object Number]")
			throw new TypeError("width must be a number.");

		this._properties.width = width;
		this.redraw();
	}

	/**
	 * rectangleHeight
	 * @getter
	 * This function is a getter for the member rectangleHeight.
	 * @return {Number} The overall height of this rectangle. 
	 */
	get rectangleHeight()
	{
		return this._properties.height;
	}

	/**
	 * rectangleHeight
	 * @setter
	 * This function is a setter for the member rectangleHeight.
	 * @param {Number}  height  The overall height of this rectangle. 
	 */
	set rectangleHeight(height)
	{
		if ({}.toString.call(height) !== "[object Number]")
			throw new TypeError("height must be a number.");

		this._properties.height = height;
		this.redraw();
	}

	/**
	 * x
	 * @getter
	 * This function is a getter for the member x.
	 * @return {Number} The X coordinate of the center of this Rectangle. 
	 */
	get x()
	{
		return this._properties.x;
	}

	/**
	 * x
	 * @setter
	 * This function is a setter for the member x.
	 * @param {Number}  x  The X coordinate of the center of this Rectangle. 
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
	 * @return {Number} The Y coordinate of the center of this Rectangle. 
	 */
	get y()
	{
		return this._properties.y;
	}

	/**
	 * y
	 * @setter
	 * This function is a setter for the member y.
	 * @param {Number}  y  The Y coordinate of the center of this Rectangle. 
	 */
	set y(y)
	{
		if ({}.toString.call(y) !== "[object Number]")
			throw new TypeError("y must be a number.");

		this._properties.y = y;
		this.redraw();
	}

	/**
	 * redraw
	 * This function is used in order to clear and redraw the Rectangle.
	 */
	redraw()
	{
		this.clear();
		this.beginFill();
		this._out.drawShape(this._properties);
		this.endFill();
	}
}

module.exports = {
	Rectangle: Rectangle,
};