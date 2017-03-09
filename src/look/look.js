const { Shader } = require("./shader/Shader.js");
const { GLSLShader } = require("./shader/GLSLShader.js");
const { LookMaskShader } = require("./shader/LookMaskShader.js");
const { AbstractShaderFactory, ShaderFactory } = require("./shader/AbstractShaderFactory.js");

module.exports = {
	Shader: Shader,
	GLSLShader: GLSLShader,
	LookMaskShader: LookMaskShader,
	AbstractShaderFactory: AbstractShaderFactory,
	ShaderFactory: ShaderFactory,
};