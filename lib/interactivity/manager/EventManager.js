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

const { Point } = require("./../../support/geometry/Point.js");
const { Object2D } = require("./../../displayObject/object2D/Object2D.js");
const { Bounds } = require("./../../displayObject/bounds/Bounds.js");
const { Dispatcher } = require("./Dispatcher.js");

class EventManager {
	/**
  * constructor
  * This function is used in order to build a EventManager.
  * @param {PIXI.WebGLRenderer|PIXI.CanvasRenderer} renderer The renderer the EventManager is working for.
  */
	constructor(renderer) {
		if (!(renderer instanceof PIXI.WebGLRenderer || renderer instanceof PIXI.CanvasRenderer)) throw new TypeError("renderer must be either a PIXI.WebGLRenderer or a PIXI.CanvasRenderer .");

		this._interactionManager = renderer.plugins.interaction;
		this._accessibilityManager = renderer.plugins.accessibility;
		this._dispatcher = new Dispatcher();
	}

	/**
  * dispatcher
  * @getter
  * This function is a getter for the member dispatcher.
  * @return {Dispatcher}  A dispatcher instance.
  */
	get dispatcher() {
		return this._dispatcher;
	}

	/**
  * cursorStyles
  * @getter
  * This function is a getter for the member cursorStyles.
  * @return {Object}  Dictionary of how different cursor modes are handled. 
  * Strings are handled as CSS cursor values, objects are handled as dictionaries of CSS values for interactionDOMElement, and functions are called instead of changing the CSS.
  * Default CSS cursor values are provided for 'default' and 'pointer' modes.
  */
	get cursorStyles() {
		return this._interactionManager.cursorStyles;
	}

	/**
  * eventData
  * @getter
  * This function is a getter for the member eventData.
  * @return {Object}  An event data object to handle all the event tracking/dispatching.
  */
	get eventData() {
		return this._interactionManager.eventData;
	}

	/**
  * currentCursorMode
  * @getter
  * This function is a getter for the member currentCursorMode.
  * @return {String}  The mode of the cursor that is being used. The value of this is a key from the cursorStyles dictionary.
  */
	get currentCursorMode() {
		return this._interactionManager.currentCursorMode;
	}

	/**
  * currentCursorMode
  * @setter
  * This function is a setter for the member currentCursorMode.
  * @param {String}  mode  The mode of the cursor that is being used. The value of this is a key from the cursorStyles dictionary.
  */
	set currentCursorMode(mode) {
		if (!(typeof mode === "string" && {}.toString.call(mode) === "[object String]")) throw new TypeError("mode must be a string.");

		this._interactionManager.currentCursorMode = mode;
	}

	/**
  * interactionFrequency
  * @getter
  * This function is a getter for the member interactionFrequency.
  * @return {Number}  Frequency in milliseconds that the mousemove, moveover & mouseout interaction events will be checked.
  */
	get interactionFrequency() {
		return this._interactionManager.interactionFrequency;
	}

	/**
  * interactionFrequency
  * @setter
  * This function is a setter for the member interactionFrequency.
  * @param {Number}  frequency  Frequency in milliseconds that the mousemove, moveover & mouseout interaction events will be checked.
  */
	set interactionFrequency(frequency) {
		if ({}.toString.call(frequency) !== "[object Number]") throw new TypeError("frequency must be a number.");

		this._interactionManager.interactionFrequency = frequency;
	}

	/**
  * supportsPointerEvents
  * @getter
  * This function is a getter for the member supportsPointerEvents.
  * @return {Boolean}  Does the device support pointer events
  */
	get supportsPointerEvents() {
		return this._interactionManager.supportsPointerEvents;
	}

	/**
  * supportsTouchEvents
  * @getter
  * This function is a getter for the member supportsTouchEvents.
  * @return {Boolean}  Does the device support touch events
  */
	get supportsTouchEvents() {
		return this._interactionManager.supportsTouchEvents;
	}

	/**
  * autoPreventDefault
  * This function is used in order to automatically prevent the default browser actions.
  * Does not apply to pointer events for backwards compatibility.
  * @param {Boolean}  value  If the defaults events must be prevented or not.
  */
	autoPreventDefault(value = true) {
		if ({}.toString.call(value) !== "[object Boolean]") throw new TypeError("value must be a boolean.");

		this._interactionManager.autoPreventDefault = value;
	}

	/**
  * moveWhenInside
  * This function is used in order to determine if mousemove and touchmove events are fired only when the cursor is over the object.
  * Setting to true will make things work more in line with how the DOM verison works.
  * Setting to false can make things easier for things like dragging.
  * @param {Boolean}  value  If the defaults events must be prevented or not.
  */
	moveWhenInside(value = true) {
		if ({}.toString.call(value) !== "[object Boolean]") throw new TypeError("value must be a boolean.");

		this._interactionManager.moveWhenInside = value;
	}

	/**
  * mouse
  * @getter
  * This function is a getter for the member mouse.
  * @return {PIXI.interaction.interactionData}  The data concerning the mouse.
  */
	get mouse() {
		return this._interactionManager.mouse;
	}

	/**
  * mapPositionToPoint
  * This function is used in order to map x and y coords from a DOM object and maps them correctly to the pixi view.
  * @param {Point}  point  The point that the result will be stored in.  
  * @param {Point}  position  The position to map.
  */
	mapPositionToPoint(point, position) {
		if (!(point instanceof Point)) throw new TypeError("point must be a Point.");

		if (!(position instanceof Point)) throw new TypeError("position must be a Point.");

		this._interactionManager.mapPositionToPoint(point.out, position.x, position.y);
	}

	/**
  * update
  * This function is used in order to update the state of interactive objects.
  * @param {Number}  deltaTime  The time delta since last tick.
  */
	update(deltaTime) {
		if ({}.toString.call(deltaTime) !== "[object Number]") throw new TypeError("deltaTime must be a number.");

		this._interactionManager.update(deltaTime);
	}

	/**
  * capHitArea
  * This function is used in order to define a hit area for the events.
  * @param {Bounds}  hitArea  The bounds of the event hit area.
  */
	capHitArea(hitArea) {
		if (!(hitArea instanceof Bounds)) throw new TypeError("hitArea must be a Bounds.");

		this._accessibilityManager.capHitArea(hitArea.out);
	}
};

module.exports = {
	EventManager: EventManager
};