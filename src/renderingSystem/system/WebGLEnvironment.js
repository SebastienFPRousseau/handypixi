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

		// Create the stage for Object2Ds
		this._stage = new Object2D();
		this._stage.out.width = options.viewWidth;
		this._stage.out.height = options.viewHeight;

		// Create the usefull managers
		this._prepare = new PIXI.prepare.webgl(this._renderer);
		this._config = new WebGLConfiguration( this._renderer.state, options.maxMilliseconds, options.maxItemsPerFrame);
		this._eventManager = null;
	}
}

module.exports = {
	WebGLEnvironment: WebGLEnvironment,
};