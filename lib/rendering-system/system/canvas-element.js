/*
|--------------------------------------------------------------------------
| CanvasElement
|--------------------------------------------------------------------------
|
| This file defines the CanvasElement Object.
| This object build a PIXI.CanvasRenderTarget for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

class CanvasElement {
  /**
   * constructor
   * This function is used in order to build a CanvasElement.
   * @param {Number}  width  The width for the newly created canvas.
   * @param {Number}  height  The height for the newly created canvas.
   * @param {Number}  resolution  The resolution / device pixel ratio of the canvas.
   * @param {PIXI.CanvasRenderTarget}   width  The Pixi object to build the HandyPixi object.
   */
  constructor(width, height, resolution = 1) {
    if ({}.toString.call(height) !== "[object Number]") {
      throw new TypeError("height must be a number.");
    }

    if ({}.toString.call(resolution) !== "[object Number]") {
      throw new TypeError("resolution must be a number.");
    }

    if (width instanceof PIXI.CanvasRenderTarget) {
      this._out = width;
    } else {
      if ({}.toString.call(width) !== "[object Number]") {
        throw new TypeError("width must be a number.");
      }

      this._out = new PIXI.CanvasRenderTarget(width, height, resolution);
    }
  }

  /**
   * out
   * @getter
   * This function is a getter for the member _out.
   * @return  {PIXI.CanvasRenderTarget} The PIXI Object used by this object.
   */
  get out() {
    return this._out;
  }

  /**
   * canvas
   * @getter
   * This function is a getter for the member canvas.
   * @return {HTMLCanvasElement} The Canvas object that belongs to this CanvasElement.
   */
  get canvas() {
    return this._out.canvas;
  }

  /**
   * context
   * @getter
   * This function is a getter for the member context.
   * @return {CanvasRenderingContext2D} A CanvasRenderingContext2D object representing a two-dimensional rendering context.
   */
  get context() {
    return this._out.context;
  }

  /**
   * height
   * @getter
   * This function is a getter for the member height.
   * @return {Number} The height of the canvas buffer in pixels.
   */
  get height() {
    return this._out.height;
  }

  /**
   * height
   * @setter
   * This function is a setter for the member height.
   * @param {Number}  height  The height of the canvas buffer in pixels.
   */
  set height(height) {
    if ({}.toString.call(height) !== "[object Number]") {
      throw new TypeError("height must be a number.");
    }

    this.resize(this.width, height);
    this._out.height = height;
  }

  /**
   * width
   * @getter
   * This function is a getter for the member width.
   * @return {Number} The width of the canvas buffer in pixels.
   */
  get width() {
    return this._out.width;
  }

  /**
   * width
   * @setter
   * This function is a setter for the member width.
   * @param {Number}  width  The width of the canvas buffer in pixels.
   */
  set width(width) {
    if ({}.toString.call(width) !== "[object Number]") {
      throw new TypeError("width must be a number.");
    }

    this.resize(width, this.height);
    this._out.width = width;
  }

  /**
   * destroy
   * This function is used in order to destroy this canvas.
   */
  destroy() {
    this._out.destroy();
  }

  /**
   * resize
   * This function is used in order to resize the canvas to the specified width and height.
   * @param {Number}  width  The new width of the canvas.
   * @param {Number}  height  The new height of the canvas.
   */
  resize(width, height) {
    if ({}.toString.call(width) !== "[object Number]") {
      throw new TypeError("width must be a number.");
    }

    if ({}.toString.call(height) !== "[object Number]") {
      throw new TypeError("height must be a number.");
    }

    this._out.resize(width, height);
  }
}

module.exports = {
  CanvasElement,
};
