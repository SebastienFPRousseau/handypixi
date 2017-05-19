/*
|--------------------------------------------------------------------------
| Rope
|--------------------------------------------------------------------------
|
| This file defines the Rope Object.
| This object build a PIXI.mesh.Rope for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Mesh } = require("./Mesh.js");
const { Point } = require("./../../../support/geometry/Point.js");

class Rope extends Mesh
{
	/**
	 * constructor
	 * This function is used in order to build a Rope.
	 * @param {Points[]}  points  An array of Point to construct this rope. They can't change after building.
	 * @param {PIXI.mesh.Rope}  points  The Pixi object to build the HandyPixi object.
	 */
	constructor(points)
	{
		super(); 

		if (points instanceof PIXI.mesh.Rope)
		{
			this._out = points;
		}
		else if (!Array.isArray(points))
		{
			throw new TypeError("points must be an array.");
		}
		else 
		{
			let pixiPoints = [];
			for(let i = 0, l = points.length; i < l; i++)
			{
				if (!(points[i] instanceof Point))
					throw new TypeError("Can't use the "+ i +" element, it must be a Point");

				pixiPoints.push(points[i].out);
			}

			this._out = new PIXI.mesh.Rope(PIXI.Texture.EMPTY, pixiPoints);
		}
	}

	/**
	 * points
	 * @getter
	 * This function is a getter for the member points.
	 * @return {Points[]} The points of this Rope.
	 */
	get points()
	{
		let outPoints = [];

		for (let i = 0, l = this._out.points.length; i < l; i++)
			outPoints.push(new Point(this._out.points[i]));

		return outPoints;
	}
};

module.exports = {
	Rope: Rope,
};