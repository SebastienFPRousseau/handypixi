const { Point } = require("./geometry/Point.js");
const { ObservablePoint } = require("./geometry/ObservablePoint.js");
const { Frame } = require("./geometry/Frame.js");
const { Matrix, Transform, TransformBase, TransformStatic } = require("./geometry/Matrix.js");
//const { Quad } = require("./geometry/Quad.js");
const { GroupD8 } = require("./geometry/GroupD8.js");
const { Setup } = require("./utils/Setup.js");
const { Tools } = require("./utils/Tools.js");
const { CanvasTinter } = require("./utils/CanvasTinter.js");
const { Loader } = require("./loader/Loader.js");

module.exports = {
	Point: Point,
	ObservablePoint: ObservablePoint,
    Frame: Frame,
    Matrix: Matrix,
    //Quad: Quad,
    TransformBase: TransformBase,
    Transform: Transform,
    TransformStatic: TransformStatic,
    GroupD8: GroupD8,
    Setup: Setup,
    Tools: Tools,
    CanvasTinter: CanvasTinter,
    Loader: Loader,
};