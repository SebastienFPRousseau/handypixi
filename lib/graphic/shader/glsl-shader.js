/*
|--------------------------------------------------------------------------
| GLSLShader
|--------------------------------------------------------------------------
|
| This file defines the GLSLShader Object.
| This object build a PIXI.Filter for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { Shader } = require("./shader");

class GLSLShader extends Shader {
  /**
   * constructor
   * This function is used in order to build a GLSLShader.
   * @param {String}  vertexSrc  The source of the certex shader.
   * @param {String}  fragmentSrc  The source of the fragment shader.
   * @param {Object}  uniforms  Custom uniforms to use to augment the built-in ones.
   * @param {PIXI.Filter}  vertexSrc  The Pixi object to build the HandyPixi object.
   */
  constructor(vertexSrc, fragmentSrc, uniforms = {}) {
    if (
      !(
        typeof fragmentSrc === "string" &&
        {}.toString.call(fragmentSrc) === "[object String]"
      )
    ) {
      throw new TypeError("fragmentSrc must be a string.");
    }

    if (
      !(
        typeof uniforms === "object" &&
        {}.toString.call(uniforms) === "[object Object]"
      )
    ) {
      throw new TypeError("uniforms must be an object.");
    }

    super();

    if (vertexSrc instanceof PIXI.Filter) {
      this._out = vertexSrc;
    } else {
      if (
        !(
          typeof vertexSrc === "string" &&
          {}.toString.call(vertexSrc) === "[object String]"
        )
      ) {
        throw new TypeError("vertexSrc must be a string.");
      }

      this._out = new PIXI.Filter(vertexSrc, fragmentSrc, uniforms);
    }
  }

  /**
   * out
   * @getter
   * This function is a getter for the member _out.
   * @return  {PIXI.Filter} The PIXI Object used by this object.
   */
  get out() {
    return this._out;
  }

  /**
   * clone
   * This function is used in order to clone this Shader
   * @return {Shader} A copy of this Shader.
   */
  clone() {
    return new GLSLShader(this._out);
  }
}

module.exports = {
  GLSLShader,
};
