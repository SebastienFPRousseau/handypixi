"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| Mask
|--------------------------------------------------------------------------
|
| This file defines the Mask Object.
| This object is the abstract mask for Shape and Sprite.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./../Container.js"),
    Container = _require.Container;

var Mask = function (_Container) {
	_inherits(Mask, _Container);

	/**
  * constructor
  * This function is used in order to forbidden the built of an AbstractPoint
  */
	function Mask() {
		_classCallCheck(this, Mask);

		var _this = _possibleConstructorReturn(this, (Mask.__proto__ || Object.getPrototypeOf(Mask)).call(this));

		if (_this.constructor === Mask) throw new TypeError("Cannot construct Abstract instances like Mask directly.");

		_this._mask = null;
		return _this;
	}

	/**
  * mask
  * @getter
  * This function is a getter for the member _mask.
  * @return {Mask} The mask applied on this Mask.
  */


	_createClass(Mask, [{
		key: "applyMask",


		/**
   * applyMask
   * This function is used in order to apply a mask on this Mask.
   * @param {Mask} mask The Mask to apply.
   */
		value: function applyMask(mask) {
			if (!(mask instanceof Mask)) throw new TypeError("mask must be a Mask.");

			this._out.mask = mask.out;
			this._mask = mask;
		}

		/**
   * removeMask
   * This function is used in order to remove the mask applied on this Mask.
   */

	}, {
		key: "removeMask",
		value: function removeMask() {
			this._out.mask = null;
			this._mask = null;
		}
	}, {
		key: "mask",
		get: function get() {
			return this._mask;
		}

		/**
   * blendMode
   * @getter
   * This function is a getter for the member blendMode.
   * @return {Number} The blend mode to be applied to the sprite.
   */

	}, {
		key: "blendMode",
		get: function get() {
			return this._out.blendMode;
		}

		/**
   * blendMode
   * @setter
   * This function is a setter for the member blendMode.
   * @param {Number}  mode  The blend mode to be applied to the sprite.
   */
		,
		set: function set(mode) {
			if ({}.toString.call(mode) !== "[object Number]") throw new TypeError("mode must be a number.");

			this._out.blendMode = mode;
		}

		/**
   * tint
   * @getter
   * This function is a getter for the member tint.
   * @return {Number} The tint applied to the sprite. This is a hex value.
   */

	}, {
		key: "tint",
		get: function get() {
			return this._out.tint;
		}

		/**
   * tint
   * @setter
   * This function is a setter for the member tint.
   * @param {Number}  tint  The tint applied to the sprite. This is a hex value.
   */
		,
		set: function set(tint) {
			if ({}.toString.call(tint) !== "[object Number]") throw new TypeError("tint must be a number.");

			this._out.tint = tint;
		}
	}]);

	return Mask;
}(Container);

;

module.exports = {
	Mask: Mask
};