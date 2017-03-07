require("pixi.js");
require("pixi-particles");

const Support = require("./support/support.js");
const Event = require("./event/event.js");
const Environment = require("./environment/environment.js");

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
};