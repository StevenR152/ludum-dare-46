Crafty.c("ScreenClickable", {
	init : function () {
		this.requires('2D, DOM, Mouse, Color')
		this.attr({x : 0, y : 0, w : GAME_SCREEN_WIDTH, h : GAME_SCREEN_HEIGHT})

        this.color("red")
        this.bind('Click', function () {
        	Crafty.trigger("GLOBAL_CLICK");
        });
	}
});
