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
}

module.exports = {
	Settings: Settings,
};