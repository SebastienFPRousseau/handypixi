/*
|--------------------------------------------------------------------------
| Plane
|--------------------------------------------------------------------------
|
| This file defines the Plane Object.
| This object build a PIXI.mesh.Plane for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Mesh } = require("./Mesh.js");

class Plane extends Mesh
{
	/**
	 * constructor
	 * This function is used in order to build a Plane.
	 * @param {Number}  verticesX  The number of vertices in the x-axis.
	 * @param {Number}  verticesY  The number of vertices in the y-axis.
	 * @param {PIXI.mesh.Plane}  verticesX  The Pixi object to build the HandyPixi object.
	 */
	constructor(verticesX = 10, verticesY = 10)
	{
		super(); 

		if (this.constructor !== Plane)
     		return ;

     	if ({}.toString.call(verticesY) !== "[object Number]")
			throw new TypeError("verticesY must be a number.");

		if (verticesX instanceof PIXI.mesh.Plane)
		{
			this._out = verticesX;
		}
		else 
		{
			if ({}.toString.call(verticesX) !== "[object Number]")
				throw new TypeError("verticesX must be a number.");

			this._out = new PIXI.mesh.Plane(PIXI.Texture.EMPTY, verticesX, verticesY);
		}
	}

	/**
	 * verticesX
	 * @getter
	 * This function is a getter for the member verticesX.
	 * @return {Number} The number of vertices in the x-axis.
	 */
	get verticesX()
	{
		return this._out.verticesX;
	}

	/**
	 * verticesY
	 * @getter
	 * This function is a getter for the member verticesY.
	 * @return {Number} The number of vertices in the y-axis.
	 */
	get verticesY()
	{
		return this._out.verticesY;
	}

	/**
	 * refresh
	 * This function is used in order to refresh the Plane.
	 */
	refresh()
	{
		this._out.refresh();
	}
};

module.exports = {
	Plane: Plane,
};