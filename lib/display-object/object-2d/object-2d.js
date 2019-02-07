/*
|--------------------------------------------------------------------------
| Object2D
|--------------------------------------------------------------------------
|
| This file defines the Object2D Object.
| This object build the main object of displayObject for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { Container } = require("../container/container");
const { BitmapText } = require("../container/bitmap-text/bitmap-text");
const { Mask } = require("../container/mask/mask");
const { Shape } = require("../container/mask/shape/shape");
const { Sprite } = require("../container/mask/sprite/sprite");
const { AnimatedSprite } = require("../container/mask/sprite/animated-sprite");
const {
  AnimatedParticle,
} = require("../container/mask/sprite/particle/animated-particle");
const { SimpleText } = require("../container/mask/sprite/simple-text");
const { Look } = require("./../../graphic/look/look");

class Object2D {
  /**
   * constructor
   * This function is used in order to build a Object2D.
   * @param {Container}  container  The container for this object.
   */
  constructor(container = new Container()) {
    this._out = container;
    this._looks = [];
    this._mask = null;
    this._parent = null;
    this._children = [];
    this._data = {};
  }

  /**
   * out
   * @getter
   * This function is a getter for the member _out.
   * @return {PIXI.Container} The PIXI Object used by this object.
   */
  get out() {
    return this._out;
  }

  /**
   * position
   * @getter
   * This function is a getter for the member _out.position.
   * @return {PIXI.Point|Pixi.ObservablePoint} The PIXI Position Object used by this object.
   */
  get position() {
    return this._out.position;
  }

  /**
   * position
   * @setter
   * This function is a setter for the member _out.position.
   * @param {Object} An x,y coordinates object.
   */
  set position(coordinates) {
    if (
      !(
        typeof coordinates === "object" &&
        {}.toString.call(coordinates) === "[object Object]"
      )
    )
      throw new TypeError("coordinates must be an object.");

    if ({}.toString.call(coordinates.x) !== "[object Number]")
      throw new TypeError("x must be a number.");

    if ({}.toString.call(coordinates.y) !== "[object Number]")
      throw new TypeError("y must be a number.");

    this._out.position.set(coordinates.x, coordinates.y);
  }

  /**
   * data
   * @getter
   * This function is a getter for the member _data.
   * @return {Object} Some data binded with the Object2D.
   */
  get data() {
    return this._data;
  }

  /**
   * data
   * @setter
   * This function is a setter for the member _data.
   * @param {Object}  data  Some data binded with the Object2D.
   */
  set data(data) {
    if (
      !(
        typeof data === "object" && {}.toString.call(data) === "[object Object]"
      )
    )
      throw new TypeError("data must be an object.");

    this._data = data;
  }

  /**
   * mask
   * @getter
   * This function is a getter for the member _mask.
   * @return {Mask} The current applied mask on this object.
   */
  get mask() {
    return this._mask;
  }

  /**
   * parent
   * @getter
   * This function is a getter for the member _parent.
   * @return {Object2D} The parent of this object.
   */
  get parent() {
    return this._parent;
  }

  /**
   * parent
   * @setter
   * This function is a setter for the member _parent.
   * @param {Object2D} parent The parent of this object.
   */
  set parent(parent) {
    if (!(parent instanceof Object2D))
      throw new TypeError("parent must be a Object2D.");

    parent.addChild(this);
  }

  /**
   * looks
   * @getter
   * This function is a getter for the member _looks.
   * @return {Look[*]} The Looks of this object.
   */
  get looks() {
    return this._looks;
  }

  /**
   * children
   * @getter
   * This function is a getter for the member _children.
   * @return {Object2D[*]} The children of this object.
   */
  get children() {
    return this._children;
  }

  /**
   * x
   * @getter
   * This function is a getter for the member _out.position.x.
   * @return  {Number} Position of the container on the x axis.
   */
  get x() {
    return this._out.position.x;
  }

  /**
   * x
   * @setter
   * This function is a setter for the member _out.position.x.
   * @param  {Number} 	x 	 A x coordinate.
   */
  set x(x) {
    if ({}.toString.call(x) !== "[object Number]")
      throw new TypeError("x must be a number.");

    this._out.position.x = x;
  }

  /**
   * y
   * @getter
   * This function is a getter for the member _out.position.y.
   * @return  {Number} Position of the container on the y axis.
   */
  get y() {
    return this._out.position.y;
  }

  /**
   * y
   * @setter
   * This function is a setter for the member _out.position.y.
   * @param  {Number}	y 	 An y coordinate.
   */
  set y(y) {
    if ({}.toString.call(y) !== "[object Number]")
      throw new TypeError("y must be a number.");

    this._out.position.y = y;
  }

  /**
   * height
   * @getter
   * This function is a getter for the member _out.height.
   * @return {Number} The height of the Container.
   */
  get height() {
    return this._out.height;
  }

  /**
   * height
   * @setter
   * This function is a setter for the member _out.height.
   * @param {Number}  height  The height of the Container, setting this will modify the scale to achieve the value set.
   */
  set height(height) {
    if ({}.toString.call(height) !== "[object Number]")
      throw new TypeError("height must be a number.");

    this._out.height = height;
  }

  /**
   * width
   * @getter
   * This function is a getter for the member _out.width.
   * @return {Number} The width of the Container.
   */
  get width() {
    return this._out.width;
  }

  /**
   * width
   * @setter
   * This function is a setter for the member _out.width.
   * @param {Number}  width  The width of the Container, setting this will modify the scale to achieve the value set.
   */
  set width(width) {
    if ({}.toString.call(width) !== "[object Number]")
      throw new TypeError("width must be a number.");

    this._out.width = width;
  }

  /**
   * worldTx
   * @getter
   * This function is a getter for the member _out.worldTransform.out.tx.
   * @return  {Number} World translation of the container on x.
   */
  get worldTx() {
    return this._out.worldTransform.out.tx;
  }

  /**
   * worldTy
   * @getter
   * This function is a getter for the member _out.worldTransform.out.ty.
   * @return  {Number} World translation of the container on y.
   */
  get worldTy() {
    return this._out.worldTransform.out.ty;
  }

  /**
   * addLook
   * This function is used in order to add and apply a Look on this object.
   * @param {Look}  look  The look to apply on this object.
   */
  addLook(look) {
    if (!(look instanceof Look)) throw new TypeError("look must be a Look.");

    const type = this._out.constructor;

    this._out.out.filters = look.out.filters;

    if (type === Container) {
      this._out = new Sprite(look.clone().out);
    } else if (type === SimpleText) {
      this._out.out.style = look.style.out;
    } else if (type !== BitmapText && !(this._out instanceof Shape)) {
      this._out.out.texture = look.out.texture;

      if (type === AnimatedSprite)
        this._out.out.textures.push(look.out.texture);
    }

    this._looks.push(look);
  }

  /**
   * changeLook
   * This function is used in order apply a Look on this object.
   * @param {Number}  id  The indice of the look.
   */
  changeLook(id) {
    if ({}.toString.call(id) !== "[object Number]")
      throw new TypeError("id must be a number.");

    if (!(id < this._looks.length && id >= 0))
      throw new RangeError(
        "The given indice : " + id + ", is out of range for the looks."
      );

    const type = this._out.constructor;
    const look = this._looks[id];

    this._out.out.filters = look.out.filters;

    if (type === Container) {
      this._out = new Sprite(look.clone().out);
    } else if (type === SimpleText) {
      this._out.out.style = look.style.out;
    } else if (type !== BitmapText && !(this._out instanceof Shape)) {
      this._out.out.texture = look.out.texture;

      if (type === AnimatedSprite || type === AnimatedParticle) {
        if (this._out.out.textures === null)
          this._out.out.textures = [look.out.texture];
        else this._out.out.textures.push(look.out.texture);
      }
    }

    this._looks[id] = this._looks[this._looks.length - 1];
    this._looks[this._looks.length - 1] = look;
  }

  /**
   * addLooks
   * This function is used in order to add and apply some Looks on this object.
   * @param {Look[]}  looks  The looks to apply on this object.
   */
  addLooks(looks) {
    if (Array.isArray(looks)) {
      for (let i = 0, l = looks.length; i < l; i++) {
        if (!(looks[i] instanceof Look))
          throw new TypeError(
            "Can't add the " + i + " element, it must be an Look"
          );

        this.addLook(looks[i]);
      }
    } else {
      throw new TypeError("looks must be an array.");
    }
  }

  /**
   * getLookAt
   * This function is used in order to get a Look at the given indice.
   * @param {Number}  id  The indice to get the look.
   * @return {Look} The corresponding look.
   */
  getLookAt(id) {
    if ({}.toString.call(id) !== "[object Number]")
      throw new TypeError("id must be a number.");

    if (!(id < this._looks.length && id >= 0))
      throw new RangeError(
        "The given indice : " + id + ", is out of range for the looks."
      );

    return this._looks[id];
  }

  /**
   * removeLookAt
   * This function is used in order to remove a Look at the given indice.
   * @param {Number}  id  The indice of the look to remove.
   */
  removeLookAt(id) {
    if ({}.toString.call(id) !== "[object Number]")
      throw new TypeError("id must be a number.");

    if (!(id < this._looks.length && id >= 0))
      throw new RangeError(
        "The given indice : " + id + ", is out of range for the looks."
      );

    const type = this._out.constructor;

    if (id === this._looks.length - 1) {
      this._out.out.filters = null;

      if (
        type !== Container &&
        type !== BitmapText &&
        !(this._out instanceof Shape)
      ) {
        this._out.out.texture = PIXI.Texture.EMPTY.clone();

        if (type === SimpleText) this._out.out.style = null;
      }
    }

    if (type === "AnimatedSprite") this._out.out.textures.splice(id, 1);

    this._looks.splice(id, 1);
  }

  /**
   * removeLooks
   * This function is used in order to remove all looks of this object.
   * @param {Number}  start  The beginning indice included.
   * @param {Number}  end  The ending indice excluded.
   */
  removeLooks(start = 0, end = this._looks.length) {
    if ({}.toString.call(start) !== "[object Number]")
      throw new TypeError("start must be a number.");

    if ({}.toString.call(end) !== "[object Number]")
      throw new TypeError("end must be a number.");

    if (start >= 0 && end <= this._looks.length) {
      for (let i = start; i < end; i++) this.removeLookAt(start);
    }
  }

  /**
   * addChild
   * This function is used in order to add a child for this object.
   * @param {Object2D}  obj  The object to add as a child.
   */
  addChild(obj) {
    if (!(obj instanceof Object2D))
      throw new TypeError("obj must be a Object2D.");

    if (obj.parent !== null) obj.parent.removeChild(obj);

    obj._parent = this;
    this._children.push(obj);
    this._out.out.addChild(obj.out.out);
  }

  /**
   * addChildAt
   * This function is used in order to add a child for this object.
   * @param {Object2D}  obj  The object to add as a child.
   * @param {Number}  id  The index to place the child in.
   */
  addChildAt(obj, id) {
    if (!(obj instanceof Object2D))
      throw new TypeError("obj must be a Object2D.");

    if ({}.toString.call(id) !== "[object Number]")
      throw new TypeError("id must be a number.");

    if (id < 0 || this._children.length < id)
      throw new RangeError("The given id is out of bounds of children.");

    if (obj.parent !== null) obj.parent.removeChild(obj);

    obj._parent = this;
    this._children.splice(id, 0, obj);
    this._out.out.addChildAt(obj.out.out, id);
  }

  /**
   * addChildren
   * This function is used in order to add some children for this object.
   * @param {Object2D[]} objs The objects to add as children.
   */
  addChildren(objs) {
    if (Array.isArray(objs)) {
      for (let i = 0, l = objs.length; i < l; i++) {
        if (!(objs[i] instanceof Object2D))
          throw new TypeError(
            "Can't add the " + i + " element, it must be an Object2D"
          );

        this.addChild(objs[i]);
      }
    } else {
      throw new TypeError("objs must be an array.");
    }
  }

  /**
   * getChildAt
   * This function is used in order to get the child at the given indice.
   * @param {Number}  id  The indice to get the child.
   * @return {Object2D} The corresponding child.
   */
  getChildAt(id) {
    if ({}.toString.call(id) !== "[object Number]")
      throw new TypeError("id must be a number.");

    if (!(id < this._children.length && id >= 0))
      throw new RangeError(
        "The given indice : " + id + ", is out of range for the children."
      );

    return this._children[id];
  }

  /**
   * removeChildAt
   * This function is used in order to remove a child at the given indice.
   * @param {Number}  id  The indice of the child to remove.
   */
  removeChildAt(id) {
    if ({}.toString.call(id) !== "[object Number]")
      throw new TypeError("id must be a number.");

    if (!(id < this._children.length && id >= 0))
      throw new RangeError(
        "The given indice : " + id + ", is out of range for the children."
      );

    const child = this._children[id];
    child._parent = null;
    this._children.splice(id, 1);
    this._out.out.removeChild(child.out.out);
  }

  /**
   * removeChild
   * This function is used in order to remove a child of this object.
   * @param {Object2D}  obj  The child to remove from this object.
   */
  removeChild(obj) {
    if (!(obj instanceof Object2D))
      throw new TypeError("obj must be a Object2D.");

    for (let i = 0, l = this._children.length; i < l; i++) {
      if (obj === this._children[i]) {
        this.removeChildAt(i);
        break;
      }
    }
  }

  /**
   * removeChildren
   * This function is used in order to remove all children of this object.
   * @param {Number}  start  The beginning indice included.
   * @param {Number}  end  The ending indice excluded.
   */
  removeChildren(start = 0, end = this._children.length) {
    if ({}.toString.call(start) !== "[object Number]")
      throw new TypeError("start must be a number.");

    if ({}.toString.call(end) !== "[object Number]")
      throw new TypeError("end must be a number.");

    if (start >= 0 && end <= this._children.length) {
      for (let i = start; i < end; i++) this.removeChildAt(start);
    }
  }

  /**
   * applyMask
   * This function is used in order to apply a mask on this object.
   * @param {Mask}  mask  The mask to apply.
   */
  applyMask(mask) {
    if (!(mask instanceof Mask)) throw new TypeError("mask must be a Mask.");

    this._mask = mask;
    this._out.out.mask = mask.out;
  }

  /**
   * removeMask
   * This function is used in order to remove the applied mask of this object.
   */
  removeMask() {
    this._mask = null;
    this._out.out.mask = null;
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
    )
      throw new TypeError("options must be an object.");

    if (options.destroyLooks) {
      for (let i = 0, l = this._looks.length; i < l; i++)
        this._looks[i].destroy({ destroyBase: options.destroyLooksBases });
    }

    this._looks = null;

    if (options.destroyMask && this._mask !== null) this._mask.destroy({});

    this._mask = null;

    if (this._parent !== null) {
      this._parent.removeChild(this);
      this._parent = null;
    }

    if (options.destroyChildren) {
      for (let i = 0, l = this._children.length; i < l; i++)
        this._children[i].destroy(options);
    } else {
      for (let i = 0, l = this._children.length; i < l; i++)
        this.children[i]._parent = null;
    }

    this._children = null;

    this._out.destroy({});
  }

  /**
   * update
   * This function is used in order to update this object.
   */
  update() {
    for (let i = 0, l = this._looks.length; i < l; i++) this._looks[i].update();

    this._out.calculateBounds();
  }

  /**
   * getSprite
   * This function is used in order to get the resulting Sprite of this object to use it as a mask.
   * @return {Sprite} The resulting Sprite from this object.
   */
  getSprite() {
    let sprite = null;

    if (this._out instanceof Sprite) {
      sprite = this._out;
    } else if (this._looks.length > 0) {
      sprite = new Sprite(this._looks[this._looks.length - 1].out);
    } else {
      sprite = new Sprite();
    }

    return sprite;
  }

  /**
   * interactiveChildren
   * This function is used in order to determine if the children of the object can be clicked/touched.
   * @param {Boolean}  value  If the children must be interactives or not.
   */
  interactiveChildren(value = true) {
    if ({}.toString.call(value) !== "[object Boolean]")
      throw new TypeError("value must be a boolean.");

    this._out.out.interactiveChildren = value;
  }
}

module.exports = {
  Object2D,
};
