/*
|--------------------------------------------------------------------------
| TouchEventListener
|--------------------------------------------------------------------------
|
| This file defines the TouchEventListener Object.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const {EventListener} = require('./EventListener.js');
const {PixiTouchEventListener} = require('./PixiTouchEventListener.js');

/**
 * ONE_FINGER
 * Identify one finger on the touch device.
 * @type {Number}
 */
const ONE_FINGER = 1;

/**
 * TWO_FINGERS
 * Identify two fingers on the touch device.
 * @type {Number}
 */
const TWO_FINGERS = 2;

/**
 * PINCH
 * Identify the PINCH event.
 * @type {Number} 
 */
const PINCH = 0;

/**
 * SCROLL
 * Identify the SCROLL event.
 * @type {Number} 
 */
const SCROLL = 1;

class TouchEventListener extends EventListener
{
	/**
	 * constructor
	 * This function is used in order to build a TouchEventListener
	 * @param {Object2D}  obj  The object2D to bind with the event.
	 * @param {Number}  code  The code of the event.
	 * @param {Function}  handle The function called when the event is fired.
	 * @param {Object}  data  The data using by the handle function.
	 */
	constructor(obj, code, handle, data = {})
	{
		super(obj, code, handle, data);

		this._touch = [];
		this._calibration = 
		{
			x: 0,
			y: 0,
		};

		let eventListener = new PixiTouchEventListener(obj, PixiTouchEventListener.TOUCH_START, this.touchStart, this);
			eventListener = new PixiTouchEventListener(obj, PixiTouchEventListener.TOUCH_END, this.touchEnd, this);
			eventListener = new PixiTouchEventListener(obj, PixiTouchEventListener.TOUCH_ENDOUTSIDE, this.touchEnd, this);
			eventListener = new PixiTouchEventListener(obj, PixiTouchEventListener.TOUCH_MOVE, this.touchMove, this);
	}

	/**
	 * PINCH
	 * @getter
	 */
	static get PINCH()
	{
		return PINCH;
	}

	/**
	 * SCROLL
	 * @getter
	 */
	static get SCROLL()
	{
		return SCROLL;
	}

	/**
	 * type
	 * @getter
	 * This function is a getter for the member _type.
	 * @return {Number}  The code of this event.
	 */
	get type()
	{
		return this._type;
	}

	/**
	 * target
	 * @getter
	 * This function is a getter for the member _target.
	 * @return {Object2D}  The code of this event.
	 */
	get target()
	{
		return this._target;
	}

	/**
	 * getDataEvent
	 * This function is used in order to get the data of a pinch event. 
	 * @return {Object2D} The datas to know about this event. 
	 */
	getDataEvent()
	{
		let deltaX = null;
		let deltaY = null;

		if (this._touch.length >= TWO_FINGERS)
		{
			deltaX = Math.abs(this._touch[0].clientX - this._touch[1].clientX) - this._calibration.x;
			deltaY = Math.abs(this._touch[0].clientY - this._touch[1].clientY) - this._calibration.y;
		}
		else
		{
			deltaX = this._touch[0].clientX - this._calibration.x;
			deltaY = this._touch[0].clientY - this._calibration.y;
		}

		let data = 
		{
			touch: this._touch,
			deltaX: deltaX,
			deltaY: deltaY,
		};

		return data;
	}

	/**
	 * calibrate
	 * This function is used in order to calibrate the delta calculation.
	 */
	calibrate()
	{
		let touch = this._touch;

		if (touch.length >= TWO_FINGERS)
		{
			this._calibration.x = Math.abs(touch[0].clientX - touch[touch.length-1].clientX);				
			this._calibration.y = Math.abs(touch[0].clientY - touch[touch.length-1].clientY);
		}
		else if (touch.length >= ONE_FINGER)
		{
			this._calibration.x = touch[0].clientX;				
			this._calibration.y = touch[0].clientY;
		}
		else 
		{
			this._calibration.x = 0;				
			this._calibration.y = 0;
		}
	}

	/**
	 * touchStart
	 * This function is used in order to treat a touch start.
	 */
	touchStart(context, event)
	{
		context._touch.push(event.data.originalEvent.changedTouches[0]);

		context.calibrate.bind(context)();
	} 

	/**
	 * touchEnd
	 * This function is used in order to treat a touch end.
	 */
	touchEnd(context, event)
	{
		for(let i = 0, l = context._touch.length; i < l; i++)
		{
			if (event.data.originalEvent.changedTouches[0].identifier === context._touch[i].identifier)
			{
				context._touch.splice(i, 1);
				break;
			}
		}

		context.calibrate.bind(context)();
	}

	/**
	 * touchMove
	 * This function is used in order to treat a touch move.
	 */
	touchMove(context, event)
	{
		switch(context.type)
		{
			case PINCH:
				if (context._touch.length === TWO_FINGERS)
					context.pinchEvent.bind(context, event)();
			break;

			case SCROLL:
				if (context._touch.length === ONE_FINGER)
					context.scrollEvent.bind(context, event)();
			break;
		}
	}

	/**
	 * pinchEvent
	 * This function is used if a pinch event happens.
	 */
	pinchEvent(event)
	{
		for(let i = 0; i < TWO_FINGERS; i++)
		{
			if (event.data.originalEvent.changedTouches[0].identifier === this._touch[i].identifier)
			{
				this._touch[i] = event.data.originalEvent.changedTouches[0];
				this._handle.bind(this, this._data, this.getDataEvent())();
				break;
			}
		}
	}

	/**
	 * scrollEvent
	 * This function is used if a scroll event happens.
	 */ 
	scrollEvent(event)
	{
		if (event.data.originalEvent.changedTouches[0].identifier === this._touch[0].identifier)
		{
			this._touch[0] = event.data.originalEvent.changedTouches[0];
			this._handle.bind(this, this._data, this.getDataEvent())();
		}
	}
};

module.exports = {
	TouchEventListener: TouchEventListener,
};