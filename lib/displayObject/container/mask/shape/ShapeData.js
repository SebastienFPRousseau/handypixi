/*
|--------------------------------------------------------------------------
| ShapeData
|--------------------------------------------------------------------------
|
| This file defines the ShapeData Object.
| This object build a PIXI.GraphicsData for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

class ShapeData
{
	/**
	 * constructor
	 * This function is used in order to build a ShapeData.
	 * @param {Object}  options  Default options for drawing.
	 * @param {Boolean}  fill  Whether or not the shape is filled with a colour.
	 * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP.
	 * @param {PIXI.Shape}  shape  The shape properties to draw.
	 * @param {PIXI.GraphicsData}  options  The Pixi object to build the HandyPixi object.
	 */
	constructor(options, fill, nativeLines, shape)
	{
		if ({}.toString.call(fill) !== "[object Boolean]")
			throw new TypeError("fill must be a boolean.");

		if ({}.toString.call(nativeLines) !== "[object Boolean]")
			throw new TypeError("nativeLines must be a boolean.");

		if (!(shape instanceof PIXI.Circle || shape instanceof PIXI.Ellipse || shape instanceof PIXI.Polygon ||
			shape instanceof PIXI.Rectangle || shape instanceof PIXI.RoundedRectangle || shape === null))
			throw new TypeError("shape must be a PIXI.Shape.");

		if (options instanceof PIXI.GraphicsData)
		{
			this._out = options;
		}
		else
		{
			if (!(typeof options === "object" && {}.toString.call(options) === "[object Object]"))
				throw new TypeError("options must be an object.");

			this._out = new PIXI.GraphicsData(options.lineWidth, options.lineColor, options.lineAlpha, options.fillColor,
											  options.fillAlpha, fill, nativeLines, shape);
		}	
	}

	/**
	 * out
	 * @getter
	 * This function is a getter for the member _out.
	 * @return  {PIXI.GraphicsData} The PIXI Object used by this object. 
	 */
	get out()
	{
		return this._out;
	}

	/**
	 * lineWidth
	 * @getter
	 * This function is a getter for the member lineWidth.
	 * @return {Number} The width of the line to draw. 
	 */
	get lineWidth()
	{
		return this._out.lineWidth;
	}

	/**
	 * lineColor
	 * @getter
	 * This function is a getter for the member lineColor.
	 * @return {Number} The color of the line to draw. 
	 */
	get lineColor()
	{
		return this._out.lineColor;
	}

	/**
	 * lineAlpha
	 * @getter
	 * This function is a getter for the member lineAlpha.
	 * @return {Number} The alpha of the line to draw. 
	 */
	get lineAlpha()
	{
		return this._out.lineAlpha;
	}

	/**
	 * fillColor
	 * @getter
	 * This function is a getter for the member fillColor.
	 * @return {Number} The color of the fill. 
	 */
	get fillColor()
	{
		return this._out.fillColor;
	}

	/**
	 * fillAlpha
	 * @getter
	 * This function is a getter for the member fillAlpha.
	 * @return {Number} The alpha of the fill. 
	 */
	get fillAlpha()
	{
		return this._out.fillAlpha;
	}

	/**
	 * fill
	 * @getter
	 * This function is a getter for the member fill.
	 * @return {Boolean} Whether or not the shape is filled with a colour. 
	 */
	get fill()
	{
		return this._out.fill;
	}

	/**
	 * nativeLines
	 * @getter
	 * This function is a getter for the member nativeLines.
	 * @return {Boolean} Lines will be draw using LINES instead of TRIANGLE_STRIP. 
	 */
	get nativeLines()
	{
		return this._out.nativeLines;
	}

	/**
	 * shape
	 * @getter
	 * This function is a getter for the member shape.
	 * @return {PIXI.Shape} The shape object to draw. 
	 */
	get shape()
	{
		return this._out.shape;
	}
};

module.exports = {
	ShapeData: ShapeData,
};