"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
|--------------------------------------------------------------------------
| AbstractContainerFactory
|--------------------------------------------------------------------------
|
| This file defines the AbstractContainerFactory Object.
| This object is the abstract factory for Container.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./Container.js"),
    Container = _require.Container;

var _require2 = require("./mask/sprite/SimpleText.js"),
    SimpleText = _require2.SimpleText;

var _require3 = require("./bitmapText/BitmapText.js"),
    BitmapText = _require3.BitmapText;

var _require4 = require("./mesh/Mesh.js"),
    Mesh = _require4.Mesh;

var _require5 = require("./mesh/Rope.js"),
    Rope = _require5.Rope;

var _require6 = require("./mesh/Plane.js"),
    Plane = _require6.Plane;

var _require7 = require("./mesh/NineSlicePlane.js"),
    NineSlicePlane = _require7.NineSlicePlane;

var _require8 = require("./mask/shape/Shape.js"),
    Shape = _require8.Shape;

var _require9 = require("./mask/shape/Circle.js"),
    Circle = _require9.Circle;

var _require10 = require("./mask/shape/Ellipse.js"),
    Ellipse = _require10.Ellipse;

var _require11 = require("./mask/shape/Rectangle.js"),
    Rectangle = _require11.Rectangle;

var _require12 = require("./mask/shape/RoundedRectangle.js"),
    RoundedRectangle = _require12.RoundedRectangle;

var _require13 = require("./mask/shape/Polygon.js"),
    Polygon = _require13.Polygon;

var _require14 = require("./mask/sprite/Sprite.js"),
    Sprite = _require14.Sprite;

var _require15 = require("./mask/sprite/AnimatedSprite.js"),
    AnimatedSprite = _require15.AnimatedSprite;

var _require16 = require("./mask/sprite/TilingSprite.js"),
    TilingSprite = _require16.TilingSprite;

var _require17 = require("./mask/sprite/particle/Particle.js"),
    Particle = _require17.Particle;

var _require18 = require("./mask/sprite/particle/PathParticle.js"),
    PathParticle = _require18.PathParticle;

var _require19 = require("./mask/sprite/particle/AnimatedParticle.js"),
    AnimatedParticle = _require19.AnimatedParticle;

/**
 * TEXT_FACTORY
 * Identify the TextFactory 
 * @type {Number} 
 */


var TEXT_FACTORY = 0;

/**
 * MESH_FACTORY
 * Identify the MeshFactory 
 * @type {Number} 
 */
var MESH_FACTORY = 1;

/**
 * SPECIAL_SPRITE_FACTORY
 * Identify the SpecialSpriteFactory 
 * @type {Number} 
 */
var SPECIAL_SPRITE_FACTORY = 2;

/**
 * SHAPE_FACTORY
 * Identify the ShapeFactory 
 * @type {Number} 
 */
var SHAPE_FACTORY = 3;

/**
 * BITMAPTEXT_FACTORY
 * Identify the BitmapTextFactory 
 * @type {Number} 
 */
var BITMAPTEXT_FACTORY = 4;

var AbstractContainerFactory = function () {
	/**
  * constructor
  * This function is used in order to forbidden the built of an AbstractContainerFactory
  */
	function AbstractContainerFactory() {
		_classCallCheck(this, AbstractContainerFactory);

		if (this.constructor === AbstractContainerFactory) throw new TypeError("Cannot construct Abstract instances like AbstractContainerFactory directly.");
	}

	/**
  * TEXT_FACTORY
  * @getter
  */


	_createClass(AbstractContainerFactory, null, [{
		key: "getFactory",


		/**
   * getFactory
   * This function is used in order to get the factory using its id.
   * @param {Number}  id  The container factory id.
   * @return {AbstractContainerFactory} The factory needed.
   */
		value: function getFactory(id) {
			if ({}.toString.call(id) !== "[object Number]") throw new TypeError("id must be a number.");

			switch (id) {
				case TEXT_FACTORY:
					return new TextFactory();

				case BITMAPTEXT_FACTORY:
					return new BitmapTextFactory();

				case MESH_FACTORY:
					return new MeshFactory();

				case SHAPE_FACTORY:
					return new ShapeFactory();

				case SPECIAL_SPRITE_FACTORY:
					return new SpecialSpriteFactory();

				default:
					throw new Error("No factory found for this id: " + id + "!");
			}
		}
	}, {
		key: "TEXT_FACTORY",
		get: function get() {
			return TEXT_FACTORY;
		}

		/**
   * MESH_FACTORY
   * @getter
   */

	}, {
		key: "MESH_FACTORY",
		get: function get() {
			return MESH_FACTORY;
		}

		/**
   * SPECIAL_SPRITE_FACTORY
   * @getter
   */

	}, {
		key: "SPECIAL_SPRITE_FACTORY",
		get: function get() {
			return SPECIAL_SPRITE_FACTORY;
		}

		/**
   * SHAPE_FACTORY
   * @getter
   */

	}, {
		key: "SHAPE_FACTORY",
		get: function get() {
			return SHAPE_FACTORY;
		}

		/**
   * BITMAPTEXT_FACTORY
   * @getter
   */

	}, {
		key: "BITMAPTEXT_FACTORY",
		get: function get() {
			return BITMAPTEXT_FACTORY;
		}
	}]);

	return AbstractContainerFactory;
}();

