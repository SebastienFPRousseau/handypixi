"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var _require = require("./Environment.js"),
    Environment = _require.Environment;

var _require2 = require("./CanvasElement.js"),
    CanvasElement = _require2.CanvasElement;

var _require3 = require("./../config/WebGLConfiguration.js"),
    WebGLConfiguration = _require3.WebGLConfiguration;

var _require4 = require("./../../displayObject/object2D/Object2D.js"),
    Object2D = _require4.Object2D;

var _require5 = require("./../../support/geometry/Matrix.js"),
    Matrix = _require5.Matrix;

var _require6 = require("./WebGLRenderTarget.js"),
    WebGLRenderTarget = _require6.WebGLRenderTarget;

var _require7 = require("./../manager/ContainerRenderer.js"),
    ContainerRenderer = _require7.ContainerRenderer;

var _require8 = require("./../../interactivity/ticker/Ticker.js"),
    Ticker = _require8.Ticker;

var _require9 = require("./../../interactivity/manager/EventManager.js"),
    EventManager = _require9.EventManager;

var WebGLEnvironment = function (_Environment) {
	_inherits(WebGLEnvironment, _Environment);

	/**
  * constructor
  * This function is used in order to build a WebGLEnvironment.
  * @param {HTMLCollection}  dom  The html DOM the 2D scene belongs. 
  * @param {Object}  options  Options for the environment.
  * @param {PIXI.WebGLRenderer}  dom  A Pixi object to use in the HandyPixi object.
  */
	function WebGLEnvironment(dom) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, WebGLEnvironment);

		if (!((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object" && {}.toString.call(options) === "[object Object]")) throw new TypeError("options must be an object.");

		var _this = _possibleConstructorReturn(this, (WebGLEnvironment.__proto__ || Object.getPrototypeOf(WebGLEnvironment)).call(this));

		if (dom instanceof PIXI.WebGLRenderer) {
			_this._renderer = dom;
			options.viewWidth = dom.width;
			options.viewHeight = dom.height;

			_this._canvas = new CanvasElement(_this._renderer.width, _this._renderer.height, _this._renderer.resolution);
			_this._canvas.out.canvas = _this._renderer.view;
			_this._canvas.out.context = _this._renderer.view.getContext('2d');
		} else {
			if (!(dom instanceof HTMLCollection || dom instanceof NodeList)) throw new TypeError("dom must be a HTMLCollection or a NodeList.");

			// Create the WebGL renderer
			if (options.viewWidth === undefined) options.viewWidth = 800;

			if (options.viewHeight === undefined) options.viewHeight = 600;

			_this._renderer = new PIXI.WebGLRenderer(options.viewWidth, options.viewHeight, options);

			// Get the HTML canvas element
			options.view = _this._renderer.view;
			_this._canvas = new CanvasElement(options.viewWidth, options.viewHeight, options.resolution);
			_this._canvas.out.canvas = options.view;
			_this._canvas.out.context = options.view.getContext('2d');

			// Add the environment to DOM
			dom[0].appendChild(_this._canvas.canvas);
		}

		_this._targets = [];
		_this._targets.push(new WebGLRenderTarget(_this._renderer._activeRenderTarget));

		// Create the stage for Object2Ds
		_this._stage = new Object2D();
		_this._stage.out.width = options.viewWidth;
		_this._stage.out.height = options.viewHeight;

		// Create the usefull managers
		_this._prepare = new PIXI.prepare.webgl(_this._renderer);
		_this._config = new WebGLConfiguration(_this._renderer.state, options.maxMilliseconds, options.maxItemsPerFrame);
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
  * eventDispatcher
  * @getter
  * This function is a getter for the member dispatcher of the _eventManager.
  * @return {Dispatcher} The render targets binded on this environment.
  */


	_createClass(WebGLEnvironment, [{
		key: "bindTarget",


		/**
   * bindTarget
   * This function is used in order to bind a target to this environment and use it.
   * @param {WebGLRenderTarget}  target  The render target to use.
   */
		value: function bindTarget(target) {
			if (!(target instanceof WebGLRenderTarget)) throw new TypeError("target must be a WebGLRenderTarget.");

			this._renderer.bindRenderTarget(target.out);
			this._targets.push(target);
		}

		/**
   * changeTarget
   * This function is used in order to change the active render target.
   * @param {Number}  id  The indice of the target to use.
   */

	}, {
		key: "changeTarget",
		value: function changeTarget(id) {
			if ({}.toString.call(id) !== "[object Number]") throw new TypeError("id must be a number.");

			if (id >= this._targets.length || id < 0) throw new RangeError("The given id is out of range of the targets array.");

			var swapper = this._targets[this._targets.length - 1];

			this._renderer.bindRenderTarget(this._targets[id].out);
			this._targets[this._targets.length - 1] = this._targets[id];
			this._targets[id] = swapper;
		}

		/**
   * createVao
   * This function is used in order to creates a new VAO from this environment.
   * @return {VertexArrayObject} The resulting VAO.
   */

	}, {
		key: "createVao",
		value: function createVao() {
			return this._renderer.createVao();
		}

		/**
   * bindVao
   * This function is used in order to changes the current Vao to the one given.
   * @param {VertexArrayObject} vao The new VAO.
   */

	}, {
		key: "bindVao",
		value: function bindVao(vao) {
			this._renderer.bindVao(vao);
		}

		/**
   * flush
   * This function is used in order to render anything that may be batched up. 
   */

	}, {
		key: "flush",
		value: function flush() {
			this._renderer.flush();
		}

		/**
   * reset
   * This function is used in order to reset the configuration.
   */

	}, {
		key: "reset",
		value: function reset() {
			this._renderer.reset();
			this._config = new WebGLConfiguration(this._renderer.state);
		}

		/**
   * setTransform
   * This function is used in order to set the transform of the active render target to the given matrix.
   * @param {Matrix}  matrix  The transformation matrix to apply.
   */

	}, {
		key: "setTransform",
		value: function setTransform(matrix) {
			if (!(matrix instanceof Matrix)) throw new TypeError("matrix must be a Matrix.");

			this._renderer.setTransform(matrix.out);
		}

		/**
   * clear
   * This function is used in order to erases the active render target and fill the drawing area with a colour.
   * @param {Number[4]}  color  Colour to clear the active target with, rgba value.
   */

	}, {
		key: "clear",
		value: function clear() {
			var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			this._targets[this._targets.length - 1].clear(color);
		}

		/**
   * destroy
   * This function is used in order to destroy this environment.
   * @param {Object}  options  Options for destruction.
   */

	}, {
		key: "destroy",
		value: function destroy(options) {
			for (var i = 0, l = this._targets.length; i < l; i++) {
				this._targets[i].destroy();
			}this._targets = null;
			this._ticker.out.destroy();
			this._ticker = null;

			_get(WebGLEnvironment.prototype.__proto__ || Object.getPrototypeOf(WebGLEnvironment.prototype), "destroy", this).call(this, options);
		}

		/**
   * registerContainerRenderer
   * This function is used in order to register a ContainerRenderer as a plugin for specifics containers.
   * @param {String}  pluginName  The plugin name of the container renderer to register.
   * @param {ContainerRenderer}  renderer  The container renderer class to register. 
   */

	}, {
		key: "eventDispatcher",
		get: function get() {
			return this._eventManager.dispatcher;
		}

		/**
   * targets
   * @getter
   * This function is a getter for the member _targets.
   * @return {WebGLRenderTarget[]} The render targets binded on this environment.
   */

	}, {
		key: "targets",
		get: function get() {
			return this._targets;
		}

		/**
   * ticker
   * @getter
   * This function is a getter for the member _ticker.
   * @return {Ticker} The ticker for render updates.
   */

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
	}], [{
		key: "registerContainerRenderer",
		value: function registerContainerRenderer(pluginName, renderer) {
			if (!(typeof pluginName === "string" && {}.toString.call(pluginName) === "[object String]")) throw new TypeError("pluginName must be a string.");

			if (!(renderer.prototype === ContainerRenderer.prototype)) throw new TypeError("renderer must be a class which inherits of ContainerRenderer.");

			PIXI.WebGLRenderer.registerPlugin(pluginName, renderer);
		}
	}]);

	return WebGLEnvironment;
}(Environment);

;

module.exports = {
	WebGLEnvironment: WebGLEnvironment
};