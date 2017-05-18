"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| VideoTexture
|--------------------------------------------------------------------------
|
| This file defines the VideoTexture Object.
| This object build a PIXI.VideoBaseTexture for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./Texture.js"),
    Texture = _require.Texture;

var VideoTexture = function (_Texture) {
	_inherits(VideoTexture, _Texture);

	/**
  * constructor
  * This function is used in order to build a VideoTexture.
  * @param {String}  source  The url of the video.
  * @param {HTMLVideoElement}  source  HTML Video source.
  * @param {Number}  scaleMode  See Settings.SCALE_MODES for possible values
  * @param {PIXI.VideoBaseTexture}  source  The Pixi object to build the HandyPixi object.
  */
	function VideoTexture(source) {
		var scaleMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		_classCallCheck(this, VideoTexture);

		var _this = _possibleConstructorReturn(this, (VideoTexture.__proto__ || Object.getPrototypeOf(VideoTexture)).call(this));

		if (source instanceof PIXI.VideoBaseTexture) {
			_this._out = new PIXI.Texture(source);
		} else if (typeof source === "string" && {}.toString.call(source) === "[object String]") {
			if (scaleMode !== null) {
				if ({}.toString.call(scaleMode) !== "[object Number]") throw new TypeError("scaleMode must be a number.");

				_this._out = PIXI.Texture.fromVideoUrl(source, scaleMode);
			} else {
				_this._out = PIXI.Texture.fromVideoUrl(source);
			}
		} else if (source instanceof HTMLVideoElement) {
			if (scaleMode !== null) {
				if ({}.toString.call(scaleMode) !== "[object Number]") throw new TypeError("scaleMode must be a number.");

				_this._out = PIXI.Texture.fromVideo(source, scaleMode);
			} else {
				_this._out = PIXI.Texture.fromVideo(source);
			}
		} else {
			throw new TypeError("source must be a string or a HTMLVideoElement.");
		}
		return _this;
	}

	/**
  * autoPlay
  * This function is used in order to automatically play video used by this texture once they are loaded.
  * @param {Boolean}  value  Automatically play the video or not.
  */


	_createClass(VideoTexture, [{
		key: "autoPlay",
		value: function autoPlay() {
			var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

			if ({}.toString.call(value) !== "[object Boolean]") throw new TypeError("value must be a boolean.");

			this._out.baseTexture.autoPlay = value;
		}

		/**
   * autoUpdate
   * This function is used in order to automatically update the video base texture.
   * @param {Boolean}  value  Automatically update texture from source or not. 
   */

	}, {
		key: "autoUpdate",
		value: function autoUpdate() {
			var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

			if ({}.toString.call(value) !== "[object Boolean]") throw new TypeError("value must be a boolean.");

			this._out.baseTexture.autoUpdate = value;
		}
	}]);

	return VideoTexture;
}(Texture);

;

module.exports = {
	VideoTexture: VideoTexture
};