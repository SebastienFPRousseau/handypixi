"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
|--------------------------------------------------------------------------
| Settings
|--------------------------------------------------------------------------
|
| This file defines the Settings static class.
| This class define many handy static methods and objects for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

/**
 * BLEND_MODES
 * Various blend modes supported by HandyPixi.
 * @type {Object} 
 * @property {Number} NORMAL
 * @property {Number} ADD
 * @property {Number} MULTIPLY
 * @property {Number} SCREEN
 * @property {Number} OVERLAY
 * @property {Number} DARKEN
 * @property {Number} LIGHTEN
 * @property {Number} COLOR_DODGE
 * @property {Number} COLOR_BURN
 * @property {Number} HARD_LIGHT
 * @property {Number} SOFT_LIGHT
 * @property {Number} DIFFERENCE
 * @property {Number} EXCLUSION
 * @property {Number} HUE
 * @property {Number} SATURATION
 * @property {Number} COLOR
 * @property {Number} LUMINOSITY
 */
var BLEND_MODES = PIXI.BLEND_MODES;

/**
 * CAN_UPLOAD_SAME_BUFFER
 * Can we upload the same buffer in a single frame ? 
 * @type {Boolean} 
 */
var CAN_UPLOAD_SAME_BUFFER = PIXI.CAN_UPLOAD_SAME_BUFFER;

/**
 * DATA_URI
 * Regexp for data URI. Based on: https://github.com/ragingwind/data-uri-regex.
 * @type {RegExp}
 * @type {String}
 */
var DATA_URI = PIXI.DATA_URI;

/**
 * DRAW_MODES
 * Various webgl draw modes.
 * @type {Object} 
 * @property {Number} POINTS
 * @property {Number} LINES
 * @property {Number} LINE_LOOP
 * @property {Number} LINE_STRIP
 * @property {Number} TRIANGLES
 * @property {Number} TRIANGLE_STRIP
 * @property {Number} TRIANGLE_FAN
 */
var DRAW_MODES = PIXI.DRAW_MODES;

/**
 * GC_MODES
 * The gc modes that are supported by HandyPixi.
 * @type {Object}
 * @property {Number} AUTO
 * @property {Number} MANUAL
 */
var GC_MODES = PIXI.GC_MODES;

/**
 * PRECISION
 * Specify float precision in shaders.
 * @type {Object}
 * @property {String} LOW
 * @property {String} MEDIUM
 * @property {String} HIGH
 */
var PRECISION = PIXI.PRECISION;

/**
 * RENDERER_TYPE
 * Identify the renderer type.
 * @type {Object}
 * @property {Number} UNKNOWN
 * @property {Number} WEBGL
 * @property {Number} CANVAS
 */
var RENDERER_TYPE = PIXI.RENDERER_TYPE;

/**
 * SCALE_MODES
 * The scale modes that are supported by HandyPixi.
 * @type {Object}
 * @property {Number} LINEAR
 * @property {Number} NEAREST
 */
var SCALE_MODES = PIXI.SCALE_MODES;

/**
 * SHAPES
 * Identify HandyPixi shapes.
 * @type {Object}
 * @property {Number} POLYGON
 * @property {Number} RECTANGLE
 * @property {Number} CIRCLE
 * @property {Number} ELLIPSE
 * @property {Number} ROUNDED RECTANGLE
 */
var SHAPES = PIXI.SHAPES;

/**
 * SVG_SIZE
 * Regexp for SVG size.
 * @type {RegExp}
 * @type {String}
 */
var SVG_SIZE = PIXI.SVG_SIZE;

/**
 * TEXT_GRADIENT
 * Define the type of gradient on text.
 * @type {Object}
 * @property {Number} LINEAR_VERTICAL
 * @property {Number} LINEAR_HORIZONTAL
 */
var TEXT_GRADIENT = PIXI.TEXT_GRADIENT;

