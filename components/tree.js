Crafty.c("Tree", {
	init: function() {
        this.addComponent("2D, DOM, Delay, Renderable, tree");
        this.x = 400;
        this.y = GAME_SCREEN_HEIGHT - 989 / 4 * 6;
        this.w = 850 / 4;
        this.h = 989 / 4;
        this.delay(this.fadeTree, 4000, -1);
        this.bind("waterTree", function() {
            this.alpha += 0.25
        })
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