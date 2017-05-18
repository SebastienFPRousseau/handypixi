"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| Sprite
|--------------------------------------------------------------------------
|
| This file defines the Sprite Object.
| This object build a PIXI.Sprite for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./../../../../support/geometry/ObservablePoint.js"),
    ObservablePoint = _require.ObservablePoint;

var _require2 = require("./../Mask.js"),
    Mask = _require2.Mask;

var Sprite = function (_Mask) {
	_inherits(Sprite, _Mask);

	/**
 * constructor
 * This function is used in order to build a Sprite.
 * @param {PIXI.Sprite}  pixiObj  The Pixi object to build the HandyPixi object.
 */
	function Sprite() {
		var pixiObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		_classCallCheck(this, Sprite);

		var _this = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this));

		if (pixiObj === null && _this.constructor !== Sprite) return _possibleConstructorReturn(_this);

		if (pixiObj instanceof PIXI.Sprite) {
			_this._out = pixiObj;
		} else {
			_this._out = new PIXI.Sprite(PIXI.Texture.EMPTY);
		}
		return _this;
	}

	/**
 * out
 * @getter
 * This function is a getter for the member _out.
 * @return  {PIXI.Sprite} The PIXI Object used by this object. 
 */


	_createClass(Sprite, [{
		key: "centerAnchor",


		/**
   * centerAnchor
   * @getter
   * This function is a shortcut for anchor.
   */
		value: function centerAnchor() {
			this.out.anchor.set(0.5, 0.5);
		}

		/**
   * pluginName
   * @getter
   * This function is a getter for the member pluginName.
   * @return {String} Name of plugin renderer that is responsible for rendering this element.
   */

	}, {
		key: "out",
		get: function get() {
			return this._out;
		}

		/**
   * anchor
   * @getter
   * This function is a getter for the member anchor.
   * @return {ObservablePoint} The origin point of the texture.
   */

	}, {
		key: "anchor",
		get: function get() {
			return new ObservablePoint(this._out.anchor);
		}

		/**
   * anchor
   * @setter
   * This function is a setter for the member anchor.
   * @param {ObservablePoint}  anchor  The origin point of the texture.
   * The default is 0,0 this means the texture's origin is the top left.
   * Setting the anchor to 0.5,0.5 means the texture's origin is centered.
   * Setting the anchor to 1,1 would mean the texture's origin point will be the bottom right corner.
   */
		,
		set: function set(anchor) {
			if (!(anchor instanceof ObservablePoint)) throw new TypeError("anchor must be a ObservablePoint.");

			this._out.anchor = anchor.out;
		}
	}, {
		key: "pluginName",
		get: function get() {
			return this._out.pluginName;
		}

		/**
   * pluginName
   * @setter
   * This function is a setter for the member pluginName.
   * @param {String}  plugin  Name of plugin renderer that is responsible for rendering this element.
   */
		,
		set: function set(plugin) {
			if (!(typeof plugin === "string" && {}.toString.call(plugin) === "[object String]")) throw new TypeError("plugin must be a string.");

			this._out.pluginName = plugin;
		}
	}]);

	return Sprite;
}(Mask);

;

module.exports = {
	Sprite: Sprite
};