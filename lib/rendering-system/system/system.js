/*
|--------------------------------------------------------------------------
| System
|--------------------------------------------------------------------------
|
| This file defines the System Object.
| This object is the singleton for Environment.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { Settings } = require("../config/settings");
const { Setup } = require("../../support/utils/setup");
const { WebGLEnvironment } = require("./webgl-environment");
const { CanvasEnvironment } = require("./canvas-environment");

/**
 * instance
 * A premade instance of System.
 * @type {System}
 */
let instance;

class System {
  /**
   * constructor
   * This function is used in order to build a System.
   */
  constructor() {
    this._settings = Settings;
    Setup.skipHello();
  }

  /**
   * getInstance
   * @getter
   */
  static getInstance() {
    if (instance === undefined) instance = new System();

    return instance;
  }

  /**
   * settings
   * @getter
   * This function is a getter for the member _settings.
   * @return {Settings} The static class Settings.
   */
  get settings() {
    return this._settings;
  }

  /**
   * getEnvironment
   * This function is used in order to build an Environment.
   * @param {HTMLCollection}  dom  The html DOM the 2D scene belongs.
   * @param {Object}  options  Options for the environment.
   * @param {Boolean}  forceCanvas  Force a CanvasEnvironment build or not.
   * @return {Environment} The Environment built.
   */
  getEnvironment(dom, options = undefined, forceCanvas = false) {
    if ({}.toString.call(forceCanvas) !== "[object Boolean]")
      throw new TypeError("forceCanvas must be a boolean.");

    if (options.autoStart === undefined) options.autoStart = true;

    if (Setup.isWebGLSupported() && !forceCanvas)
      return new WebGLEnvironment(dom, options);

    return new CanvasEnvironment(dom, options);
  }
}

module.exports = {
  System,
};
