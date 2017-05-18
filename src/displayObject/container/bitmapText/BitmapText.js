"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| BitmapText
|--------------------------------------------------------------------------
|
| This file defines the BitmapText Object.
| This object build a PIXI.extras.BitmapText for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./../Container.js"),
    Container = _require.Container;

var BitmapText = function (_Container) {
	_inherits(BitmapText, _Container);

	/**
  * constructor
  * This function is used in order to build a BitmapText.
  * @param {String}  text  The text to display.
  * @param {Object}  style  The style parameters.
  * @param {PIXI.extras.BitmapText}  text  The Pixi object to build the HandyPixi object.
  */
	function BitmapText(text) {
		var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { font: {} };

		_classCallCheck(this, BitmapText);

		var _this = _possibleConstructorReturn(this, (BitmapText.__proto__ || Object.getPrototypeOf(BitmapText)).call(this));

		if (!((typeof style === "undefined" ? "undefined" : _typeof(style)) === "object" && {}.toString.call(style) === "[object Object]")) throw new TypeError("style must be an object.");

		if (!(typeof style.font === "string" && {}.toString.call(style.font) === "[object String]") && !(_typeof(style.font) === "object" && {}.toString.call(style.font) === "[object Object]")) throw new TypeError("style.font must be a string or an object.");

		if (text instanceof PIXI.extras.BitmapText) {
			_this._out = text;
		} else {
			if (!(typeof text === "string" && {}.toString.call(text) === "[object String]")) throw new TypeError("text must be a string.");

			_this._out = new PIXI.extras.BitmapText(text, style);
		}
		return _this;
	}

	/**
  * style
  * @getter
  * This function is a getter for the member style.
  * @return {Object} The style parameters.
  */


	_createClass(BitmapText, [{
		key: "style",
		get: function get() {
			return { align: this._out.align, font: this._out.font, tint: this._out.tint };
		}

		/**
   * style
   * @setter
   * This function is a setter for the member style.
   * @param {Object}  style  The style parameters.
   */
		,
		set: function set(style) {
			if (!((typeof style === "undefined" ? "undefined" : _typeof(style)) === "object" && {}.toString.call(style) === "[object Object]")) throw new TypeError("style must be an object.");

			if (!(typeof style.font === "string" && {}.toString.call(style.font) === "[object String]") && !(_typeof(style.font) === "object" && {}.toString.call(style.font) === "[object Object]")) throw new TypeError("style.font must be a string or an object.");

			this._out.align = align;
			this._out.font = font;
			this._out.tint = tint;
		}

		/**
   * dirty
   * @getter
   * This function is a getter for the member dirty.
   * @return {Boolean} The dirty state of this object..
   */

	}, {
		key: "dirty",
		get: function get() {
			return this._out.dirty;
		}

		/**
   * dirty
   * @setter
   * This function is a setter for the member dirty.
   * @param {Boolean}  dirty  The dirty state of this object.
   */
		,
		set: function set(dirty) {
			if ({}.toString.call(dirty) !== "[object Boolean]") throw new TypeError("dirty must be a boolean.");

			this._out.dirty = dirty;
		}

		/**
   * maxLineHeight
   * @getter
   * This function is a getter for the member maxLineHeight.
   * @return {Number} The max line height.
   */

	}, {
		key: "maxLineHeight",
		get: function get() {
			return this._out.maxLineHeight;
		}

		/**
   * maxLineHeight
   * @setter
   * This function is a setter for the member maxLineHeight.
   * @param {Number}  maxLineHeight  The max line height.
   */
		,
		set: function set(maxLineHeight) {
			if ({}.toString.call(maxLineHeight) !== "[object Number]") throw new TypeError("maxLineHeight must be a number.");

			this._out.maxLineHeight = maxLineHeight;
		}

		/**
   * maxWidth
   * @getter
   * This function is a getter for the member maxWidth.
   * @return {Number} The max width of this bitmap text in pixels. 
   * If the text is longer than this value, line breaks will be automatically inserted in the last whitespace.
   */

	}, {
		key: "maxWidth",
		get: function get() {
			return this._out.maxWidth;
		}

		/**
   * maxWidth
   * @setter
   * This function is a setter for the member maxWidth.
   * @param {Number}  maxWidth  The max width of this bitmap text in pixels. 
   * If the text is longer than the value, line breaks will be automatically inserted in the last whitespace.
   * Disable by setting value to 0.
   */
		,
		set: function set(maxWidth) {
			if ({}.toString.call(maxWidth) !== "[object Number]") throw new TypeError("maxWidth must be a number.");

			this._out.maxWidth = maxWidth;
		}

		/**
   * text
   * @getter
   * This function is a getter for the member text.
   * @return {String} The text of the BitmapText Object.
   */

	}, {
		key: "text",
		get: function get() {
			return this._out.text;
		}

		/**
   * text
   * @setter
   * This function is a setter for the member text.
   * @param {String}  text  The text of the BitmapText object.
   */
		,
		set: function set(text) {
			if (!(typeof text === "string" && {}.toString.call(text) === "[object String]")) throw new TypeError("text must be a string.");

			this._out.text = text;
		}

		/**
   * textHeight
   * @getter
   * This function is a getter for the member textHeight.
   * @return {Number} The height of the overall text.
   */

	}, {
		key: "textHeight",
		get: function get() {
			return this._out.textHeight;
		}

		/**
   * textWidth
   * @getter
   * This function is a getter for the member textWidth.
   * @return {Number} The width of the overall text.
   */

	}, {
		key: "textWidth",
		get: function get() {
			return this._out.textWidth;
		}
	}]);

	return BitmapText;
}(Container);

;

module.exports = {
	BitmapText: BitmapText
};