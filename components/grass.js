Crafty.c("Grass", {
	init: function() {
        this.addComponent("2D, DOM, Image, solid");
        this.x = -10000;
        this.y = GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT / 2 - 20,
        this.w = 20000;
        this.h = 20;
    },
    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
})
