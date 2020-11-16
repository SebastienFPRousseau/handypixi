/*
|--------------------------------------------------------------------------
| AbstractTextureFactory
|--------------------------------------------------------------------------
|
| This file defines the AbstractTextureFactory Object.
| This object is the abstract factory for Texture.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { Environment } = require("../../rendering-system/system/environment");
const { Settings } = require("../../rendering-system/config/settings");
const { Object2D } = require("../../display-object/object-2d/object-2d");
const { Bounds } = require("../../display-object/bounds/bounds");
const { ImageTexture } = require("./image-texture");
const { VideoTexture } = require("./video-texture");
const { RenderTexture } = require("./render-texture");

/**
 * TEXTURE_FACTORY
 * Identify the TEXTUREFactory
 * @type {Number}
 */
const TEXTURE_FACTORY = 0;

class AbstractTextureFactory {
  /**
   * constructor
   * This function is used in order to forbidden the built of an AbstractTextureFactory
   */
  constructor() {
    if (this.constructor === AbstractTextureFactory) {
      throw new TypeError(
        "Cannot construct Abstract instances like AbstractTextureFactory directly."
      );
    }
  }

  /**
   * TEXTURE_FACTORY
   * @getter
   */
  static get TEXTURE_FACTORY() {
    return TEXTURE_FACTORY;
  }

  /**
   * getFactory
   * This function is used in order to get the factory using its id.
   * @param {Number}  id  The Texture factory id.
   * @return {AbstractTextureFactory} The factory needed.
   */
  static getFactory(id) {
    if ({}.toString.call(id) !== "[object Number]") {
      throw new TypeError("id must be a number.");
    }

    switch (id) {
      case TEXTURE_FACTORY:
        return new TextureFactory();

      default:
        throw new Error("No factory found for this id: " + id + "!");
    }
  }
}

/*
|--------------------------------------------------------------------------
| TextureFactory
|--------------------------------------------------------------------------
|
| This file defines the TextureFactory Object.
| This object is a factory for Texture.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

class TextureFactory extends AbstractTextureFactory {
  /**
   * createFromImage
   * This function is used in order to build an ImageTexture from an image.
   * @param {String}  url  The image url of the texture.
   * @param {Object}  options  The options for building.
   * @return {ImageTexture} The ImageTexture built.
   */
  createFromImage(url, options = {}) {
    if (
      !(
        typeof options === "object" &&
        {}.toString.call(options) === "[object Object]"
      )
    ) {
      throw new TypeError("options must be an object.");
    }

    return new ImageTexture(
      url,
      options.crossOrigin,
      options.scaleMode,
      options.sourceScale
    );
  }

  /**
   * createFromVideo
   * This function is used in order to build a VideoTexture from a video.
   * @param {String}  source  The url of the video.
   * @param {HTMLVideoElement}  source  HTML Video source.
   * @param {Object}  options  The options for building.
   * @return {VideoTexture} The VideoTexture built.
   */
  createFromVideo(source, options = {}) {
    if (
      !(
        typeof options === "object" &&
        {}.toString.call(options) === "[object Object]"
      )
    ) {
      throw new TypeError("options must be an object.");
    }

    return new VideoTexture(source, options);
  }

  /**
   * createFromRender
   * This function is used in order to build a RenderTexture from a render.
   * @param {Environment}  env  The environment of the render.
   * @param {Object}  options  The options for building.
   * @return {RenderTexture} The RenderTexture built.
   */
  createFromRender(env, options = {}) {
    if (!(env instanceof Environment)) {
      throw new TypeError("env must be a Environment.");
    }

    if (
      !(
        typeof options === "object" &&
        {}.toString.call(options) === "[object Object]"
      )
    ) {
      throw new TypeError("options must be an object.");
    }

    const texture = new RenderTexture(
      options.width,
      options.height,
      options.scaleMode,
      options.resolution
    );
    env._renderer.render(env.stage.out.out, texture.out);

    return texture;
  }

  /**
   * createFromObject2D
   * This function is used in order to build a RenderTexture from a render.
   * @param {Environment}  env  The environment of the render.
   * @param {Object2D}  obj  The object 2D the texture will be generated from.
   * @param {Object}  options  The options for building.
   * @return {RenderTexture} The Texture built.
   */
  createFromObject2D(env, obj, options = {}) {
    if (!(env instanceof Environment)) {
      throw new TypeError("env must be a Environment.");
    }

    if (!(obj instanceof Object2D)) {
      throw new TypeError("obj must be an Object2D.");
    }

    if (
      !(
        typeof options === "object" &&
        {}.toString.call(options) === "[object Object]"
      )
    ) {
      throw new TypeError("options must be an object.");
    }

    if (options.region && !(options.region instanceof Bounds)) {
      throw new TypeError("options.region must be a Bounds or undefined.");
    }

    const scaleMode = options.scaleMode
      ? options.scaleMode
      : Settings.SCALE_MODE;
    const resolution = options.resolution ? options.resolution : 1;

    const texture = new RenderTexture(
      env._renderer.generateTexture(obj.out.out, scaleMode, resolution, options)
    );

    return texture;
  }
}

module.exports = {
  AbstractTextureFactory,
  TextureFactory,
};
