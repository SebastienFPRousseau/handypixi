/*
|--------------------------------------------------------------------------
| Look
|--------------------------------------------------------------------------
|
| This file defines the Look Object.
| This object build the main object of graphic for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { Shader } = require("../shader/shader");
const { Texture } = require("../texture/texture");
const { TextStyle } = require("../style/text-style");

class Look {
  /**
   * constructor
   * This function is used in order to build a Look.
   */
  constructor() {
    this._texture = new Texture();
    this._style = new TextStyle();
    this._shaders = [];

    this._out = new PIXI.Sprite(this._texture.out);
  }

  /**
   * out
   * @getter
   * This function is a getter for the member _out.
   * @return  {PIXI.Sprite} The PIXI Object used by this object.
   */
  get out() {
    return this._out;
  }

  /**
   * texture
   * @getter
   * This function is a getter for the member _texture.
   * @return  {Texture} The Texture used by this object.
   */
  get texture() {
    return this._texture;
  }

  /**
   * style
   * @getter
   * This function is a getter for the member _style.
   * @return  {TextStyle} The TextStyle used by this object.
   */
  get style() {
    return this._style;
  }

  /**
   * shaders
   * @getter
   * This function is a getter for the member _shaders.
   * @return  {Shader[]} The shaders used by this object.
   */
  get shaders() {
    return this._shaders;
  }

  /**
   * update
   * This function is used in order to update the Look by all the ways.
   */
  update() {
    this._texture.updateMatrices();
    this._texture.updateOnRenderers();
    this._texture.updateOnGPU();
  }

  /**
   * destroy
   * This function is used in order to destroy this object.
   * @param {Object}  options  Options parameter to destroy dependencies.
   */
  destroy(options) {
    if (
      !(
        typeof options === "object" &&
        {}.toString.call(options) === "[object Object]"
      )
    ) {
      throw new TypeError("options must be an object.");
    }

    this._style = null;
    this._shaders = null;

    if (options.destroyTexture) {
      this._texture.destroy(options.destroyBase);
    }

    this._texture = null;
  }

  /**
   * clone
   * This function is used in order to clone this Look.
   * @return {Look}  A copy of this Look.
   */
  clone() {
    const copy = new Look();

    copy.bindTexture(this._texture);
    copy.bindStyle(this._style);
    copy.applyShaders(this._shaders);

    return copy;
  }

  /**
   * bindShader
   * This function is used in order to bind a Shader on the Look as a filter.
   * @param {Shader}  shader  The shader to use for this Look.
   */
  bindShader(shader) {
    if (!(shader instanceof Shader)) {
      throw new TypeError("shader must be a Shader.");
    }

    this._shaders = [shader];
    this._out.filters = [shader.out];
  }

  /**
   * bindStyle
   * This function is used in order to bind a Style on the Look.
   * @param {TextStyle}  style  The style to use for this Look.
   */
  bindStyle(style) {
    if (!(style instanceof TextStyle)) {
      throw new TypeError("style must be a TextStyle.");
    }

    this._style = style;
  }

  /**
   * bindTexture
   * This function is used in order to bind a Texture on the Look.
   * @param {Texture}  texture  The texture to use for this Look.
   */
  bindTexture(texture) {
    if (!(texture instanceof Texture)) {
      throw new TypeError("texture must be a Texture.");
    }

    this._texture = texture;
    this._out.texture = texture.out;
  }

  /**
   * applyShaders
   * This function is used in order to apply shaders on the Look as filters.
   * @param {Shader[]}  filters  The filters to apply on this Look.
   */
  applyShaders(filters) {
    if (Array.isArray(filters)) {
      for (let i = 0, l = filters.length, outFilters = []; i < l; i++) {
        if (!(filters[i] instanceof Shader)) {
          throw new TypeError(
            "Can't apply the " + i + " element, it must be a Shader"
          );
        }

        this._shaders.push(filters[i]);

        if (this._out.filters !== null) {
          outFilters = this._out.filters;
        }

        outFilters.push(filters[i].out);
        this._out.filters = outFilters;
      }
    } else {
      throw new TypeError("filters must be an array.");
    }
  }
}

module.exports = {
  Look,
};
