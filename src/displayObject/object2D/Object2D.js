/*
|--------------------------------------------------------------------------
| Object2D
|--------------------------------------------------------------------------
|
| This file defines the Object2D Object.
| This object build the main object of displayObject for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Container } = require("./../container/Container.js");

class Object2D
{
	/**
	 * constructor
	 * This function is used in order to build a Object2D.
	 */
	constructor()
	{
		this._out = new Container();
		this._looks = [];
		this._mask = null;
		this._parent = null;
		this._children = [];
	}

	/**
	 * out
	 * @getter
	 * This function is a getter for the member _out.
	 * @return {PIXI.Container} The PIXI Object used by this object. 
	 */
	get out()
	{
		return this._out;
	}

	/**
	 * mask
	 * @getter
	 * This function is a getter for the member _mask.
	 * @return {Mask} The current applied mask on this object. 
	 */
	get mask()
	{
		return this._mask;
	}

	/**
	 * parent
	 * @getter
	 * This function is a getter for the member _parent.
	 * @return {Object2D} The parent of this object. 
	 */
	get parent()
	{
		return this._parent;
	}

	/**
	 * parent
	 * @setter
	 * This function is a setter for the member _parent.
	 * @param {Object2D} parent The parent of this object. 
	 */

	/**
	 * looks
	 * @getter
	 * This function is a getter for the member _looks.
	 * @return {Look[*]} The Looks of this object. 
	 */
	get looks()
	{
		return this._looks;
	}

	/**
	 * children
	 * @getter
	 * This function is a getter for the member _children.
	 * @return {Object2D[*]} The children of this object. 
	 */
	get children()
	{
		return this._children;
	}

	/**
	 * addLook
	 * This function is used in order to
	 */
	
	/**
	 * addLooks
	 * This function is used in order to
	 */
	
	/**
	 * getLookAt
	 * This function is used in order to
	 */
	
	/**
	 * removeLookAt
	 * This function is used in order to
	 */
	
	/**
	 * removeLooks
	 * This function is used in order to
	 */
	
	/**
	 * addChild
	 * This function is used in order to
	 */
	
	/**
	 * addChildren
	 * This function is used in order to
	 */
	
	/**
	 * getChildAt
	 * This function is used in order to
	 */
	
	/**
	 * removeChildAt
	 * This function is used in order to
	 */
	
	/**
	 * removeChildren
	 * This function is used in order to
	 */
	
	/**
	 * clone
	 * This function is used in order to
	 */

	/**
	 * destroy
	 * This function is used in order to
	 */
	
	/**
	 * update
	 * This function is used in order to
	 */
	
	/**
	 * applyMask
	 * This function is used in order to
	 */
	
	/**
	 * removeMask
	 * This function is used in order to
	 */
	
	/**
	 * getSprite
	 * This function is used in order to
	 */
}

module.exports = {
	Object2D: Object2D,
};