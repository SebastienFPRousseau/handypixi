/*
|--------------------------------------------------------------------------
| CanvasEnvironment
|--------------------------------------------------------------------------
|
| This file defines the CanvasEnvironment Object.
| This object build the main object of renderingSystem with Canvas for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { Environment } = require("./Environment.js");
const { CanvasElement } = require("./CanvasElement.js");
const { Configuration } = require("./../config/Configuration.js");
const { Object2D } = require("./../../displayObject/object2D/Object2D.js");
const { Ticker } = require("./../../interactivity/ticker/Ticker.js");
const { EventManager } = require("./../../interactivity/manager/EventManager.js");

class CanvasEnvironment extends Environment
{
	/**
	 * constructor
	 * This function is used in order to build a CanvasEnvironment.
	 * @param {HTMLCollection}  dom  The html DOM the 2D scene belongs. 
	 * @param {Object}  options  Options for the environment.
	 * @param {PIXI.CanvasRenderer}  dom  A Pixi object to use in the HandyPixi object.
	 */
	constructor(dom, options = {})
	{
		if (!(typeof options === "object" && {}.toString.call(options) === "[object Object]"))
			throw new TypeError("options must be an object.");

		super();

		if (dom instanceof PIXI.CanvasRenderer)
		{
			this._renderer = dom;
			options.viewWidth = dom.width;
			options.viewHeight = dom.height;

			this._canvas = new CanvasElement(this._renderer.width, this._renderer.height, this._renderer.resolution);
			this._canvas.out.canvas = this._renderer.view;
			this._canvas.out.context = this._renderer.view.getContext('2d');
		}
		else
		{
			if (!(dom instanceof HTMLCollection || dom instanceof NodeList))
				throw new TypeError("dom must be a HTMLCollection.");

			// Create the canvas renderer
			if (options.viewWidth === undefined)
				options.viewWidth = 800;

			if (options.viewHeight === undefined)
				options.viewHeight = 600;
		
			this._renderer = new PIXI.CanvasRenderer(options.viewWidth, options.viewHeight, options);
			
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
		this._prepare = new PIXI.prepare.canvas(this._renderer);
		this._config = new Configuration(options.maxMilliseconds, options.maxItemsPerFrame);
		this._eventManager = new EventManager(this._renderer);

		// Create a Ticker for render updates
		this._ticker = null;

		if (options.tickerShared)
		{
			this.ticker = Ticker.shared;
		}
		else
		{
			this.ticker = new Ticker();
		}

		this._ticker.start();
	}

	/**
	 * ticker
	 * @getter
	 * This function is a getter for the member _ticker.
	 * @return {Ticker} The ticker for render updates.
	 */
	get ticker()
	{
		return this._ticker;
	}

	/**
	 * ticker
	 * @setter
	 * This function is a setter for the member _ticker.
	 * @param {Ticker}  ticker  The ticker for render updates.
	 */
	set ticker(ticker)
    {
    	if (!(ticker instanceof Ticker))
			throw new TypeError("ticker must be a Ticker.");

        if (this._ticker)
        {
            this._ticker.remove(this.render, this);
        }

        this._ticker = ticker;
		ticker.add(this.render, this);
    }

    /**
     * refreshFlag
     * @setter
     * This function is a setter for the member _renderer.refresh.
     * @param {Boolean}  value  Flag controlling canvas refresh.
     */
    set refreshFlag(value)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a boolean.");

		this._renderer.refresh = value;
	}

    /**
     * smooth
     * @getter
     * This function is a getter for the member _renderer.smoothProperty.
     * @return {String} The canvas smoothing property.
     */
    get smooth()
	{
		return this._renderer.smoothProperty;
	}

    /**
     * smooth
     * @setter
     * This function is a setter for the member _renderer.smoothProperty.
     * @param {String}  smooth  The canvas smoothing property.
     */
    set smooth(smooth)
	{
		if (!(typeof smooth === "string" && {}.toString.call(smooth) === "[object String]"))
			throw new TypeError("smooth must be a string.");

		this._renderer.smoothProperty = smooth;
	}

    /**
     * clear
     * This function is used in order to clear the canvas of renderer.
     * @param {String}  color  Clear the canvas with this color.
     */
    clear(color)
	{
		if (!(typeof color === "string" && {}.toString.call(color) === "[object String]"))
			throw new TypeError("color must be a string.");

		this._renderer.clear(color);
	}
};

module.exports = {
	CanvasEnvironment: CanvasEnvironment,
};