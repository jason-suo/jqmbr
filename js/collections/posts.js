define([
	'underscore',
	'backbone',
	'models/post'
], function( _, Backbone, Post) {

	var PostsCollection = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: Post
	});

	return new PostsCollection();
});
