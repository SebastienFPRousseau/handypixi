"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var _require = require("./Mesh.js"),
    Mesh = _require.Mesh;

var _require2 = require("./../../../support/geometry/Point.js"),
    Point = _require2.Point;

var Rope = function (_Mesh) {
	_inherits(Rope, _Mesh);

	/**
  * constructor
  * This function is used in order to build a Rope.
  * @param {Points[]}  points  An array of Point to construct this rope. They can't change after building.
  * @param {PIXI.mesh.Rope}  points  The Pixi object to build the HandyPixi object.
  */
	function Rope(points) {
		_classCallCheck(this, Rope);

		var _this = _possibleConstructorReturn(this, (Rope.__proto__ || Object.getPrototypeOf(Rope)).call(this));

		if (points instanceof PIXI.mesh.Rope) {
			_this._out = points;
		} else if (!Array.isArray(points)) {
			throw new TypeError("points must be an array.");
		} else {
			var pixiPoints = [];
			for (var i = 0, l = points.length; i < l; i++) {
				if (!(points[i] instanceof Point)) throw new TypeError("Can't use the " + i + " element, it must be a Point");

				pixiPoints.push(points[i].out);
			}

			_this._out = new PIXI.mesh.Rope(PIXI.Texture.EMPTY, pixiPoints);
		}
		return _this;
	}

	/**
  * points
  * @getter
  * This function is a getter for the member points.
  * @return {Points[]} The points of this Rope.
  */


	_createClass(Rope, [{
		key: "points",
		get: function get() {
			var outPoints = [];

			for (var i = 0, l = this._out.points.length; i < l; i++) {
				outPoints.push(new Point(this._out.points[i]));
			}return outPoints;
		}
	}]);

	return Rope;
}(Mesh);

;

module.exports = {
	Rope: Rope
};