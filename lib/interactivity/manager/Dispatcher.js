/*
|--------------------------------------------------------------------------
| Dispatcher
|--------------------------------------------------------------------------
|
| This file defines the Dispatcher Object.
| This object is a dispatcher for the HandyPixi events.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

class Dispatcher
{
	/**
	 * constructor
	 * This function is used in order to build a Dispatcher.
	 */
	constructor()
	{
		if (this.constructor !== Dispatcher)
			throw new TypeError("Subclassing is not allowed. Dispatcher is final.")

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
	 * addListener
	 * This function is used in order to add a listener on this dispatcher.
	 * @param {EventListener}  listener  The listener to add.
	 */
	addListener(listener)
	{
		if (!(listener instanceof EventListener))
			throw new TypeError("listener must be a EventListener.");

		for (let i = 0, l = listener.listenTo.length; i < l; i++)
		{
			if (!Array.isArray(this._listeners[listener.listenTo[i]]))
			{
				this._listeners[listener.listenTo[i]] = [];
			}

			this._listeners[listener.listenTo[i]].push(listener);
		}
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

		if (this._listeners[event.name] === undefined)
			throw new ReferenceError("There is no event listener registered for the event named " + event.name + "."); 

		for (let i = 0, ls = this._listeners[event.name]; i < ls.length; i++)
		{
			if (ls[i].handle(event))
				break;
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
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

class EventListener
{
	/**
	 * constructor
	 * This function is used in order to build an EventListener
	 * @param {Object}  options  The options for the EventListener instance.
	 */
	constructor(options)
	{
		if (this._isValid(options))
		{
			this._dispatcher = options.dispatcher;
			this.name = options.name;
			this.listenTo = options.listenTo;
			this.handle = options.handle.bind(this, options.context);

			this.register();
		}
	}


	/**
	 * register
	 * This function is used in order to register this listener in the dispatcher
	 */
	register()
	{
		
		this._dispatcher.addListener(this);
	}

	/**
    * isValid
    * This function is used in order to validate the EventListener description.
    * @param {Object} options An object containing the description of the event listener.
    * @return {Boolean} True if the EventListener description is valid, a Javascript TypeError otherwise.
    */
	_isValid(options)
	{
		if (!(options.dispatcher instanceof Dispatcher))
		{
			throw new TypeError("dispatcher must be a Dispatcher.");
		}
		if ({}.toString.call(options.handle) !== "[object Function]")
		{
			throw new TypeError(this.constructor.name + " must override the handle method.");
		}
		else if (!_.isString(options.name) || _.isEmpty(options.name))
		{
			throw new TypeError("EventListener name must be a string.");
		}
		else if (!this._isValidTarget(options.listenTo))
		{
			throw new TypeError("EventListener listenTo must be a String[*].");
		}

		return true;
	}

	/**
    * isValidTarget
    * This function is used in order to validate the target(s) of the listener.
    * @param {Array} listenTo An array containing the name of the events to monitor.
    * @return {Boolean} True if the event target is valid, false otherwise.
    */
	_isValidTarget(listenTo)
	{
		if (Array.isArray(listenTo))
		{
			for (let i = 0, l = listenTo.length; i < l; i++)
			{
				if (!(typeof listenTo[i] === "string" && {}.toString.call(listenTo[i]) === "[object String]"))
				{
					return false;
				}
			}
		}
		else
		{
			return false;
		}

		return true;
	}
};

/*
|--------------------------------------------------------------------------
| Event
|--------------------------------------------------------------------------
|
| This file defines the Event Object.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

class Event
{
	/**
	 * constructor
	 * This function is used in order to build an Event
	 * @param {Dispatcher}  dispatcher  The dispatcher instance.
	 * @param {Number}  code  The code of the event.
	 * @param {String}  name  The name of the event.
	 */
	constructor(dispatcher, code, name)
	{
		if (!(dispatcher instanceof Dispatcher))
			throw new TypeError("dispatcher must be a Dispatcher.");

		if ({}.toString.call(code) !== "[object Number]")
			throw new TypeError("code must be a number.");

		if (!(typeof name === "string" && {}.toString.call(name) === "[object String]"))
			throw new TypeError("name must be a string.");

		this._dispatcher = dispatcher;
		this.code = code;
		this.name = name;
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
	Dispatcher: Dispatcher,
	EventListener: EventListener,
	Event: Event,
};