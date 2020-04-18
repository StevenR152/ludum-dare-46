Crafty.c("Tree", {
	init: function() {
        this.addComponent("2D, DOM, Color");
        this.x = 400;
        this.y = GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 6;
        this.w = PLATFORM_HEIGHT * 5;
        this.h = PLATFORM_HEIGHT * 5;
		this.gravity("Platform")
		this.twoway(200, 350)
		this.color("#832");
    },

    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
})