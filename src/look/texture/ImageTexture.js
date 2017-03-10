/*
|--------------------------------------------------------------------------
| ImageTexture
|--------------------------------------------------------------------------
|
| This file defines the ImageTexture Object.
| This object build a PIXI.Texture for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Texture } = require("./Texture.js");

class ImageTexture extends Texture
{
	/**
	 * constructor
	 * This function is used in order to build an ImageTexture.
	 * @param {String}  url  The image url of the texture.
	 * @param {Boolean}  crossOrigin  Whether requests should be treated as crossorigin
	 * @param {Number}  scaleMode  See Settings.SCALE_MODES for possible values
	 * @param {Number}  sourceScale  Scale for the original image, used with SVG images.
	 */
	constructor(url, crossOrigin = null, scaleMode = null, sourceScale = null)
	{
		if (!(typeof url === "string" && {}.toString.call(url) === "[object String]"))
			throw new TypeError("url must be a string.");

		super();

		if (sourceScale !== null)
		{
			if ({}.toString.call(sourceScale) !== "[object Number]")
				throw new TypeError("sourceScale must be a number.");

		  	this._out = PIXI.Texture.fromImage(url, crossOrigin, scaleMode, sourceScale);
		}
		else if (scaleMode !== null)
		{
			if ({}.toString.call(scaleMode) !== "[object Number]")
			throw new TypeError("scaleMode must be a number.");

		  	this._out = PIXI.Texture.fromImage(url, crossOrigin, scaleMode);
		} 
		else if (crossOrigin !== null)
		{
			if ({}.toString.call(crossOrigin) !== "[object Boolean]")
		  		throw new TypeError("crossOrigin must be a boolean.");

		  	this._out = PIXI.Texture.fromImage(url, crosOrigin);
		} 
		else
		{
			this._out = PIXI.Texture.fromImage(url);
		}
	}

	/**
	 * imageUrl
	 * @getter
	 * This function is a getter for the member imageUrl.
	 * @return {String} The image url of the texture.
	 */
	get imageUrl()
	{
		return this._out.baseTexture.imageUrl;
	}

	/**
	 * imageType
	 * @getter
	 * This function is a getter for the member imageType.
	 * @return {String} Type of image defined in source, eg. png or svg.
	 */
	get imageType()
	{
		return this._out.baseTexture.imageType;
	}

	/**
	 * updateSource
	 * This function is used in order to change the source image of the texture.
	 * @param {String} newSrc The path of the image.
	 */
	updateSource(newSrc)
	{
		if (!(typeof newSrc === "string" && {}.toString.call(newSrc) === "[object String]"))
			throw new TypeError("newSrc must be a string.");

		this._out.baseTexture.updateSourceImage(newSrc);
	}
}

module.exports = {
	ImageTexture: ImageTexture,
};