"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var _require = require("./../../displayObject/object2D/Object2D.js"),
    Object2D = _require.Object2D;

var _require2 = require("./../../displayObject/bounds/Bounds.js"),
    Bounds = _require2.Bounds;

var Environment = function () {
	/**
  * constructor
  * This function is used in order to forbidden the built of an Environment.
  */
	function Environment() {
		_classCallCheck(this, Environment);

		if (this.constructor === Environment) throw new TypeError("Cannot construct Abstract instances like Environment directly.");

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


	_createClass(Environment, [{
		key: "autoResize",


		/**
   * autoResize
   * This function is used in order to resize automatically the dimensions of canvas view from the renderer.
   * @param {Boolean}  value  Whether or not the css dimensions of canvas view should be autoresized. 
   */
		value: function autoResize() {
			var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

			if ({}.toString.call(value) !== "[object Boolean]") throw new TypeError("value must be a boolean.");

			this._renderer.autoResize = value;
		}

		/**
   * clearBeforeRender
   * This function is used in order to clear the canvas before the new render pass.
   * @param {Boolean}  value  Whether or not the canvas must be cleared before render again. 
   */

	}, {
		key: "clearBeforeRender",
		value: function clearBeforeRender() {
			var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

			if ({}.toString.call(value) !== "[object Boolean]") throw new TypeError("value must be a boolean.");

			this._renderer.clearBeforeRender = value;
		}

		/**
   * preserveDrawingBuffer
   * This function is used in order to retain the contents of the stencil buffer after rendering.
   * @param {Boolean}  value  Whether or not the stencil buffer must be retained after the render. 
   */

	}, {
		key: "preserveDrawingBuffer",
		value: function preserveDrawingBuffer() {
			var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

			if ({}.toString.call(value) !== "[object Boolean]") throw new TypeError("value must be a boolean.");

			this._renderer.preserveDrawingBuffer = value;
		}

		/**
   * pixelsInterpolation
   * This function is used in order to keep the colour interpolation when rendering.
   * @param {Boolean}  value  Whether or not the x y values musn't be floored when rendering.
   */

	}, {
		key: "pixelsInterpolation",
		value: function pixelsInterpolation() {
			var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

			if ({}.toString.call(value) !== "[object Boolean]") throw new TypeError("value must be a boolean.");

			this._renderer.roundPixels = !value;
		}

		/**
   * activateTransparency
   * This function is used in order to allow the transparency on the view.
   * @param {Boolean}  value  Whether or not the render view is transparent.
   */

	}, {
		key: "activateTransparency",
		value: function activateTransparency() {
			var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

			if ({}.toString.call(value) !== "[object Boolean]") throw new TypeError("value must be a boolean.");

			this._renderer.transparent = value;
		}

		/**
   * isWebGL
   * This function is used in order to know if the environment is a WebGL environment.
   * @return {Boolean}  Whether or not it is a webGL render type.
   */

	}, {
		key: "isWebGL",
		value: function isWebGL() {
			var value = false;

			if (this._renderer.type === PIXI.RENDERER_TYPE.WEBGL) value = true;

			return value;
		}

		/**
   * destroy
   * This function is used in order to destroy this environment.
   * @param {Object}  options  Options for destruction.
   */

	}, {
		key: "destroy",
		value: function destroy(options) {
			if (!((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object" && {}.toString.call(options) === "[object Object]")) throw new TypeError("options must be an object.");

			this._renderer.destroy(options.removeView);
			this._renderer = null;
			this._canvas = null;
			this._config = null;
			this._prepare.destroy();
			this._prepare = null;
			this._stage = null;
			this._eventManager = null;
		}

		/**
   * resize
   * This function is used in order to resize the view.
   * @param {Number}  width  The new width of the view.
   * @param {Number}  height  The new height of the view.
   */

	}, {
		key: "resize",
		value: function resize(width, height) {
			this._renderer.resize(width, height);
			this._canvas.resize(width * this.resolution, height * this.resolution);
			this._stage.out.height = this._canvas.height;
			this._stage.out.width = this._canvas.width;
		}

		/**
   * getUsefulBlendModes
   * This function is used in order to track he blend modes useful for this environment.
   * @return {Object} The useful blend modes.
   */

	}, {
		key: "getUsefulBlendModes",
		value: function getUsefulBlendModes() {
			return this._renderer.blendModes;
		}

		/**
   * addForGPUUploading
   * This function is used in order to manually add an item to the uploading queue.
   * @param {Object2D}  obj  The Object2D to add to the queue.
   */

	}, {
		key: "addForGPUUploading",
		value: function addForGPUUploading(obj) {
			if (!(obj instanceof Object2D)) throw new TypeError("obj must be a Object2D.");

			this._prepare.add(obj.out);
		}

		/**
   * uploadOnGPU
   * This function is used in order to upload all the textures and shapes to the GPU.
   * @param {Object2D}  obj  The object2D to search for items to upload.
   * @param {Function}  done  The callback when all queued uploads have completed.
   */

	}, {
		key: "uploadOnGPU",
		value: function uploadOnGPU() {
			var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
			var done = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

			if ({}.toString.call(done) !== "[object Function]") throw new TypeError("done must be a function.");

			if (obj === undefined) {
				this._prepare.upload(done);
			} else {
				if (!(obj instanceof Object2D)) throw new TypeError("obj must be a Object2D.");

				this._prepare.upload(obj.out, done);
			}
		}

		/**
   * register
   * This function is used in order to add hooks for finding and uploading items.
   * @param {Function}  addHook  Function call that takes two parameters: item:*, queue:Array 
   * It must return true if it was able to add item to the queue.
   * @param {Function}  uploadHook  Function call that takes two parameters: prepare:CanvasPrepare, item:*
   * It must return true if it was able to handle upload of item.
   */

	}, {
		key: "register",
		value: function register() {
			var addHook = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
			var uploadHook = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

			if (addHook !== undefined && {}.toString.call(addHook) !== "[object Function]") throw new TypeError("addHook must be a function.");

			if (uploadHook !== undefined && {}.toString.call(uploadHook) !== "[object Function]") throw new TypeError("uploadHook must be a function.");

			this._prepare.register(addHook, uploadHook);
		}

		/**
   * add
   * This function is used in order to add some Object2D to stage. 
   * @param {Object2D}  objs  One Object2D to add. 
   * @param {Object2D[]}  objs  An array of Object2D to add.  
   */

	}, {
		key: "add",
		value: function add(objs) {
			if (Array.isArray(objs)) {
				this._stage.addChildren(objs);
			} else {
				this._stage.addChild(objs);
			}
		}

		/**
   * remove
   * This function is used in order to remove some Object2D from stage.
   * @param {Object2D}  objs  One Object2D to remove. 
   * @param {Object2D[]}  objs  An array of Object2D to remove.  
   */

	}, {
		key: "remove",
		value: function remove(objs) {
			if (Array.isArray(objs)) {
				for (var i = 0, l = objs.length; i < l; i++) {
					this._stage.removeChild(objs[i]);
				}
			} else {
				this._stage.removeChild(objs);
			}
		}

		/**
   * removeAll
   * This function is used in order to remove all Object2D from stage.
   */

	}, {
		key: "removeAll",
		value: function removeAll() {
			this._stage.removeChildren();
		}

		/**
   * render
   * This function is used in order to render the scene to its view.
   */

	}, {
		key: "render",
		value: function render() {
			this._renderer.render(this._stage.out.out);
		}

		/**
   * setBlendMode
   * This function is used in order to set the blend mode of the renderer.
   * @param {Number}  mode  The new blend mode, see Settings.BLEND_MODES for valid values.
   */

	}, {
		key: "setBlendMode",
		value: function setBlendMode(mode) {
			if ({}.toString.call(mode) !== "[object Number]") throw new TypeError("mode must be a number.");

			this._renderer.setBlendMode(mode);
		}

		/**
   * useTimeLimiter
   * This function is used in order to set the limiter used by the prepare uploader from the configuration. 
   */

	}, {
		key: "useTimeLimiter",
		value: function useTimeLimiter() {
			this._prepare.limiter = this._config.timeLimiter;
		}

		/**
   * useCountLimiter
   * This function is used in order to set the limiter used by the prepare uploader from the configuration. 
   */

	}, {
		key: "useCountLimiter",
		value: function useCountLimiter() {
			this._prepare.limiter = this._config.countLimiter;
		}
	}, {
		key: "config",
		get: function get() {
			return this._config;
		}

		/**
   * canvas
   * @getter
   * This function is a getter for the member _canvas.
   * @return {CanvasElement} The canvas element used by the renderer.
   */

	}, {
		key: "canvas",
		get: function get() {
			return this._canvas;
		}

		/**
   * stage
   * @getter
   * This function is a getter for the member _stage.
   * @return {Object2D} The parent of all Object2D in the Environment.
   */

	}, {
		key: "stage",
		get: function get() {
			return this._stage;
		}

		/**
   * eventManager
   * @getter
   * This function is a getter for the member _eventManager.
   * @return {EventManager} A HandyPixi Object used by this object.
   */

	}, {
		key: "eventManager",
		get: function get() {
			return this._eventManager;
		}

		/**
   * backgroundColor
   * @getter
   * This function is a getter for the member backgroundColor.
   * @return {Number} The backgroundColor of the scene, hex value.
   */

	}, {
		key: "backgroundColor",
		get: function get() {
			return this._renderer.backgroundColor;
		}

		/**
   * backgroundColor
   * @setter
   * This function is a setter for the member backgroundColor.
   * @param {Number}  color  The backgroundColor of the scene, hex value.
   */
		,
		set: function set(color) {
			if ({}.toString.call(color) !== "[object Number]") throw new TypeError("color must be a number.");

			this._renderer.backgroundColor = color;
		}

		/**
   * viewWidth
   * @getter
   * This function is a getter for the member viewWidth.
   * @return {Number} The width of the view.
   */

	}, {
		key: "viewWidth",
		get: function get() {
			return this._canvas.width;
		}

		/**
   * viewWidth
   * @setter
   * This function is a setter for the member viewWidth.
   * @param {Number}  width  The width of the view.
   */
		,
		set: function set(width) {
			this._renderer.resize(width, this.viewHeight / this.resolution);
			this._canvas.width = width * this.resolution;
			this._stage.out.width = this._canvas.width;
		}

		/**
   * viewHeight
   * @getter
   * This function is a getter for the member viewHeight.
   * @return {Number} The height of the view.
   */

	}, {
		key: "viewHeight",
		get: function get() {
			return this._canvas.height;
		}

		/**
   * viewHeight
   * @setter
   * This function is a setter for the member viewHeight.
   * @param {Number}  height  The height of the view.
   */
		,
		set: function set(height) {
			this._renderer.resize(this.viewWidth / this.resolution, height);
			this._canvas.height = height * this.resolution;
			this._stage.out.height = this._canvas.height;
		}

		/**
   * resolution
   * @getter
   * This function is a getter for the member resolution.
   * @return {Number} The resolution of the view.
   */

	}, {
		key: "resolution",
		get: function get() {
			return this._renderer.resolution;
		}

		/**
   * resolution
   * @setter
   * This function is a setter for the member resolution.
   * @param {Number}  resolution  The resolution of the view.
   */
		,
		set: function set(resolution) {
			if ({}.toString.call(resolution) !== "[object Number]") throw new TypeError("resolution must be a number.");

			this._renderer.resolution = resolution;
		}

		/**
   * screen
   * @getter
   * This function is a getter for the member screen.
   * @return {Bounds} Measurements of the renderer screen.
   */

	}, {
		key: "screen",
		get: function get() {
			return new Bounds(this._renderer.screen);
		}
	}]);

	return Environment;
}();

;

module.exports = {
	Environment: Environment
};