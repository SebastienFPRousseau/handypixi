/*
|--------------------------------------------------------------------------
| Point
|--------------------------------------------------------------------------
|
| This file defines the Point Object.
| This object build a PIXI.Point for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

Point = class Point
{
	/**
	* constructor
	* This function is used in order to build a Point.
	* @param   {Number}   x         Position of the point on the x axis.
	* @param   {Number}   y         Position of the point on the y axis
	* @param   {PIXI.Point}   x         The Pixi object to build the HandyPixi object.
	*/
	constructor(x, y)
	{
		if (x instanceof PIXI.Point)
		{
			this._out = x;
		}
		else 
		{
			this._out = new PIXI.Point(x, y);
		}
	}

	/**
	* getOut
	* This function is a getter for the member _out.
	* @return  {PIXI.Point} The PIXI Object used by this object. 
	*/
	getOut()
	{
		return this._out;
	}

	/**
	* getX
	* This function is a getter for the member x.
	* @return  {Number} Position of the point on the x axis. 
	*/
	getX()
	{
		return this._out.x;
	}

	/**
	* setX
	* This function is a setter for the member x.
	* @param  {Number} 	x 	 Position of the point on the x axis. 
	*/
	setX(x)
	{
		this._out.x = x;
	}

	/**
	* getY
	* This function is a getter for the member y.
	* @return  {Number} Position of the point on the y axis. 
	*/
	getY()
	{
		return this._out.y;
	}

	/**
	* setY
	* This function is a setter for the member y.
	* @param  {Number}	y 	 Position of the point on the y axis. 
	*/
	setY(y)
	{
		this._out.y = y;
	}

	/**
	* set
	* This function is a setter for the members x and y.
	* @param  {Number} 	x 	 Position of the point on the x axis. 
	* @param  {Number} 	y 	 Position of the point on the y axis.
	*/
	set(x, y)
	{
		this._out.x = x;
		this._out.y = y;
	}

	/**
	* clone
	* This function is used in order to clone this Point.
	* @return {Point} A copy of this Point. 
	*/
	clone()
	{
		return new Point(this._out.clone());
	}

	/**
	* copy
	* This function is used in order to copy the given Point.
	* @param {Point} 	point 	 The Point to copy. 
	*/
	copy(point)
	{
		this._out.copy(point.getOut());
	}

	/**
	* equals
	* This function is used in order to know if the given Point is equal to this Point.
	* @return {Boolean} True if the points are equals. 
	*/
	equals(point)
	{
		return this._out.equals(point.getOut());
	}
}

module.exports = {
	Point: Point,
};