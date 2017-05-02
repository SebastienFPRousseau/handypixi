/*
|--------------------------------------------------------------------------
| MouseEvent
|--------------------------------------------------------------------------
|
| This file defines the MouseEvent Object.
| This object is the abstract MouseEvent for the handypixi events.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Event } = require("./Event.js");

/**
 * WHEEL_DOWN
 * Identify the WHEEL_DOWN event.
 * @type {Number} 
 */
const WHEEL_DOWN = 0;

/**
 * WHEEL_PRESS
 * Identify the WHEEL_PRESS event.
 * @type {Number} 
 */
const WHEEL_PRESS = 1;

/**
 * WHEEL_UP
 * Identify the WHEEL_UP event.
 * @type {Number} 
 */
const WHEEL_UP = 2;

class MouseEvent
{
	/**
	 * constructor
	 * This function is used in order to forbidden the built of an MouseEvent
	 * @param {EventManager}  dispatcher  The dispatcher to notify.
	 * @param {Number}  code  The code of the event.
	 */
	constructor(dispatcher, code)
	{
		super(dispatcher, code);

		if (this.constructor === MouseEvent)
			throw new TypeError("Cannot construct Abstract instances like MouseEvent directly.");
	}

	/**
	 * WHEEL_DOWN
	 * @getter
	 */
	static get WHEEL_DOWN()
	{
		return WHEEL_DOWN;
	}

	/**
	 * WHEEL_PRESS
	 * @getter
	 */
	static get WHEEL_PRESS()
	{
		return WHEEL_PRESS;
	}

	/**
	 * WHEEL_UP
	 * @getter
	 */
	static get WHEEL_UP()
	{
		return WHEEL_UP;
	}
};

module.exports = {
	MouseEvent: MouseEvent,
};