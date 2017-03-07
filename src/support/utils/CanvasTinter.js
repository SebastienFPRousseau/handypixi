/*
|--------------------------------------------------------------------------
| CanvasTinter
|--------------------------------------------------------------------------
|
| This file defines the CanvasTinter Object.
| This object build a PIXI.CanvasTinter for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

class CanvasTinter
{
	/**
	 * constructor
	 * This function is used in order to build a CanvasTinter.
	 */
	constructor()
	{
		this._out = PIXI.CanvasTinter;
	}

	/**
	* out
	* @getter
	* This function is a getter for the member _out.
	* @return  {PIXI.CanvasTinter} The PIXI Object used by this object. 
	*/
	get out()
	{
		return this._out;
	}

}

module.exports = {
	CanvasTinter: CanvasTinter,
};