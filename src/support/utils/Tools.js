/*
|--------------------------------------------------------------------------
| Tools
|--------------------------------------------------------------------------
|
| This file defines the tools static class.
| This class define many handy static method for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

class Tools
{
	/**
	 * getSvgSize
	 * This function is used in order to get size from an svg string using regexp.
	 * @param {String}  svg  A serialized svg element.
	 * @return {Size} The image extension. Returns undefined if svg is not valid.
	 */
	static getSvgSize(svg)
	{
		if (!(typeof svg === "string" && {}.toString.call(svg) === "[object String]"))
			throw new TypeError("svg must be a string.");

		return PIXI.utils.getSvgSize(svg);
	}
	
	/**
	 * hexToRgb
	 * This function is used in order to convert a hex color number to an [R, G, B] array.
	 * @param {Number}  hex  The number to convert.
	 * @param {Number[3]}  out  If supplied, this array will be used rather than returning a new one.
	 * @return {Number[3]} An array representing the [R, G, B] of the color.
	 */
	static hexToRgb(hex, out = [])
	{
		if ({}.toString.call(hex) !== "[object Number]")
			throw new TypeError("hex must be a number.");

		if (!Array.isArray(out))
			throw new TypeError("array must be an Array.");

		PIXI.utils.hex2rgb(hex, out);
		return out;
	}

	/**
	 * hexToString
	 * This function is used in order to convert a hex color number to a string.
	 * @param {Number}  hex  Number to convert.
	 * @return {String} The string color.
	 */
	static hexToString(hex)
	{
		if ({}.toString.call(hex) !== "[object Number]")
			throw new TypeError("hex must be a number.");

		return PIXI.utils.hex2string(hex);
	}
	
	/**
	 * rgbToHex
	 * This function is used in order to convert a color as an [R, G, B] array to a hex number
	 * @param {Number[3]}  rgb  Rgb array to convert.
	 * @return {Number} The hex color. 
	 */
	static rgbToHex(rgb)
	{
		let hex = 0; 

		if (!Array.isArray(rgb) || rgb.length != 3)
		{
			throw new TypeError("rgb must be an Array, its length must be three.");
		}
		else 
		{
			for(let i = 0, l = rgb.length; i < l; i++)
			{
				if ({}.toString.call(rgb[i]) !== "[object Number]")
					throw new TypeError("rgb must be an Array of Numbers.");
			}
			
			hex = PIXI.utils.rgb2hex(rgb);
		}

		return hex;
	}
	
	/**
	 * rgbToString
	 * This function is used in order to convert a rgb color array to a string.
	 * @param {Number[3]}  rgb  Rgb array to convert.
	 * @return {String} The string color.
	 */
	static rgbToString(rgb)
	{
		return Tools.hexToString(Tools.rgbToHex(rgb));
	}
	
	/**
	 * scaleBy
	 * This function is used in order to
	 */
	
	/**
	 * rotatePoint
	 * This function is used in order to
	 */
	
	/**
	 * normalize
	 * This function is used in order to
	 */
	
	/**
	 * length
	 * This function is used in order to
	 */
	
	/**
	 * generationEase
	 * This function is used in order to
	 */
}

module.exports = {
	Tools: Tools,
}