/*
|--------------------------------------------------------------------------
| EventManager
|--------------------------------------------------------------------------
|
| This file defines the EventManager Object.
| This object is an accessibility and interaction manager for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

class EventManager
{
	/**
	 * constructor
	 * This function is used in order to build a EventManager.
	 * @param {PIXI.WebGLRenderer}  renderer  The WebGLRenderer the EventManager is working for.
	 */
	constructor(renderer)
	{
		if (!(renderer instanceof PIXI.WebGLRenderer))
			throw new TypeError("renderer must be a PIXI.WebGLRenderer.");
		
		this._interactionManager = renderer.plugins.interaction;
		this._accessibilityManager = renderer.plugins.accessibility;
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
	 * cursorStyles
	 * @getter
	 * This function is a getter for the member cursorStyles.
	 * @return {Object}  Dictionary of how different cursor modes are handled. 
	 * Strings are handled as CSS cursor values, objects are handled as dictionaries of CSS values for interactionDOMElement, and functions are called instead of changing the CSS.
	 * Default CSS cursor values are provided for 'default' and 'pointer' modes.
	 */
	get cursorStyles()
	{
		return this._interactionManager.cursorStyles;
	}

	/**
	 * eventData
	 * @getter
	 * This function is a getter for the member eventData.
	 * @return {Object}  An event data object to handle all the event tracking/dispatching.
	 */
	get eventData()
	{
		return this._interactionManager.eventData;
	}

	/**
	 * currentCursorMode
	 * @getter
	 * This function is a getter for the member currentCursorMode.
	 * @return {String}  The mode of the cursor that is being used. The value of this is a key from the cursorStyles dictionary.
	 */
	get currentCursorMode()
	{
		return this._interactionManager.currentCursorMode;
	}

	/**
	 * currentCursorMode
	 * @setter
	 * This function is a setter for the member currentCursorMode.
	 * @param {String}  mode  The mode of the cursor that is being used. The value of this is a key from the cursorStyles dictionary.
	 */
	set currentCursorMode(mode)
	{
		if (!(typeof mode === "string" && {}.toString.call(mode) === "[object String]"))
			throw new TypeError("mode must be a string.");

		this._interactionManager.currentCursorMode = mode;
	}

	/**
	 * interactionFrequency
	 * @getter
	 * This function is a getter for the member interactionFrequency.
	 * @return {Number}  Frequency in milliseconds that the mousemove, moveover & mouseout interaction events will be checked.
	 */
	get interactionFrequency()
	{
		return this._interactionManager.interactionFrequency;
	}

	/**
	 * interactionFrequency
	 * @setter
	 * This function is a setter for the member interactionFrequency.
	 * @param {Number}  frequency  Frequency in milliseconds that the mousemove, moveover & mouseout interaction events will be checked.
	 */
	set interactionFrequency(frequency)
	{
		if ({}.toString.call(frequency) !== "[object Number]")
			throw new TypeError("frequency must be a number.");

		this._interactionManager.interactionFrequency = frequency;
	}

	/**
	 * supportsPointerEvents
	 * @getter
	 * This function is a getter for the member supportsPointerEvents.
	 * @return {Boolean}  Does the device support pointer events
	 */
	get supportsPointerEvents()
	{
		return this._interactionManager.supportsPointerEvents;
	}

	/**
	 * supportsTouchEvents
	 * @getter
	 * This function is a getter for the member supportsTouchEvents.
	 * @return {Boolean}  Does the device support touch events
	 */
	get supportsTouchEvents()
	{
		return this._interactionManager.supportsTouchEvents;
	}

	/**
	 * autoPreventDefault
	 * This function is used in order to automatically prevent the default browser actions.
	 * Does not apply to pointer events for backwards compatibility.
	 * @param {Boolean}  value  If the defaults events must be prevented or not.
	 */
	autoPreventDefault(value = true)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a boolean.");

		this._interactionManager.autoPreventDefault = value;
	}

	/**
	 * moveWhenInside
	 * This function is used in order to determine if mousemove and touchmove events are fired only when the cursor is over the object.
	 * Setting to true will make things work more in line with how the DOM verison works.
	 * Setting to false can make things easier for things like dragging.
	 * @param {Boolean}  value  If the defaults events must be prevented or not.
	 */
	moveWhenInside(value = true)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a boolean.");

		this._interactionManager.moveWhenInside = value;
	}

	/**
	 * mouse
	 * This function is a getter for the member mouse.
	 * @param { } [varname] [description]
	 */

	/**
	 * mapPositionToPoint
	 * This function is used in order to 
	 * @param {Point} 
	 * @param {Point}
	 */
	
	/**
	 * processInteractive
	 * This function is used in order to
	 * @param {Point} 
	 * @param {Object2D} 
	 * @param {Object} 
	 * @return {Boolean}
	 */
	
	/**
	 * update
	 * This function is used in order to
	 * @param {Number}
	 */
	
	/**
	 * capHitArea
	 * This function is used in order to
	 * @param {Number} 
	 * @param {Number} 
	 */
	
	/**
	 * notify
	 * This function is used in order to
	 * @param {Event} 
	 */

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
	 * @param {EventListenerManager}  dispatcher  The dispatcher to notify.
	 * @param {String}  name  The name of the event listener.
	 */
	constructor(dispatcher, code)
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
	EventManager: EventManager,
	EventListener: EventListener,
};