;

/*
|--------------------------------------------------------------------------
| TextFactory
|--------------------------------------------------------------------------
|
| This file defines the TextFactory Object.
| This object is a factory for text objects.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var TextFactory = function (_AbstractContainerFac) {
	_inherits(TextFactory, _AbstractContainerFac);

	/**
  * constructor
  * This function is used in order to build a TextFactory.
  */
	function TextFactory() {
		_classCallCheck(this, TextFactory);

		return _possibleConstructorReturn(this, (TextFactory.__proto__ || Object.getPrototypeOf(TextFactory)).call(this));
	}

	/**
  * createSimpleText
  * This function is used in order to build a SimpleText.
  * @param {String}  text  The string to display by this Object.
  * @return {SimpleText} The SimpleText built. 
  */


	_createClass(TextFactory, [{
		key: "createSimpleText",
		value: function createSimpleText(text) {
			return new SimpleText(text);
		}
	}]);

	return TextFactory;
}(AbstractContainerFactory);

;

/*
|--------------------------------------------------------------------------
| BitmapTextFactory
|--------------------------------------------------------------------------
|
| This file defines the BitmapTextFactory Object.
| This object is a factory for BitmapText.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var BitmapTextFactory = function (_AbstractContainerFac2) {
	_inherits(BitmapTextFactory, _AbstractContainerFac2);

	/**
  * constructor
  * This function is used in order to build a BitmapTextFactory.
  */
	function BitmapTextFactory() {
		_classCallCheck(this, BitmapTextFactory);

		return _possibleConstructorReturn(this, (BitmapTextFactory.__proto__ || Object.getPrototypeOf(BitmapTextFactory)).call(this));
	}

	/**
  * createBitmapText
  * This function is used in order to build a BitmapText.
  * @param {String}  text  The text to display.
  * @param {Object}  style  The style parameters.
  * @return {BitmapText} The BitmapText built. 
  */


	_createClass(BitmapTextFactory, [{
		key: "createBitmapText",
		value: function createBitmapText(text) {
			var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

			return new BitmapText(text, style);
		}
	}]);

	return BitmapTextFactory;
}(AbstractContainerFactory);

;

