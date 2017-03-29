/*
|--------------------------------------------------------------------------
| WebGLEnvironment
|--------------------------------------------------------------------------
|
| This file defines the WebGLEnvironment Object.
| This object build the main object of renderingSystem with WebGL for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Environment } = require("./Environment.js");
const { CanvasElement } = require("./CanvasElement.js");
const { WebGLConfiguration } = require("./../config/WebGLConfiguration.js");
const { Object2D } = require("./../../displayObject/object2D/Object2D.js");
const { Matrix } = require("./../../support/geometry/Matrix.js");
const { WebGLRenderTarget } = require("./WebGLRenderTarget.js");
const { ContainerRenderer } = require("./../manager/ContainerRenderer.js");

/**
 * instance
 * A premade instance of System. 
 * @type {WebGLEnvironment} 
 */
let instance = undefined;

class WebGLEnvironment extends Environment
{
	/**
	 * constructor
	 * This function is used in order to build a WebGLEnvironment.
	 * @param {HTMLCollection}  dom  The html DOM the 2D scene belongs. 
	 * @param {Object}  options  Options for the environment.
	 * @param {PIXI.WebGLRenderer}  dom  A Pixi object to use in the HandyPixi object.
	 */
	constructor(dom, options = {})
	{
		if (!(dom instanceof HTMLCollection))
			throw new TypeError("dom must be a HTMLCollection.");

		super();

		if (dom instanceof PIXI.WebGLRenderer)
		{
			this._renderer = dom;

			this._canvas = new CanvasElement(this._renderer.width, this._renderer.height, this._renderer.resolution);
			this._canvas.out.canvas = this._renderer.view;
			this._canvas.out.context = this._renderer.view.getContext('2d');
		}
		else
		{
			if (!(typeof options === "object" && {}.toString.call(options) === "[object Object]"))
				throw new TypeError("options must be an object.");

			// Create the WebGL renderer
			if (options.viewWidth === undefined)
				options.viewWidth = 800;

			if (options.viewHeight === undefined)
				options.viewHeight = 600;
		
			this._renderer = new PIXI.WebGLRenderer(options.viewWidth, options.viewHeight, options);
			
			// Get the HTML canvas element
			options.view = this._renderer.view;
			this._canvas = new CanvasElement(options.viewWidth, options.viewHeight, options.resolution);
			this._canvas.out.canvas = options.view;
			this._canvas.out.context = options.view.getContext('2d');

			// Add the environment to DOM
			dom[0].appendChild(this._canvas.canvas);
		}

		this._targets = [];
		this._targets.push(new WebGLRenderTarget(this._renderer._activeRenderTarget));

		// Create the stage for Object2Ds
		this._stage = new Object2D();
		this._stage.out.width = options.viewWidth;
		this._stage.out.height = options.viewHeight;

		// Create the usefull managers
		this._prepare = new PIXI.prepare.webgl(this._renderer);
		this._config = new WebGLConfiguration( this._renderer.state, options.maxMilliseconds, options.maxItemsPerFrame);
		this._eventManager = null;
	}

	/**
	* getInstance
	* @param {HTMLCollection}  dom  The html DOM the 2D scene belongs. 
	* @param {Object}  options  Options for the environment.
	*/
	static getInstance(dom = undefined, options = undefined)
	{
		if (instance === undefined)
		{
			if (dom === undefined)
				throw new TypeError("dom must be a HTMLCollection for the first call.");

        	instance = new WebGLEnvironment(dom, options);
		}
        
		return instance;
	}
	
	/**
	 * targets
	 * @getter
	 * This function is a getter for the member _targets.
	 * @return {WebGLRenderTarget[]} The render targets binded on this environment.
	 */
	get targets()
	{
		return this._targets;
	}

	/**
	 * bindTarget
	 * This function is used in order to bind a target to this environment and use it.
	 * @param {WebGLRenderTarget}  target  The render target to use.
	 */
	bindTarget(target)
	{
		if (!(target instanceof WebGLRenderTarget))
			throw new TypeError("target must be a WebGLRenderTarget.");

		this._renderer.bindRenderTarget(target.out);
		this._targets.push(target);
	}

	/**
	 * changeTarget
	 * This function is used in order to change the active render target.
	 * @param {Number}  id  The indice of the target to use.
	 */
	changeTarget(id)
	{
		if ({}.toString.call(id) !== "[object Number]")
			throw new TypeError("id must be a number.");

		if ( id >= this._targets.length || id < 0 )
			throw new RangeError("The given id is out of range of the targets array.");

		let swapper = this._targets[this._targets.length - 1];

		this._renderer.bindRenderTarget(this._targets[id].out);
		this._targets[this._targets.length-1] = this._targets[id];
		this._targets[id] = swapper;
	}

	/**
	 * createVao
	 * This function is used in order to creates a new VAO from this environment.
	 * @return {VertexArrayObject} The resulting VAO.
	 */
	createVao()
	{
		return this._renderer.createVao();
	}
	
	/**
	 * bindVao
	 * This function is used in order to changes the current Vao to the one given.
	 * @param {VertexArrayObject} vao The new VAO.
	 */
	bindVao(vao)
	{
		if (!(vao instanceof VertexArrayObject))
			throw new TypeError("vao must be a VertexArrayObject.");

		this._renderer.bindVao(vao);
	}

	/**
	 * flush
	 * This function is used in order to render anything that may be batched up. 
	 */
	flush()
	{
		this._renderer.flush();
	}
	
	/**
	 * reset
	 * This function is used in order to reset the configuration.
	 */
	reset()
	{
		this._renderer.reset();
		this._config = new WebGLConfiguration(this._renderer.state);
	}

	/**
	 * setTransform
	 * This function is used in order to set the transform of the active render target to the given matrix.
	 * @param {Matrix}  matrix  The transformation matrix to apply.
	 */
	setTransform(matrix)
	{
		if (!(matrix instanceof Matrix))
			throw new TypeError("matrix must be a Matrix.");

		this._renderer.setTransform(matrix.out);
	}

	/**
	 * clear
	 * This function is used in order to erases the active render target and fill the drawing area with a colour.
	 * @param {Number[4]}  color  Colour to clear the active target with, rgba value.
	 */
	clear(color = undefined)
	{
		this._targets[this._targets.length -1].clear(color);
	}
	
	/**
	 * addContainerRenderer
	 * This function is used in order to add a ContainerRenderer as a plugin for specifics containers.
	 * @param {ContainerRenderer} The container renderer to add. 
	 */
};

module.exports = {
	WebGLEnvironment: WebGLEnvironment,
};