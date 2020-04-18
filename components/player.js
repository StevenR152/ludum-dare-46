Crafty.c("Player", {
	init: function() {
        this.addComponent("2D, DOM, Color, Twoway, Gravity, Collision");
        this.x = 50;
        this.y = GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 6;
        this.w = 35;
        this.h = 70;
		this.gravity("Platform");
		this.twoway(200, 350);
		this.color("#832");
		this.onHit("Bucket", function() {});
    },
    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
})
