/*
|--------------------------------------------------------------------------
| Frame
|--------------------------------------------------------------------------
|
| This file defines the Frame Object.
| This object build a PIXI FrameObject for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { Texture } = require("../../graphic/texture/texture");

class Frame {
  /**
   * constructor
   * This function is used in order to build a Frame.
   * @param   {Texture}   texture         The Texture of the frame.
   * @param   {Number}   time         The duration of the frame in ms.
   */
  constructor(texture, time) {
    if (!(texture instanceof Texture))
      throw new TypeError("texture must be a Texture.");

    if ({}.toString.call(time) !== "[object Number]")
      throw new TypeError("time must be a number.");

    this._out = {
      texture,
      time,
    };
  }

  /**
   * out
   * @getter
   * This function is a getter for the member _out.
   * @return  {Object}  The Object used.
   */
  get out() {
    return this._out;
  }

  /**
   * texture
   * @getter
   * This function is a getter for the member texture.
   * @return  {Texture} The Texture of the frame.
   */
  get texture() {
    return this._out.texture;
  }

  /**
   * texture
   * @setter
   * This function is a setter for the member texture.
   * @param  {Texture} 	texture 	 The Texture of the frame.
   */
  set texture(texture) {
    if (!(texture instanceof Texture))
      throw new TypeError("texture must be a Texture.");

    this._out.texture = texture;
  }

  /**
   * time
   * @getter
   * This function is a getter for the member time.
   * @return  {Number} The duration of the frame in ms.
   */
  get time() {
    return this._out.time;
  }

  /**
   * time
   * @setter
   * This function is a setter for the member time.
   * @param  {Number}	time 	 The duration of the frame in ms.
   */
  set time(time) {
    if ({}.toString.call(time) !== "[object Number]")
      throw new TypeError("time must be a number.");

    this._out.time = time;
  }
}

module.exports = {
  Frame,
};
