"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
|--------------------------------------------------------------------------
| Frame
|--------------------------------------------------------------------------
|
| This file defines the Frame Object.
| This object build a PIXI FrameObject for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./../../graphic/texture/Texture.js"),
    Texture = _require.Texture;

var Frame = function () {
	/**
 * constructor
 * This function is used in order to build a Frame.
 * @param   {Texture}   texture         The Texture of the frame.
 * @param   {Number}   time         The duration of the frame in ms.
 */
	function Frame(texture, time) {
		_classCallCheck(this, Frame);

		if (!(texture instanceof Texture)) throw new TypeError("texture must be a Texture.");

		if ({}.toString.call(time) !== "[object Number]") throw new TypeError("time must be a number.");

		this._out = {
			texture: texture,
			time: time
		};
	}

	/**
 * out
 * @getter
 * This function is a getter for the member _out.
 * @return  {Object}  The Object used. 
 */


	_createClass(Frame, [{
		key: "out",
		get: function get() {
			return this._out;
		}

		/**
  * texture
  * @getter
  * This function is a getter for the member texture.
  * @return  {Texture} The Texture of the frame. 
  */

	}, {
		key: "texture",
		get: function get() {
			return this._out.texture;
		}

		/**
  * texture
  * @setter
  * This function is a setter for the member texture.
  * @param  {Texture} 	texture 	 The Texture of the frame. 
  */
		,
		set: function set(texture) {
			if (!(point instanceof Texture)) throw new TypeError("texture must be a Texture.");

			this._out.texture = texture;
		}

		/**
  * time
  * @getter
  * This function is a getter for the member time.
  * @return  {Number} The duration of the frame in ms. 
  */

	}, {
		key: "time",
		get: function get() {
			return this._out.time;
		}

		/**
  * time
  * @setter
  * This function is a setter for the member time.
  * @param  {Number}	time 	 The duration of the frame in ms. 
  */
		,
		set: function set(time) {
			if ({}.toString.call(time) !== "[object Number]") throw new TypeError("time must be a number.");

			this._out.time = time;
		}
	}]);

	return Frame;
}();

;

module.exports = {
	Frame: Frame
};