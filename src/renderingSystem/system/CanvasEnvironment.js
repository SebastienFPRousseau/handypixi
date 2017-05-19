"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| CanvasEnvironment
|--------------------------------------------------------------------------
|
| This file defines the CanvasEnvironment Object.
| This object build the main object of renderingSystem with Canvas for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./Environment.js"),
    Environment = _require.Environment;

var _require2 = require("./CanvasElement.js"),
    CanvasElement = _require2.CanvasElement;

var _require3 = require("./../config/Configuration.js"),
    Configuration = _require3.Configuration;

var _require4 = require("./../../displayObject/object2D/Object2D.js"),
    Object2D = _require4.Object2D;

var _require5 = require("./../../interactivity/ticker/Ticker.js"),
    Ticker = _require5.Ticker;

var _require6 = require("./../../interactivity/manager/EventManager.js"),
    EventManager = _require6.EventManager;

var CanvasEnvironment = function (_Environment) {
	_inherits(CanvasEnvironment, _Environment);

	/**
  * constructor
  * This function is used in order to build a CanvasEnvironment.
  * @param {HTMLCollection}  dom  The html DOM the 2D scene belongs. 
  * @param {Object}  options  Options for the environment.
  * @param {PIXI.CanvasRenderer}  dom  A Pixi object to use in the HandyPixi object.
  */
	function CanvasEnvironment(dom) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, CanvasEnvironment);

		if (!((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object" && {}.toString.call(options) === "[object Object]")) throw new TypeError("options must be an object.");

		var _this = _possibleConstructorReturn(this, (CanvasEnvironment.__proto__ || Object.getPrototypeOf(CanvasEnvironment)).call(this));

		if (dom instanceof PIXI.CanvasRenderer) {
			_this._renderer = dom;
			options.viewWidth = dom.width;
			options.viewHeight = dom.height;

			_this._canvas = new CanvasElement(_this._renderer.width, _this._renderer.height, _this._renderer.resolution);
			_this._canvas.out.canvas = _this._renderer.view;
			_this._canvas.out.context = _this._renderer.view.getContext('2d');
		} else {
			if (!(dom instanceof HTMLCollection || dom instanceof NodeList)) throw new TypeError("dom must be a HTMLCollection.");

			// Create the canvas renderer
			if (options.viewWidth === undefined) options.viewWidth = 800;

			if (options.viewHeight === undefined) options.viewHeight = 600;

			_this._renderer = new PIXI.CanvasRenderer(options.viewWidth, options.viewHeight, options);

			// Get the HTML canvas element
			options.view = _this._renderer.view;
			_this._canvas = new CanvasElement(options.viewWidth, options.viewHeight, options.resolution);
			_this._canvas.out.canvas = options.view;
			_this._canvas.out.context = options.view.getContext('2d');

			// Add the environment to DOM
			dom[0].appendChild(_this._canvas.canvas);
		}

		// Create the stage for Object2Ds
		_this._stage = new Object2D();
		_this._stage.out.width = options.viewWidth;
		_this._stage.out.height = options.viewHeight;

		// Create the usefull managers
		_this._prepare = new PIXI.prepare.canvas(_this._renderer);
		_this._config = new Configuration(options.maxMilliseconds, options.maxItemsPerFrame);
		_this._eventManager = new EventManager(_this._renderer);

		// Create a Ticker for render updates
		_this._ticker = null;

		if (options.tickerShared) {
			_this.ticker = Ticker.shared;
		} else {
			_this.ticker = new Ticker();
		}

		_this._ticker.start();
		return _this;
	}

	/**
  * ticker
  * @getter
  * This function is a getter for the member _ticker.
  * @return {Ticker} The ticker for render updates.
  */


	_createClass(CanvasEnvironment, [{
		key: "clear",


		/**
   * clear
   * This function is used in order to clear the canvas of renderer.
   * @param {String}  color  Clear the canvas with this color.
   */
		value: function clear(color) {
			if (!(typeof color === "string" && {}.toString.call(color) === "[object String]")) throw new TypeError("color must be a string.");

			this._renderer.clear(color);
		}
	}, {
		key: "ticker",
		get: function get() {
			return this._ticker;
		}

		/**
   * ticker
   * @setter
   * This function is a setter for the member _ticker.
   * @param {Ticker}  ticker  The ticker for render updates.
   */
		,
		set: function set(ticker) {
			if (!(ticker instanceof Ticker)) throw new TypeError("ticker must be a Ticker.");

			if (this._ticker) {
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

	}, {
		key: "refreshFlag",
		set: function set(value) {
			if ({}.toString.call(value) !== "[object Boolean]") throw new TypeError("value must be a boolean.");

			this._renderer.refresh = value;
		}

		/**
   * smooth
   * @getter
   * This function is a getter for the member _renderer.smoothProperty.
   * @return {String} The canvas smoothing property.
   */

	}, {
		key: "smooth",
		get: function get() {
			return this._renderer.smoothProperty;
		}

		/**
   * smooth
   * @setter
   * This function is a setter for the member _renderer.smoothProperty.
   * @param {String}  smooth  The canvas smoothing property.
   */
		,
		set: function set(smooth) {
			if (!(typeof smooth === "string" && {}.toString.call(smooth) === "[object String]")) throw new TypeError("smooth must be a string.");

			this._renderer.smoothProperty = smooth;
		}
	}]);

	return CanvasEnvironment;
}(Environment);

;

module.exports = {
	CanvasEnvironment: CanvasEnvironment
};