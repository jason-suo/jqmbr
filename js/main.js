// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		'globalize': {
			deps: [
				'jquery'
			],
			exports: 'Globalize'
		},
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		}
	},
	paths: {
		jquery: 'libs/jquery/jquery-1.8.2',
		jquerymobile: "libs/jquery/jquery.mobile-1.2.0",
		underscore: 'libs/backbone/lodash.min',
		backbone: 'libs/backbone/backbone',
		text: 'libs/require/text',
		globalize: 'libs/globalize',
		globalizeculture: 'libs/cultures/globalize.cultures'
	}
});

require([
	'jqm-config',
	'routers/router',
	'localize/zh',
	'common'
], function( config, Workspace, Localize, Common ) {

	// Initialize routing and start Backbone.history()
	new Workspace();
	Backbone.history.start();
});
