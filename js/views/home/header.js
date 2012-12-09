define([
	'jquery',
	'underscore',
	'backbone',
	'text!' + HEYUE.BASE_PATH + 'templates/home/header.html'
], function( $, _, Backbone, HeaderTemplte ) {
	var HeaderView = Backbone.View.extend({

		el: '#header',

		template: _.template( HeaderTemplte ),

		// The DOM events specific to an item.
		events: {
			'click .ui-radio':	'selectFilter'
		},
		
		initialize: function() {
			//TODO
		},

		// Re-render the titles of the todo item.
		render: function() {
			var data = {
				postType: Globalize.HYMessage("label_idea"),
				filterType:  "",
				filterNew: "",
				filterTrend: "",
				hotTrend: "",
				fiterNearby: "",
				fiterQuestion: ""
			};
			this.$el.html( this.template(data) );
		},

		selectFilter : function() {
			var thisId = $(this).find("input").attr("id");
			
			if (thisId == "question" || thisId == "event") {
				$("#selection").html($(this).find("label span span:first").html() + " ");
			} else {
				$("#selection").html("想法 - " + $(this).find("label span span:first").html() + " ");
			}
		}
	});

	return HeaderView;
});