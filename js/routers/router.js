define([
	'jquery',
	'backbone',
	'views/home/header'
], function( $, Backbone, HeaderView ) {

	var Workspace = Backbone.Router.extend({
		routes:{
			"": "home"
		},
		home: function() {
			var header = new HeaderView();
			header.render();
			
			$.mobile.changePage( "#home" );
        }
	});

	return Workspace;
});
