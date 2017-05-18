/*
|--------------------------------------------------------------------------
| NineSlicePlane
|--------------------------------------------------------------------------
|
| This file defines the NineSlicePlane Object.
| This object build a PIXI.mesh.NineSlicePlane for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Plane } = require("./Plane.js");

class NineSlicePlane extends Plane {
	/**
  * constructor
  * This function is used in order to build a NineSlicePlane.
  * @param {Object}  barsSizes  Sizes of the bar horizontal and vertical. 
  * @param {PIXI.mesh.NineSlicePlane}  barsSizes  The Pixi object to build the HandyPixi object.
  */
	constructor(barsSizes = {}) {
		super();

		if (barsSizes instanceof PIXI.mesh.NineSlicePlane) {
			this._out = barsSizes;
		} else {
			if (!(typeof barsSizes === "object" && {}.toString.call(barsSizes) === "[object Object]")) throw new TypeError("barsSizes must be an object.");

			this._out = new PIXI.mesh.NineSlicePlane(PIXI.Texture.EMPTY, barsSizes.leftWidth, barsSizes.topHeight, barsSizes.rightWidth, barsSizes.bottomHeight);
		}
	}

	/**
  * barsSizes
  * @getter
  * This function is a getter for the member barsSizes.
  * @return {Object} Sizes of the bar horizontal and vertical.
  */
	get barsSizes() {
		return { leftWidth: this._out.leftWidth, topHeight: this._out.topHeight,
			rightWidth: this._out.rightWidth, bottomHeight: this._out.bottomHeight };
	}

	/**
  * barsSizes
  * @setter
  * This function is a setter for the member barsSizes.
  * @param {Object}  barsSizes  Sizes of the bar horizontal and vertical.
  */
	set barsSizes(barsSizes) {
		if (!(typeof barsSizes === "object" && {}.toString.call(barsSizes) === "[object Object]")) throw new TypeError("barsSizes must be an object.");

		if (barsSizes.leftWidth !== undefined) this._out.leftWidth = barsSizes.leftWidth;

		if (barsSizes.topHeight !== undefined) this._out.topHeight = barsSizes.topHeight;

		if (barsSizes.rightWidth !== undefined) this._out.rightWidth = barsSizes.rightWidth;

		if (barsSizes.bottomHeight !== undefined) this._out.bottomHeight = barsSizes.bottomHeight;
	}

	/**
  * update
  * This function is used in order to update the vertices.
  */
	update() {
		this._out.updateHorizontalVertices();
		this._out.updateVerticalVertices();
	}
};

module.exports = {
	NineSlicePlane: NineSlicePlane
};