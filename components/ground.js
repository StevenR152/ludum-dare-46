Crafty.c("Ground", {
	init: function() {
        this.addComponent("2D, DOM, Color, solid, ground");
        this.x = 150;
        this.y = GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5;
        this.w = 150;
        this.h = PLATFORM_HEIGHT;
    },
    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
})
