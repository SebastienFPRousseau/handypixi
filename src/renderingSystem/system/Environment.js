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
		if (this.constructor.name === "Environment")
			throw new TypeError("Cannot construct Abstract instances like Environment directly.");

		this._renderer = null;
		this._canvas = null;
		this._prepare = null;
		this._stage = null;
		this._eventManager = null;
	}

	/**
	 * renderer
	 * @getter
	 * This function is a getter for the member _renderer.
	 * @return {PIXI.SystemRenderer} A PIXI Object used by this object.
	 */
	get renderer()
	{
		return this._renderer;
	}

	/**
	 * canvas
	 * @getter
	 * This function is a getter for the member _canvas.
	 * @return {CanvasElement} A HandyPixi Object used by this object.
	 */
	get canvas()
	{
		return this._canvas;
	}

	/**
	 * prepare
	 * @getter
	 * This function is a getter for the member _prepare.
	 * @return {PIXI.BasePrepare} A PIXI Object used by this object.
	 */
	get prepare()
	{
		return this._prepare;
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
	 * backGroundColor
	 * @getter
	 * This function is a getter for the member backGroundColor.
	 * @return {Number} The backGroundColor of the scene.
	 */
	
	/**
	 * backGroundColor
	 * @setter
	 * This function is a setter for the member backGroundColor.
	 * @param {Number}  color  The backGroundColor of the scene.
	 */
	
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
		this._canvas.width = width;
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
		this._canvas.height = height;
	}

	/**
	 * resolution
	 * @getter
	 * This function is a getter for the member resolution.
	 * @return {Number} The resolution of the view.
	 */
	
	/**
	 * resolution
	 * @setter
	 * This function is a setter for the member resolution.
	 * @param {Number}  resolution  The resolution of the view.
	 */
	
	/**
	 * autoResize
	 * This function is used in order to 
	 */
	
	/**
	 * clearBeforeRender
	 * This function is used in order to 
	 */
	
	/**
	 * preserveDrawingBuffer
	 * This function is used in order to 
	 */
	
	/**
	 * pixelsInterpolation
	 * This function is used in order to 
	 */
	
	/**
	 * activateTransparency
	 * This function is used in order to 
	 */
	
	/**
	 * isWebGL
	 * This function is used in order to 
	 */
	
	/**
	 * destroy
	 * This function is used in order to destroy this environment.
	 */
	destroy()
	{
		this._canvas.destroy();
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