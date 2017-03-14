/*
|--------------------------------------------------------------------------
| TextStyle
|--------------------------------------------------------------------------
|
| This file defines the Texture Object.
| This object build a PIXI.TextStyle for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

class TextStyle
{
	/**
	 * constructor
	 * This function is used in order to build a TextStyle.
	 * @param {Object}  style  The style parameters.
	 * @param {PIXI.TextStyle}  style  The Pixi object to build the HandyPixi object.
	 */
	constructor(style = {})
	{
		if (style instanceof PIXI.TextStyle)
		{
			this._out = style;
		}
		else
		{
			if (!(typeof style === "object" && {}.toString.call(style) === "[object Object]"))
				throw new TypeError("style must be an object.");

			this._out = new PIXI.TextStyle(style);
		}
	}

	/**
	* out
	* @getter
	* This function is a getter for the member _out.
	* @return  {PIXI.TextStyle} The PIXI Object used by this object.
	*/
	get out()
	{
		return this._out;
	}

	/**
	 * clone
	 * This function is used in order to clone this object.
	 * @return {TextStyle} A copy of this object.
	 */
	clone()
	{
		return new TextStyle(this._out.clone());
	}
	
	/**
	 * reset
	 * This function is used in order to reset all properties to defaults.
	 */
	reset()
	{
		this._out.reset();
	}
}

module.exports = {
	TextStyle: TextStyle,
};