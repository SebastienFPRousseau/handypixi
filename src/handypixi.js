require("pixi.js");
require("pixi-particles");

const Support = require("./support/support.js");
const Interactivity = require("./interactivity/interactivity.js");
const RenderingSystem = require("./renderingSystem/renderingSystem.js");
const Graphic = require("./graphic/graphic.js");
const DisplayObject = require("./displayObject/displayObject.js");

module.exports = {
    Point: Support.Point,
    ObservablePoint: Support.ObservablePoint,
    AbstractPoint: Support.AbstractPoint,
    Frame: Support.Frame,
    Matrix: Support.Matrix,
    //Quad: Support.Quad,
    TransformBase: Support.TransformBase,
    Transform: Support.Transform,
    TransformStatic: Support.TransformStatic,
    GroupD8: Support.GroupD8,
    Setup: Support.Setup,
    Tools: Support.Tools,
    CanvasTinter: Support.CanvasTinter,
    Loader: Support.Loader,

    Ticker: Interactivity.Ticker,

    CanvasElement: RenderingSystem.CanvasElement,
    Configuration: RenderingSystem.Configuration,
    WebGLConfiguration: RenderingSystem.WebGLConfiguration,
    Settings: RenderingSystem.Settings,

    Shader: Graphic.Shader,
    GLSLShader: Graphic.GLSLShader,
    LookMaskShader: Graphic.LookMaskShader,
    AbstractShaderFactory: Graphic.AbstractShaderFactory,
    ShaderFactory: Graphic.ShaderFactory,
    Texture: Graphic.Texture,
    ImageTexture: Graphic.ImageTexture,
    RenderTexture: Graphic.RenderTexture,
    VideoTexture: Graphic.VideoTexture,
    AbstractTextureFactory: Graphic.AbstractTextureFactory,
    TextureFactory: Graphic.TextureFactory,
    TextStyle: Graphic.TextStyle,
    Look: Graphic.Look,

    Bounds: DisplayObject.Bounds,
    Container: DisplayObject.Container,
    Mask: DisplayObject.Mask,
    Sprite: DisplayObject.Sprite,
    AnimatedSprite: DisplayObject.AnimatedSprite,
    SimpleText: DisplayObject.SimpleText,
};