/**
 * TRANSFORM_MODE
 * Specify the transform type.
 * @type {Object}
 * @property {Number} STATIC
 * @property {Number} DYNAMIC
 */
var TRANSFORM_MODE = PIXI.TRANSFORM_MODE;

/**
 * PIXI_VERSION
 * The current PIXI version.
 * @type {String}
 */
var PIXI_VERSION = PIXI.VERSION;

/**
 * WRAP_MODES
 * The wrap modes that are supported by pixi.
 * @type {Object}
 * @property {Number} CLAMP
 * @property {Number} REPEAT
 * @property {Number} MIRRORED_REPEAT
 */
var WRAP_MODES = PIXI.WRAP_MODES;

var Settings = function () {
	function Settings() {
		_classCallCheck(this, Settings);
	}

	_createClass(Settings, null, [{
		key: "autoDetectRenderer",


		/**
   * autoDetectRenderer
   * This function is used in order to automatically detect which renderer you should be using.
   * @param {Number}  width  The width of the renderers view.
   * @param {Number}  height The height of the renderers view.
   * @param {Object}  options  The optional renderer parameters.
   * @param {Boolean}  noWebGL  Prevents selection of WebGL renderer.
   * @return {PIXI.SystemRenderer} WebGL renderer if available, otherwise Canvas renderer.
   */
		value: function autoDetectRenderer() {
			var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 800;
			var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 600;
			var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
			var noWebGL = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

			if ({}.toString.call(width) !== "[object Number]") throw new TypeError("width must be a number.");

			if ({}.toString.call(height) !== "[object Number]") throw new TypeError("height must be a number.");

			if (!((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object" && {}.toString.call(options) === "[object Object]")) throw new TypeError("options must be an object.");

			if (options.view !== undefined && !(view instanceof HTMLCanvasElement)) throw new TypeError("options.view must be a HTMLCanvasElement.");

			if (options.transparent !== undefined && {}.toString.call(transparent) !== "[object Boolean]") throw new TypeError("options.transparent must be a boolean.");

			if (options.antialias !== undefined && {}.toString.call(antialias) !== "[object Boolean]") throw new TypeError("options.antialias must be a boolean.");

			if (options.preserveDrawingBuffer !== undefined && {}.toString.call(preserveDrawingBuffer) !== "[object Boolean]") throw new TypeError("options.preserveDrawingBuffer must be a boolean.");

			if (options.resolution !== undefined && {}.toString.call(resolution) !== "[object Number]") throw new TypeError("options.resolution must be a number.");

			if ({}.toString.call(noWebGL) !== "[object Boolean]") throw new TypeError("noWebGL must be a boolean.");

			return PIXI.autoDetectRenderer(width, height, options, noWebGL);
		}

		/**
   * FILTER_RESOLUTION
   * @getter
   * This function is a getter for the member FILTER_RESOLUTION.
   * @return {Number} Default filter resolution. 
   */

	}, {
		key: "BLEND_MODES",

		/**
   * BLEND_MODES
   * @getter
   */
		get: function get() {
			return BLEND_MODES;
		}

		/**
  * CAN_UPLOAD_SAME_BUFFER
  * @getter
  */

	}, {
		key: "CAN_UPLOAD_SAME_BUFFER",
		get: function get() {
			return CAN_UPLOAD_SAME_BUFFER;
		}

		/**
   * DATA_URI
   * @getter
   */

	}, {
		key: "DATA_URI",
		get: function get() {
			return DATA_URI;
		}

		/**
   * DRAW_MODES
   * @getter
   */

	}, {
		key: "DRAW_MODES",
		get: function get() {
			return DRAW_MODES;
		}

		/**
   * GC_MODES
   * @getter
   */

	}, {
		key: "GC_MODES",
		get: function get() {
			return GC_MODES;
		}

		/**
   * PRECISION
   * @getter
   */

	}, {
		key: "PRECISION",
		get: function get() {
			return PRECISION;
		}

		/**
   * RENDERER_TYPE
   * @getter
   */

	}, {
		key: "RENDERER_TYPE",
		get: function get() {
			return RENDERER_TYPE;
		}

		/**
   * SCALE_MODES
   * @getter
   */

	}, {
		key: "SCALE_MODES",
		get: function get() {
			return SCALE_MODES;
		}

		/**
   * SHAPES
   * @getter
   */

	}, {
		key: "SHAPES",
		get: function get() {
			return SHAPES;
		}

		/**
   * SVG_SIZE
   * @getter
   */

	}, {
		key: "SVG_SIZE",
		get: function get() {
			return SVG_SIZE;
		}

		/**
   * TEXT_GRADIENT
   * @getter
   */

	}, {
		key: "TEXT_GRADIENT",
		get: function get() {
			return TEXT_GRADIENT;
		}

		/**
   * TRANSFORM_MODE
   * @getter
   */

	}, {
		key: "TRANSFORM_MODE",


		/**
   * TRANSFORM_MODE
   * @getter
   * This function is a getter for the member TRANSFORM_MODE.
   * @return {TRANSFORM_MODE} Default filter resolution. 
   */
		get: function get() {
			return PIXI.settings.TRANSFORM_MODE;
		}

		/**
   * TRANSFORM_MODE
   * @setter
   * This function is a setter for the member TRANSFORM_MODE.
   * @param {TRANSFORM_MODE} mode Default filter resolution. 
   */
		,
		set: function set(mode) {
			if ({}.toString.call(mode) !== "[object Number]") throw new TypeError("mode must be a number.");

			PIXI.settings.TRANSFORM_MODE = mode;
		}

		/**
   * UPLOADS_PER_FRAME
   * @getter
   * This function is a getter for the member UPLOADS_PER_FRAME.
   * @return {Number} Default number of uploads per frame using prepare plugin. 
   */

	}, {
		key: "PIXI_VERSION",


		/**
   * PIXI_VERSION
   * @getter
   */
		get: function get() {
			return PIXI_VERSION;
		}

		/**
   * WRAP_MODES
   * @getter
   */

	}, {
		key: "WRAP_MODES",
		get: function get() {
			return WRAP_MODES;
		}
	}, {
		key: "FILTER_RESOLUTION",
		get: function get() {
			return PIXI.settings.FILTER_RESOLUTION;
		}

		/**
   * FILTER_RESOLUTION
   * @setter
   * This function is a setter for the member FILTER_RESOLUTION.
   * @param {Number} resolution Default filter resolution. 
   */
		,
		set: function set(resolution) {
			if ({}.toString.call(resolution) !== "[object Number]") throw new TypeError("resolution must be a number.");

			PIXI.settings.FILTER_RESOLUTION = resolution;
		}

		/**
   * GC_MAX_CHECK_COUNT
   * @getter
   * This function is a getter for the member GC_MAX_CHECK_COUNT.
   * @return {Number} Default Garbage Collection maximum check count. 
   */

	}, {
		key: "GC_MAX_CHECK_COUNT",
		get: function get() {
			return PIXI.settings.GC_MAX_CHECK_COUNT;
		}

		/**
   * GC_MAX_CHECK_COUNT
   * @setter
   * This function is a setter for the member GC_MAX_CHECK_COUNT.
   * @param {Number}  max Default Garbage Collection maximum check count. 
   */
		,
		set: function set(max) {
			if ({}.toString.call(max) !== "[object Number]") throw new TypeError("max must be a number.");

			PIXI.settings.GC_MAX_CHECK_COUNT = max;
		}

		/**
   * GC_MAX_IDLE
   * @getter
   * This function is a getter for the member GC_MAX_IDLE.
   * @return {Number} Default Garbage Collection max idle. 
   */

	}, {
		key: "GC_MAX_IDLE",
		get: function get() {
			return PIXI.settings.GC_MAX_IDLE;
		}

		/**
   * GC_MAX_IDLE
   * @setter
   * This function is a setter for the member GC_MAX_IDLE.
   * @param {Number} max Default filter resolutionDefault Garbage Collection max idle. 
   */
		,
		set: function set(max) {
			if ({}.toString.call(max) !== "[object Number]") throw new TypeError("max must be a number.");

			PIXI.settings.GC_MAX_IDLE = max;
		}

		/**
   * GC_MODE
   * @getter
   * This function is a getter for the member GC_MODE.
   * @return {GC_MODES} Default Garbage Collection mode. 
   */

	}, {
		key: "GC_MODE",
		get: function get() {
			return PIXI.settings.GC_MODE;
		}

		/**
   * GC_MODE
   * @setter
   * This function is a setter for the member GC_MODE.
   * @param {GC_MODES} mode Default Garbage Collection mode. 
   */
		,
		set: function set(mode) {
			if ({}.toString.call(mode) !== "[object Number]") throw new TypeError("mode must be a number.");

			PIXI.settings.GC_MODE = mode;
		}

		/**
   * MIPMAP_TEXTURES
   * @getter
   * This function is a getter for the member MIPMAP_TEXTURES.
   * @return {Boolean} If set to true WebGL will attempt make textures mimpaped by default. 
   */

	}, {
		key: "MIPMAP_TEXTURES",
		get: function get() {
			return PIXI.settings.MIPMAP_TEXTURES;
		}

		/**
   * MIPMAP_TEXTURES
   * @setter
   * This function is a setter for the member MIPMAP_TEXTURES.
   * @param {Boolean} value If set to true WebGL will attempt make textures mimpaped by default. 
   */
		,
		set: function set(value) {
			if ({}.toString.call(value) !== "[object Boolean]") throw new TypeError("value must be a boolean.");

			PIXI.settings.MIPMAP_TEXTURES = value;
		}

		/**
   * PRECISION_FRAGMENT
   * @getter
   * This function is a getter for the member PRECISION_FRAGMENT.
   * @return {PRECISION} Default specify float precision in fragment shader. 
   */

	}, {
		key: "PRECISION_FRAGMENT",
		get: function get() {
			return PIXI.settings.PRECISION_FRAGMENT;
		}

		/**
   * PRECISION_FRAGMENT
   * @setter
   * This function is a setter for the member PRECISION_FRAGMENT.
   * @param {PRECISION} precision Default specify float precision in fragment shader. 
   */
		,
		set: function set(precision) {
			if (!(typeof precision === "string" && {}.toString.call(precision) === "[object String]")) throw new TypeError("precision must be a string.");

			PIXI.settings.PRECISION_FRAGMENT = precision;
		}

		/**
   * PRECISION_VERTEX
   * @getter
   * This function is a getter for the member PRECISION_VERTEX.
   * @return {Number} Default specify float precision in vertex shader. 
   */

	}, {
		key: "PRECISION_VERTEX",
		get: function get() {
			return PIXI.settings.PRECISION_VERTEX;
		}

		/**
   * PRECISION_VERTEX
   * @setter
   * This function is a setter for the member PRECISION_VERTEX.
   * @param {Number} precision Default specify float precision in vertex shader. 
   */
		,
		set: function set(precision) {
			if (!(typeof precision === "string" && {}.toString.call(precision) === "[object String]")) throw new TypeError("precision must be a string.");

			PIXI.settings.PRECISION_VERTEX = precision;
		}

		/**
   * RENDER_OPTIONS
   * @getter
   * This function is a getter for the member RENDER_OPTIONS.
   * @return {Object} The default render options if none are supplied to renderer. 
   * @property {HTMLCanvasElement} view
   * @property {Number} resolution
   * @property {Boolean} antialias
   * @property {Boolean} forceFXAA
   * @property {Boolean} autoResize
   * @property {Boolean} transparent
   * @property {Number} backgroundColor
   * @property {Boolean} clearBeforeRender
   * @property {Boolean} preserveDrawingBuffer
   * @property {Boolean} roundPixels
   */

	}, {
		key: "RENDER_OPTIONS",
		get: function get() {
			return PIXI.settings.RENDER_OPTIONS;
		}

		/**
   * RENDER_OPTIONS
   * @setter
   * This function is a setter for the member RENDER_OPTIONS.
   * @param {Object} options The default render options if none are supplied to renderer. 
   */
		,
		set: function set(options) {
			if (!((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object" && {}.toString.call(options) === "[object Object]")) throw new TypeError("options must be an object.");

			if (!(options.view instanceof HTMLCanvasElement)) throw new TypeError("options.view must be a HTMLCanvasElement.");

			if ({}.toString.call(options.resolution) !== "[object Number]") throw new TypeError("options.resolution must be a number.");

			if ({}.toString.call(options.antialias) !== "[object Boolean]") throw new TypeError("options.antialias must be a boolean.");

			if ({}.toString.call(options.forceFXAA) !== "[object Boolean]") throw new TypeError("options.forceFXAA must be a boolean.");

			if ({}.toString.call(options.autoResize) !== "[object Boolean]") throw new TypeError("options.autoResize must be a boolean.");

			if ({}.toString.call(options.transparent) !== "[object Boolean]") throw new TypeError("options.transparent must be a boolean.");

			if ({}.toString.call(options.backgroundColor) !== "[object Number]") throw new TypeError("options.backgroundColor must be a number.");

			if ({}.toString.call(options.clearBeforeRender) !== "[object Boolean]") throw new TypeError("options.clearBeforeRender must be a boolean.");

			if ({}.toString.call(options.preserveDrawingBuffer) !== "[object Boolean]") throw new TypeError("options.preserveDrawingBuffer must be a boolean.");

			if ({}.toString.call(options.roundPixels) !== "[object Boolean]") throw new TypeError("options.roundPixels must be a boolean.");

			PIXI.settings.RENDER_OPTIONS = options;
		}

		/**
   * RESOLUTION
   * @getter
   * This function is a getter for the member RESOLUTION.
   * @return {Number} Default resolution / device pixel ratio of the renderer. 
   */

	}, {
		key: "RESOLUTION",
		get: function get() {
			return PIXI.settings.RESOLUTION;
		}

		/**
   * RESOLUTION
   * @setter
   * This function is a setter for the member RESOLUTION.
   * @param {Number} resolution Default resolution / device pixel ratio of the renderer. 
   */
		,
		set: function set(resolution) {
			if ({}.toString.call(resolution) !== "[object Number]") throw new TypeError("resolution must be a number.");

			PIXI.settings.RESOLUTION = resolution;
		}

		/**
   * RETINA_PREFIX
   * @getter
   * This function is a getter for the member RETINA_PREFIX.
   * @return {RegExp} The prefix that denotes a URL is for a retina asset. 
   */

	}, {
		key: "RETINA_PREFIX",
		get: function get() {
			return PIXI.settings.RETINA_PREFIX;
		}

		/**
   * RETINA_PREFIX
   * @setter
   * This function is a setter for the member RETINA_PREFIX.
   * @param {RegExp} prefix The prefix that denotes a URL is for a retina asset. 
   */
		,
		set: function set(prefix) {
			if (!(prefix instanceof RegExp)) throw new TypeError("prefix must be a RegExp.");

			PIXI.settings.RETINA_PREFIX = prefix;
		}

		/**
   * SCALE_MODE
   * @getter
   * This function is a getter for the member SCALE_MODE.
   * @return {SCALE_MODE} Default scale mode. 
   */

	}, {
		key: "SCALE_MODE",
		get: function get() {
			return PIXI.settings.SCALE_MODE;
		}

		/**
   * SCALE_MODE
   * @setter
   * This function is a setter for the member SCALE_MODE.
   * @param {SCALE_MODE} mode Default scale mode. 
   */
		,
		set: function set(mode) {
			if ({}.toString.call(mode) !== "[object Number]") throw new TypeError("mode must be a number.");

			PIXI.settings.SCALE_MODE = mode;
		}

		/**
   * SPRITE_BATCH_SIZE
   * @getter
   * This function is a getter for the member SPRITE_BATCH_SIZE.
   * @return {Number} The default sprite batch size. 
   */

	}, {
		key: "SPRITE_BATCH_SIZE",
		get: function get() {
			return PIXI.settings.SPRITE_BATCH_SIZE;
		}

		/**
   * SPRITE_BATCH_SIZE
   * @setter
   * This function is a setter for the member SPRITE_BATCH_SIZE.
   * @param {Number} size The default sprite batch size. 
   */
		,
		set: function set(size) {
			if ({}.toString.call(size) !== "[object Number]") throw new TypeError("size must be a number.");

			PIXI.settings.SPRITE_BATCH_SIZE = size;
		}

		/**
   * SPRITE_MAX_TEXTURES
   * @getter
   * This function is a getter for the member SPRITE_MAX_TEXTURES.
   * @return {Number} The maximum textures that this device supports. 
   */

	}, {
		key: "SPRITE_MAX_TEXTURES",
		get: function get() {
			return PIXI.settings.SPRITE_MAX_TEXTURES;
		}

		/**
   * SPRITE_MAX_TEXTURES
   * @setter
   * This function is a setter for the member SPRITE_MAX_TEXTURES.
   * @param {Number} max The maximum textures that this device supports. 
   */
		,
		set: function set(max) {
			if ({}.toString.call(max) !== "[object Number]") throw new TypeError("max must be a number.");

			PIXI.settings.SPRITE_MAX_TEXTURES = max;
		}

		/**
   * TARGET_FPMS
   * @getter
   * This function is a getter for the member TARGET_FPMS.
   * @return {Number} Target frames per millisecond. 
   */

	}, {
		key: "TARGET_FPMS",
		get: function get() {
			return PIXI.settings.TARGET_FPMS;
		}

		/**
   * TARGET_FPMS
   * @setter
   * This function is a setter for the member TARGET_FPMS.
   * @param {Number} tfpms Target frames per millisecond. 
   */
		,
		set: function set(tfpms) {
			if ({}.toString.call(tfpms) !== "[object Number]") throw new TypeError("tfpms must be a number.");

			PIXI.settings.TARGET_FPMS = tfpms;
		}
	}, {
		key: "UPLOADS_PER_FRAME",
		get: function get() {
			return PIXI.settings.UPLOADS_PER_FRAME;
		}

		/**
   * UPLOADS_PER_FRAME
   * @setter
   * This function is a setter for the member UPLOADS_PER_FRAME.
   * @param {Number} upf Default number of uploads per frame using prepare plugin. 
   */
		,
		set: function set(upf) {
			if ({}.toString.call(upf) !== "[object Number]") throw new TypeError("upf must be a number.");

			PIXI.settings.UPLOADS_PER_FRAME = upf;
		}

		/**
   * WRAP_MODE
   * @getter
   * This function is a getter for the member WRAP_MODE.
   * @return {WRAP_MODE} Default wrap mode. 
   */

	}, {
		key: "WRAP_MODE",
		get: function get() {
			return PIXI.settings.WRAP_MODE;
		}

		/**
   * WRAP_MODE
   * @setter
   * This function is a setter for the member WRAP_MODE.
   * @param {WRAP_MODE} mode Default wrap mode. 
   */
		,
		set: function set(mode) {
			if ({}.toString.call(mode) !== "[object Number]") throw new TypeError("mode must be a number.");

			PIXI.settings.WRAP_MODE = mode;
		}
	}]);

	return Settings;
}();

;

module.exports = {
	Settings: Settings
};