/*
|--------------------------------------------------------------------------
| Sprite
|--------------------------------------------------------------------------
|
| This file defines the Sprite Object.
| This object build a PIXI.Sprite for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { ObservablePoint } = require("./../../../../support/geometry/ObservablePoint.js");
const { Mask } = require("./../Mask.js");

class Sprite extends Mask {
	/**
 * constructor
 * This function is used in order to build a Sprite.
 * @param {PIXI.Sprite}  pixiObj  The Pixi object to build the HandyPixi object.
 */
	constructor(pixiObj = null) {
		super();

		if (pixiObj === null && this.constructor !== Sprite) return;

		if (pixiObj instanceof PIXI.Sprite) {
			this._out = pixiObj;
		} else {
			this._out = new PIXI.Sprite(PIXI.Texture.EMPTY);
		}
	}

	/**
 * out
 * @getter
 * This function is a getter for the member _out.
 * @return  {PIXI.Sprite} The PIXI Object used by this object. 
 */
	get out() {
		return this._out;
	}

	/**
  * anchor
  * @getter
  * This function is a getter for the member anchor.
  * @return {ObservablePoint} The origin point of the texture.
  */
	get anchor() {
		return new ObservablePoint(this._out.anchor);
	}

	/**
  * anchor
  * @setter
  * This function is a setter for the member anchor.
  * @param {ObservablePoint}  anchor  The origin point of the texture.
  * The default is 0,0 this means the texture's origin is the top left.
  * Setting the anchor to 0.5,0.5 means the texture's origin is centered.
  * Setting the anchor to 1,1 would mean the texture's origin point will be the bottom right corner.
  */
	set anchor(anchor) {
		if (!(anchor instanceof ObservablePoint)) throw new TypeError("anchor must be a ObservablePoint.");

		this._out.anchor = anchor.out;
	}

	/**
  * centerAnchor
  * @getter
  * This function is a shortcut for anchor.
  */
	centerAnchor() {
		this.out.anchor.set(0.5, 0.5);
	}

	/**
  * pluginName
  * @getter
  * This function is a getter for the member pluginName.
  * @return {String} Name of plugin renderer that is responsible for rendering this element.
  */
	get pluginName() {
		return this._out.pluginName;
	}

	/**
  * pluginName
  * @setter
  * This function is a setter for the member pluginName.
  * @param {String}  plugin  Name of plugin renderer that is responsible for rendering this element.
  */
	set pluginName(plugin) {
		if (!(typeof plugin === "string" && {}.toString.call(plugin) === "[object String]")) throw new TypeError("plugin must be a string.");

		this._out.pluginName = plugin;
	}
};

module.exports = {
	Sprite: Sprite
};