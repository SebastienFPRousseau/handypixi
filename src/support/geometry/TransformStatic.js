/*
|--------------------------------------------------------------------------
| TransformStatic
|--------------------------------------------------------------------------
|
| This file defines the TransformStatic Object.
| This object build a PIXI.TransformStatic for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/
const { Matrix } = require("./Matrix.js");
const { TransformBase } = require("./TransformBase.js");
const { ObservablePoint } = require("./ObservablePoint.js");

class TransformStatic extends TransformBase
{

	/**
	 * constructor
	 * This function is used in order to build a TransformStatic.
	 * @param   {PIXI.TransformStatic}   pixiObj     The Pixi object to build the HandyPixi object.
	 */
	constructor(pixiObj = null)
	{
		super();
		if (pixiObj instanceof PIXI.TransformStatic)
		{
			this._out = pixiObj;
		}
		else 
		{
			this._out = new PIXI.TransformStatic();
		}
	}

	/**
	 * pivot
	 * @getter
	 * This function is a getter for the member pivot.
	 * @return {ObservablePoint} The pivot point of the displayObject that it rotates around.
	 */
	get pivot()
	{
		return new ObservablePoint(this._out.pivot);
	}

	/**
	 * pivot
	 * @setter
	 * This function is a setter for the member pivot.
	 * @param {ObservablePoint}  pivot  The pivot point of the displayObject that it rotates around.
	 */
	set pivot(pivot)
	{
		if (!(pivot instanceof ObservablePoint))
			throw new TypeError("pivot must be an ObservablePoint.");

		this._out.pivot = pivot.out;
	}

	/**
	 * position
	 * @getter
	 * This function is a getter for the member position.
	 * @return {ObservablePoint} The coordinate of the object relative to the local coordinates of the parent.
	 */
	get position()
	{
		return new ObservablePoint(this._out.position);
	}

	/**
	 * position
	 * @setter
	 * This function is a setter for the member position.
	 * @param {ObservablePoint}  position  The coordinate of the object relative to the local coordinates of the parent.
	 */
	set position(position)
	{
		if (!(position instanceof ObservablePoint))
			throw new TypeError("position must be an ObservablePoint.");

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
	 * @return {ObservablePoint} The scale factor of the object.
	 */
	get scale()
	{
		return new ObservablePoint(this._out.scale);
	}
	
	/**
	 * scale
	 * @setter
	 * This function is a setter for the member scale.
	 * @param {ObservablePoint}  scale  The scale factor of the object.
	 */
	set scale(scale)
	{
		if (!(scale instanceof Point))
			throw new TypeError("scale must be an ObservablePoint.");

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
			throw new TypeError("skew must be an ObservablePoint.");

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
	TransformStatic: TransformStatic,
};