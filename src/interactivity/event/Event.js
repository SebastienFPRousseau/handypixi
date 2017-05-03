/*
|--------------------------------------------------------------------------
| Event
|--------------------------------------------------------------------------
|
| This file defines the Event Object.
| This object is the abstract event for the handypixi events.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Dispatcher } = require("./../manager/Dispatcher.js");

class Event
{
	/**
	 * constructor
	 * This function is used in order to forbidden the built of an Event
	 * @param {Dispatcher}  dispatcher  The dispatcher to notify.
	 * @param {Number}  code  The code of the event.
	 */
	constructor(dispatcher, code)
	{
		if (this.constructor === Event)
			throw new TypeError("Cannot construct Abstract instances like Event directly.");

		if (!(dispatcher instanceof Dispatcher))
			throw new TypeError("dispatcher must be a Dispatcher.");

		if ({}.toString.call(code) !== "[object Number]")
			throw new TypeError("code must be a number.");

		this._dispatcher = dispatcher;
		this._code = code;
	}

	/**
	 * fire
	 * This function is used in order to notify the dispatcher than the event is fired.
	 */
	fire()
	{
		this._dispatcher.notify(this);
	}
};

module.exports = {
	Event: Event,
};