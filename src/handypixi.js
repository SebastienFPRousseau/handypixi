require("pixi.js");
require("pixi-particles");

const Support = require("./support/support.js");
const Event = require("./event/event.js");
const Environment = require("./environment/environment.js");
const Look = require("./look/look.js");

module.exports = {
    Point: Support.Point,
    ObservablePoint: Support.ObservablePoint,
    Frame: Support.Frame,
    Matrix: Support.Matrix,
    //Quad: Support.Quad,
    TransformBase: Support.TransformBase,
    Transform: Support.Transform,
    TransformStatic: Support.TransformStatic,
    GroupD8: Support.GroupD8,
    Setup: Support.Setup,
    Tools: Support.Tools,

    Ticker: Event.Ticker,

    CanvasElement: Environment.CanvasElement,
    Configuration: Environment.Configuration,
    WebGLConfiguration: Environment.WebGLConfiguration,
    Settings: Environment.Settings,

    Shader: Look.Shader,
    GLSLShader: Look.GLSLShader,
    LookMaskShader: Look.LookMaskShader,
    AbstractShaderFactory: Look.AbstractShaderFactory,
    ShaderFactory: Look.ShaderFactory,
    Texture: Look.Texture,
    ImageTexture: Look.ImageTexture,
};