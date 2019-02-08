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

const { Point } = require("../../../../../support/geometry/point");
const { Particle, Emitter } = require("./particle");

class PathParticle extends Particle {
  /**
   * constructor
   * This function is used in order to build a PathParticle.
   * @param {Emitter}  emitter  The emitter that controls this particle.
   * @param {PIXI.particles.PathParticle}  emitter  The Pixi object to build the HandyPixi object.
   */
  constructor(emitter) {
    super(emitter);

    if (emitter instanceof PIXI.particles.PathParticle) {
      this._out = emitter;
    } else {
      if (!(emitter instanceof Emitter)) {
        throw new TypeError("emitter must be an Emitter.");
      }

      this._out = new PIXI.particles.PathParticle(emitter.out);
    }
  }

  /**
   * initialPosition
   * @getter
   * This function is a getter for the member initialPosition.
   * @return {Point} The initial position of the particle, as all path movement is added to that.
   */
  get initialPosition() {
    return new Point(this._out.initialPosition);
  }

  /**
   * initialPosition
   * @setter
   * This function is a setter for the member initialPosition.
   * @param {Point}  initialPosition  The initial position of the particle, as all path movement is added to that.
   */
  set initialPosition(initialPosition) {
    if (!(initialPosition instanceof Point)) {
      throw new TypeError("initialPosition must be a Point.");
    }

    this._out.initialPosition = initialPosition.out;
  }

  /**
   * initialRotation
   * @getter
   * This function is a getter for the member initialRotation.
   * @return {Number} The initial rotation in degrees of the particle, because the direction of the path is based on that.
   */
  get initialRotation() {
    return this._out.initialRotation;
  }

  /**
   * initialRotation
   * @setter
   * This function is a setter for the member initialRotation.
   * @param {Number}  initialRotation  The initial rotation in degrees of the particle, because the direction of the path is based on that.
   */
  set initialRotation(initialRotation) {
    if ({}.toString.call(initialRotation) !== "[object Number]") {
      throw new TypeError("initialRotation must be a number.");
    }

    this._out.initialRotation = initialRotation;
  }

  /**
   * movement
   * @getter
   * This function is a getter for the member movement.
   * @return {Number} Total single directional movement, due to speed.
   */
  get movement() {
    return this._out.movement;
  }

  /**
   * movement
   * @setter
   * This function is a setter for the member movement.
   * @param {Number}  movement  Total single directional movement, due to speed.
   */
  set movement(movement) {
    if ({}.toString.call(movement) !== "[object Number]") {
      throw new TypeError("movement must be a number.");
    }

    this._out.movement = movement;
  }

  /**
   * path
   * @getter
   * This function is a getter for the member path.
   * @return {Function} The function representing the path the particle should take.
   */
  get path() {
    return this._out.path;
  }

  /**
   * path
   * @setter
   * This function is a setter for the member path.
   * @param {Function}  path  The function representing the path the particle should take.
   */
  set path(path) {
    if ({}.toString.call(path) !== "[object Function]") {
      throw new TypeError("path must be a function.");
    }

    this._out.path = path;
  }
}

module.exports = {
  PathParticle,
};
