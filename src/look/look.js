const { Shader } = require("./shader/Shader.js");
const { GLSLShader } = require("./shader/GLSLShader.js");
const { LookMaskShader } = require("./shader/LookMaskShader.js");

module.exports = {
	Shader: Shader,
	GLSLShader: GLSLShader,
	LookMaskShader: LookMaskShader,
};