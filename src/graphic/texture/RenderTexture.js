"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| RenderTexture
|--------------------------------------------------------------------------
|
| This file defines the RenderTexture Object.
| This object build a PIXI.RenderTexture for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./Texture.js"),
    Texture = _require.Texture;

var RenderTexture = function (_Texture) {
	_inherits(RenderTexture, _Texture);

	/**
  * constructor
  * This function is used in order to build a RenderTexture
  * @param {Number}  width  The width of the base render texture.
  * @param {Number}  height  The height of the base render texture.
  * @param {Number}  scaleMode  See Settings.SCALE_MODES for possible values.
  * @param {Number}  resolution  The resolution / device pixel ratio of the texture being generated.
  * @param {PIXI.RenderTexture | PIXI.BaseRenderTexture}  width  The Pixi object to build the HandyPixi object.
  */
	function RenderTexture() {
		var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
		var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
		var scaleMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
		var resolution = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

		_classCallCheck(this, RenderTexture);

		if ({}.toString.call(height) !== "[object Number]") throw new TypeError("height must be a number.");

		if ({}.toString.call(resolution) !== "[object Number]") throw new TypeError("resolution must be a number.");

		var _this = _possibleConstructorReturn(this, (RenderTexture.__proto__ || Object.getPrototypeOf(RenderTexture)).call(this));

		if (width instanceof PIXI.RenderTexture) {
			_this._out = pixiObj;
		} else if (width instanceof PIXI.BaseRenderTexture) {
			_this._out = new PIXI.RenderTexture(pixiObj);
		} else {
			if ({}.toString.call(width) !== "[object Number]") throw new TypeError("width must be a number.");

			if (scaleMode !== null) {
				if ({}.toString.call(scaleMode) !== "[object Number]") throw new TypeError("scaleMode must be a number.");

				_this._out = PIXI.RenderTexture.create(width, height, scaleMode, resolution);
			} else {
				_this._out = PIXI.RenderTexture.create(width, height);
			}
		}
		return _this;
	}

	/**
 * out
 * @getter
 * This function is a getter for the member _out.
 * @return  {PIXI.RenderTexture} The PIXI Object used by this object. 
 */


	_createClass(RenderTexture, [{
		key: "resize",


		/**
   * resize
   * This function is used in order to resize the RenderTexture
   * @param {Number}  width  The new width to use.
   * @param {Number}  height  The new height to use.
   */
		value: function resize(width, height) {
			if ({}.toString.call(width) !== "[object Number]") throw new TypeError("width must be a number.");

			if ({}.toString.call(height) !== "[object Number]") throw new TypeError("height must be a number.");

			this._out.baseTexture.resize(width, height);
		}
	}, {
		key: "out",
		get: function get() {
			return this._out;
		}
	}]);

	return RenderTexture;
}(Texture);

;

module.exports = {
	RenderTexture: RenderTexture
};