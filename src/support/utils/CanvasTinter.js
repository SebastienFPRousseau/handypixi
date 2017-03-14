/*
|--------------------------------------------------------------------------
| CanvasTinter
|--------------------------------------------------------------------------
|
| This file defines the CanvasTinter Object.
| This object build a PIXI.CanvasTinter for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Look } = require("./../../graphic/look/Look.js");
const { Texture } = require("./../../graphic/texture/Texture.js");

class CanvasTinter
{
	/**
	 * constructor
	 * This function is used in order to build a CanvasTinter.
	 */
	constructor()
	{
		this._out = PIXI.CanvasTinter;
	}

	/**
	* out
	* @getter
	* This function is a getter for the member _out.
	* @return  {PIXI.CanvasTinter}  The PIXI Object used by this object. 
	*/
	get out()
	{
		return this._out;
	}

	/**
	 * cacheStepsPerColorChannel
	 * @getter
	 * This function is a getter for the member cacheStepsPerColorChannel.
	 * @return {Number} Number of steps which will be used as a cap when rounding colors.
	 */
	static get cacheStepsPerColorChannel()
	{
		return PIXI.CanvasTinter.cacheStepsPerColorChannel;
	}

	/**
	 * cacheStepsPerColorChannel
	 * @setter
	 * This function is a setter for the member cacheStepsPerColorChannel.
	 * @param {Number} cspcc Number of steps which will be used as a cap when rounding colors.
	 */
	static set cacheStepsPerColorChannel(cspcc)
	{
		if ({}.toString.call(cspcc) !== "[object Number]")
			throw new TypeError("cspcc must be a number.");

		PIXI.CanvasTinter.cacheStepsPerColorChannel = cspcc;
	}

	/**
	 * tintMethod
	 * @getter
	 * This function is a getter for the member tintMethod.
	 * @return {Function} The tinting method that will be used.
	 */
	static get tintMethod()
	{
		return PIXI.CanvasTinter.tintMethod;
	}

	/**
	 * tintMethod
	 * @setter
	 * This function is a setter for the member tintMethod.
	 * @param {Function}  method  The tinting method that will be used.
	 */
	static set tintMethod(method)
	{
		if ({}.toString.call(method) !== "[object Function]")
			throw new TypeError("method must be a function.");

		PIXI.CanvasTinter.tintMethod = method;
	}

	/**
	 * convertTintToImage
	 * @getter
	 * This function is a getter for the member convertTintToImage.
	 * @return {Boolean} Tint cache boolean flag.
	 */
	static get convertTintToImage()
	{
		return PIXI.CanvasTinter.convertTintToImage;
	}

	/**
	 * convertTintToImage
	 * @setter
	 * This function is a setter for the member convertTintToImage.
	 * @param {Boolean}  value  Tint cache boolean flag.
	 */
	static set convertTintToImage(value)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a boolean.");

		PIXI.CanvasTinter.convertTintToImage = value;
	}

	/**
	 * canUseMultiply
	 * This function is used in order to know if the Canvas BlendModes are supported, used by the multiply method.
	 * @return {Boolean} Whether or not a tinting multiply method can be used.
	 */
	static canUseMultiply()
	{
		return PIXI.CanvasTinter.canUseMultiply;
	}

	/**
	 * getTintedTexture
	 * This function is used in order to tint the Look with the given color.
	 * @param {Look | Sprite}  look  The look to tint. Works on a formed sprite too. 
	 * @param {Number}  color  The color to use to tint with.
	 * @return {HTMLCanvasElement}  The tinted canvas.
	 */
	static getTintedTexture(look, color)
	{
		if ({}.toString.call(color) !== "[object Number]")
			throw new TypeError("color must be a number.");

		if (!(look instanceof Look || look instanceof Sprite))
			throw new TypeError("look must be a Look or a Sprite.");

		return PIXI.CanvasTinter.getTintedTexture(look.out, color);
	}

	/**
	 * getRoundColor
	 * This function is used in order to round the specified color according to the cacheStepsPerColorChannel.
	 * @param {Number}  color  The color to round, should be a hex color.
	 * @return {Number}  The rounded color.
	 */
	static getRoundColor(color)
	{
		if ({}.toString.call(color) !== "[object Number]")
			throw new TypeError("color must be a number.");

		return PIXI.CanvasTinter.roundColor(color);
	}

	/**
	 * tintWithMultiply
	 * This function is used in order to tint a texture using the 'multiply' operation.
	 * @param {Texture}  texture  The texture to tint.
	 * @param {Number}  color  The color to use to tint with.
	 * @param {HTMLCanvasElement} canvas The current html canvas.
	 */
	static tintWithMultiply(texture, color, canvas)
	{
		if (!(texture instanceof Texture))
			throw new TypeError("texture must be a Texture.");

		if ({}.toString.call(color) !== "[object Number]")
			throw new TypeError("color must be a number.");

		if (!(canvas instanceof HTMLCanvasElement))
			throw new TypeError("canvas must be a HTMLCanvasElement.");

		PIXI.CanvasTinter.tintWithMultiply(texture.out, color, canvas);
	}

	/**
	 * tintWithOverlay
	 * This function is used in order to tint a texture using the 'overlay' operation.
	 * @param {Texture}  texture  The texture to tint.
	 * @param {Number}  color  The color to use to tint with.
	 * @param {HTMLCanvasElement}  The current html canvas.
	 */
	static tintWithOverlay(texture, color, canvas)
	{
		if (!(texture instanceof Texture))
			throw new TypeError("texture must be a Texture.");

		if ({}.toString.call(color) !== "[object Number]")
			throw new TypeError("color must be a number.");

		if (!(canvas instanceof HTMLCanvasElement))
			throw new TypeError("canvas must be a HTMLCanvasElement.");

		PIXI.CanvasTinter.tintWithOverlay(texture.out, color, canvas);
	}

	/**
	 * tintWithPerPixel
	 * This function is used in order to tint a texture pixel per pixel.
	 * @param {Texture}  texture  The texture to tint.
	 * @param {Number}  color  The color to use to tint with.
	 * @param {HTMLCanvasElement}  The current html canvas.
	 */
	static tintWithPerPixel(texture, color, canvas)
	{
		if (!(texture instanceof Texture))
			throw new TypeError("texture must be a Texture.");

		if ({}.toString.call(color) !== "[object Number]")
			throw new TypeError("color must be a number.");

		if (!(canvas instanceof HTMLCanvasElement))
			throw new TypeError("canvas must be a HTMLCanvasElement.");

		PIXI.CanvasTinter.tintWithPerPixel(texture.out, color, canvas);
	}
}

module.exports = {
	CanvasTinter: CanvasTinter,
};