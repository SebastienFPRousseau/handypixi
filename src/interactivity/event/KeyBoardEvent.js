/*
|--------------------------------------------------------------------------
| KeyBoardEvent
|--------------------------------------------------------------------------
|
| This file defines the KeyBoardEvent Object.
| This object is the abstract KeyBoardEvent for the handypixi events.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Event } = require("./Event.js");

/**
 * KEY_DOWN
 * Identify the KEY_DOWN event.
 * @type {Number} 
 */
const KEY_DOWN = 0;

/**
 * KEY_PRESS
 * Identify the KEY_PRESS event.
 * @type {Number} 
 */
const KEY_PRESS = 1;

/**
 * KEY_UP
 * Identify the KEY_UP event.
 * @type {Number} 
 */
const KEY_UP = 2;

class KeyBoardEvent
{
	/**
	 * constructor
	 * This function is used in order to forbidden the built of an KeyBoardEvent
	 * @param {EventManager}  dispatcher  The dispatcher to notify.
	 * @param {Number}  code  The code of the event.
	 */
	constructor(dispatcher, code)
	{
		super(dispatcher, code);

		if (this.constructor === KeyBoardEvent)
			throw new TypeError("Cannot construct Abstract instances like KeyBoardEvent directly.");
	}

	/**
	 * KEY_DOWN
	 * @getter
	 */
	static get KEY_DOWN()
	{
		return KEY_DOWN;
	}

	/**
	 * KEY_PRESS
	 * @getter
	 */
	static get KEY_PRESS()
	{
		return KEY_PRESS;
	}

	/**
	 * KEY_UP
	 * @getter
	 */
	static get KEY_UP()
	{
		return KEY_UP;
	}
};

module.exports = {
	KeyBoardEvent: KeyBoardEvent,
};