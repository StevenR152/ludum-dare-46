Crafty.c("Ground", {
	init: function() {
        this.addComponent("2D, DOM, solid");
        this.x = -50000;
        this.y = GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT / 2,
        this.w = 100000;
        this.h = 226;
    },
    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
})
