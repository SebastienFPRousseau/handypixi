/*
|--------------------------------------------------------------------------
| Environment
|--------------------------------------------------------------------------
|
| This file defines the Environment Object.
| This object is the abstract Environment for WebGLEnvironment and CanvasEnvironment.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

class Environment
{
	/**
	 * constructor
	 * This function is used in order to forbidden the built of an Environment.
	 */
	constructor()
	{
		if (this.constructor === Environment)
			throw new TypeError("Cannot construct Abstract instances like Environment directly.");

		this._renderer = null;
		this._canvas = null;
		this._config = null;
		this._prepare = null;
		this._stage = null;
		this._eventManager = null;
	}

	/**
	 * config
	 * @getter
	 * This function is a getter for the member _config.
	 * @return {Configuration} The configuration used by the renderer.
	 */
	get config()
	{
		return this._config;
	}

	/**
	 * canvas
	 * @getter
	 * This function is a getter for the member _canvas.
	 * @return {CanvasElement} The canvas element used by the renderer.
	 */
	get canvas()
	{
		return this._canvas;
	}

	/**
	 * stage
	 * @getter
	 * This function is a getter for the member _stage.
	 * @return {Object2D} The parent of all Object2D in the Environment.
	 */
	get stage()
	{
		return this._stage;
	}	

	/**
	 * eventManager
	 * @getter
	 * This function is a getter for the member _eventManager.
	 * @return {EventManager} A HandyPixi Object used by this object.
	 */
	get eventManager()
	{
		return this._eventManager;
	}	

	/**
	 * backgroundColor
	 * @getter
	 * This function is a getter for the member backgroundColor.
	 * @return {Number} The backgroundColor of the scene.
	 */
	get backgroundColor()
	{
		return this._renderer.backgroundColor;
	}

	/**
	 * backgroundColor
	 * @setter
	 * This function is a setter for the member backgroundColor.
	 * @param {Number}  color  The backgroundColor of the scene.
	 */
	set backgroundColor(color)
	{
		if ({}.toString.call(color) !== "[object Number]")
			throw new TypeError("color must be a number.");

		this._renderer.backgroundColor = color;
	}

	/**
	 * viewWidth
	 * @getter
	 * This function is a getter for the member viewWidth.
	 * @return {Number} The width of the view.
	 */
	get viewWidth()
	{
		return this._canvas.width;
	}

	/**
	 * viewWidth
	 * @setter
	 * This function is a setter for the member viewWidth.
	 * @param {Number}  width  The width of the view.
	 */
	set viewWidth(width)
	{
		this._renderer.resize(width, this.viewHeight/this.resolution);
		this._canvas.width = width * this.resolution;
		this._stage.out.width = this._canvas.width;
	}

	/**
	 * viewHeight
	 * @getter
	 * This function is a getter for the member viewHeight.
	 * @return {Number} The height of the view.
	 */
	get viewHeight()
	{
		return this._canvas.height;
	}

	/**
	 * viewHeight
	 * @setter
	 * This function is a setter for the member viewHeight.
	 * @param {Number}  height  The height of the view.
	 */
	set viewHeight(height)
	{
		this._renderer.resize(this.viewWidth/this.resolution, height);
		this._canvas.height = height * this.resolution;
		this._stage.out.height = this._canvas.height;
	}

	/**
	 * resolution
	 * @getter
	 * This function is a getter for the member resolution.
	 * @return {Number} The resolution of the view.
	 */
	get resolution()
	{
		return this._renderer.resolution;
	}

	/**
	 * resolution
	 * @setter
	 * This function is a setter for the member resolution.
	 * @param {Number}  resolution  The resolution of the view.
	 */
	set resolution(resolution)
	{
		if ({}.toString.call(resolution) !== "[object Number]")
			throw new TypeError("resolution must be a number.");

		this._renderer.resolution = resolution;
	}

	/**
	 * screen
	 * @getter
	 * This function is a getter for the member screen.
	 * @return {Bounds} Measurements of the renderer screen.
	 */
	get screen()
	{
		return new Bounds(this._renderer.screen);
	}

	/**
	 * autoResize
	 * This function is used in order to resize automatically the dimensions of canvas view from the renderer.
	 * @param {Boolean}  value  Whether or not the css dimensions of canvas view should be autoresized. 
	 */
	autoResize(value = true)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a boolean.");

		this._renderer.autoResize = value;
	}

	/**
	 * clearBeforeRender
	 * This function is used in order to clear the canvas before the new render pass.
	 * @param {Boolean}  value  Whether or not the canvas must be cleared before render again. 
	 */
	clearBeforeRender(value = true)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a boolean.");

		this._renderer.clearBeforeRender = value;
	}

	/**
	 * preserveDrawingBuffer
	 * This function is used in order to retain the contents of the stencil buffer after rendering.
	 * @param {Boolean}  value  Whether or not the stencil buffer must be retained after the render. 
	 */
	preserveDrawingBuffer(value = true)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a boolean.");

		this._renderer.preserveDrawingBuffer = value;
	}

	/**
	 * pixelsInterpolation
	 * This function is used in order to keep the colour interpolation when rendering.
	 * @param {Boolean}  value  Whether or not the x y values musn't be floored when rendering.
	 */
	pixelsInterpolation(value = true)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a boolean.");

		this._renderer.roundPixels = !value;
	}

	/**
	 * activateTransparency
	 * This function is used in order to allow the transparency on the view.
	 * @param {Boolean}  value  Whether or not the render view is transparent.
	 */
	activateTransparency(value = true)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a boolean.");

		this._renderer.transparent = value;
	}

	/**
	 * isWebGL
	 * This function is used in order to know if the environment is a WebGL environment.
	 * @return {Boolean}  Whether or not it is a webGL render type.
	 */
	isWebGL()
	{
		let value = false;

		if (this._renderer.type === PIXI.RENDERER_TYPE.WEBGL)
			value = true;

		return value;
	}

	/**
	 * destroy
	 * This function is used in order to destroy this environment.
	 * @param {Object}  options  Options for destruction.
	 */
	destroy(options)
	{
		if (!(typeof options === "object" && {}.toString.call(options) === "[object Object]"))
			throw new TypeError("options must be an object.");

		this._renderer.destroy(options.removeView);
		this._canvas = null;
	}

	/**
	 * resize
	 * This function is used in order to resize the view.
	 * @param {Number}  width  The new width of the view.
	 * @param {Number}  height  The new height of the view.
	 */
	resize(width, height)
	{
		this._canvas.resize(width, height);
	}
	
	/**
	 * getUsefulBlendModes
	 * This function is used in order to 
	 */
	
	/**
	 * addForGPUUploading
	 * This function is used in order to 
	 */

	/**
	 * uploadOnGPU
	 * This function is used in order to 
	 */

	/**
	 * register
	 * This function is used in order to 
	 */
	
	/**
	 * add
	 * This function is used in order to add some Object2D to stage. 
	 * @param {Object2D}  objs  One Object2D to add. 
	 * @param {Object2D[]}  objs  An array of Object2D to add.  
	 */
	add(objs)
	{
		if (Array.isArray(objs))
		{
			this._stage.addChildren(objs);
		}
		else
		{
			this._stage.addChild(objs);
		}
	}
	
	/**
	 * remove
	 * This function is used in order to remove some Object2D from stage.
	 * @param {Object2D}  objs  One Object2D to remove. 
	 * @param {Object2D[]}  objs  An array of Object2D to remove.  
	 */
	remove(objs)
	{
		if (Array.isArray(objs))
		{
			for (let i = 0, l = objs.length; i < l; i++)
				this._stage.removeChild(objs);
		}
		else
		{
			this._stage.removeChild(objs);
		}
	}

	/**
	 * removeAll
	 * This function is used in order to remove all Object2D from stage.
	 */
	removeAll()
	{
		this._stage.removeChildren();
	}
	
	/**
	 * render
	 * This function is used in order to 
	 */
	
	/**
	 * setBlendMode
	 * This function is used in order to 
	 */
	
	/**
	 * useTimeLimiter
	 * This function is used in order to 
	 */
	
	/**
	 * useCountLimiter
	 * This function is used in order to 
	 */
}

module.exports = {
	Environment: Environment,
};