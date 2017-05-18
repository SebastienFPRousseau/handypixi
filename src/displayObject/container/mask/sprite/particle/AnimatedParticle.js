"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| AnimatedParticle
|--------------------------------------------------------------------------
|
| This file defines the AnimatedParticle Object.
| This object build a PIXI.particles.AnimatedParticle for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./Particle.js"),
    Particle = _require.Particle,
    Emitter = _require.Emitter;

var AnimatedParticle = function (_Particle) {
	_inherits(AnimatedParticle, _Particle);

	/**
  * constructor
  * This function is used in order to build a AnimatedParticle.
  * @param {Emitter}  emitter  The emitter that controls this particle.
  * @param {PIXI.particles.AnimatedParticle}  emitter  The Pixi object to build the HandyPixi object.
  */
	function AnimatedParticle(emitter) {
		_classCallCheck(this, AnimatedParticle);

		var _this = _possibleConstructorReturn(this, (AnimatedParticle.__proto__ || Object.getPrototypeOf(AnimatedParticle)).call(this, emitter));

		if (emitter instanceof PIXI.particles.AnimatedParticle) {
			_this._out = emitter;
		} else {
			if (!(emitter instanceof Emitter)) throw new TypeError("emitter must be an Emitter.");

			_this._out = new PIXI.particles.AnimatedParticle(emitter.out);
		}
		return _this;
	}

	return AnimatedParticle;
}(Particle);

;

module.exports = {
	AnimatedParticle: AnimatedParticle
};