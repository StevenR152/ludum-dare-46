Crafty.c("Tree", {
	init: function() {
        this.addComponent("2D, DOM, Color, Delay, Renderable");
        this.x = 400;
        this.y = GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 6;
        this.w = PLATFORM_HEIGHT * 5;
        this.h = PLATFORM_HEIGHT * 5;
		this.color("#382");
        this.delay(this.fadeTree, 4000, 5000);
    },

    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    },

    fadeTree: function () {
        this.alpha -= 0.10;
    }
})