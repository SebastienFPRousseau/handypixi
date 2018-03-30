/*
|--------------------------------------------------------------------------
| Texture
|--------------------------------------------------------------------------
|
| This file defines the Texture Object.
| This object build a PIXI.Texture for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { Bounds } = require("./../../displayObject/bounds/Bounds.js");

class Texture
{
	/**
	 * constructor
	 * This function is used in order to build a Texture.
	 * @param {PIXI.Texture | PIXI.BaseTexture}  pixiObj  The Pixi object to build the HandyPixi object.
	 */
	constructor(pixiObj = null)
	{
		this._transform = new PIXI.TextureMatrix(this.out);
		this._cacheId = "";

		if (pixiObj === null  && this.constructor !== Texture )
     		return ;

		if (pixiObj instanceof PIXI.Texture && pixiObj !== PIXI.Texture.EMPTY)
		{
			this._out = pixiObj;
		}
		else if (pixiObj instanceof PIXI.BaseTexture)
		{
			this._out = new PIXI.Texture(pixiObj);
		}
		else
		{
			this._out = PIXI.Texture.EMPTY.clone();
		}
	}

	/**
	* out
	* @getter
	* This function is a getter for the member _out.
	* @return  {PIXI.Texture} The PIXI Object used by this object. 
	*/
	get out()
	{
		return this._out;
	}

	/**
	 * frame
	 * @getter
	 * This function is a getter for the member frame.
	 * @return {Bounds} The frame specifies the region of the base texture that this texture uses.
	 */
	get frame()
	{
		return new Bounds(this._out.frame);
	}

	/**
	 * frame
	 * @setter
	 * This function is a setter for the member frame.
	 * @param {Bounds}  frame  The frame specifies the region of the base texture that this texture uses.
	 */
	set frame(frame)
	{
		if (!(frame instanceof Bounds))
			throw new TypeError("frame must be a Bounds.");

		this._out.frame = frame.out;
	}

	/**
	 * height
	 * @getter
	 * This function is a getter for the member height.
	 * @return {Number} The height of the Texture in pixels.
	 */
	get height()
	{
		return this._out.height;
	}

	/**
	 * height
	 * @setter
	 * This function is a setter for the member height.
	 * @param {Number}  height  The height of the Texture in pixels.
	 */
	set height(height)
	{
		if ({}.toString.call(height) !== "[object Number]")
			throw new TypeError("height must be a number.");

		this._out.height = height;
	}

	/**
	 * width
	 * @getter
	 * This function is a getter for the member width.
	 * @return {Number} The width of the Texture in pixels.
	 */
	get width()
	{
		return this._out.width;
	}

	/**
	 * width
	 * @setter
	 * This function is a setter for the member width.
	 * @param {Number}  width  The width of the Texture in pixels.
	 */
	set width(width)
	{
		if ({}.toString.call(width) !== "[object Number]")
			throw new TypeError("width must be a number.");

		this._out.width = width;
	}

	/**
	 * orig
	 * @getter
	 * This function is a getter for the member orig.
	 * @return {Bounds} This is the area of original texture, before it was put in atlas.
	 */
	get orig()
	{
		return new Bounds(this._out.orig);
	}

	/**
	 * orig
	 * @setter
	 * This function is a setter for the member orig.
	 * @param {Bounds}  orig  This is the area of original texture, before it was put in atlas.
	 */
	set orig(orig)
	{
		if (!(orig instanceof Bounds))
			throw new TypeError("orig must be a Bounds.");

		this._out.orig = orig.out;
	}

	/**
	 * trim
	 * @getter
	 * This function is a getter for the member trim.
	 * @return {Bounds} This is the trimmed area of original texture, before it was put in atlas.
	 */
	get trim()
	{
		return new Bounds(this._out.trim);
	}

	/**
	 * trim
	 * @setter
	 * This function is a setter for the member trim.
	 * @param {Bounds}  trim  This is the trimmed area of original texture, before it was put in atlas.
	 */
	set trim(trim)
	{
		if (!(trim instanceof Bounds))
			throw new TypeError("trim must be a Bounds.");

		this._out.trim = trim.out;
	}

	/**
	 * rotateCode
	 * @getter
	 * This function is a getter for the member rotateCode.
	 * @return {Number} Indicates whether the texture is rotated inside the atlas.  
	 */
	get rotateCode()
	{
		return this._out.rotate;
	}

	/**
	 * rotateCode
	 * @setter
	 * This function is a setter for the member rotateCode.
	 * @param {Number}  rotateCode  Indicates whether the texture is rotated inside the atlas.
	 * Can be used to rotate or mirror sprites. See PIXI.GroupD8 for explanation.
	 * Set to 2 to compensate for texture packer rotation.
	 * Set to 6 to compensate for spine packer rotation.
	 */
	set rotateCode(rotateCode)
	{
		if ({}.toString.call(rotateCode) !== "[object Number]")
			throw new TypeError("rotateCode must be a number.");

		this._out.rotate = rotateCode;
	}

	/**
	 * clampMargin
	 * @getter
	 * This function is a getter for the member clampMargin.
	 * @return {Number} Margin for frame clamping. Works with TilingSprite and Mesh.
	 */
	get clampMargin()
	{
		return this._transform.clampMargin;
	}

	/**
	 * clampMargin
	 * @setter
	 * This function is a setter for the member clampMargin.
	 * @param {Number}  clampMargin  Margin for frame clamping. Works with TilingSprite and Mesh.
	 * Change to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas.
	 */
	set clampMargin(clampMargin)
	{
		if ({}.toString.call(clampMargin) !== "[object Number]")
			throw new TypeError("clampMargin must be a number.");

		this._transform.clampMargin = clampMargin;
	}

	/**
	 * clampOffset
	 * @getter
	 * This function is a getter for the member clampOffset.
	 * @return {Number} Offset for frame clamping. Works with TilingSprite and Mesh.
	 */
	get clampOffset()
	{
		return this._transform.clampOffset;
	}

	/**
	 * clampOffset
	 * @setter
	 * This function is a setter for the member clampOffset.
	 * @param {Number}  clampOffset  Offset for frame clamping. Works with TilingSprite and Mesh.
	 * Change to 1.5 if you texture has repeated right and bottom lines, that leads to smoother borders.
	 */
	set clampOffset(clampOffset)
	{
		if ({}.toString.call(clampOffset) !== "[object Number]")
			throw new TypeError("clampOffset must be a number.");

		this._transform.clampOffset = clampOffset;
	}

	/**
	 * realHeight
	 * @getter
	 * This function is a getter for the member realHeight.
	 * @return {Number} The actual height of the source of this texture.
	 */
	get realHeight()
	{
		return this._out.baseTexture.realHeight;
	}

	/**
	 * realWidth
	 * @getter
	 * This function is a getter for the member realWidth.
	 * @return {Number} The actual width of the source of this texture.
	 */
	get realWidth()
	{
		return this._out.baseTexture.realWidth;
	}

	/**
	 * resolution
	 * @getter
	 * This function is a getter for the member resolution.
	 * @return {Number} The resolution / device pixel ratio of the texture.
	 */
	get resolution()
	{
		return this._out.baseTexture.resolution;
	}

	/**
	 * resolution
	 * @setter
	 * This function is a setter for the member resolution.
	 * @param {Number}  resolution  The resolution / device pixel ratio of the texture.
	 */
	set resolution(resolution)
	{
		if ({}.toString.call(resolution) !== "[object Number]")
			throw new TypeError("resolution must be a number.");

		this._out.baseTexture.resolution = resolution;
	}

	/**
	 * scaleMode
	 * @getter
	 * This function is a getter for the member scaleMode.
	 * @return {Number} The scale mode to apply when scaling this texture.
	 */
	get scaleMode()
	{
		return this._out.baseTexture.scaleMode;
	}

	/**
	 * scaleMode
	 * @setter
	 * This function is a setter for the member scaleMode.
	 * @param {Number}  scaleMode  The scale mode to apply when scaling this texture.
	 */
	set scaleMode(scaleMode)
	{
		if ({}.toString.call(scaleMode) !== "[object Number]")
			throw new TypeError("scaleMode must be a number.");

		this._out.baseTexture.scaleMode = scaleMode;
	}

	/**
	 * wrapMode
	 * @getter
	 * This function is a getter for the member wrapMode.
	 * @return {Number} WebGL Texture wrap mode.
	 */
	get wrapMode()
	{
		return this._out.baseTexture.wrapMode;
	}

	/**
	 * wrapMode
	 * @setter
	 * This function is a setter for the member wrapMode.
	 * @param {Number}  wrapMode  WebGL Texture wrap mode.
	 */
	set wrapMode(wrapMode)
	{
		if ({}.toString.call(wrapMode) !== "[object Number]")
			throw new TypeError("wrapMode must be a number.");

		this._out.baseTexture.wrapMode = wrapMode;
	}

	/**
	 * sourceScale
	 * @getter
	 * This function is a getter for the member sourceScale.
	 * @return {Number} Scale for source image. Used with Svg images to scale them before rasterization.
	 */
	get sourceScale()
	{
		return this._out.baseTexture.sourceScale;
	}

	/**
	 * textureCacheIds
	 * @getter
	 * This function is a getter for the member textureCacheIds.
	 * @return {String[]}  The ids under which this Texture has been added to the texture cache.
	 */
	get textureCacheIds()
	{
		return this._out.textureCacheIds;
	}

	/**
	 * hasFrame
	 * This function is used in order to know if this Texture have any frame data assigned to it.
	 * @return {Boolean} Has a frame or not.
	 */
	hasFrame()
	{
		return !(this._out.noFrame);
	}

	/**
	 * requiresUpdate
	 * This function is used in order to signal that a texture has been updated.
	 * @param {Boolean}  value  The renderer need to update or not.
	 */
	requiresUpdate(value)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a boolean.");

		this._out.requiresUpdate = value;
	}

	/**
	 * validate
	 * This function is used in order to render the texture or not.
	 * @param {Boolean}  value  The renderer can render this texture or not.
	 */
	validate(value)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a boolean.");

		this._out.valid = value;
	}

	/**
	 * hasLoaded
	 * This function is used in order to know if the base texture has successfully loaded.
	 * @return {Boolean} Loaded or not.
	 */
	hasLoaded()
	{
		return this._out.baseTexture.hasLoaded;
	}

	/**
	 * isLoading
	 * This function is used in order to know if the source is currently loading.
	 * @return {Boolean} Loading or not.
	 */
	isLoading()
	{
		return this._out.baseTexture.isLoading;
	}

	/**
	 * mipmap
	 * This function is used in order to generate a mipmap of this texture.
	 * Use this function before using the texture.
	 * @param {Boolean}  value  A mipmap needs to be generated or not.
	 */
	mipmap(value)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a boolean.");

		this._out.baseTexture.mipmap = value;
	}

	/**
	 * premultiplyAlpha
	 * This function is used in order to pre-multiply the RGB channels by Alpha.
	 * All blend modes, and shaders written for default value. Change it on your own risk. WebGL only.
	 * @param {Boolean}  value  The RBG channels should be pre-multiplied or not.
	 */
	premultiplyAlpha(value)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a boolean.");

		this._out.baseTexture.premultipliedAlpha = value;
	}

	/**
	 * clone
	 * This function is used in order to clone this Texture.
	 * @return {Texture} A copy of this Texture.
	 */
	clone()
	{
		return new Texture(this._out);
	}

	/**
	 * updateMatrices
	 * This function is used in order to updates matrices.
	 * @param {Boolean}  forceUpdate  Matrices will be updated any case.
	 */
	updateMatrices(forceUpdate = false)
	{
		if ({}.toString.call(forceUpdate) !== "[object Boolean]")
			throw new TypeError("forceUpdate must be a boolean.");

		this._transform.update(forceUpdate);
	}

	/**
	 * updateOnRenderers
	 * This function is used in order to update the texture on all the webgl renderers
	 */
	updateOnRenderers()
	{
		this._out.baseTexture.update();
	}

	/**
	 * updateOnGPU
	 * This function is used in order to update this texture on the gpu.
	 */
	updateOnGPU()
	{
		this._out.update();
	}

	/**
	 * destroy
	 * This function is used in order to destroy this Texture.
	 * @param {Boolean} destroyBase Whether to destroy the base texture as well.
	 */
	destroy(destroyBase)
	{
		if ({}.toString.call(destroyBase) !== "[object Boolean]")
			throw new TypeError("destroyBase must be a boolean.");

		this._out.destroy(destroyBase);
	}

	/**
	 * dispose
	 * This function is used in order to free the texture from WebGL memory without destroying this texture object.
	 * This means you can still use the texture later which will upload it to GPU memory again.
	 */
	dispose()
	{
		this._out.baseTexture.dispose();
	}

	/**
	 * addToCache
	 * This function is used in order to add a texture to the global TextureCache. 
	 * This cache is shared across the whole PIXI object.
	 * @param {String}  id  The id that the texture will be stored against.
	 */
	addToCache(id)
	{
		if (!(typeof id === "string" && {}.toString.call(id) === "[object String]"))
			throw new TypeError("id must be a string.");

		this._cacheId = id;
		PIXI.Texture.addToCache(this._out, id);
	} 

	/**
	 * removeFromCache
	 * This function is used in order to remove the texture from the global TextureCache.
	 */
	removeFromCache()
	{
		PIXI.Texture.removeFromCache(this._out);
		this._cacheId = "";
	} 
};

module.exports = {
	Texture: Texture,
};