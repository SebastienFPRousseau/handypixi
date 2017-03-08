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
const BLEND_MODES = PIXI.BLEND_MODES;

/**
 * CAN_UPLOAD_SAME_BUFFER
 * Can we upload the same buffer in a single frame ? 
 * @type {Boolean} 
 */
const CAN_UPLOAD_SAME_BUFFER = PIXI.CAN_UPLOAD_SAME_BUFFER;

/**
 * DATA_URI
 * Regexp for data URI. Based on: https://github.com/ragingwind/data-uri-regex.
 * @type {RegExp}
 * @type {String}
 */
const DATA_URI = PIXI.DATA_URI;

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
const DRAW_MODES = PIXI.DRAW_MODES;

/**
 * GC_MODES
 * The gc modes that are supported by HandyPixi.
 * @type {Object}
 * @property {Number} AUTO
 * @property {Number} MANUAL
 */
const GC_MODES = PIXI.GC_MODES;

/**
 * PRECISION
 * Specify float precision in shaders.
 * @type {Object}
 * @property {String} LOW
 * @property {String} MEDIUM
 * @property {String} HIGH
 */
const PRECISION = PIXI.PRECISION;

/**
 * RENDERER_TYPE
 * Identify the renderer type.
 * @type {Object}
 * @property {Number} UNKNOWN
 * @property {Number} WEBGL
 * @property {Number} CANVAS
 */
const RENDERER_TYPE = PIXI.RENDERER_TYPE;

/**
 * SCALE_MODES
 * The scale modes that are supported by HandyPixi.
 * @type {Object}
 * @property {Number} LINEAR
 * @property {Number} NEAREST
 */
const SCALE_MODES = PIXI.SCALE_MODES;

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
const SHAPES = PIXI.SHAPES;

/**
 * SVG_SIZE
 * Regexp for SVG size.
 * @type {RegExp}
 * @type {String}
 */
const SVG_SIZE = PIXI.SVG_SIZE;

/**
 * TEXT_GRADIENT
 * Define the type of gradient on text.
 * @type {Object}
 * @property {Number} LINEAR_VERTICAL
 * @property {Number} LINEAR_HORIZONTAL
 */
const TEXT_GRADIENT = PIXI.TEXT_GRADIENT;

/**
 * TRANSFORM_MODE
 * Specify the transform type.
 * @type {Object}
 * @property {Number} STATIC
 * @property {Number} DYNAMIC
 */
const TRANSFORM_MODE = PIXI.TRANSFORM_MODE;

/**
 * PIXI_VERSION
 * The current PIXI version.
 * @type {String}
 */
const PIXI_VERSION = PIXI.VERSION;

/**
 * WRAP_MODES
 * The wrap modes that are supported by pixi.
 * @type {Object}
 * @property {Number} CLAMP
 * @property {Number} REPEAT
 * @property {Number} MIRRORED_REPEAT
 */
const WRAP_MODES = PIXI.WRAP_MODES;

class Settings
{
	/**
	 * BLEND_MODES
	 * @getter
	 */
	static get BLEND_MODES()
	{
		return BLEND_MODES;
	}

	/**
	* CAN_UPLOAD_SAME_BUFFER
	* @getter
	*/
	static get CAN_UPLOAD_SAME_BUFFER()
	{
		return CAN_UPLOAD_SAME_BUFFER;
	}

	/**
	 * DATA_URI
	 * @getter
	 */
	static get DATA_URI()
	{
		return DATA_URI;
	}

	/**
	 * DRAW_MODES
	 * @getter
	 */
	static get DRAW_MODES()
	{
		return DRAW_MODES;
	}

	/**
	 * GC_MODES
	 * @getter
	 */
	static get GC_MODES()
	{
		return GC_MODES;
	}

	/**
	 * PRECISION
	 * @getter
	 */
	static get PRECISION()
	{
		return PRECISION;
	}

	/**
	 * RENDERER_TYPE
	 * @getter
	 */
	static get RENDERER_TYPE()
	{
		return RENDERER_TYPE;
	}

	/**
	 * SCALE_MODES
	 * @getter
	 */
	static get SCALE_MODES()
	{
		return SCALE_MODES;
	}

	/**
	 * SHAPES
	 * @getter
	 */
	static get SHAPES()
	{
		return SHAPES;
	}

	/**
	 * SVG_SIZE
	 * @getter
	 */
	static get SVG_SIZE()
	{
		return SVG_SIZE;
	}

	/**
	 * TEXT_GRADIENT
	 * @getter
	 */
	static get TEXT_GRADIENT()
	{
		return TEXT_GRADIENT;
	}

	/**
	 * TRANSFORM_MODE
	 * @getter
	 */
	static get TRANSFORM_MODE()
	{
		return TRANSFORM_MODE;
	}

