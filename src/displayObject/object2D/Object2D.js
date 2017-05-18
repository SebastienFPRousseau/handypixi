"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
|--------------------------------------------------------------------------
| Object2D
|--------------------------------------------------------------------------
|
| This file defines the Object2D Object.
| This object build the main object of displayObject for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./../container/Container.js"),
    Container = _require.Container;

var _require2 = require("./../container/bitmapText/BitmapText.js"),
    BitmapText = _require2.BitmapText;

var _require3 = require("./../container/mask/Mask.js"),
    Mask = _require3.Mask;

var _require4 = require("./../container/mask/shape/Shape.js"),
    Shape = _require4.Shape;

var _require5 = require("./../container/mask/sprite/Sprite.js"),
    Sprite = _require5.Sprite;

var _require6 = require("./../container/mask/sprite/AnimatedSprite.js"),
    AnimatedSprite = _require6.AnimatedSprite;

var _require7 = require("./../container/mask/sprite/particle/AnimatedParticle.js"),
    AnimatedParticle = _require7.AnimatedParticle;

var _require8 = require("./../container/mask/sprite/TilingSprite.js"),
    TilingSprite = _require8.TilingSprite;

var _require9 = require("./../container/mask/sprite/SimpleText.js"),
    SimpleText = _require9.SimpleText;

var _require10 = require("./../container/mesh/Mesh.js"),
    Mesh = _require10.Mesh;

var _require11 = require("./../container/mesh/Rope.js"),
    Rope = _require11.Rope;

var _require12 = require("./../container/mesh/Plane.js"),
    Plane = _require12.Plane;

var _require13 = require("./../container/mesh/NineSlicePlane.js"),
    NineSlicePlane = _require13.NineSlicePlane;

var _require14 = require("./../../graphic/look/Look.js"),
    Look = _require14.Look;

