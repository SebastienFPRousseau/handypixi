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

const { Tools } = require("./../../support/utils/Tools.js");
const { Matrix } = require("./../../support/geometry/Matrix.js");
const { Bounds } = require("./../../displayObject/bounds/Bounds.js");

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
	 * @return {Number[4]} The background colour of this render target, rgba value.
	 */
	get clearColor()
	{
		return this._out.clearColor;
	}

	/**
	 * clearColor
	 * @setter
	 * This function is a setter for the member clearColor.
	 * @param {Number[4]}  color  The background colour of this render target, rgba value.
	 */
	set clearColor(color)
	{
		if (!Array.isArray(color) || color.length != 4)
		{
			throw new TypeError("color must be an Array, its length must be four.");
		}
		else 
		{
			for(let i = 0, l = color.length; i < l; i++)
			{
				if ({}.toString.call(color[i]) !== "[object Number]")
					throw new TypeError("color must be an Array of Numbers.");
			}
		
			this._out.clearColor = color;
		}
	}

	/**
	 * defaultFrame
	 * @getter
	 * This function is a getter for the member defaultFrame.
	 * @return {glCore.GLBuffer} The stencil buffer stores masking data for the render target.
	 */
	get defaultFrame()
	{
		return this._out.defaultFrame;
	}

	/**
	 * filterData
	 * @getter
	 * This function is a getter for the member filterData.
	 * @return {Object[]} Stores filter data for the render target.
	 */
	get filterData()
	{
		return this._out.filterData;
	}

	/**
	 * frameBuffer
	 * @getter
	 * This function is a getter for the member frameBuffer.
	 * @return {glCore.GLFramebuffer} A frame buffer.
	 */
	get frameBuffer()
	{
		return this._out.frameBuffer;
	}

	/**
	 * frame
	 * @getter
	 * This function is a getter for the member frame.
	 * @return {Bounds} The frame of the render target.
	 */
	get frame()
	{
		return new Bounds(this._out.frame);
	}

	/**
	 * frame
	 * @setter
	 * This function is a setter for the member frame.
	 * @param {Bounds}  frame  The frame of the render target.
	 */
	set frame(frame)
	{
		if (!(frame instanceof Bounds))
			throw new TypeError("frame must be a Bounds.");

		this._out.frame = frame.out;
	}

	/**
	 * gl
	 * @getter
	 * This function is a getter for the member gl.
	 * @return {WebGLRenderingContext} The current WebGL drawing context.
	 */
	get gl()
	{
		return this._out.gl;
	}

	/**
	 * projectionMatrix
	 * @getter
	 * This function is a getter for the member projectionMatrix.
	 * @return {Matrix} The projection matrix.
	 */
	get projectionMatrix()
	{
		return new Matrix(this._out.projectionMatrix);
	}

	/**
	 * projectionMatrix
	 * @setter
	 * This function is a setter for the member projectionMatrix.
	 * @param {Matrix}  matrix  The projection matrix.
	 */
	set projectionMatrix(matrix)
	{
		if (!(matrix instanceof Matrix))
			throw new TypeError("matrix must be a Matrix.");

		this._out.projectionMatrix = matrix.out;
	}

	/**
	 * resolution
	 * @getter
	 * This function is a getter for the member resolution.
	 * @return {Number} The current resolution / device pixel ratio.
	 */
	get resolution()
	{
		return this._out.resolution;
	}

	/**
	 * resolution
	 * @setter
	 * This function is a setter for the member resolution.
	 * @param {Number}  resolution  The current resolution / device pixel ratio.
	 */
	set resolution(resolution)
	{
		if ({}.toString.call(resolution) !== "[object Number]")
			throw new TypeError("resolution must be a number.");

		this._out.resolution = resolution;
	}

	/**
	 * root
	 * @getter
	 * This function is a getter for the member root.
	 * @return {Boolean} Whether this object is the root element or not.
	 */
	get root()
	{
		return this._out.root;
	}

	/**
	 * scaleMode
	 * @getter
	 * This function is a getter for the member scaleMode.
	 * @return {Number} The scale mode.
	 */
	get scaleMode()
	{
		return this._out.scaleMode;
	}

	/**
	 * scaleMode
	 * @setter
	 * This function is a setter for the member scaleMode.
	 * @param {Number}  mode  The scale mode.
	 */
	set scaleMode(mode)
	{
		if ({}.toString.call(mode) !== "[object Number]")
			throw new TypeError("mode must be a number.");

		this._out.scaleMode = mode;
	}

	/**
	 * size
	 * @getter
	 * This function is a getter for the member size.
	 * @return {Bounds} The size of the object as a rectangle.
	 */
	get size()
	{
		return new Bounds(this._out.size);
	}

	/**
	 * size
	 * @setter
	 * This function is a setter for the member size.
	 * @param {Bounds}  size  The size of the object as a rectangle.
	 */
	set size(size)
	{
		if (!(size instanceof Bounds))
			throw new TypeError("size must be a Bounds.");

		this._out.size = size.out;
	}

	/**
	 * transform
	 * @getter
	 * This function is a getter for the member transform.
	 * @return {Matrix} The object's transform.
	 */
	get transform()
	{
		let transform = null;

		if (this._out.transform !== null)
			transform = new Matrix(this._out.transform);
		return transform;
	}

	/**
	 * transform
	 * @setter
	 * This function is a setter for the member transform.
	 * @param {Matrix}  transform  The object's transform.
	 */
	set transform(transform)
	{
		if (!(transform instanceof Matrix))
			throw new TypeError("transform must be a Matrix.");

		this._out.transform = transform.out;
	}

	/**
	 * stencilBuffer
	 * @getter
	 * This function is a getter for the member stencilBuffer.
	 * @return {glCore.GLBuffer} The stencil buffer stores masking data for the render target.
	 */
	get stencilBuffer()
	{
		return this._out.stencilBuffer;
	}

	/**
	 * stencilMaskStack
	 * @getter
	 * This function is a getter for the member stencilMaskStack.
	 * @return {Array.<PIXI.Graphics>} The data structure for the stencil masks.
	 */
	get stencilMaskStack()
	{
		return this._out.stencilMaskStack;
	}

	/**
	 * texture
	 * @getter
	 * This function is a getter for the member texture.
	 * @return {glCore.GLTexture} The texture.
	 */
	get texture()
	{
		return this._out.texture;
	}

	/**
	 * activate
	 * This function is used in order to bind the buffers and initialise the viewport.
	 */
	activate()
	{
		this._out.activate();
	}

	/**
	 * attachStencilBuffer
	 * This function is used in order to bind the stencil buffer.
	 */
	attachStencilBuffer()
	{
		this.attachStencilBuffer();
	}

	/**
	 * calculateProjection
	 * This function is used in order to update the projection matrix based on a projection frame.
	 * @param {Bounds}  destination  The destination frame.
	 * @param {Bounds}  source  The source frame.
	 */
	calculateProjection(destination, source)
	{
		if (!(destination instanceof Bounds))
			throw new TypeError("destination must be a Bounds.");

		if (!(source instanceof Bounds))
			throw new TypeError("source must be a Bounds.");

		this._out.calculateProjection(destination.out, source.out);
	}

	/**
	 * clear
	 * This function is used in order to clear the filter texture.
	 * @param {Number[4]}  color  Colour to clear the frameBuffer with, rgba value.
	 */
	clear(color = undefined)
	{
		if(color === undefined)
		{
			this._out.clear();
		}
		else if (!Array.isArray(color) || color.length != 4)
		{
			throw new TypeError("color must be an Array, its length must be four.");
		}
		else 
		{
			for(let i = 0, l = color.length; i < l; i++)
			{
				if ({}.toString.call(color[i]) !== "[object Number]")
					throw new TypeError("color must be an Array of Numbers.");
			}
		
			this._out.clear(color);
		}
	}

	/**
	 * destroy
	 * This function is used in order to destroy the render target.
	 */
	destroy()
	{
		this._out.destroy();
	}

	/**
	 * resize
	 * This function is used in order to resize the texture to the specified width and height.
	 * @param {Number}  width  The new width of the texture.
	 * @param {Number}  height  The new height of the texture.
	 */
	resize(width, height)
	{
		if ({}.toString.call(width) !== "[object Number]")
			throw new TypeError("width must be a number.");

		if ({}.toString.call(height) !== "[object Number]")
			throw new TypeError("height must be a number.");

		this._out.resize(width, height);
	}

	/**
	 * setFrame
	 * This function is used in order to set the frame of the render target.
	 * @param {Bounds}  destination  The destination frame.
	 * @param {Bounds}  source  The source frame.
	 */
	setFrame(destination, source)
	{
		if (!(destination instanceof Bounds))
			throw new TypeError("destination must be a Bounds.");

		if (!(source instanceof Bounds))
			throw new TypeError("source must be a Bounds.");

		this._out.setFrame(destination.out, source.out);
	}
};

module.exports = {
	WebGLRenderTarget: WebGLRenderTarget,
};