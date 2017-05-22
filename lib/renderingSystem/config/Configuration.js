/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
|
| This file defines the Configuration Object.
| This object build a PIXI.prepare.TimeLimiter and a PIXI.prepare.CountLimiter for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

class Configuration
{
	/**
	* constructor
	* This function is used in order to build a CanvasElement.
	* @param {Number}  maxMilliseconds  The maximum milliseconds that can be spent preparing items each frame.
	* @param {Number}  maxItemsPerFrame  The maximum number of items that can be prepared each frame.
	*/
	constructor(maxMilliseconds = 3, maxItemsPerFrame = 4)
	{
		if ({}.toString.call(maxMilliseconds) !== "[object Number]")
			throw new TypeError("maxMilliseconds must be a number.");

		if ({}.toString.call(maxItemsPerFrame) !== "[object Number]")
			throw new TypeError("maxItemsPerFrame must be a number.");

		this._maxMilliseconds = maxMilliseconds;
		this._maxItemsPerFrame = maxItemsPerFrame;
		this._countLimiter = new PIXI.prepare.CountLimiter(maxMilliseconds);
		this._timeLimiter = new PIXI.prepare.TimeLimiter(maxItemsPerFrame);
	}

	/**
	 * countLimiter
	 * @getter
	 * This function is a getter for the member _countLimiter.
	 * @return {PIXI.prepare.CountLimiter} A PIXI Object used by this object
	 */
	get countLimiter()
	{
		return this._countLimiter;
	}

	/**
	 * timeLimiter
	 * @getter
	 * This function is a getter for the member _timeLimiter.
	 * @return {PIXI.prepare.TimeLimiter} A PIXI Object used by this object
	 */
	get timeLimiter()
	{
		return this._timeLimiter;
	}

	
	/**
	 * maxMilliseconds
	 * @getter
	 * This function is a getter for the member _maxMilliseconds.
	 * @return {Number} The maximum milliseconds that can be spent preparing items each frame.
	 */
	get maxMilliseconds()
	{
		return this._maxMilliseconds;
	}

	/**
	 * maxMilliseconds
	 * @setter
	 * This function is a setter for the member _maxMilliseconds.
	 * @param {Number}  max The maximum milliseconds that can be spent preparing items each frame.
	 */
	set maxMilliseconds(max)
	{
		if ({}.toString.call(max) !== "[object Number]")
			throw new TypeError("max must be a number.");

		this._maxMilliseconds = max;
		this._timeLimiter.maxMilliseconds = max;
	}

	/**
	 * maxItemsPerFrame
	 * @getter
	 * This function is a getter for the member _maxItemsPerFrame.
	 * @return {Number} The maximum number of items that can be prepared each frame.
	 */
	get maxItemsPerFrame()
	{
		return this._maxItemsPerFrame;
	}

	/**
	 * maxItemsPerFrame
	 * @setter
	 * This function is a setter for the member _maxItemsPerFrame.
	 * @param {Number} max The maximum number of items that can be prepared each frame.
	 */
	set maxItemsPerFrame(max)
	{
		if ({}.toString.call(max) !== "[object Number]")
			throw new TypeError("max must be a number.");

		this._maxItemsPerFrame = max;
		this._countLimiter.maxItemsPerFrame = max;
	}

	/**
	 * allowedToUpload
	 * This function is used in order to check if another item can be uploaded. This should only be called once per item.
	 * @return {Boolean} 	If the item is allowed to be uploaded.
	 */
	allowedToUpload()
	{
		return (this._countLimiter.allowedToUpload() && this._timeLimiter.allowedToUpload());
	}

	/**
	 * beginFrame
	 * This function is used in order to reset any counting properties to start fresh on a new frame.
	 */
	beginFrame()
	{
		this._countLimiter.beginFrame();
		this._timeLimiter.beginFrame();
	}
};

module.exports = {
	Configuration: Configuration,
};