var Object2D = function () {
	/**
  * constructor
  * This function is used in order to build a Object2D.
  * @param {Container}  container  The container for this object.
  */
	function Object2D() {
		var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Container();

		_classCallCheck(this, Object2D);

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


	_createClass(Object2D, [{
		key: "addLook",


		/**
   * addLook
   * This function is used in order to add and apply a Look on this object.
   * @param {Look}  look  The look to apply on this object.
   */
		value: function addLook(look) {
			if (!(look instanceof Look)) throw new TypeError("look must be a Look.");

			var type = this._out.constructor;

			this._out.out.filters = look.out.filters;

			if (type === Container) {
				this._out = new Sprite(look.clone().out);
			} else if (type === SimpleText) {
				this._out.out.style = look.style.out;
			} else if (type !== BitmapText && !(this._out instanceof Shape)) {
				this._out.out.texture = look.out.texture;

				if (type === AnimatedSprite) this._out.out.textures.push(look.out.texture);
			}

			this._looks.push(look);
		}

		/**
   * changeLook
   * This function is used in order apply a Look on this object.
   * @param {Number}  id  The indice of the look.
   */

	}, {
		key: "changeLook",
		value: function changeLook(id) {
			if ({}.toString.call(id) !== "[object Number]") throw new TypeError("id must be a number.");

			if (!(id < this._looks.length && id >= 0)) throw new RangeError("The given indice : " + id + ", is out of range for the looks.");

			var type = this._out.constructor;
			var look = this._looks[id];

			this._out.out.filters = look.out.filters;

			if (type === Container) {
				this._out = new Sprite(look.clone().out);
			} else if (type === SimpleText) {
				this._out.out.style = look.style.out;
			} else if (type !== BitmapText && !(this._out instanceof Shape)) {
				this._out.out.texture = look.out.texture;

				if (type === AnimatedSprite || type === AnimatedParticle) {
					if (this._out.out.textures === null) this._out.out.textures = [look.out.texture];else this._out.out.textures.push(look.out.texture);
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

	}, {
		key: "addLooks",
		value: function addLooks(looks) {
			if (!Array.isArray(looks)) {
				throw new TypeError("looks must be an array.");
			} else {
				for (var i = 0, l = looks.length; i < l; i++) {
					if (!(looks[i] instanceof Look)) throw new TypeError("Can't add the " + i + " element, it must be an Look");

					this.addLook(looks[i]);
				}
			}
		}

		/**
   * getLookAt
   * This function is used in order to get a Look at the given indice.
   * @param {Number}  id  The indice to get the look.
   * @return {Look} The corresponding look.
   */

	}, {
		key: "getLookAt",
		value: function getLookAt(id) {
			if ({}.toString.call(id) !== "[object Number]") throw new TypeError("id must be a number.");

			if (!(id < this._looks.length && id >= 0)) throw new RangeError("The given indice : " + id + ", is out of range for the looks.");

			return this._looks[id];
		}

		/**
   * removeLookAt
   * This function is used in order to remove a Look at the given indice.
   * @param {Number}  id  The indice of the look to remove.
   */

	}, {
		key: "removeLookAt",
		value: function removeLookAt(id) {
			if ({}.toString.call(id) !== "[object Number]") throw new TypeError("id must be a number.");

			if (!(id < this._looks.length && id >= 0)) throw new RangeError("The given indice : " + id + ", is out of range for the looks.");

			var type = this._out.constructor;

			if (id === this._looks.length - 1) {
				this._out.out.filters = null;

				if (type !== Container && type !== BitmapText && !(this._out instanceof Shape)) {
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

	}, {
		key: "removeLooks",
		value: function removeLooks() {
			var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
			var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._looks.length;

			if ({}.toString.call(start) !== "[object Number]") throw new TypeError("start must be a number.");

			if ({}.toString.call(end) !== "[object Number]") throw new TypeError("end must be a number.");

			if (start >= 0 && end <= this._looks.length) {
				for (var i = start; i < end; i++) {
					this.removeLookAt(start);
				}
			}
		}

		/**
   * addChild
   * This function is used in order to add a child for this object.
   * @param {Object2D}  obj  The object to add as a child.
   */

	}, {
		key: "addChild",
		value: function addChild(obj) {
			if (!(obj instanceof Object2D)) throw new TypeError("obj must be a Object2D.");

			if (obj.parent !== null) obj.parent.removeChild(obj);

			obj._parent = this;
			this._children.push(obj);
			this._out.out.addChild(obj.out.out);
		}

		/**
   * addChildren
   * This function is used in order to add some children for this object.
   * @param {Object2D[]} objs The objects to add as children.
   */

	}, {
		key: "addChildren",
		value: function addChildren(objs) {
			if (!Array.isArray(objs)) {
				throw new TypeError("objs must be an array.");
			} else {
				for (var i = 0, l = objs.length; i < l; i++) {
					if (!(objs[i] instanceof Object2D)) throw new TypeError("Can't add the " + i + " element, it must be an Object2D");

					this.addChild(objs[i]);
				}
			}
		}

		/**
   * getChildAt
   * This function is used in order to get the child at the given indice.
   * @param {Number}  id  The indice to get the child.
   * @return {Object2D} The corresponding child.
   */

	}, {
		key: "getChildAt",
		value: function getChildAt(id) {
			if ({}.toString.call(id) !== "[object Number]") throw new TypeError("id must be a number.");

			if (!(id < this._children.length && id >= 0)) throw new RangeError("The given indice : " + id + ", is out of range for the children.");

			return this._children[id];
		}

		/**
   * removeChildAt
   * This function is used in order to remove a child at the given indice.
   * @param {Number}  id  The indice of the child to remove.
   */

	}, {
		key: "removeChildAt",
		value: function removeChildAt(id) {
			if ({}.toString.call(id) !== "[object Number]") throw new TypeError("id must be a number.");

			if (!(id < this._children.length && id >= 0)) throw new RangeError("The given indice : " + id + ", is out of range for the children.");

			var child = this._children[id];
			child._parent = null;
			this._children.splice(id, 1);
			this._out.out.removeChild(child.out.out);
		}

		/**
   * removeChild
   * This function is used in order to remove a child of this object.
   * @param {Object2D}  obj  The child to remove from this object.
   */

	}, {
		key: "removeChild",
		value: function removeChild(obj) {
			if (!(obj instanceof Object2D)) throw new TypeError("obj must be a Object2D.");

			for (var i = 0, l = this._children.length; i < l; i++) {
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

	}, {
		key: "removeChildren",
		value: function removeChildren() {
			var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
			var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._children.length;

			if ({}.toString.call(start) !== "[object Number]") throw new TypeError("start must be a number.");

			if ({}.toString.call(end) !== "[object Number]") throw new TypeError("end must be a number.");

			if (start >= 0 && end <= this._children.length) {
				for (var i = start; i < end; i++) {
					this.removeChildAt(start);
				}
			}
		}

		/**
   * applyMask
   * This function is used in order to apply a mask on this object.
   * @param {Mask}  mask  The mask to apply.
   */

	}, {
		key: "applyMask",
		value: function applyMask(mask) {
			if (!(mask instanceof Mask)) throw new TypeError("mask must be a Mask.");

			this._mask = mask;
			this._out.out.mask = mask.out;
		}

		/**
   * removeMask
   * This function is used in order to remove the applied mask of this object.
   */

	}, {
		key: "removeMask",
		value: function removeMask() {
			this._mask = null;
			this._out.out.mask = null;
		}

		/**
   * destroy
   * This function is used in order to destroy this object.
   * @param {Object}  options  Options parameter to destroy dependencies.
   */

	}, {
		key: "destroy",
		value: function destroy(options) {
			if (!((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object" && {}.toString.call(options) === "[object Object]")) throw new TypeError("options must be an object.");

			if (options.destroyLooks) {
				for (var i = 0, l = this._looks.length; i < l; i++) {
					this._looks[i].destroy({ destroyBase: options.destroyLooksBases });
				}
			}

			this._looks = null;

			if (options.destroyMask && this._mask !== null) this._mask.destroy({});

			this._mask = null;

			if (this._parent !== null) {
				this._parent.removeChild(this);
				this._parent = null;
			}

			if (options.destroyChildren) {
				for (var _i = 0, _l = this._children.length; _i < _l; _i++) {
					this._children[_i].destroy(options);
				}
			} else {
				for (var _i2 = 0, _l2 = this._children.length; _i2 < _l2; _i2++) {
					this.children[_i2]._parent = null;
				}
			}

			this._children = null;

			this._out.destroy({});
		}

		/**
   * update
   * This function is used in order to update this object.
   */

	}, {
		key: "update",
		value: function update() {
			for (var i = 0, l = this._looks.length; i < l; i++) {
				this._looks[i].update();
			}this._out.calculateBounds();
		}

		/**
   * getSprite
   * This function is used in order to get the resulting Sprite of this object to use it as a mask. 
   * @return {Sprite} The resulting Sprite from this object.
   */

	}, {
		key: "getSprite",
		value: function getSprite() {
			var sprite = null;

			if (this._out instanceof Sprite) {
				sprite = this._out;
			} else if (this._looks.length > 0) {
				sprite = new Sprite(this._looks[this._looks.length - 1].out);
			} else {
				sprite = new Sprite();
			}

			return sprite;
		}
	}, {
		key: "out",
		get: function get() {
			return this._out;
		}

		/**
   * position
   * @getter
   * This function is a getter for the member _out.position.
   * @return {PIXI.Point|Pixi.ObservablePoint} The PIXI Position Object used by this object. 
   */

	}, {
		key: "position",
		get: function get() {
			return this._out.position;
		}

		/**
   * position
   * @setter
   * This function is a setter for the member _out.position.
   * @param {Object} An x,y coordinates object. 
   */
		,
		set: function set(coordinates) {
			if (!((typeof coordinates === "undefined" ? "undefined" : _typeof(coordinates)) === "object" && {}.toString.call(coordinates) === "[object Object]")) throw new TypeError("coordinates must be an object.");

			if ({}.toString.call(coordinates.x) !== "[object Number]") throw new TypeError("x must be a number.");

			if ({}.toString.call(coordinates.y) !== "[object Number]") throw new TypeError("y must be a number.");

			this._out.position.set(coordinates.x, coordinates.y);
		}

		/**
   * data
   * @getter
   * This function is a getter for the member _data.
   * @return {Object} Some data binded with the Object2D. 
   */

	}, {
		key: "data",
		get: function get() {
			return this._data;
		}

		/**
   * data
   * @setter
   * This function is a setter for the member _data.
   * @param {Object}  data  Some data binded with the Object2D.
   */
		,
		set: function set(data) {
			if (!((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object" && {}.toString.call(data) === "[object Object]")) throw new TypeError("data must be an object.");

			this._data = data;
		}

		/**
   * mask
   * @getter
   * This function is a getter for the member _mask.
   * @return {Mask} The current applied mask on this object. 
   */

	}, {
		key: "mask",
		get: function get() {
			return this._mask;
		}

		/**
   * parent
   * @getter
   * This function is a getter for the member _parent.
   * @return {Object2D} The parent of this object. 
   */

	}, {
		key: "parent",
		get: function get() {
			return this._parent;
		}

		/**
   * parent
   * @setter
   * This function is a setter for the member _parent.
   * @param {Object2D} parent The parent of this object. 
   */
		,
		set: function set(parent) {
			if (!(parent instanceof Object2D)) throw new TypeError("parent must be a Object2D.");

			parent.addChild(this);
		}

		/**
   * looks
   * @getter
   * This function is a getter for the member _looks.
   * @return {Look[*]} The Looks of this object. 
   */

	}, {
		key: "looks",
		get: function get() {
			return this._looks;
		}

		/**
   * children
   * @getter
   * This function is a getter for the member _children.
   * @return {Object2D[*]} The children of this object. 
   */

	}, {
		key: "children",
		get: function get() {
			return this._children;
		}

		/**
  * x
  * @getter
  * This function is a getter for the member _out.position.x.
  * @return  {Number} Position of the container on the x axis. 
  */

	}, {
		key: "x",
		get: function get() {
			return this._out.position.x;
		}

		/**
  * x
  * @setter
  * This function is a setter for the member _out.position.x.
  * @param  {Number} 	x 	 A x coordinate. 
  */
		,
		set: function set(x) {
			if ({}.toString.call(x) !== "[object Number]") throw new TypeError("x must be a number.");

			this._out.position.x = x;
		}

		/**
  * y
  * @getter
  * This function is a getter for the member _out.position.y.
  * @return  {Number} Position of the container on the y axis. 
  */

	}, {
		key: "y",
		get: function get() {
			return this._out.position.y;
		}

		/**
  * y
  * @setter
  * This function is a setter for the member _out.position.y.
  * @param  {Number}	y 	 An y coordinate. 
  */
		,
		set: function set(y) {
			if ({}.toString.call(y) !== "[object Number]") throw new TypeError("y must be a number.");

			this._out.position.y = y;
		}

		/**
   * height
   * @getter
   * This function is a getter for the member _out.height.
   * @return {Number} The height of the Container.
   */

	}, {
		key: "height",
		get: function get() {
			return this._out.height;
		}

		/**
   * height
   * @setter
   * This function is a setter for the member _out.height.
   * @param {Number}  height  The height of the Container, setting this will modify the scale to achieve the value set.
   */
		,
		set: function set(height) {
			if ({}.toString.call(height) !== "[object Number]") throw new TypeError("height must be a number.");

			this._out.height = height;
		}

		/**
   * width
   * @getter
   * This function is a getter for the member _out.width.
   * @return {Number} The width of the Container.
   */

	}, {
		key: "width",
		get: function get() {
			return this._out.width;
		}

		/**
   * width
   * @setter
   * This function is a setter for the member _out.width.
   * @param {Number}  width  The width of the Container, setting this will modify the scale to achieve the value set.
   */
		,
		set: function set(width) {
			if ({}.toString.call(width) !== "[object Number]") throw new TypeError("width must be a number.");

			this._out.width = width;
		}

		/**
  * worldTx
  * @getter
  * This function is a getter for the member _out.worldTransform.out.tx.
  * @return  {Number} World translation of the container on x. 
  */

	}, {
		key: "worldTx",
		get: function get() {
			return this._out.worldTransform.out.tx;
		}

		/**
  * worldTy
  * @getter
  * This function is a getter for the member _out.worldTransform.out.ty.
  * @return  {Number} World translation of the container on y. 
  */

	}, {
		key: "worldTy",
		get: function get() {
			return this._out.worldTransform.out.ty;
		}
	}]);

	return Object2D;
}();

;

module.exports = {
	Object2D: Object2D
};