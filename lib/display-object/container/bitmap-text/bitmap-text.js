/*
|--------------------------------------------------------------------------
| BitmapText
|--------------------------------------------------------------------------
|
| This file defines the BitmapText Object.
| This object build a PIXI.extras.BitmapText for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { Container } = require("./../container");
const { Point } = require("../../../support/geometry/point");


class BitmapText extends Container {
  /**
   * constructor
   * This function is used in order to build a BitmapText.
   * @param {String}  text  The text to display.
   * @param {Object}  style  The style parameters.
   * @param {PIXI.extras.BitmapText}  text  The Pixi object to build the HandyPixi object.
   */
  constructor(text, style = { font: {} }) {
    super();

    if (
      !(
        typeof style === "object" &&
        {}.toString.call(style) === "[object Object]"
      )
    ) {
      throw new TypeError("style must be an object.");
    }

    if (
      !(
        typeof style.font === "string" &&
        {}.toString.call(style.font) === "[object String]"
      ) &&
      !(
        typeof style.font === "object" &&
        {}.toString.call(style.font) === "[object Object]"
      )
    ) {
      throw new TypeError("style.font must be a string or an object.");
    }

    if (text instanceof PIXI.extras.BitmapText) {
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

      this._out = new PIXI.extras.BitmapText(text, style);
    }
  }

  /**
   * anchor
   * @getter
   * This function is a getter for the member anchor.
   * @return {Point} The origin point of the text.
   */
  get anchor() {
    return new Point(this._out.anchor);
  }

  /**
   * anchor
   * @setter
   * This function is a setter for the member anchor.
   * @param {Point}  anchor  The origin point of the text.
   * The default is 0,0 this means the text's origin is the top left.
   * Setting the anchor to 0.5,0.5 means the text's origin is centered.
   * Setting the anchor to 1,1 would mean the text's origin point will be the bottom right corner.
   */
  set anchor(anchor) {
    if (!(anchor instanceof Point)) {
      throw new TypeError("anchor must be a Point.");
    }

    this._out.anchor = anchor.out;
  }

  /**
   * style
   * @getter
   * This function is a getter for the member style.
   * @return {Object} The style parameters.
   */
  get style() {
    return {
      align: this._out.align,
      font: this._out.font,
      tint: this._out.tint,
    };
  }

  /**
   * style
   * @setter
   * This function is a setter for the member style.
   * @param {Object}  style  The style parameters.
   */
  set style(style) {
    if (
      !(
        typeof style === "object" &&
        {}.toString.call(style) === "[object Object]"
      )
    ) {
      throw new TypeError("style must be an object.");
    }

    if (
      !(
        typeof style.font === "string" &&
        {}.toString.call(style.font) === "[object String]"
      ) &&
      !(
        typeof style.font === "object" &&
        {}.toString.call(style.font) === "[object Object]"
      )
    ) {
      throw new TypeError("style.font must be a string or an object.");
    }

    this._out.align = style.align;
    this._out.font = style.font;
    this._out.tint = style.tint;
  }

  /**
   * dirty
   * @getter
   * This function is a getter for the member dirty.
   * @return {Boolean} The dirty state of this object.
   */
  get dirty() {
    return this._out.dirty;
  }

  /**
   * dirty
   * @setter
   * This function is a setter for the member dirty.
   * @param {Boolean}  dirty  The dirty state of this object.
   */
  set dirty(dirty) {
    if ({}.toString.call(dirty) !== "[object Boolean]") {
      throw new TypeError("dirty must be a boolean.");
    }

    this._out.dirty = dirty;
  }

  /**
   * letterSpacing
   * @getter
   * This function is a getter for the member letterSpacing.
   * @return {Number} The additional space between characters.
   */
  get letterSpacing() {
    return this._out.letterSpacing;
  }

  /**
   * letterSpacing
   * @setter
   * This function is a setter for the member letterSpacing.
   * @param {Number}  letterSpacing  The additional space between characters.
   */
  set letterSpacing(letterSpacing) {
    if ({}.toString.call(letterSpacing) !== "[object Number]") {
      throw new TypeError("letterSpacing must be a number.");
    }

    this._out.letterSpacing = letterSpacing;
  }

  /**
   * maxLineHeight
   * @getter
   * This function is a getter for the member maxLineHeight.
   * @return {Number} The max line height.
   */
  get maxLineHeight() {
    return this._out.maxLineHeight;
  }

  /**
   * maxLineHeight
   * @setter
   * This function is a setter for the member maxLineHeight.
   * @param {Number}  maxLineHeight  The max line height.
   */
  set maxLineHeight(maxLineHeight) {
    if ({}.toString.call(maxLineHeight) !== "[object Number]") {
      throw new TypeError("maxLineHeight must be a number.");
    }

    this._out.maxLineHeight = maxLineHeight;
  }

  /**
   * maxWidth
   * @getter
   * This function is a getter for the member maxWidth.
   * @return {Number} The max width of this bitmap text in pixels.
   * If the text is longer than this value, line breaks will be automatically inserted in the last whitespace.
   */
  get maxWidth() {
    return this._out.maxWidth;
  }

  /**
   * maxWidth
   * @setter
   * This function is a setter for the member maxWidth.
   * @param {Number}  maxWidth  The max width of this bitmap text in pixels.
   * If the text is longer than the value, line breaks will be automatically inserted in the last whitespace.
   * Disable by setting value to 0.
   */
  set maxWidth(maxWidth) {
    if ({}.toString.call(maxWidth) !== "[object Number]") {
      throw new TypeError("maxWidth must be a number.");
    }

    this._out.maxWidth = maxWidth;
  }

  /**
   * text
   * @getter
   * This function is a getter for the member text.
   * @return {String} The text of the BitmapText Object.
   */
  get text() {
    return this._out.text;
  }

  /**
   * text
   * @setter
   * This function is a setter for the member text.
   * @param {String}  text  The text of the BitmapText object.
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

  /**
   * textHeight
   * @getter
   * This function is a getter for the member textHeight.
   * @return {Number} The height of the overall text.
   */
  get textHeight() {
    return this._out.textHeight;
  }

  /**
   * textWidth
   * @getter
   * This function is a getter for the member textWidth.
   * @return {Number} The width of the overall text.
   */
  get textWidth() {
    return this._out.textWidth;
  }
}

module.exports = {
  BitmapText,
};
