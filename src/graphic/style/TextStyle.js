"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
|--------------------------------------------------------------------------
| TextStyle
|--------------------------------------------------------------------------
|
| This file defines the Texture Object.
| This object build a PIXI.TextStyle for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var TextStyle = function () {
	/**
  * constructor
  * This function is used in order to build a TextStyle.
  * @param {Object}  style  The style parameters.
  * @param {PIXI.TextStyle}  style  The Pixi object to build the HandyPixi object.
  */
	function TextStyle() {
		var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, TextStyle);

		if (style instanceof PIXI.TextStyle) {
			this._out = style;
		} else {
			if (!((typeof style === "undefined" ? "undefined" : _typeof(style)) === "object" && {}.toString.call(style) === "[object Object]")) throw new TypeError("style must be an object.");

			this._out = new PIXI.TextStyle(style);
		}
	}

	/**
 * out
 * @getter
 * This function is a getter for the member _out.
 * @return  {PIXI.TextStyle} The PIXI Object used by this object.
 */


	_createClass(TextStyle, [{
		key: "clone",


		/**
   * clone
   * This function is used in order to clone this object.
   * @return {TextStyle} A copy of this object.
   */
		value: function clone() {
			return new TextStyle(this._out.clone());
		}

		/**
   * reset
   * This function is used in order to reset all properties to defaults.
   */

	}, {
		key: "reset",
		value: function reset() {
			this._out.reset();
		}
	}, {
		key: "out",
		get: function get() {
			return this._out;
		}
	}]);

	return TextStyle;
}();

;

module.exports = {
	TextStyle: TextStyle
};