/*
|--------------------------------------------------------------------------
| Transform
|--------------------------------------------------------------------------
|
| This file defines the Transform Object.
| This object build a PIXI.Transform for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/
const { Matrix } = require("./Matrix.js");
const { TransformBase } = require("./TransformBase.js");
const { Point } = require("./Point.js");
const { ObservablePoint } = require("./ObservablePoint.js");

class Transform extends TransformBase
{

	/**
	 * constructor
	 * This function is used in order to build a Transform.
	 * @param   {PIXI.Transform}   pixiObj     The Pixi object to build the HandyPixi object.
	 */
	constructor(pixiObj = null)
	{
		super();
		if (pixiObj instanceof PIXI.Transform)
		{
			this._out = pixiObj;
		}
		else 
		{
			this._out = new PIXI.Transform();
		}
	}

	/**
	 * pivot
	 * @getter
	 * This function is a getter for the member pivot.
	 * @return {Point} The pivot point of the displayObject that it rotates around.
	 */
	get pivot()
	{
		return new Point(this._out.pivot);
	}

	/**
	 * pivot
	 * @setter
	 * This function is a setter for the member pivot.
	 * @param {Point}  pivot  The pivot point of the displayObject that it rotates around.
	 */
	set pivot(pivot)
	{
		if (!(pivot instanceof Point))
			throw new TypeError("pivot must be a Point.");

		this._out.pivot = pivot.out;
	}

	/**
	 * position
	 * @getter
	 * This function is a getter for the member position.
	 * @return {Point} The coordinate of the object relative to the local coordinates of the parent.
	 */
	get position()
	{
		return new Point(this._out.position);
	}

	/**
	 * position
	 * @setter
	 * This function is a setter for the member position.
	 * @param {Point}  position  The coordinate of the object relative to the local coordinates of the parent.
	 */
	set position(position)
	{
		if (!(position instanceof Point))
			throw new TypeError("position must be a Point.");

		this._out.position = position.out;
	}

	/**
	 * rotation
	 * @getter
	 * This function is a getter for the member rotation.
	 * @return {Number} The rotation of the object in radians.
	 */
	get rotation()
	{
		return this._out.rotation;
	}

	/**
	 * rotation
	 * @setter
	 * This function is a setter for the member rotation.
	 * @param {Number}  rotation  The rotation of the object in radians.
	 */
	set rotation(rotation)
	{
		if ({}.toString.call(rotation) !== "[object Number]")
			throw new TypeError("rotation must be a number.");

		this._out.rotation = rotation;
	}

	/**
	 * scale
	 * @getter
	 * This function is a getter for the member scale.
	 * @return {Point} The scale factor of the object.
	 */
	get scale()
	{
		return new Point(this._out.scale);
	}
	
	/**
	 * scale
	 * @setter
	 * This function is a setter for the member scale.
	 * @param {Point}  scale  The scale factor of the object.
	 */
	set scale(scale)
	{
		if (!(scale instanceof Point))
			throw new TypeError("scale must be a Point.");

		this._out.scale = scale.out;
	}

	/**
	 * skew
	 * @getter
	 * This function is a getter for the member skew.
	 * @return {ObservablePoint} The skew amount, on the x and y axis.
	 */
	get skew()
	{
		return new ObservablePoint(this._out.skew);
	}

	/**
	 * skew
	 * @setter
	 * This function is a setter for the member skew.
	 * @param {ObservablePoint}  skew   The skew amount, on the x and y axis.
	 */
	set skew(skew)
	{
		if (!(skew instanceof ObservablePoint))
			throw new TypeError("skew must be a ObservablePoint.");

		this._out.skew = skew.out;
	}

	/**
	 * setFromMatrix
	 * This function is used in order to sets the transforms properties based on a matrix.
	 * @param {Matrix}  matrix  The matrix to decompose.
	 */
	setFromMatrix(matrix)
	{
		if (!(matrix instanceof Matrix))
			throw new TypeError("matrix must be a Matrix.");

		this._out.setFromMatrix(matrix.out);
	}

	/**
	 * updateTransform
	 * This function is used in order to apply the parent's transform.
	 * @param {Transform}  parent  The transform of the parent of this object.
	 */
	updateTransform(parent)
	{
		if (!(parent instanceof Transform))
			throw new TypeError("parent must be a Transform.");

		this._out.updateTransform(parent.out);
	}
}

module.exports = {
	Transform: Transform,
};