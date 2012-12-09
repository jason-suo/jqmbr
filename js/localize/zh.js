require([
	'globalize'
], function(Globalize) {
	Globalize.addCultureInfo( "zh", {
		messages: {
		  "label_idea" : "想法"
		}
	});
  	Globalize.HYMessage = function (msg) {
		return Globalize.localize(msg, "zh");
	};
});