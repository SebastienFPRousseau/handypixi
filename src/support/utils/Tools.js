"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
|--------------------------------------------------------------------------
| Tools
|--------------------------------------------------------------------------
|
| This file defines the tools static class.
| This class define many handy static method for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./../geometry/Point.js"),
    Point = _require.Point;

var Tools = function () {
	function Tools() {
		_classCallCheck(this, Tools);
	}

	_createClass(Tools, null, [{
		key: "getSvgSize",

		/**
   * getSvgSize
   * This function is used in order to get size from an svg string using regexp.
   * @param {String}  svg  A serialized svg element.
   * @return {Size} The image extension. Returns undefined if svg is not valid.
   */
		value: function getSvgSize(svg) {
			if (!(typeof svg === "string" && {}.toString.call(svg) === "[object String]")) throw new TypeError("svg must be a string.");

			return PIXI.utils.getSvgSize(svg);
		}

		/**
   * hexToRgb
   * This function is used in order to convert a hex color number to an [R, G, B] array.
   * @param {Number}  hex  The number to convert.
   * @param {Number[3]}  out  If supplied, this array will be used rather than returning a new one.
   * @return {Number[3]} An array representing the [R, G, B] of the color.
   */

	}, {
		key: "hexToRgb",
		value: function hexToRgb(hex) {
			var out = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

			if ({}.toString.call(hex) !== "[object Number]") throw new TypeError("hex must be a number.");

			if (!Array.isArray(out)) throw new TypeError("out must be an Array.");

			PIXI.utils.hex2rgb(hex, out);
			return out;
		}

		/**
   * hexToString
   * This function is used in order to convert a hex color number to a string.
   * @param {Number}  hex  Number to convert.
   * @return {String} The string color.
   */

	}, {
		key: "hexToString",
		value: function hexToString(hex) {
			if ({}.toString.call(hex) !== "[object Number]") throw new TypeError("hex must be a number.");

			return PIXI.utils.hex2string(hex);
		}

		/**
   * rgbToHex
   * This function is used in order to convert a color as an [R, G, B] array to a hex number
   * @param {Number[3]}  rgb  Rgb array to convert.
   * @return {Number} The hex color. 
   */

	}, {
		key: "rgbToHex",
		value: function rgbToHex(rgb) {
			var hex = 0;

			if (!Array.isArray(rgb) || rgb.length != 3) {
				throw new TypeError("rgb must be an Array, its length must be three.");
			} else {
				for (var i = 0, l = rgb.length; i < l; i++) {
					if ({}.toString.call(rgb[i]) !== "[object Number]") throw new TypeError("rgb must be an Array of Numbers.");
				}

				hex = PIXI.utils.rgb2hex(rgb);
			}

			return hex;
		}

		/**
   * rgbToString
   * This function is used in order to convert a rgb color array to a string.
   * @param {Number[3]}  rgb  Rgb array to convert.
   * @return {String} The string color.
   */

	}, {
		key: "rgbToString",
		value: function rgbToString(rgb) {
			return Tools.hexToString(Tools.rgbToHex(rgb));
		}

		/**
   * scaleBy
   * This function is used in order to multiply the x and y values of this point by a value.
   * @param {Point}  point  The point to scale by.
   * @param {Number}  value  The value to use.
   */

	}, {
		key: "scaleBy",
		value: function scaleBy(point, value) {
			if (!(point instanceof Point)) throw new TypeError("point must be a Point.");

			if ({}.toString.call(value) !== "[object Number]") throw new TypeError("value must be a number.");

			PIXI.particles.ParticleUtils.scaleBy(point.out, value);
		}

		/**
   * rotatePoint
   * This function is used in order to rotate a point by a given angle.
   * @param {Number}  angle  The angle to use in degrees.
   * @param {Point}  point  The point to rotate around (0,0).
   */

	}, {
		key: "rotatePoint",
		value: function rotatePoint(angle, point) {
			if ({}.toString.call(angle) !== "[object Number]") throw new TypeError("angle must be a number.");

			if (!(point instanceof Point)) throw new TypeError("point must be a Point.");

			PIXI.particles.ParticleUtils.rotatePoint(angle, point.out);
		}

		/**
   * normalize
   * This function is used in order to reduce the point to a length of 1.
   * @param {Point}  point  The point to normalize.
   */

	}, {
		key: "normalize",
		value: function normalize(point) {
			if (!(point instanceof Point)) throw new TypeError("point must be a Point.");

			PIXI.particles.ParticleUtils.normalize(point.out);
		}

		/**
   * getLength
   * This function is used in order to get the length (or magnitude) of this point.
   * @param {Point}  point  The point to measure length.
   * @return {Number} The length of this point.
   */

	}, {
		key: "getLength",
		value: function getLength(point) {
			if (!(point instanceof Point)) throw new TypeError("point must be a Point.");

			return PIXI.particles.ParticleUtils.length(point.out);
		}

		/**
   * generateEase
   * This function is used in order to generates a custom ease function. 
   * Based on the GreenSock custom ease, as demonstrated by the related tool at http://www.greensock.com/customease/.
   * @param {Array}  segments  An array of segments, as created by http://www.greensock.com/customease/.
   * @return {Function} A function that calculates the percentage of change at a given point in time (0-1 inclusive).
   */

	}, {
		key: "generateEase",
		value: function generateEase(segments) {
			if ({}.toString.call(segments) !== "[object Array]") throw new TypeError("segments must be an array.");

			return PIXI.particles.ParticleUtils.generateEase(segments);
		}
	}]);

	return Tools;
}();

;

module.exports = {
	Tools: Tools
};