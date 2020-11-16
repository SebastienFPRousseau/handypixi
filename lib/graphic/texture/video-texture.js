/*
|--------------------------------------------------------------------------
| VideoTexture
|--------------------------------------------------------------------------
|
| This file defines the VideoTexture Object.
| This object build a PIXI.VideoBaseTexture for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { Texture } = require("./texture");

class VideoTexture extends Texture {
  /**
   * constructor
   * This function is used in order to build a VideoTexture.
   * @param {String|HTMLVideoElement}  source  The URL or actual element of the video.
   * @option {Number}  scaleMode  See Settings.SCALE_MODES for possible values
   * @option {Boolean}  crossorigin  Should use anonymous CORS? Defaults to true if the URL is not a data-URI.
   * @option {Boolean}  autoPlay  Start playing video as soon as it is loaded
   * @param {PIXI.VideoBaseTexture}  source  The Pixi object to build the HandyPixi object.
   */
  constructor(source, { scaleMode, crossorigin, autoPlay }) {
    super();

    if (source instanceof PIXI.VideoBaseTexture) {
      this._out = new PIXI.Texture(source);
      return;
    }

    if (
      !(
        (typeof source === "string" &&
          {}.toString.call(source) === "[object String]") ||
        source instanceof HTMLVideoElement
      )
    ) {
      throw new TypeError("source must be a string or a HTMLVideoElement.");
    }

    if (
      !(
        {}.toString.call(scaleMode) === "[object Number]" ||
        scaleMode === undefined
      )
    ) {
      throw new TypeError("scaleMode must be a number.");
    }

    if (
      !(
        {}.toString.call(crossorigin) === "[object Boolean]" ||
        crossorigin === undefined
      )
    ) {
      throw new TypeError("crossorigin must be a boolean.");
    }

    if (
      !(
        {}.toString.call(autoPlay) === "[object Boolean]" ||
        autoPlay === undefined
      )
    ) {
      throw new TypeError("autoPlay must be a boolean.");
    }

    this._out = PIXI.Texture.fromVideo(
      source,
      scaleMode,
      crossorigin,
      autoPlay
    );
  }

  /**
   * autoPlay
   * This function is used in order to automatically play video used by this texture once they are loaded.
   * @param {Boolean}  value  Automatically play the video or not.
   */
  autoPlay(value = true) {
    if ({}.toString.call(value) !== "[object Boolean]") {
      throw new TypeError("value must be a boolean.");
    }

    this._out.baseTexture.autoPlay = value;
  }

  /**
   * autoUpdate
   * This function is used in order to automatically update the video base texture.
   * @param {Boolean}  value  Automatically update texture from source or not.
   */
  autoUpdate(value = true) {
    if ({}.toString.call(value) !== "[object Boolean]") {
      throw new TypeError("value must be a boolean.");
    }

    this._out.baseTexture.autoUpdate = value;
  }
}

module.exports = {
  VideoTexture,
};
