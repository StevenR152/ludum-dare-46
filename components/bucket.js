Crafty.c("Bucket", {
	init: function() {
        this.addComponent("2D, Canvas, Color");
        this.y = GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 3;
        this.h = PLATFORM_HEIGHT;
        this.color("#563");
    },

    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
})
