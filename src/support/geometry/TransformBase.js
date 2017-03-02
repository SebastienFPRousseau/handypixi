/*
|--------------------------------------------------------------------------
| TransformBase
|--------------------------------------------------------------------------
|
| This file defines the TransformBase Object.
| This object build a PIXI.TransformBase for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/
const { Matrix } = require("./Matrix.js");

class TransformBase
{

	/**
	 * constructor
	 * This function is used in order to build a TransformBase.
	 * @param   {PIXI.TransformBase}   pixiObj     The Pixi object to build the HandyPixi object.
	 */
	constructor(pixiObj = null)
	{
		if (pixiObj instanceof PIXI.TransformBase)
		{
			this._out = pixiObj;
		}
		else 
		{
			this._out = new PIXI.TransformBase();
		}
	}

	/**
	 * localTransform
	 * @getter
	 * This function is a getter for the member localTransform.
	 * @return {Matrix} The local matrix transform.
	 */
	get localTransform()
	{
		return this._out.localTransform;
	}
	
	/**
	 * localTransform
	 * @setter
	 * This function is a setter for the member localTransform.
	 * @param {Matrix}  matrix  The local matrix transform.
	 */
	set localTransform(matrix)
	{
		if (!(matrix instanceof Matrix))
			throw new TypeError("matrix must be a Matrix.");

		this._out.localTransform = matrix;
	}

	/**
	 * worldTransform
	 * @getter
	 * This function is a getter for the member worldTransorm.
	 * @return {Matrix} The global matrix transform.
	 */
	get worldTransform()
	{
		return this._out.worldTransform;
	}
	
	/**
	 * worldTransform
	 * @setter
	 * This function is a setter for the member worldTransorm.
	 * @param {Matrix}  matrix  The global matrix transform.
	 */
	set worldTransform(matrix)
	{
		if (!(matrix instanceof Matrix))
			throw new TypeError("matrix must be a Matrix.");

		this._out.worldTransform = matrix;
	}
	
	/**
	 * updateLocalTransform
	 * TransformBase does not have decomposition, so this function wont do anything.
	 */
	updateLocalTransform()
	{
		this._out.updateLocalTransform();
	}
	
	/**
	 * updateTransform
	 * This function is used in order to apply the parent's transform.
	 * @param {TransformBase}  parent  The transform of the parent of this object.
	 */
	updateTransform(parent)
	{
		if (!(parent instanceof TransformBase))
			throw new TypeError("parent must be a TransformBase.");

		this._out.updateTransform(parent);
	}
}

module.exports = {
	TransformBase: TransformBase,
};