/*
|--------------------------------------------------------------------------
| MeshFactory
|--------------------------------------------------------------------------
|
| This file defines the MeshFactory Object.
| This object is a factory for Mesh.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var MeshFactory = function (_AbstractContainerFac3) {
	_inherits(MeshFactory, _AbstractContainerFac3);

	/**
  * constructor
  * This function is used in order to build a MeshFactory.
  */
	function MeshFactory() {
		_classCallCheck(this, MeshFactory);

		return _possibleConstructorReturn(this, (MeshFactory.__proto__ || Object.getPrototypeOf(MeshFactory)).call(this));
	}

	/**
  * createMesh
  * This function is used in order to build a Mesh.
  * @param {Object}  options  Options for the build ( vertices, uvs, indices, drawModes)
  * @return {Mesh} The Mesh built. 
  */


	_createClass(MeshFactory, [{
		key: "createMesh",
		value: function createMesh() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			return new Mesh(options);
		}

		/**
   * createRope
   * This function is used in order to build a Rope.
   * @param {Points[]}  points  An array of Point to construct this rope. They can't change after building.
   * @return {Rope} The Rope built. 
   */

	}, {
		key: "createRope",
		value: function createRope(points) {
			return new Rope(points);
		}

		/**
   * createPlane
   * @param {Number}  verticesX  The number of vertices in the x-axis.
   * @param {Number}  verticesY  The number of vertices in the y-axis.
   * This function is used in order to build a Plane.
   * @return {Plane} The Plane built. 
   */

	}, {
		key: "createPlane",
		value: function createPlane() {
			var verticesX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
			var verticesY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

			return new Plane(verticesX, verticesY);
		}

		/**
   * createNineSlicePlane
   * This function is used in order to build a NineSlicePlane.
   * @param {Object}  barsSizes  Sizes of the bar horizontal and vertical. 
   * @return {NineSlicePlane} The NineSlicePlane built. 
   */

	}, {
		key: "createNineSlicePlane",
		value: function createNineSlicePlane() {
			var barsSizes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			return new NineSlicePlane(barsSizes);
		}
	}]);

	return MeshFactory;
}(AbstractContainerFactory);

;

/*
|--------------------------------------------------------------------------
| ShapeFactory
|--------------------------------------------------------------------------
|
| This file defines the ShapeFactory Object.
| This object is a factory for Shape.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var ShapeFactory = function (_AbstractContainerFac4) {
	_inherits(ShapeFactory, _AbstractContainerFac4);

	/**
  * constructor
  * This function is used in order to build a ShapeFactory.
  */
	function ShapeFactory() {
		_classCallCheck(this, ShapeFactory);

		return _possibleConstructorReturn(this, (ShapeFactory.__proto__ || Object.getPrototypeOf(ShapeFactory)).call(this));
	}

	/**
  * createShape
  * This function is used in order to build a Shape.
  * @param {Object}  options  Default options for drawing.
  * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
  * @return {Shape} The Shape built. 
  */


	_createClass(ShapeFactory, [{
		key: "createShape",
		value: function createShape() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
			var nativeLines = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

			return new Shape(options, nativeLines);
		}

		/**
   * createCircle
   * This function is used in order to build a Circle.
   * @param {Number}  x  The X coordinate of the center of this circle.
   * @param {Number}  y  The Y coordinate of the center of this circle.
   * @param {Number}  radius  The radius of the circle.
   * @param {Object}  options  Default options for drawing.
   * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
   * @return {Circle} The Circle built. 
   */

	}, {
		key: "createCircle",
		value: function createCircle() {
			var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
			var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
			var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
			var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
			var nativeLines = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;

			return new Circle(x, y, radius, options, nativeLines);
		}

		/**
   * createEllipse
   * This function is used in order to build a Ellipse.
   * @param {Number}  x  The X coordinate of the center of this Ellipse.
   * @param {Number}  y  The Y coordinate of the center of this Ellipse.
   * @param {Number}  width  The half width of this ellipse.
   * @param {Number}  height  The half height of this ellipse.
   * @param {Object}  options  Default options for drawing.
   * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
   * @return {Ellipse} The Ellipse built. 
   */

	}, {
		key: "createEllipse",
		value: function createEllipse() {
			var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
			var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
			var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
			var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
			var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
			var nativeLines = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

			return new Ellipse(x, y, width, height, options, nativeLines);
		}

		/**
   * createPolygon
   * This function is used in order to build a Polygon.
   * @param {Point[]} points An array of Points that form the polygon.
   * @param {Object}  options  Default options for drawing.
   * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
   * @return {Polygon} The Polygon built. 
   */

	}, {
		key: "createPolygon",
		value: function createPolygon() {
			var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
			var nativeLines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

			return new Polygon(points, options, nativeLines);
		}

		/**
   * createRectangle
   * This function is used in order to build a Rectangle.
   * @param {Number}  x  The X coordinate of the center of this Rectangle.
   * @param {Number}  y  The Y coordinate of the center of this Rectangle.
   * @param {Number}  width  The overall width of this rectangle.
   * @param {Number}  height  The overall height of this rectangle.
   * @param {Object}  options  Default options for drawing.
   * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
   * @return {Rectangle} The Rectangle built. 
   */

	}, {
		key: "createRectangle",
		value: function createRectangle() {
			var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
			var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
			var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
			var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
			var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
			var nativeLines = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

			return new Rectangle(x, y, width, height, options, nativeLines);
		}

		/**
   * createRoundedRectangle
   * This function is used in order to build a RoundedRectangle.
   * @param {Number}  x  The X coordinate of the center of this RoundedRectangle.
   * @param {Number}  y  The Y coordinate of the center of this RoundedRectangle.
   * @param {Number}  width  The overall width of this RoundedRectangle.
   * @param {Number}  height  The overall height of this RoundedRectangle.
   * @param {Number}  radius  Controls the radius of the rounded corners.
   * @param {Object}  options  Default options for drawing.
   * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
   * @return {RoundedRectangle} The RoundedRectangle built. 
   */

	}, {
		key: "createRoundedRectangle",
		value: function createRoundedRectangle() {
			var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
			var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
			var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
			var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
			var radius = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
			var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;
			var nativeLines = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : undefined;

			return new RoundedRectangle(x, y, width, height, radius, options, nativeLines);
		}
	}]);

	return ShapeFactory;
}(AbstractContainerFactory);

