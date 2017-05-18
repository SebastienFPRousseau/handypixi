"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| AnimatedSprite
|--------------------------------------------------------------------------
|
| This file defines the AnimatedSprite Object.
| This object build a PIXI.extras.AnimatedSprite for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./Sprite.js"),
    Sprite = _require.Sprite;

var AnimatedSprite = function (_Sprite) {
	_inherits(AnimatedSprite, _Sprite);

	/**
 * constructor
 * This function is used in order to build a AnimatedSprite.
 * @param {Boolean}  autoUpdate  Use the shared Ticker to auto update animation or not.
 * @param {PIXI.extras.AnimatedSprite}  autoUpdate  The Pixi object to build the HandyPixi object.
 */
	function AnimatedSprite() {
		var autoUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

		_classCallCheck(this, AnimatedSprite);

		var _this = _possibleConstructorReturn(this, (AnimatedSprite.__proto__ || Object.getPrototypeOf(AnimatedSprite)).call(this));

		if (autoUpdate instanceof PIXI.extras.AnimatedSprite) {
			_this._out = autoUpdate;
		} else {
			if ({}.toString.call(autoUpdate) !== "[object Boolean]") throw new TypeError("autoUpdate must be a boolean.");

			_this._out = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY], autoUpdate);
		}
		return _this;
	}

	/**
  * animationSpeed
  * @getter
  * This function is a getter for the member animationSpeed.
  * @return {Number} The speed that the AnimatedSprite will play at. Higher is faster, lower is slower.
  */


	_createClass(AnimatedSprite, [{
		key: "loop",


		/**
   * loop
   * This function is used in order to repeat the animation after playing.
   * @param {Boolean}  value  If the AnimatedSprite must loop or not.
   */
		value: function loop() {
			var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

			if ({}.toString.call(value) !== "[object Boolean]") throw new TypeError("value must be a boolean.");

			this._out.loop = value;
		}

		/**
   * onComplete
   * This function is used in order to call a method when the animation finishes playing.
   * @param {Function} onComplete Function to call. 
   */

	}, {
		key: "onComplete",
		value: function onComplete(_onComplete) {
			if ({}.toString.call(_onComplete) !== "[object Function]") throw new TypeError("onComplete must be a function.");

			this._out.onComplete = _onComplete;
		}

		/**
   * onFrameChange
   * This function is used in order to call a method when the animation changes which texture is being rendered.
   * @param {Function} onFrameChange Function to call. 
   */

	}, {
		key: "onFrameChange",
		value: function onFrameChange(_onFrameChange) {
			if ({}.toString.call(_onFrameChange) !== "[object Function]") throw new TypeError("onFrameChange must be a function.");

			this._out.onFrameChange = _onFrameChange;
		}

		/**
   * isPlaying
   * This function is used in order to know if the AnimatedSprite is currently playing.
   * @return {Boolean} If the AnimatedSprite is playing.
   */

	}, {
		key: "isPlaying",
		value: function isPlaying(value) {
			return this._out.playing;
		}

		/**
   * goToAndPlay
   * This function is used in order to go to a specific frame and begin playing the AnimatedSprite.
   * @param {Number} frame Frame index to start at.
   */

	}, {
		key: "goToAndPlay",
		value: function goToAndPlay(frame) {
			if ({}.toString.call(frame) !== "[object Number]") throw new TypeError("frame must be a number.");

			this._out.gotoAndPlay();
		}

		/**
   * goToAndStop
   * This function is used in order to stop the AnimatedSprite and goes to a specific frame.
   * @param {Number} frame Frame index to stop at.
   */

	}, {
		key: "goToAndStop",
		value: function goToAndStop(frame) {
			if ({}.toString.call(frame) !== "[object Number]") throw new TypeError("frame must be a number.");

			this._out.gotoAndStop();
		}

		/**
   * play
   * This function is used in order to start the animation.
   */

	}, {
		key: "play",
		value: function play() {
			this._out.play();
		}

		/**
   * stop
   * This function is used in order to stop the animation.
   */

	}, {
		key: "stop",
		value: function stop() {
			this._out.stop();
		}
	}, {
		key: "animationSpeed",
		get: function get() {
			return this._out.animationSpeed;
		}

		/**
   * animationSpeed
   * @setter
   * This function is a setter for the member animationSpeed.
   * @param {Number}  speed  The speed that the AnimatedSprite will play at. Higher is faster, lower is slower.
   */
		,
		set: function set(speed) {
			if ({}.toString.call(speed) !== "[object Number]") throw new TypeError("speed must be a number.");

			this._out.animationSpeed = speed;
		}

		/**
   * currentFrame
   * @getter
   * This function is a getter for the member currentFrame.
   * @return {Number} The AnimatedSprite's current frame index.
   */

	}, {
		key: "currentFrame",
		get: function get() {
			return this._out.currentFrame;
		}

		/**
   * totalFrames
   * @getter
   * This function is a getter for the member totalFrames.
   * @return {Number} Number of frames in the AnimatedSprite. The same as number of assigned textures.
   */

	}, {
		key: "totalFrames",
		get: function get() {
			return this._out.totalFrames;
		}
	}]);

	return AnimatedSprite;
}(Sprite);

;

module.exports = {
	AnimatedSprite: AnimatedSprite
};