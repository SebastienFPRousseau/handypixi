/*
|--------------------------------------------------------------------------
| Dispatcher
|--------------------------------------------------------------------------
|
| This file defines the Dispatcher Object.
| This object is a dispatcher for the HandyPixi events.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Event } = require("./../event/Event.js");

class Dispatcher
{
	/**
	 * constructor
	 * This function is used in order to build a Dispatcher.
	 */
	constructor()
	{
		this._listeners = [];
	}

    /**
	 * listeners
	 * @getter
	 * This function is a getter for the member _listeners.
	 * @return {EventListener[]} The event listeners binded on this manager.
	 */
	get listeners()
	{
		return this._listeners;
	}

	/**
	 * addListeners
	 * This function is used in order to add a listener on this dispatcher.
	 * @param {EventListener}  listener  The listener to add.
	 */
	addListeners(listener)
	{
		if (!(listener instanceof EventListener))
			throw new TypeError("listener must be a EventListener.");

	}

	/**
	 * notify
	 * This function is used in order to call the handle methods of the listeners.
	 * @param {Event}  event  The event fired.
	 */
	notify(event)
	{
		if (!(event instanceof Event))
			throw new TypeError("event must be a Event.");

		for (let i = 0, l = this._listeners.length; i < l; i++)
		{
			if (event === this._listeners[i].event)
				this._listeners[i].handle(event);
		}
	}
};

/*
|--------------------------------------------------------------------------
| EventListener
|--------------------------------------------------------------------------
|
| This file defines the EventListener Object.
| This object is the EventListener for the handypixi events.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

class EventListener
{
	/**
	 * constructor
	 * This function is used in order to forbidden the built of an EventListener
	 * @param {EventManager}  dispatcher  The dispatcher to notify.
	 * @param {String}  name  The name of the event listener.
	 */
	constructor(dispatcher, name)
	{
		if (this.constructor === EventListener)
			throw new TypeError("Cannot construct Abstract instances like EventListener directly.");

		if (!_.isFunction(this.handle))
			throw new TypeError(this.constructor.name + " must override the handle method.");

		if (!(obj instanceof EventListenerManager))
			throw new TypeError("obj must be a EventListenerManager.");

		if ({}.toString.call(code) !== "[object Number]")
			throw new TypeError("code must be a number.");

		this._dispatcher = dispatcher;

		this._event = null;
	}

	/**
	 * event
	 * @getter
	 * This function is a getter for the member _listeners.
	 * @return {Event} The event listened by this listener.
	 */
	get event()
	{
		return this._event;
	}

	/**
	 * register
	 * This function is used in order to register this listener in the dispatcher
	 */
	register()
	{
		this._dispatcher.addListener(this);
	}
};

module.exports = {
	Dispatcher: Dispatcher,
	EventListener: EventListener,
};