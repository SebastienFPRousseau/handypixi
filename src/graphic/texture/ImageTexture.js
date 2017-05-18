"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| ImageTexture
|--------------------------------------------------------------------------
|
| This file defines the ImageTexture Object.
| This object build a PIXI.Texture for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./Texture.js"),
    Texture = _require.Texture;

var ImageTexture = function (_Texture) {
	_inherits(ImageTexture, _Texture);

	/**
  * constructor
  * This function is used in order to build an ImageTexture.
  * @param {String}  url  The image url of the texture.
  * @param {Boolean}  crossOrigin  Whether requests should be treated as crossorigin
  * @param {Number}  scaleMode  See Settings.SCALE_MODES for possible values
  * @param {Number}  sourceScale  Scale for the original image, used with SVG images.
  */
	function ImageTexture(url) {
		var crossOrigin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
		var scaleMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
		var sourceScale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

		_classCallCheck(this, ImageTexture);

		if (!(typeof url === "string" && {}.toString.call(url) === "[object String]")) throw new TypeError("url must be a string.");

		var _this = _possibleConstructorReturn(this, (ImageTexture.__proto__ || Object.getPrototypeOf(ImageTexture)).call(this));

		if (sourceScale !== null) {
			if ({}.toString.call(sourceScale) !== "[object Number]") throw new TypeError("sourceScale must be a number.");

			_this._out = PIXI.Texture.fromImage(url, crossOrigin, scaleMode, sourceScale);
		} else if (scaleMode !== null) {
			if ({}.toString.call(scaleMode) !== "[object Number]") throw new TypeError("scaleMode must be a number.");

			_this._out = PIXI.Texture.fromImage(url, crossOrigin, scaleMode);
		} else if (crossOrigin !== null) {
			if ({}.toString.call(crossOrigin) !== "[object Boolean]") throw new TypeError("crossOrigin must be a boolean.");

			_this._out = PIXI.Texture.fromImage(url, crossOrigin);
		} else {
			_this._out = PIXI.Texture.fromImage(url);
		}
		return _this;
	}

	/**
  * imageUrl
  * @getter
  * This function is a getter for the member imageUrl.
  * @return {String} The image url of the texture.
  */


	_createClass(ImageTexture, [{
		key: "updateSource",


		/**
   * updateSource
   * This function is used in order to change the source image of the texture.
   * @param {String} newSrc The path of the image.
   */
		value: function updateSource(newSrc) {
			if (!(typeof newSrc === "string" && {}.toString.call(newSrc) === "[object String]")) throw new TypeError("newSrc must be a string.");

			this._out.baseTexture.updateSourceImage(newSrc);
		}
	}, {
		key: "imageUrl",
		get: function get() {
			return this._out.baseTexture.imageUrl;
		}

		/**
   * imageType
   * @getter
   * This function is a getter for the member imageType.
   * @return {String} Type of image defined in source, eg. png or svg.
   */

	}, {
		key: "imageType",
		get: function get() {
			return this._out.baseTexture.imageType;
		}
	}]);

	return ImageTexture;
}(Texture);

;

module.exports = {
	ImageTexture: ImageTexture
};