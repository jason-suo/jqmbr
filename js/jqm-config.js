define([
	'jquery',
	'jquerymobile'
], function ( $, JQM ) {
	$(document).on("mobileinit", function () {
		console.log('mobileinit');
		$.mobile.linkBindingEnabled = false;
		$.mobile.hashListeningEnabled = false;

		// Remove page from DOM when it's being replaced
		$('div[data-role="page"]').live('pagehide', function (event, ui) {
			$(event.currentTarget).remove();
		});
	});
});