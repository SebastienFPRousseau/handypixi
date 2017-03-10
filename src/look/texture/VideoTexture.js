/*
|--------------------------------------------------------------------------
| VideoTexture
|--------------------------------------------------------------------------
|
| This file defines the VideoTexture Object.
| This object build a PIXI.VideoBaseTexture for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Texture } = require("./Texture.js");

class VideoTexture extends Texture
{
	/**
	 * constructor
	 * This function is used in order to build a VideoTexture.
	 * @param {String}  source  The url of the video.
	 * @param {HTMLVideoElement}  source  HTML Video source.
	 * @param {Number}  scaleMode  See Settings.SCALE_MODES for possible values
	 * @param {PIXI.VideoBaseTexture}  source  The Pixi object to build the HandyPixi object.
	 */
	constructor(source, scaleMode = null)
	{
		super();

		if (source instanceof PIXI.VideoBaseTexture)
		{
			this._out = new PIXI.Texture(source);
		}
		else if (typeof source === "string" && {}.toString.call(source) === "[object String]")
		{
			if(scaleMode !== null)
			{
				if ({}.toString.call(scaleMode) !== "[object Number]")
					throw new TypeError("scaleMode must be a number.");

				this._out = PIXI.Texture.fromVideoUrl(source, scaleMode);
			}
			else 
			{
				this._out = PIXI.Texture.fromVideoUrl(source);
			}
		}
		else if (source instanceof HTMLVideoElement)
		{
			if(scaleMode !== null)
			{
				if ({}.toString.call(scaleMode) !== "[object Number]")
					throw new TypeError("scaleMode must be a number.");

				this._out = PIXI.Texture.fromVideo(source, scaleMode);
			}
			else 
			{
				this._out = PIXI.Texture.fromVideo(source);
			}
		}
		else
		{
			throw new TypeError("source must be a string or a HTMLVideoElement.");
		}
	}
		
	/**
	 * autoPlay
	 * This function is used in order to automatically play video used by this texture once they are loaded.
	 * @param {Boolean}  value  Automatically play the video or not.
	 */
	autoPlay(value = true)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a boolean.");

		this._out.baseTexture.autoPlay = value;
	}

	/**
	 * autoUpdate
	 * This function is used in order to automatically update the video base texture.
	 * @param {Boolean}  value  Automatically update texture from source or not. 
	 */
	autoUpdate(value = true)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a boolean.");

		this._out.baseTexture.autoUpdate = value;
	}
}

module.exports = {
	VideoTexture: VideoTexture,
};