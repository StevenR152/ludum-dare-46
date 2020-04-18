Crafty.c("Platform", {
	init: function() {
        this.addComponent("2D, Canvas, Color");
        this.x = 150;
        this.y = GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5;
        this.w = 150;
        this.h = PLATFORM_HEIGHT;
        this.color("#563");
    },

    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
})