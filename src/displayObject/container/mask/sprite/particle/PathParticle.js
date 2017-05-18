"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| PathParticle
|--------------------------------------------------------------------------
|
| This file defines the PathParticle Object.
| This object build a PIXI.particles.PathParticle for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./Particle.js"),
    Particle = _require.Particle,
    Emitter = _require.Emitter;

var _require2 = require("./../../../../../support/geometry/Point.js"),
    Point = _require2.Point;

var PathParticle = function (_Particle) {
	_inherits(PathParticle, _Particle);

	/**
  * constructor
  * This function is used in order to build a PathParticle.
  * @param {Emitter}  emitter  The emitter that controls this particle.
  * @param {PIXI.particles.PathParticle}  emitter  The Pixi object to build the HandyPixi object.
  */
	function PathParticle(emitter) {
		_classCallCheck(this, PathParticle);

		var _this = _possibleConstructorReturn(this, (PathParticle.__proto__ || Object.getPrototypeOf(PathParticle)).call(this, emitter));

		if (emitter instanceof PIXI.particles.PathParticle) {
			_this._out = emitter;
		} else {
			if (!(emitter instanceof Emitter)) throw new TypeError("emitter must be an Emitter.");

			_this._out = new PIXI.particles.PathParticle(emitter.out);
		}
		return _this;
	}

	/**
  * initialPosition
  * @getter
  * This function is a getter for the member initialPosition.
  * @return {Point} The initial position of the particle, as all path movement is added to that.
  */


	_createClass(PathParticle, [{
		key: "initialPosition",
		get: function get() {
			return new Point(this._out.initialPosition);
		}

		/**
   * initialPosition
   * @setter
   * This function is a setter for the member initialPosition.
   * @param {Point}  initialPosition  The initial position of the particle, as all path movement is added to that.
   */
		,
		set: function set(initialPosition) {
			if (!(initialPosition instanceof Point)) throw new TypeError("initialPosition must be a Point.");

			this._out.initialPosition = initialPosition.out;
		}

		/**
   * initialRotation
   * @getter
   * This function is a getter for the member initialRotation.
   * @return {Number} The initial rotation in degrees of the particle, because the direction of the path is based on that.
   */

	}, {
		key: "initialRotation",
		get: function get() {
			return this._out.initialRotation;
		}

		/**
   * initialRotation
   * @setter
   * This function is a setter for the member initialRotation.
   * @param {Number}  initialRotation  The initial rotation in degrees of the particle, because the direction of the path is based on that.
   */
		,
		set: function set(initialRotation) {
			if ({}.toString.call(initialRotation) !== "[object Number]") throw new TypeError("initialRotation must be a number.");

			this._out.initialRotation = initialRotation;
		}

		/**
   * movement
   * @getter
   * This function is a getter for the member movement.
   * @return {Number} Total single directional movement, due to speed.
   */

	}, {
		key: "movement",
		get: function get() {
			return this._out.movement;
		}

		/**
   * movement
   * @setter
   * This function is a setter for the member movement.
   * @param {Number}  movement  Total single directional movement, due to speed.
   */
		,
		set: function set(movement) {
			if ({}.toString.call(movement) !== "[object Number]") throw new TypeError("movement must be a number.");

			this._out.movement = movement;
		}

		/**
   * path
   * @getter
   * This function is a getter for the member path.
   * @return {Function} The function representing the path the particle should take.
   */

	}, {
		key: "path",
		get: function get() {
			return this._out.path;
		}

		/**
   * path
   * @setter
   * This function is a setter for the member path.
   * @param {Function}  path  The function representing the path the particle should take.
   */
		,
		set: function set(path) {
			if ({}.toString.call(path) !== "[object Function]") throw new TypeError("path must be a function.");

			this._out.path = path;
		}
	}]);

	return PathParticle;
}(Particle);

;

module.exports = {
	PathParticle: PathParticle
};