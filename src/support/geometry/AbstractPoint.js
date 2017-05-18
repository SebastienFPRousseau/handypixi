"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
|--------------------------------------------------------------------------
| AbstractPoint
|--------------------------------------------------------------------------
|
| This file defines the AbstractPoint Object.
| This object is the abstract point for Point and ObservablePoint.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var AbstractPoint =
/**
 * constructor
 * This function is used in order to forbidden the built of an AbstractPoint
 */
function AbstractPoint() {
	_classCallCheck(this, AbstractPoint);

	if (this.constructor === AbstractPoint) throw new TypeError("Cannot construct Abstract instances like AbstractPoint directly.");
};

;

module.exports = {
	AbstractPoint: AbstractPoint
};