/*
|--------------------------------------------------------------------------
| Shape
|--------------------------------------------------------------------------
|
| This file defines the Shape Object.
| This object build a PIXI.Graphics for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Mask } = require("./../Mask.js");

class Shape extends Mask
{
	/**
	* constructor
	* This function is used in order to build a Shape.
	* @param {Boolean}  drawLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
	* @param {PIXI.Graphics}  drawLines  The Pixi object to build the HandyPixi object.
	*/
	constructor(drawLines = false)
	{
		super();

		if (drawLines instanceof PIXI.Graphics)
		{
			this._out = drawLines;
		}
		else 
		{
			if ({}.toString.call(drawLines) !== "[object Boolean]")
				throw new TypeError("drawLines must be a boolean.");

			this._out = new PIXI.Graphics(drawLines);
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
}

module.exports = {
	Shape: Shape,
};