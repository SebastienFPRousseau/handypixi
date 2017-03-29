const { CanvasElement } = require("./system/CanvasElement.js");
const { Configuration } = require("./config/Configuration.js");
const { WebGLConfiguration } = require("./config/WebGLConfiguration.js");
const { Settings } = require("./config/Settings.js");
const { WebGLRenderTarget } = require("./system/WebGLRenderTarget.js");
const { Environment } = require("./system/Environment.js");
const { ContainerRenderer } = require("./manager/ContainerRenderer.js");
const { WebGLEnvironment } = require("./system/WebGLEnvironment.js");
const { System } = require("./system/System.js");

module.exports = {
	CanvasElement: CanvasElement,
	Configuration: Configuration,
	WebGLConfiguration: WebGLConfiguration,
	Settings: Settings,
	WebGLRenderTarget: WebGLRenderTarget,
	Environment: Environment,
	ContainerRenderer: ContainerRenderer,
	WebGLEnvironment: WebGLEnvironment,
	System: System,
};