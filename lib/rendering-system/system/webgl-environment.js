/*
|--------------------------------------------------------------------------
| WebGLEnvironment
|--------------------------------------------------------------------------
|
| This file defines the WebGLEnvironment Object.
| This object build the main object of renderingSystem with WebGL for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { WebGLConfiguration } = require("../config/webgl-configuration");
const { Object2D } = require("../../display-object/object-2d/object-2d");
const { Matrix } = require("../../support/geometry/matrix");
const { ContainerRenderer } = require("../manager/container-renderer");
const { Ticker } = require("../../interactivity/ticker/ticker");
const { EventManager } = require("../../interactivity/manager/event-manager");
const { Settings } = require("../config/settings");
const { Environment } = require("./environment");
const { CanvasElement } = require("./canvas-element");
const { WebGLRenderTarget } = require("./webgl-render-target");

class WebGLEnvironment extends Environment {
  /**
   * constructor
   * This function is used in order to build a WebGLEnvironment.
   * @param {HTMLCollection}  dom  The html DOM the 2D scene belongs.
   * @param {Object}  options  Options for the environment.
   * @param {PIXI.WebGLRenderer}  dom  A Pixi object to use in the HandyPixi object.
   */
  constructor(dom, options = {}) {
    if (
      !(
        typeof options === "object" &&
        {}.toString.call(options) === "[object Object]"
      )
    ) {
      throw new TypeError("options must be an object.");
    }

    super();

    if (dom instanceof PIXI.WebGLRenderer) {
      this._renderer = dom;
      options.viewWidth = dom.width;
      options.viewHeight = dom.height;

      this._canvas = new CanvasElement(
        this._renderer.width,
        this._renderer.height,
        this._renderer.resolution
      );
      this._canvas.out.canvas = this._renderer.view;
      this._canvas.out.context = this._renderer.view.getContext("2d");
    } else {
      if (!(dom instanceof HTMLCollection || dom instanceof NodeList)) {
        throw new TypeError("dom must be a HTMLCollection or a NodeList.");
      }

      // Create the WebGL renderer
      if (options.viewWidth === undefined) {
        options.viewWidth = 800;
      }

      if (options.viewHeight === undefined) {
        options.viewHeight = 600;
      }

      options.width = options.viewWidth;
      options.height = options.viewHeight;

      this._renderer = new PIXI.WebGLRenderer(options);

      // Get the HTML canvas element
      options.view = this._renderer.view;
      this._canvas = new CanvasElement(
        options.viewWidth,
        options.viewHeight,
        options.resolution
      );
      this._canvas.out.canvas = options.view;
      this._canvas.out.context = options.view.getContext("2d");

      // Add the environment to DOM
      dom[0].append(this._canvas.canvas);
    }

    this._targets = [];
    this._targets.push(
      new WebGLRenderTarget(this._renderer._activeRenderTarget)
    );

    // Create the stage for Object2Ds
    this._stage = new Object2D();
    this._stage.out.width = options.viewWidth;
    this._stage.out.height = options.viewHeight;

    // Create the usefull managers
    this._prepare = new PIXI.prepare.webgl(this._renderer); // eslint-disable-line new-cap
    this._config = new WebGLConfiguration(
      this._renderer.state,
      options.maxMilliseconds,
      options.maxItemsPerFrame
    );
    this._eventManager = new EventManager(this._renderer);

    // Create a Ticker for render updates
    this._ticker = null;

    if (options.tickerShared) {
      this.ticker = Ticker.shared;
    } else {
      this.ticker = new Ticker();
    }

    if (options.autoStart) {
      this._ticker.autoStart();
      this._ticker.start();
    }
  }

  /**
   * eventDispatcher
   * @getter
   * This function is a getter for the member dispatcher of the _eventManager.
   * @return {Dispatcher} The render targets binded on this environment.
   */
  get eventDispatcher() {
    return this._eventManager.dispatcher;
  }

  /**
   * targets
   * @getter
   * This function is a getter for the member _targets.
   * @return {WebGLRenderTarget[]} The render targets binded on this environment.
   */
  get targets() {
    return this._targets;
  }

  /**
   * ticker
   * @getter
   * This function is a getter for the member _ticker.
   * @return {Ticker} The ticker for render updates.
   */
  get ticker() {
    return this._ticker;
  }

  /**
   * ticker
   * @setter
   * This function is a setter for the member _ticker.
   * @param {Ticker}  ticker  The ticker for render updates.
   */
  set ticker(ticker) {
    if (!(ticker instanceof Ticker)) {
      throw new TypeError("ticker must be a Ticker.");
    }

    if (this._ticker) {
      this._ticker.remove(this.render, this);
    }

    this._ticker = ticker;
    ticker.add(this.render, this, Settings.UPDATE_PRIORITY.LOW);
  }

  /**
   * bindTarget
   * This function is used in order to bind a target to this environment and use it.
   * @param {WebGLRenderTarget}  target  The render target to use.
   */
  bindTarget(target) {
    if (!(target instanceof WebGLRenderTarget)) {
      throw new TypeError("target must be a WebGLRenderTarget.");
    }

    this._renderer.bindRenderTarget(target.out);
    this._targets.push(target);
  }

  /**
   * changeTarget
   * This function is used in order to change the active render target.
   * @param {Number}  id  The indice of the target to use.
   */
  changeTarget(id) {
    if ({}.toString.call(id) !== "[object Number]") {
      throw new TypeError("id must be a number.");
    }

    if (id >= this._targets.length || id < 0) {
      throw new RangeError(
        "The given id is out of range of the targets array."
      );
    }

    const swapper = this._targets[this._targets.length - 1];

    this._renderer.bindRenderTarget(this._targets[id].out);
    this._targets[this._targets.length - 1] = this._targets[id];
    this._targets[id] = swapper;
  }

  /**
   * createVao
   * This function is used in order to creates a new VAO from this environment.
   * @return {VertexArrayObject} The resulting VAO.
   */
  createVao() {
    return this._renderer.createVao();
  }

  /**
   * bindVao
   * This function is used in order to changes the current Vao to the one given.
   * @param {VertexArrayObject} vao The new VAO.
   */
  bindVao(vao) {
    this._renderer.bindVao(vao);
  }

  /**
   * flush
   * This function is used in order to render anything that may be batched up.
   */
  flush() {
    this._renderer.flush();
  }

  /**
   * reset
   * This function is used in order to reset the configuration.
   */
  reset() {
    this._renderer.reset();
    this._config = new WebGLConfiguration(this._renderer.state);
  }

  /**
   * setTransform
   * This function is used in order to set the transform of the active render target to the given matrix.
   * @param {Matrix}  matrix  The transformation matrix to apply.
   */
  setTransform(matrix) {
    if (!(matrix instanceof Matrix)) {
      throw new TypeError("matrix must be a Matrix.");
    }

    this._renderer.setTransform(matrix.out);
  }

  /**
   * clear
   * This function is used in order to erases the active render target and fill the drawing area with a colour.
   * @param {Number[4]}  color  Colour to clear the active target with, rgba value.
   */
  clear(color = undefined) {
    this._targets[this._targets.length - 1].clear(color);
  }

  /**
   * destroy
   * This function is used in order to destroy this environment.
   * @param {Object}  options  Options for destruction.
   */
  destroy(options) {
    for (let i = 0, l = this._targets.length; i < l; i++) {
      this._targets[i].destroy();
    }

    this._targets = null;
    this._ticker.out.destroy();
    this._ticker = null;

    super.destroy(options);
  }

  /**
   * registerContainerRenderer
   * This function is used in order to register a ContainerRenderer as a plugin for specifics containers.
   * @param {String}  pluginName  The plugin name of the container renderer to register.
   * @param {ContainerRenderer}  renderer  The container renderer class to register.
   */
  static registerContainerRenderer(pluginName, renderer) {
    if (
      !(
        typeof pluginName === "string" &&
        {}.toString.call(pluginName) === "[object String]"
      )
    ) {
      throw new TypeError("pluginName must be a string.");
    }

    if (!(renderer.prototype === ContainerRenderer.prototype)) {
      throw new TypeError(
        "renderer must be a class which inherits of ContainerRenderer."
      );
    }

    PIXI.WebGLRenderer.registerPlugin(pluginName, renderer);
  }
}

module.exports = {
  WebGLEnvironment,
};
