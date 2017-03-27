/*
|--------------------------------------------------------------------------
| WebGLRenderTarget
|--------------------------------------------------------------------------
|
| This file defines the WebGLRenderTarget Object.
| This object build a PIXI.RenderTarget for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

class WebGLRenderTarget
{
	/**
	 * constructor
	 * This function is used in order to build a WebGLRenderTarget.
	 * @param {WebGLRenderingContext}  context  The current WebGL drawing context.
	 * @param {Object}  options  Sizes, modes, resolution... of the target.
	 * @param {PIXI.RenderTarget}   context  The Pixi object to build the HandyPixi object.
	 */
	constructor(context, options = {})
	{
		if (!(typeof options === "object" && {}.toString.call(options) === "[object Object]"))
			throw new TypeError("options must be an object.");

		if (context instanceof PIXI.RenderTarget)
		{
			this._out = context;
		}
		else
		{
			if (!(context instanceof WebGLRenderingContext))
				throw new TypeError("context must be a WebGLRenderingContext.");

			this._out = new PIXI.RenderTarget(context, options.width, options.height, options.scaleMode, options.resolution, options.root);
		}
	}


	/**
	 * out
	 * @getter
	 * This function is a getter for the member _out.
	 * @return  {PIXI.RenderTarget} The PIXI Object used by this object. 
	 */
	get out()
	{
		return this._out;
	}

	/**
	 * clearColor
	 * @getter
	 * This function is a getter for the member clearColor.
	 * @return {Number} The background colour of this render target, hex value.
	 */
	
	/**
	 * clearColor
	 * @setter
	 * This function is a setter for the member clearColor.
	 * @param {Number}  color  The background colour of this render target, hex value.
	 */
	
	/**
	 * defaultFrame
	 * @getter
	 * This function is a getter for the member defaultFrame.
	 * @return {glCore.GLBuffer} The stencil buffer stores masking data for the render target.
	 */
	
	/**
	 * filterData
	 * @getter
	 * This function is a getter for the member filterData.
	 * @return {Object[]} Stores filter data for the render target.
	 */
	
	/**
	 * frameBuffer
	 * @getter
	 * This function is a getter for the member frameBuffer.
	 * @return {glCore.GLFramebuffer} A frame buffer.
	 */
	
	/**
	 * frame
	 * @getter
	 * This function is a getter for the member frame.
	 * @return {Bounds} The frame of the render target.
	 */
	
	/**
	 * frame
	 * @setter
	 * This function is a setter for the member frame.
	 * @param {Bounds}  frame  The frame of the render target.
	 */
	
	/**
	 * gl
	 * @getter
	 * This function is a getter for the member gl.
	 * @return {WebGLRenderingContext} The current WebGL drawing context.
	 */
	
	/**
	 * projectionMatrix
	 * @getter
	 * This function is a getter for the member projectionMatrix.
	 * @return {Matrix} The projection matrix.
	 */
	
	/**
	 * projectionMatrix
	 * @setter
	 * This function is a setter for the member projectionMatrix.
	 * @param {Matrix}  matrix  The projection matrix.
	 */
	
	/**
	 * resolution
	 * @getter
	 * This function is a getter for the member resolution.
	 * @return {Number} The current resolution / device pixel ratio.
	 */
	
	/**
	 * resolution
	 * @setter
	 * This function is a setter for the member resolution.
	 * @param {Number}  resolution  The current resolution / device pixel ratio.
	 */
	
	/**
	 * root
	 * @getter
	 * This function is a getter for the member root.
	 * @return {Boolean} Whether this object is the root element or not.
	 */
	
	/**
	 * scaleMode
	 * @getter
	 * This function is a getter for the member scaleMode.
	 * @return {Number} The scale mode.
	 */
	
	/**
	 * scaleMode
	 * @setter
	 * This function is a setter for the member scaleMode.
	 * @param {Number}  mode  The scale mode.
	 */
	
	/**
	 * size
	 * @getter
	 * This function is a getter for the member size.
	 * @return {Bounds} The size of the object as a rectangle.
	 */
	
	/**
	 * size
	 * @setter
	 * This function is a setter for the member size.
	 * @param {Bounds}  size  The size of the object as a rectangle.
	 */
	
	/**
	 * transform
	 * @getter
	 * This function is a getter for the member transform.
	 * @return {Matrix} The object's transform.
	 */
	
	/**
	 * transform
	 * @setter
	 * This function is a setter for the member transform.
	 * @param {Matrix}  color  The object's transform.
	 */
	
	/**
	 * stencilBuffer
	 * @getter
	 * This function is a getter for the member stencilBuffer.
	 * @return {glCore.GLBuffer} The stencil buffer stores masking data for the render target.
	 */
	
	/**
	 * stencilMaskStack
	 * @getter
	 * This function is a getter for the member stencilMaskStack.
	 * @return {Array.<PIXI.Graphics>} The data structure for the stencil masks.
	 */
	
	/**
	 * texture
	 * @getter
	 * This function is a getter for the member texture.
	 * @return {glCore.GLTexture} The texture.
	 */
	
	/**
	 * activate
	 * This function is used in order to bind the buffers and initialise the viewport.
	 */
	
	/**
	 * attachStencilBuffer
	 * This function is used in order to bind the stencil buffer.
	 */
	
	/**
	 * calculateProjection
	 * This function is used in order to update the projection matrix based on a projection frame.
	 * @param {Bounds}  destination  The destination frame.
	 * @param {Bounds}  source  The source frame.
	 */
	
	/**
	 * clear
	 * This function is used in order to clear the filter texture.
	 * @param {Number}  color  Colour to clear the frameBuffer with, hex value.
	 */
	
	/**
	 * destroy
	 * This function is used in order to destroy the render target.
	 */
	
	/**
	 * resize
	 * This function is used in order to resize the texture to the specified width and height.
	 * @param {Number}  width  The new width of the texture.
	 * @param {Number}  height  The new height of the texture.
	 */
}

module.exports = {
	WebGLRenderTarget: WebGLRenderTarget,
};