Crafty.c("Ground", {
	init: function() {
        this.addComponent("2D, DOM, Image, solid");
        this.x = -1000;
        this.y = GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT,
        this.w = 2700;
        this.h = 295;
        this.image("assets/images/ground.png", "repeat-x");
    },
    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
})
