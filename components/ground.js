Crafty.c("Ground", {
	init: function() {
        this.addComponent("2D, DOM, Image, solid");
        this.x = -10000;
        this.y = GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT / 2,
        this.w = 20000;
        this.h = 226;
        this.alpha = 0.7;
        this.image("assets/images/dirt.png", "repeat");
    },
    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
})
