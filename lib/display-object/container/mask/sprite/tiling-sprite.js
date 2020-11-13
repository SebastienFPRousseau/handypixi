/*
|--------------------------------------------------------------------------
| TilingSprite
|--------------------------------------------------------------------------
|
| This file defines the TilingSprite Object.
| This object build a PIXI.extras.TilingSprite for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const {
  ObservablePoint,
} = require("../../../../support/geometry/observable-point");
const { Point } = require("../../../../support/geometry/point");
const { TransformStatic } = require("../../../../support/geometry/matrix");
const { Sprite } = require("./sprite");

class TilingSprite extends Sprite {
  /**
   * constructor
   * This function is used in order to build a TilingSprite.
   * @param {Number}  width  The width of the tiling sprite.
   * @param {Number}  height  The height of the tiling sprite.
   * @param {PIXI.extras.TilingSprite}  width  The Pixi object to build the HandyPixi object.
   */
  constructor(width = 100, height = 100) {
    super();

    if ({}.toString.call(height) !== "[object Number]") {
      throw new TypeError("height must be a number.");
    }

    if (width instanceof PIXI.extras.TilingSprite) {
      this._out = width;
    } else {
      if ({}.toString.call(width) !== "[object Number]") {
        throw new TypeError("width must be a number.");
      }

      this._out = new PIXI.extras.TilingSprite(
        PIXI.Texture.EMPTY,
        width,
        height
      );
    }
  }

  /**
   * tilePosition
   * @getter
   * This function is a getter for the member tilePosition.
   * @return {ObservablePoint} The offset of the image that is being tiled.
   */
  get tilePosition() {
    return new ObservablePoint(this._out.tilePosition);
  }

  /**
   * tilePosition
   * @setter
   * This function is a setter for the member tilePosition.
   * @param {ObservablePoint}  tilePosition  The offset of the image that is being tiled.
   */
  set tilePosition(tilePosition) {
    if (!(tilePosition instanceof ObservablePoint)) {
      throw new TypeError("tilePosition must be a ObservablePoint.");
    }

    this._out.tilePosition = tilePosition.out;
  }

  /**
   * tileScale
   * @getter
   * This function is a getter for the member tileScale.
   * @return {ObservablePoint} The scaling of the image that is being tiled.
   */
  get tileScale() {
    return new ObservablePoint(this._out.tileScale);
  }

  /**
   * tileScale
   * @setter
   * This function is a setter for the member tileScale.
   * @param {ObservablePoint}  tileScale  The scaling of the image that is being tiled.
   */
  set tileScale(tileScale) {
    if (!(tileScale instanceof ObservablePoint)) {
      throw new TypeError("tileScale must be a ObservablePoint.");
    }

    this._out.tileScale = tileScale.out;
  }

  /**
   * tileTransform
   * @getter
   * This function is a getter for the member tileTransform.
   * @return {TransformStatic} Tile transform.
   */
  get tileTransform() {
    return new TransformStatic(this._out.tileTransform);
  }

  /**
   * tileTransform
   * @setter
   * This function is a setter for the member tileTransform.
   * @param {TransformStatic}  tileTransform  Tile transform.
   */
  set tileTransform(tileTransform) {
    if (!(tileTransform instanceof TransformStatic)) {
      throw new TypeError("tileTransform must be a TransformStatic.");
    }

    this._out.tileTransform = tileTransform.out;
  }

  /**
   * uvRespectAnchor
   * This function is used in order to bind the uvs and the anchor.
   * @param {Boolean}  value  If anchor must affect uvs or not.
   */
  uvRespectAnchor(value = true) {
    if ({}.toString.call(value) !== "[object Boolean]") {
      throw new TypeError("value must be a boolean.");
    }

    this._out.uvRespectAnchor = value;
  }

  /**
   * containsPoint
   * This function is used in order to check if a point is inside this tiling sprite.
   * @param {Point}  point  The point to check.
   * @return {Boolean} Whether or not the sprite contains the point.
   */
  containsPoint(point) {
    if (!(point instanceof Point)) {
      throw new TypeError("point must be a Point.");
    }

    return this._out.containsPoint(point.out);
  }
}

module.exports = {
  TilingSprite,
};
