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

const { Sprite } = require("./Sprite.js");

class AnimatedSprite extends Sprite
{
	/**
	* constructor
	* This function is used in order to build a AnimatedSprite.
	* @param {Boolean}  autoUpdate  Use the shared Ticker to auto update animation or not.
	* @param {PIXI.extras.AnimatedSprite}  autoUpdate  The Pixi object to build the HandyPixi object.
	*/
	constructor(autoUpdate = true)
	{
		super();

		if (autoUpdate instanceof PIXI.extras.AnimatedSprite)
		{
			this._out = autoUpdate;
		}
		else 
		{
			if ({}.toString.call(autoUpdate) !== "[object Boolean]")
				throw new TypeError("autoUpdate must be a boolean.");

			this._out = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY], autoUpdate);
		}
	}

	/**
	 * animationSpeed
	 * @getter
	 * This function is a getter for the member animationSpeed.
	 * @return {Number} The speed that the AnimatedSprite will play at. Higher is faster, lower is slower.
	 */
	 get animationSpeed()
	{
		return this._out.animationSpeed;
	}

	/**
	 * animationSpeed
	 * @setter
	 * This function is a setter for the member animationSpeed.
	 * @param {Number}  speed  The speed that the AnimatedSprite will play at. Higher is faster, lower is slower.
	 */
	set animationSpeed(speed)
	{
		if ({}.toString.call(speed) !== "[object Number]")
			throw new TypeError("speed must be a number.");

		this._out.animationSpeed = speed;
	}

	/**
	 * currentFrame
	 * @getter
	 * This function is a getter for the member currentFrame.
	 * @return {Number} The AnimatedSprite's current frame index.
	 */
	get currentFrame()
	{
		return this._out.currentFrame;
	}

	/**
	 * totalFrames
	 * @getter
	 * This function is a getter for the member totalFrames.
	 * @return {Number} Number of frames in the AnimatedSprite. The same as number of assigned textures.
	 */
	get totalFrames()
	{
		return this._out.totalFrames;
	}

	/**
	 * loop
	 * This function is used in order to repeat the animation after playing.
	 * @param {Boolean}  value  If the AnimatedSprite must loop or not.
	 */
	loop(value = true)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a boolean.");

		this._out.loop = value;
	}

	/**
	 * onComplete
	 * This function is used in order to call a method when the animation finishes playing.
	 * @param {Function} onComplete Function to call. 
	 */
	onComplete(onComplete)
	{
		if ({}.toString.call(onComplete) !== "[object Function]")
			throw new TypeError("onComplete must be a function.");

		this._out.onComplete = onComplete;
	}

	/**
	 * onFrameChange
	 * This function is used in order to call a method when the animation changes which texture is being rendered.
	 * @param {Function} onFrameChange Function to call. 
	 */
	onFrameChange(onFrameChange)
	{
		if ({}.toString.call(onFrameChange) !== "[object Function]")
			throw new TypeError("onFrameChange must be a function.");

		this._out.onFrameChange = onFrameChange;
	}


	/**
	 * isPlaying
	 * This function is used in order to know if the AnimatedSprite is currently playing.
	 * @return {Boolean} If the AnimatedSprite is playing.
	 */
	isPlaying(value)
	{
		return this._out.playing;
	}

	/**
	 * goToAndPlay
	 * This function is used in order to go to a specific frame and begin playing the AnimatedSprite.
	 * @param {Number} frame Frame index to start at.
	 */
	goToAndPlay(frame)
	{
		if ({}.toString.call(frame) !== "[object Number]")
			throw new TypeError("frame must be a number.");

		this._out.gotoAndPlay();
	}

	/**
	 * goToAndStop
	 * This function is used in order to stop the AnimatedSprite and goes to a specific frame.
	 * @param {Number} frame Frame index to stop at.
	 */
	goToAndStop(frame)
	{
		if ({}.toString.call(frame) !== "[object Number]")
			throw new TypeError("frame must be a number.");

		this._out.gotoAndStop();
	}

	/**
	 * play
	 * This function is used in order to start the animation.
	 */
	play()
	{
		this._out.play();
	}
	
	/**
	 * stop
	 * This function is used in order to stop the animation.
	 */
	stop()
	{
		this._out.stop();
	}
}

module.exports = {
	AnimatedSprite: AnimatedSprite,
};