/*
|--------------------------------------------------------------------------
| LookMaskShader
|--------------------------------------------------------------------------
|
| This file defines the LookMaskShader Object.
| This object build a PIXI.SpriteMaskFilter for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Shader } = require("./Shader.js");
const { Look } = require("./../look/Look.js");

class LookMaskShader extends Shader {
	/**
 * constructor
 * This function is used in order to build a LookMaskShader.
 * @param {Look}  look  The target for the shader.
 * @param {PIXI.SpriteMaskFilter}  look  The Pixi object to build the HandyPixi object.
 */
	constructor(look) {
		super();

		if (look instanceof PIXI.SpriteMaskFilter) {
			this._out = look;
		} else {
			if (!(look instanceof Look)) throw new TypeError("look must be a Look.");

			this._out = new PIXI.SpriteMaskFilter(look.out);
		}
	}

	/**
 * out
 * @getter
 * This function is a getter for the member _out.
 * @return  {PIXI.SpriteMaskFilter} The PIXI Object used by this object. 
 */
	get out() {
		return this._out;
	}

	/**
  * clone
  * This function is used in order to clone this Shader
  * @return {Shader} A copy of this Shader.
  */
	clone() {
		return new LookMaskShader(this._out);
	}
};

module.exports = {
	LookMaskShader: LookMaskShader
};