"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
|--------------------------------------------------------------------------
| AbstractTextureFactory
|--------------------------------------------------------------------------
|
| This file defines the AbstractTextureFactory Object.
| This object is the abstract factory for Texture.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./Texture.js"),
    Texture = _require.Texture;

var _require2 = require("./ImageTexture.js"),
    ImageTexture = _require2.ImageTexture;

var _require3 = require("./VideoTexture.js"),
    VideoTexture = _require3.VideoTexture;

var _require4 = require("./RenderTexture.js"),
    RenderTexture = _require4.RenderTexture;

var _require5 = require("./../../renderingSystem/system/Environment.js"),
    Environment = _require5.Environment;

/**
 * TEXTURE_FACTORY
 * Identify the TEXTUREFactory 
 * @type {Number} 
 */


var TEXTURE_FACTORY = 0;

var AbstractTextureFactory = function () {
	/**
  * constructor
  * This function is used in order to forbidden the built of an AbstractTextureFactory
  */
	function AbstractTextureFactory() {
		_classCallCheck(this, AbstractTextureFactory);

		if (this.constructor === AbstractTextureFactory) throw new TypeError("Cannot construct Abstract instances like AbstractTextureFactory directly.");
	}

	/**
  * TEXTURE_FACTORY
  * @getter
  */


	_createClass(AbstractTextureFactory, null, [{
		key: "getFactory",


		/**
   * getFactory
   * This function is used in order to get the factory using its id.
   * @param {Number}  id  The Texture factory id.
   * @return {AbstractTextureFactory} The factory needed.
   */
		value: function getFactory(id) {
			if ({}.toString.call(id) !== "[object Number]") throw new TypeError("id must be a number.");

			switch (id) {
				case TEXTURE_FACTORY:
					return new TextureFactory();

				default:
					throw new Error("No factory found for this id: " + id + "!");
			}
		}
	}, {
		key: "TEXTURE_FACTORY",
		get: function get() {
			return TEXTURE_FACTORY;
		}
	}]);

	return AbstractTextureFactory;
}();

;

/*
|--------------------------------------------------------------------------
| TextureFactory
|--------------------------------------------------------------------------
|
| This file defines the TextureFactory Object.
| This object is a factory for Texture.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var TextureFactory = function (_AbstractTextureFacto) {
	_inherits(TextureFactory, _AbstractTextureFacto);

	/**
  * constructor
  * This function is used in order to build a TextureFactory.
  */
	function TextureFactory() {
		_classCallCheck(this, TextureFactory);

		return _possibleConstructorReturn(this, (TextureFactory.__proto__ || Object.getPrototypeOf(TextureFactory)).call(this));
	}

	/**
  * createFromImage
  * This function is used in order to build an ImageTexture from an image.
  * @param {String}  url  The image url of the texture.
  * @param {Object}  options  The options for building.
  * @return {ImageTexture} The ImageTexture built. 
  */


	_createClass(TextureFactory, [{
		key: "createFromImage",
		value: function createFromImage(url) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			if (!((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object" && {}.toString.call(options) === "[object Object]")) throw new TypeError("options must be an object.");

			return new ImageTexture(url, options.crossOrigin, options.scaleMode, options.sourceScale);
		}

		/**
   * createFromVideo
   * This function is used in order to build a VideoTexture from a video.
   * @param {String}  source  The url of the video.
   * @param {HTMLVideoElement}  source  HTML Video source.
   * @param {Object}  options  The options for building.
   * @return {VideoTexture} The VideoTexture built. 
   */

	}, {
		key: "createFromVideo",
		value: function createFromVideo(source) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			if (!((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object" && {}.toString.call(options) === "[object Object]")) throw new TypeError("options must be an object.");

			return new Videotexture(source, options.scaleMode);
		}

		/**
   * createFromRender
   * This function is used in order to build a RenderTexture from a render.
   * @param {Environment}  env  The environment of the render.
   * @param {Object}  options  The options for building.
   * @return {RenderTexture} The RenderTexture built. 
   */

	}, {
		key: "createFromRender",
		value: function createFromRender(env) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			if (!(env instanceof Environment)) throw new TypeError("env must be a Environment.");

			if (!((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object" && {}.toString.call(options) === "[object Object]")) throw new TypeError("options must be an object.");

			var texture = new RenderTexture(options.width, options.height, options.scaleMode, options.resolution);
			env._renderer.render(env.stage.out.out, texture.out);

			return texture;
		}
	}]);

	return TextureFactory;
}(AbstractTextureFactory);

;

module.exports = {
	AbstractTextureFactory: AbstractTextureFactory,
	TextureFactory: TextureFactory
};