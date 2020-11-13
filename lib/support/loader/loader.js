/*
|--------------------------------------------------------------------------
| Loader
|--------------------------------------------------------------------------
|
| This file defines the Loader Object.
| This object build a PIXI.loaders.Loader for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

/**
 * Note: This class inherits from Pixi.loaders.Loader because this base class itself depends on an external library we should not reinclude.
 * @see http://pixijs.download/release/docs/PIXI.loaders.Loader.html
 * @see https://github.com/englercj/resource-loader
 */

class Loader extends PIXI.loaders.Loader {
  /**
   * constructor
   * This function is used in order to build a Loader.
   * @param {String}  baseUrl  The base url for all resources loaded by this loader.
   * @param {Number}  concurrency  The number of resources to load concurrently.
   */
  constructor(baseUrl = "", concurrency = 10) {
    if (
      !(
        typeof baseUrl === "string" &&
        {}.toString.call(baseUrl) === "[object String]"
      )
    ) {
      throw new TypeError("baseUrl must be a string.");
    }

    if ({}.toString.call(concurrency) !== "[object Number]") {
      throw new TypeError("concurrency must be a number.");
    }

    super(baseUrl, concurrency);
  }

  /**
   * getPremade
   * This function is used in order to get the premade instance of the loader.
   * @return {Loader}
   */
  static getPremade() {
    return PIXI.loader;
  }

  /**
   * BATCH_SIZE
   * @getter
   * This function is a getter for the member BATCH_SIZE.
   * @return {BATCH_SIZES} The maximum number of Textures to build per process.
   */
  static get BATCH_SIZE() {
    return PIXI.Spritesheet.BATCH_SIZE;
  }

  /**
   * BATCH_SIZE
   * @setter
   * This function is a setter for the member BATCH_SIZE.
   * @param {BATCH_SIZES} size The maximum number of Textures to build per process.
   */
  static set BATCH_SIZE(size) {
    if ({}.toString.call(size) !== "[object Number]") {
      throw new TypeError("size must be a number.");
    }

    PIXI.Spritesheet.BATCH_SIZE = size;
  }

  /**
   * loadSpritesheet
   * This function is used in order to load spritesheet from JSON file.
   * @param {String}  path  JSON data file path.
   * @param {Function}  callback  Called after loading.
   */
  static loadSpritesheet(path, callback = () => {}) {
    if (!(typeof path === "string" && {}.toString.call(path) === "[object String]")) {
      throw new TypeError("path must be a string.");
    }

    if ({}.toString.call(callback) !== "[object Function]") {
      throw new TypeError("callback must be a function.");
    }

    const loader = this.getPremade();
    loader.add(path).load(callback);
  }

  /**
   * getSpritesheet
   * This function is used in order to get a loaded spritesheet.
   * @param {String}  path  JSON data file path.
   * @return {Spritesheet}
   */
  static getSpritesheet(path) {
    if (!(typeof path === "string" && {}.toString.call(path) === "[object String]")) {
      throw new TypeError("path must be a string.");
    }

    const resources = PIXI.loader.resources;

    if (!resources.includes(path)) {
      throw new ReferenceError("None spritesheet loaded from this file");
    }

    return resources[path].spritesheet;
  }


}

module.exports = {
  Loader,
};
