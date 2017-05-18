"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| TilingSprite
|--------------------------------------------------------------------------
|
| This file defines the TilingSprite Object.
| This object build a PIXI.extras.TilingSprite for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./Sprite.js"),
    Sprite = _require.Sprite;

var _require2 = require("./../../../../support/geometry/ObservablePoint.js"),
    ObservablePoint = _require2.ObservablePoint;

var _require3 = require("./../../../../support/geometry/Point.js"),
    Point = _require3.Point;

var _require4 = require("./../../../../support/geometry/Matrix.js"),
    TransformStatic = _require4.TransformStatic;

var TilingSprite = function (_Sprite) {
	_inherits(TilingSprite, _Sprite);

	/**
  * constructor
  * This function is used in order to build a TilingSprite.
  * @param {Number}  width  The width of the tiling sprite.
  * @param {Number}  height  The height of the tiling sprite.
  * @param {PIXI.extras.TilingSprite}  width  The Pixi object to build the HandyPixi object.
  */
	function TilingSprite() {
		var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
		var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

		_classCallCheck(this, TilingSprite);

		var _this = _possibleConstructorReturn(this, (TilingSprite.__proto__ || Object.getPrototypeOf(TilingSprite)).call(this));

		if ({}.toString.call(height) !== "[object Number]") throw new TypeError("height must be a number.");

		if (width instanceof PIXI.extras.TilingSprite) {
			_this._out = width;
		} else {
			if ({}.toString.call(width) !== "[object Number]") throw new TypeError("width must be a number.");

			_this._out = new PIXI.extras.TilingSprite(PIXI.Texture.EMPTY, width, height);
		}
		return _this;
	}

	/**
  * tilePosition
  * @getter
  * This function is a getter for the member tilePosition.
  * @return {ObservablePoint} The offset of the image that is being tiled.
  */


	_createClass(TilingSprite, [{
		key: "uvRespectAnchor",


		/**
   * uvRespectAnchor
   * This function is used in order to bind the uvs and the anchor.
   * @param {Boolean}  value  If anchor must affect uvs or not.
   */
		value: function uvRespectAnchor() {
			var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

			if ({}.toString.call(value) !== "[object Boolean]") throw new TypeError("value must be a boolean.");

			this._out.uvRespectAnchor = value;
		}

		/**
   * containsPoint
   * This function is used in order to check if a point is inside this tiling sprite.
   * @param {Point}  point  The point to check.
   * @return {Boolean} Whether or not the sprite contains the point.
   */

	}, {
		key: "containsPoint",
		value: function containsPoint(point) {
			if (!(point instanceof Point)) throw new TypeError("point must be a Point.");

			return this._out.containsPoint(point.out);
		}
	}, {
		key: "tilePosition",
		get: function get() {
			return new ObservablePoint(this._out.tilePosition);
		}

		/**
   * tilePosition
   * @setter
   * This function is a setter for the member tilePosition.
   * @param {ObservablePoint}  tilePosition  The offset of the image that is being tiled.
   */
		,
		set: function set(tilePosition) {
			if (!(tilePosition instanceof ObservablePoint)) throw new TypeError("tilePosition must be a ObservablePoint.");

			this._out.tilePosition = tilePosition.out;
		}

		/**
   * tileScale
   * @getter
   * This function is a getter for the member tileScale.
   * @return {ObservablePoint} The scaling of the image that is being tiled.
   */

	}, {
		key: "tileScale",
		get: function get() {
			return new ObservablePoint(this._out.tileScale);
		}

		/**
   * tileScale
   * @setter
   * This function is a setter for the member tileScale.
   * @param {ObservablePoint}  tileScale  The scaling of the image that is being tiled.
   */
		,
		set: function set(tileScale) {
			if (!(tileScale instanceof ObservablePoint)) throw new TypeError("tileScale must be a ObservablePoint.");

			this._out.tileScale = tileScale.out;
		}

		/**
   * tileTransform
   * @getter
   * This function is a getter for the member tileTransform.
   * @return {TransformStatic} Tile transform.
   */

	}, {
		key: "tileTransform",
		get: function get() {
			return new TransformStatic(this._out.tileTransform);
		}

		/**
   * tileTransform
   * @setter
   * This function is a setter for the member tileTransform.
   * @param {TransformStatic}  tileTransform  Tile transform.
   */
		,
		set: function set(tileTransform) {
			if (!(tileTransform instanceof TransformStatic)) throw new TypeError("tileTransform must be a TransformStatic.");

			this._out.tileTransform = tileTransform.out;
		}
	}]);

	return TilingSprite;
}(Sprite);

;

module.exports = {
	TilingSprite: TilingSprite
};