window.Ground = (function() {
	'use strict';


	var Ground = function(el, game) {
		this.el = el;
		this.game = game;
		this.x = 0;
	};

	Ground.prototype.onFrame = function() {
		//til ad jordin endi ekki 
		if (this.x < -102.4){
			this.x = 0;
		}
		this.x -= 0.4;
		// Update Ui
		this.el.css('transform', 'translate3d(' + this.x + 'em, 0em, 0em)');
	};
	return Ground;
})();