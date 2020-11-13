/*
|--------------------------------------------------------------------------
| SimpleText
|--------------------------------------------------------------------------
|
| This file defines the Simpletext Object.
| This object build a PIXI.Text for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { Sprite } = require("./sprite");

class SimpleText extends Sprite {
  /**
   * constructor
   * This function is used in order to build a SimpleText.
   * @param {String}  text  The string to display by this Object.
   * @param {PIXI.Text}  text  The Pixi object to build the HandyPixi object.
   */
  constructor(text) {
    super();

    if (text instanceof PIXI.Text) {
      this._out = text;
    } else {
      if (
        !(
          typeof text === "string" &&
          {}.toString.call(text) === "[object String]"
        )
      ) {
        throw new TypeError("text must be a string.");
      }

      this._out = new PIXI.Text(text);
    }
  }

  /**
   * text
   * @getter
   * This function is a getter for the member text.
   * @return {String} The string to display by this Object.
   */
  get text() {
    return this._out.text;
  }

  /**
   * text
   * @setter
   * This function is a setter for the member text.
   * @param {String}  text  The string to display by this Object.
   */
  set text(text) {
    if (
      !(
        typeof text === "string" && {}.toString.call(text) === "[object String]"
      )
    ) {
      throw new TypeError("text must be a string.");
    }

    this._out.text = text;
  }
}

module.exports = {
  SimpleText,
};
