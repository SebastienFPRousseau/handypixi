/*
|--------------------------------------------------------------------------
| RenderTexture
|--------------------------------------------------------------------------
|
| This file defines the RenderTexture Object.
| This object build a PIXI.RenderTexture for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Texture } = require("./Texture.js");

class RenderTexture extends Texture
{
	/**
	 * constructor
	 * This function is used in order to build a RenderTexture
	 * @param {Number}  width  The width of the base render texture.
	 * @param {Number}  height  The height of the base render texture.
	 * @param {Number}  scaleMode  See Settings.SCALE_MODES for possible values.
	 * @param {Number}  resolution  The resolution / device pixel ratio of the texture being generated.
	 * @param {PIXI.RenderTexture | PIXI.BaseRenderTexture}  width  The Pixi object to build the HandyPixi object.
	 */
	constructor(width = 100, height = 100, scaleMode = null, resolution = 1)
	{
		if ({}.toString.call(height) !== "[object Number]")
			throw new TypeError("height must be a number.");

		if ({}.toString.call(resolution) !== "[object Number]")
			throw new TypeError("resolution must be a number.");

		super();

		if (width instanceof PIXI.RenderTexture)
		{
			this._out = pixiObj;
		}
		else if (width instanceof PIXI.BaseRenderTexture)
		{
			this._out = new PIXI.RenderTexture(pixiObj);
		}
		else
		{
			if ({}.toString.call(width) !== "[object Number]")
				throw new TypeError("width must be a number.");

			if (scaleMode !== null)
			{
				if ({}.toString.call(scaleMode) !== "[object Number]")
					throw new TypeError("scaleMode must be a number.");

				this._out = PIXI.RenderTexture.create(width, height, scaleMode, resolution);
			}
			else 
			{
				this._out = PIXI.RenderTexture.create(width, height);
			}
		}	
	}

	/**
	* out
	* @getter
	* This function is a getter for the member _out.
	* @return  {PIXI.RenderTexture} The PIXI Object used by this object. 
	*/
	get out()
	{
		return this._out;
	}

	/**
	 * resize
	 * This function is used in order to resize the RenderTexture
	 * @param {Number}  width  The new width to use.
	 * @param {Number}  height  The new height to use.
	 */
	resize(width, height)
	{
		if ({}.toString.call(width) !== "[object Number]")
			throw new TypeError("width must be a number.");

		if ({}.toString.call(height) !== "[object Number]")
			throw new TypeError("height must be a number.");

		this._out.baseTexture.resize(width, height);
	}
};

module.exports = {
	RenderTexture: RenderTexture,
};