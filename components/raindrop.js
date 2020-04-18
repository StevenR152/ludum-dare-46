Crafty.c("Raindrop", {
	init: function() {
        this.addComponent("2D, Collision, Color, DOM, Raindrop, Gravity");
        this.w = 6;
        this.h = 12;
		this.color("#0000FF");
		this.gravity("Ground");
		this.onHit("Platform", function() {
			Crafty.trigger("raindropMissed");
			this.destroy();
		});
		this.onHit("solid", function() {
			Crafty.trigger("raindropMissed");
			this.destroy();
		});
    },

    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
})