;

/*
|--------------------------------------------------------------------------
| SpecialSpriteFactory
|--------------------------------------------------------------------------
|
| This file defines the SpecialSpriteFactory Object.
| This object is a factory for specials Sprite.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var SpecialSpriteFactory = function (_AbstractContainerFac5) {
	_inherits(SpecialSpriteFactory, _AbstractContainerFac5);

	/**
  * constructor
  * This function is used in order to build a SpecialSpriteFactory.
  */
	function SpecialSpriteFactory() {
		_classCallCheck(this, SpecialSpriteFactory);

		return _possibleConstructorReturn(this, (SpecialSpriteFactory.__proto__ || Object.getPrototypeOf(SpecialSpriteFactory)).call(this));
	}

	/**
  * createAnimatedSprite
  * This function is used in order to build a AnimatedSprite.
  * @param {Boolean}  autoUpdate  Use the shared Ticker to auto update animation or not.
  * @return {AnimatedSprite} The AnimatedSprite built. 
  */


	_createClass(SpecialSpriteFactory, [{
		key: "createAnimatedSprite",
		value: function createAnimatedSprite() {
			var autoUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			return new AnimatedSprite(autoUpdate);
		}

		/**
   * createTilingSprite
   * This function is used in order to build a TilingSprite.
   * @param {Number}  width  The width of the tiling sprite.
   * @param {Number}  height  The height of the tiling sprite.
   * @return {TilingSprite} The TilingSprite built. 
   */

	}, {
		key: "createTilingSprite",
		value: function createTilingSprite() {
			var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
			var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

			return new TilingSprite(width, height);
		}

		/**
   * createParticle
   * This function is used in order to build a Particle.
   * @param {Emitter}  emitter  The emitter that controls this particle.
   * @return {Particle} The Particle built. 
   */

	}, {
		key: "createParticle",
		value: function createParticle(emitter) {
			return new Particle(emitter);
		}

		/**
   * createAnimatedParticle
   * This function is used in order to build a AnimatedParticle.
   * @param {Emitter}  emitter  The emitter that controls this particle.
   * @return {AnimatedParticle} The AnimatedParticle built. 
   */

	}, {
		key: "createAnimatedParticle",
		value: function createAnimatedParticle(emitter) {
			return new AnimatedParticle(emitter);
		}

		/**
   * createPathParticle
   * This function is used in order to build a PathParticle.
   * @param {Emitter}  emitter  The emitter that controls this particle.
   * @return {PathParticle} The PathParticle built. 
   */

	}, {
		key: "createPathParticle",
		value: function createPathParticle(emitter) {
			return new PathParticle(emitter);
		}
	}]);

	return SpecialSpriteFactory;
}(AbstractContainerFactory);

;

module.exports = {
	AbstractContainerFactory: AbstractContainerFactory,
	TextFactory: TextFactory,
	BitmapTextFactory: BitmapTextFactory,
	MeshFactory: MeshFactory,
	ShapeFactory: ShapeFactory,
	SpecialSpriteFactory: SpecialSpriteFactory
};