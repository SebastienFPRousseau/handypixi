/*
|--------------------------------------------------------------------------
| ObservablePoint
|--------------------------------------------------------------------------
|
| This file defines the ObservablePoint Object.
| This object build a PIXI.ObservablePoint for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { AbstractPoint } = require("./AbstractPoint.js");

class ObservablePoint extends AbstractPoint
{
	/**
	* constructor
	* This function is used in order to build an ObservablePoint.
	* @param   {Function}   onMove         Callback when the point's position is changed.
	* @param   {Object}   scope         Owner of callback.
	* @param   {Number}   x         Position of the point on the x axis.
	* @param   {Number}   y         Position of the point on the y axis
	* @param   {PIXI.ObservablePoint}   onMove         The Pixi object to build the HandyPixi object.
	*/
	constructor(onMove, scope, x, y)
	{
		super();

		if (onMove instanceof PIXI.ObservablePoint)
		{
			this._out = onMove;
		}
		else 
		{
			if ({}.toString.call(onMove) !== "[object Function]")
				throw new TypeError("onMove must be a function.");

			if (!(typeof scope === "object" && {}.toString.call(scope) === "[object Object]"))
				throw new TypeError("scope must be an object.");

			if ({}.toString.call(x) !== "[object Number]")
				throw new TypeError("x must be a number.");

			if ({}.toString.call(y) !== "[object Number]")
				throw new TypeError("y must be a number.");

			this._out = new PIXI.ObservablePoint(onMove, scope, x, y);
		}
	}

	/**
	* out
	* @getter
	* This function is a getter for the member _out.
	* @return  {PIXI.ObservablePoint} The PIXI Object used by this object. 
	*/
	get out()
	{
		return this._out;
	}

	/**
	* x
	* @getter
	* This function is a getter for the member x.
	* @return  {Number} Position of the point on the x axis. 
	*/
	get x()
	{
		return this._out.x;
	}

	/**
	* x
	* @setter
	* This function is a setter for the member x.
	* @param  {Number} 	x 	 Position of the point on the x axis. 
	*/
	set x(x)
	{
		if ({}.toString.call(x) !== "[object Number]")
			throw new TypeError("x must be a number.");

		this._out.x = x;
	}

	/**
	* y
	* @getter
	* This function is a getter for the member y.
	* @return  {Number} Position of the point on the y axis. 
	*/
	get y()
	{
		return this._out.y;
	}

	/**
	* y
	* @setter
	* This function is a setter for the member y.
	* @param  {Number} 	y  Position of the point on the y axis. 
	*/
	set y(y)
	{
		if ({}.toString.call(y) !== "[object Number]")
			throw new TypeError("y must be a number.");

		this._out.y = y;
	}

	/**
	* set
	* This function is a setter for the members x and y.
	* @param  {Number}	x 	Position of the point on the x axis. 
	* @param  {Number}	y 	Position of the point on the y axis.
	*/
	set(x, y)
	{
		this.x = x;
		this.y = y;
	}

	/**
	* copy
	* This function is used in order to copy this ObservablePoint into the given ObservablePoint.
	* @param {ObservablePoint}	point 	The ObservablePoint to change. 
	* @param {Point}	point 	The Point to copy. 
	*/
	copy(point)
	{
		if (!(point instanceof Point || point instanceof ObservablePoint))
			throw new TypeError("point must be a Point or an ObservablePoint.");

		this._out.copy(point.out);
	}
};

module.exports = 
{
	ObservablePoint: ObservablePoint,
};