Crafty.c("Raindrop", {
	init: function() {
        this.addComponent("2D, Collision, Motion, DOM, raindrop");
        this.w = 71 / 6;
        this.h = 98 / 6;
        this.z = 8;
        this.vy = 250;
		this.onHit("solid", function() {
			this.destroy();
		});
    },

    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
})
