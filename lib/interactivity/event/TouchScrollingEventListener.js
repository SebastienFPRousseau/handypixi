/*
|--------------------------------------------------------------------------
| TouchScrollingEventListener
|--------------------------------------------------------------------------
|
| This file defines the TouchScrollingEventListener Object.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const {ScrollingEventListener} = require('./ScrollingEventListener.js');
const {PixiTouchEventListener} = require('./PixiTouchEventListener.js');

/**
 * PINCH
 * Identify the PINCH event.
 * @type {Number} 
 */
const PINCH = 0;

class TouchScrollingEventListener extends ScrollingEventListener
{
	/**
	 * constructor
	 * This function is used in order to build a TouchScrollingEventListener
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

		let eventListener = new PixiTouchEventListener(obj, PixiTouchEventListener.TOUCH_START, this.insideObject2D, this);
			eventListener = new PixiTouchEventListener(obj, PixiTouchEventListener.TOUCH_END, this.outsideObject2D, this);
			eventListener = new PixiTouchEventListener(obj, PixiTouchEventListener.TOUCH_ENDOUTSIDE, this.outsideObject2D, this);
			eventListener = new PixiTouchEventListener(obj, PixiTouchEventListener.TOUCH_MOVE, this.fire, this);
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
		let data = null;

		if (this._touch.length === 2)
		{
			let deltaX = Math.abs(this._touch[0].clientX - this._touch[1].clientX) - this._calibration.x;
			let deltaY = Math.abs(this._touch[0].clientY - this._touch[1].clientY) - this._calibration.y;

			data = 
			{
				touch: this._touch,
				deltaX: deltaX,
				deltaY: deltaY,
			};
		}

		return data;
	}

	/**
	 * insideObject2D
	 * This function is used in order to add the event listener.
	 */
	insideObject2D(context, event)
	{
		let touch = context._touch;

		if (touch.length < 2)
		{
			touch.push(event.data.originalEvent.changedTouches[0]);

			if (touch.length === 2)
			{
				context._calibration.x = Math.abs(touch[0].clientX - touch[1].clientX);
				context._calibration.y = Math.abs(touch[0].clientY - touch[1].clientY);
			}
		}
	} 

	/**
	 * outsideObject2D
	 * This function is used in order to remove the event listener.
	 */
	outsideObject2D(context, event)
	{
		for(let i = 0; i < 2; i++)
		{
			if(event.data.originalEvent.changedTouches[0].identifier === context._touch[i].identifier)
			{
				context._touch.splice(i, 1);
				break;
			}
		}
	}

	/**
	 * fire
	 * This function is used in order to fire the events
	 */
	fire(context, event)
	{
		switch(context.type)
		{
			case PINCH:
				let touch = context._touch;
				if (touch.length === 2)
				{
					for(let i = 0; i < 2; i++)
					{
						if(event.data.originalEvent.changedTouches[0].identifier === touch[i].identifier)
						{
							touch[i] = event.data.originalEvent.changedTouches[0];
							context._handle.bind(context, context._data, context.getDataEvent())();
							break;
						}
					}
				}
			break;
		}
	}
};

module.exports = {
	TouchScrollingEventListener: TouchScrollingEventListener,
};