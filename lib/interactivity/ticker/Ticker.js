/*
|--------------------------------------------------------------------------
| Ticker
|--------------------------------------------------------------------------
|
| This file defines the Ticker Object.
| This object build a PIXI.ticker.Ticker for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

class Ticker
{
	/**
	* constructor
	* This function is used in order to build a Ticker.
	* @param   {PIXI.ticker.Ticker}   pixiObj  The Pixi object to build the HandyPixi object.
	*/
	constructor(pixiObj = null)
	{
		if (pixiObj instanceof PIXI.ticker.Ticker)
		{
			this._out = pixiObj;
		}
		else 
		{
			this._out = new PIXI.ticker.Ticker();
		}

		this._listenersFunctions = [];
	}

	/**
	* out
	* @getter
	* This function is a getter for the member _out.
	* @return  {PIXI.ticker.Ticker} The PIXI Object used by this object. 
	*/
	get out()
	{
		return this._out;
	}

	/**
	* listenersFunctions
	* @getter
	* This function is a getter for the member _listenersFunctions.
	* @return  {Array} The listeners functions added for updates. 
	*/
	get listenersFunctions()
	{
		return this._listenersFunctions;
	}

	/** 
	 * deltaTime
	 * @getter
	 * This function is a getter for the member deltaTime.
	 * @return {Number} Scalar time value from last frame to this frame.
	 * This value is capped by setting minFPS and is scaled with speed.
	 * Note: The cap may be exceeded by scaling.
	 */
	get deltaTime()
	{
		return this._out.deltaTime;
	}

	/** 
	 * deltaTime
	 * @setter
	 * This function is a setter for the member deltaTime.
	 * @return {Number}  deltaTime  Scalar time value from last frame to this frame.
	 * This value is capped by setting minFPS and is scaled with speed.
	 * Note: The cap may be exceeded by scaling.
	 */
	set deltaTime(deltaTime)
	{
		if ({}.toString.call(deltaTime) !== "[object Number]")
			throw new TypeError("deltaTime must be a number.");

		this._out.deltaTime = deltaTime;
	}

	/** 
	 * elapsedMS
	 * @getter
	 * This function is a getter for the member elapsedMS.
	 * @return {Number} Time elapsed in milliseconds from last frame to this frame.
	 */
	get elapsedMS()
	{
		return this._out.elapsedMS;
	}

	/** 
	 * FPS
	 * @getter
	 * This function is a getter for the member elapsedMS.
	 * @return {Number} The frames per second at which this ticker is running.
	 */
	get FPS()
	{
		return this._out.FPS;
	}

	/** 
	 * lastTime
	 * @getter
	 * This function is a getter for the member lastTime.
	 * @return {Number} The last time this.update was invoked.
	 */
	get lastTime()
	{
		return this._out.lastTime;
	}

	/** 
	 * minFPS
	 * @getter
	 * This function is a getter for the member minFPS.
	 * @return {Number} Manages the maximum amount of milliseconds allowed to elapse between invoking this.update.
	 * This value is used to cap deltaTime, but does not effect the measured value of FPS.
	 */
	get minFPS()
	{
		return this._out.minFPS;
	}

	 /** 
	 * minFPS
	 * @setter
	 * This function is a setter for the member minFPS.
	 * @param {Number}  minFPS  Manages the maximum amount of milliseconds allowed to elapse between invoking this.update.
	 * This value is used to cap deltaTime, but does not effect the measured value of FPS.
	 * When setting this property it is clamped to a value between 0 and Settings.TARGET_FPMS * 1000.
	 */
	set minFPS(minFPS)
	{
		if ({}.toString.call(minFPS) !== "[object Number]")
			throw new TypeError("minFPS must be a number.");

		this._out.minFPS = minFPS;
	}

	/** 
	 * speed
	 * @getter
	 * This function is a getter for the member speed.
	 * @return {Number} Factor of current deltaTime.
	 */
	get speed()
	{
		return this._out.speed;
	}

	 /** 
	 * speed
	 * @setter
	 * This function is a setter for the member speed.
	 * @param {Number}  speed  Factor of current deltaTime.
	 */
	set speed(speed)
	{
		if ({}.toString.call(speed) !== "[object Number]")
			throw new TypeError("speed must be a number.");

		this._out.speed = speed;
	}

	/** 
	 * shared
	 * @getter
	 * This function is a getter for the member PIXI.ticker.shared.
	 * @return {Ticker} The shared ticker instance used by AnimatedSprite and by EventManager.
	 * The property autoStart is set to true for this instance.
	 */
	static get shared()
	{
		return new Ticker(PIXI.ticker.shared);
	}

	/**
	 * autoStart
	 * This function is used in order to invoke the method start automatically when a listener is added or not
	 * @param {Boolean} auto Whether or not this ticker should automatically start.
	 */
	autoStart(auto = true)
	{
		if ({}.toString.call(auto) !== "[object Boolean]")
			throw new TypeError("auto must be a boolean.");

		this._out.autoStart = auto;
	}

	/**
	 * isStarted
	 * This function is used in order to know if the Ticker is running.
	 * @return {Boolean} Whether or not this ticker has been called start.
	 */
	isStarted()
	{
		return this._out.started;
	}

	/**
	 * add
	 * This function is used in order to request a new animation frame at this point.
	 * @param {Function}  fn  The listener function to be added for updates.
	 * @param {Object}  context  The listener context.
	 * @param {Number}  priority  The priority for emitting. See Settings.UPDATE_PRIORITY
	 */
	add(fn, context = undefined, priority = undefined)
	{
		if ({}.toString.call(fn) !== "[object Function]")
			throw new TypeError("fn must be a function.");

		if ({}.toString.call(context) !== "[object Object]" && context !== undefined)
			throw new TypeError("context must be an Object.");

		if ({}.toString.call(priority) !== "[object Number]" && priority !== undefined)
			throw new TypeError("priority must be a number.");

		this._out.add(fn, context, priority);
		this._listenersFunctions.push(fn);
	}

	/**
	 * addOnce
	 * This function is used in order to request a new animation frame at this point.
	 * @param {Function}  fn  The listener function to be added for ONE update.
	 * @param {Object}  context  The listener context.
	 * @param {Number}  priority  The priority for emitting. See Settings.UPDATE_PRIORITY
	 */
	addOnce(fn, context = undefined, priority = undefined)
	{
		if ({}.toString.call(fn) !== "[object Function]")
			throw new TypeError("fn must be a function.");

		if ({}.toString.call(context) !== "[object Object]" && context !== undefined)
			throw new TypeError("context must be an Object.");

		if ({}.toString.call(priority) !== "[object Number]" && priority !== undefined)
			throw new TypeError("priority must be a number.");

		this._out.addOnce(fn, context, priority);
	}

	/**
	 * remove
	 * This function is used in order to cancel the animation frame.
	 * @param {Function}  fn  The listener function to be removed.
	 * @param {Object}  context  The listener context to be removed.
	 */
	remove(fn = undefined, context = undefined)
	{

		if ({}.toString.call(fn) !== "[object Function]" && fn !== undefined)
			throw new TypeError("fn must be a function.");

		if (!(typeof context === "object" && {}.toString.call(context) === "[object Object]") && context !== undefined)
			throw new TypeError("context must be an object.");

		for(let i = 0, l = this._listenersFunctions.length; i < l; i++)
		{
			if(this._listenersFunctions[i] === fn)
				this._listenersFunctions.splice(i, 1);
		}

		this._out.remove(fn, context);
	}

	/**
	 * start
	 * This function is used in order to start the Ticker. 
	 */
	start()
	{
		this._out.start();
	}

	/**
	 * stop
	 * This function is used in order to stop the Ticker.
	 */
	stop()
	{
		this._out.stop();
	}

	/**
	 * update
	 * This function is used in order to trigger an update.
	 * @param {Number}  currentTime  The current time of execution. 
	 */
	update(currentTime = undefined)
	{
		if ({}.toString.call(currentTime) !== "[object Number]" && currentTime !== undefined)
			throw new TypeError("currentTime must be a number.");

		this._out.update(currentTime);
	}
};

module.exports = {
	Ticker: Ticker,
};