	/**
	 * PIXI_VERSION
	 * @getter
	 */
	static get PIXI_VERSION()
	{
		return PIXI_VERSION;
	}

	/**
	 * WRAP_MODES
	 * @getter
	 */
	static get WRAP_MODES()
	{
		return WRAP_MODES;
	}

	/**
	 * autoDetectRenderer
	 * This function is used in order to automatically detect which renderer you should be using.
	 * @param {Number}  width  The width of the renderers view.
	 * @param {Number}  height The height of the renderers view.
	 * @param {Object}  options  The optional renderer parameters.
	 * @param {Boolean}  noWebGL  Prevents selection of WebGL renderer.
	 * @return {PIXI.SystemRenderer} WebGL renderer if available, otherwise Canvas renderer.
	 */
	static autoDetectRenderer(width = 800, height = 600, options = {}, noWebGL = false)
	{
		if ({}.toString.call(width) !== "[object Number]")
			throw new TypeError("width must be a number.");

		if ({}.toString.call(height) !== "[object Number]")
			throw new TypeError("height must be a number.");

		if (!(typeof options === "object" && {}.toString.call(options) === "[object Object]"))
			throw new TypeError("options must be an object.");

		if (options.view !== undefined && !(view instanceof HTMLCanvasElement))
			throw new TypeError("options.view must be a HTMLCanvasElement.");

		if (options.transparent !== undefined && {}.toString.call(transparent) !== "[object Boolean]")
			throw new TypeError("options.transparent must be a boolean.");

		if (options.antialias !== undefined && {}.toString.call(antialias) !== "[object Boolean]")
			throw new TypeError("options.antialias must be a boolean.");

		if (options.preserveDrawingBuffer !== undefined && {}.toString.call(preserveDrawingBuffer) !== "[object Boolean]")
			throw new TypeError("options.preserveDrawingBuffer must be a boolean.");

		if (options.resolution !== undefined && {}.toString.call(resolution) !== "[object Number]")
			throw new TypeError("options.resolution must be a number.");

		if ({}.toString.call(noWebGL) !== "[object Boolean]")
			throw new TypeError("noWebGL must be a boolean.");

		return PIXI.autoDetectRenderer(width, height, options, noWebGL);
	}

	/**
	 * FILTER_RESOLUTION
	 * @getter
	 * This function is a getter for the member FILTER_RESOLUTION.
	 * @return {Number} Default filter resolution. 
	 */
	static get FILTER_RESOLUTION()
	{
		return PIXI.settings.FILTER_RESOLUTION;
	}

	/**
	 * FILTER_RESOLUTION
	 * @setter
	 * This function is a setter for the member FILTER_RESOLUTION.
	 * @param {Number} resolution Default filter resolution. 
	 */
	static set FILTER_RESOLUTION(resolution)
	{
		if ({}.toString.call(resolution) !== "[object Number]")
			throw new TypeError("resolution must be a number.");

		PIXI.settings.FILTER_RESOLUTION = resolution;
	}

	/**
	 * GC_MAX_CHECK_COUNT
	 * @getter
	 * This function is a getter for the member GC_MAX_CHECK_COUNT.
	 * @return {Number} Default Garbage Collection maximum check count. 
	 */
	static get GC_MAX_CHECK_COUNT()
	{
		return PIXI.settings.GC_MAX_CHECK_COUNT;
	}

	/**
	 * GC_MAX_CHECK_COUNT
	 * @setter
	 * This function is a setter for the member GC_MAX_CHECK_COUNT.
	 * @param {Number}  max Default Garbage Collection maximum check count. 
	 */
	static set GC_MAX_CHECK_COUNT(max)
	{
		if ({}.toString.call(max) !== "[object Number]")
			throw new TypeError("max must be a number.");

		PIXI.settings.GC_MAX_CHECK_COUNT = max;
	}

	/**
	 * GC_MAX_IDLE
	 * @getter
	 * This function is a getter for the member GC_MAX_IDLE.
	 * @return {Number} Default Garbage Collection max idle. 
	 */
	static get GC_MAX_IDLE()
	{
		return PIXI.settings.GC_MAX_IDLE;
	}

	/**
	 * GC_MAX_IDLE
	 * @setter
	 * This function is a setter for the member GC_MAX_IDLE.
	 * @param {Number} max Default filter resolutionDefault Garbage Collection max idle. 
	 */
	static set GC_MAX_IDLE(max)
	{
		if ({}.toString.call(max) !== "[object Number]")
			throw new TypeError("max must be a number.");

		PIXI.settings.GC_MAX_IDLE = max;
	}

	
}

module.exports = {
	Settings: Settings,
};