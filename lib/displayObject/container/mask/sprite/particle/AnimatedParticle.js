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

const { Particle, Emitter } = require("./Particle.js");

class AnimatedParticle extends Particle
{
	/**
	 * constructor
	 * This function is used in order to build a AnimatedParticle.
	 * @param {Emitter}  emitter  The emitter that controls this particle.
	 * @param {PIXI.particles.AnimatedParticle}  emitter  The Pixi object to build the HandyPixi object.
	 */
	constructor(emitter)
	{
		super(emitter);

		if (emitter instanceof PIXI.particles.AnimatedParticle)
		{
			this._out = emitter;
		}
		else 
		{
			if (!(emitter instanceof Emitter))
				throw new TypeError("emitter must be an Emitter.");

			this._out = new PIXI.particles.AnimatedParticle(emitter.out);
		}
	}
};

module.exports = {
	AnimatedParticle: AnimatedParticle,
};