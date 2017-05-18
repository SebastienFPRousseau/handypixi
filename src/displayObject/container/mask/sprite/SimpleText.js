"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| SimpleText
|--------------------------------------------------------------------------
|
| This file defines the Simpletext Object.
| This object build a PIXI.Text for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./Sprite.js"),
    Sprite = _require.Sprite;

var SimpleText = function (_Sprite) {
	_inherits(SimpleText, _Sprite);

	/**
 * constructor
 * This function is used in order to build a SimpleText.
 * @param {String}  text  The string to display by this Object.
 * @param {PIXI.Text}  text  The Pixi object to build the HandyPixi object.
 */
	function SimpleText(text) {
		_classCallCheck(this, SimpleText);

		var _this = _possibleConstructorReturn(this, (SimpleText.__proto__ || Object.getPrototypeOf(SimpleText)).call(this));

		if (text instanceof PIXI.Text) {
			_this._out = text;
		} else {
			if (!(typeof text === "string" && {}.toString.call(text) === "[object String]")) throw new TypeError("text must be a string.");

			_this._out = new PIXI.Text(text);
		}
		return _this;
	}

	/**
  * text
  * @getter
  * This function is a getter for the member text.
  * @return {String} The string to display by this Object.
  */


	_createClass(SimpleText, [{
		key: "text",
		get: function get() {
			return this._out.text;
		}

		/**
   * text
   * @setter
   * This function is a setter for the member text.
   * @param {String}  text  The string to display by this Object.
   */
		,
		set: function set(text) {
			if (!(typeof text === "string" && {}.toString.call(text) === "[object String]")) throw new TypeError("text must be a string.");

			this._out.text = text;
		}
	}]);

	return SimpleText;
}(Sprite);

;

module.exports = {
	SimpleText: SimpleText
};