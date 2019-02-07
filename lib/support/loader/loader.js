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
    )
      throw new TypeError("baseUrl must be a string.");

    if ({}.toString.call(concurrency) !== "[object Number]")
      throw new TypeError("concurrency must be a number.");

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
}

module.exports = {
  Loader,
};
