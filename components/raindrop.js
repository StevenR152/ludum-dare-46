Crafty.c("Raindrop", {
	init: function() {
        this.addComponent("2D, Collision, Motion, Color, DOM, Raindrop");
        this.w = 71 / 10;
        this.h = 98 / 10;
        this.z = 8;
        this.vy = 250;
		//this.color("#0000FF");
		// this.gravity("Ground");
		console.log("rain");
		this.onHit("solid", function() {
			Crafty.trigger("raindropMissed");
			console.log("rain die");
			this.destroy();
		});
    },

    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
})
