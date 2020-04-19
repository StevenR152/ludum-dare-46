Crafty.c("HUD", {
    init: function() { 
        this.addComponent("2D, DOM, Color");
        this.origin("center")
        this.z = 500;
        this.x = -438;
        this.w = GAME_SCREEN_WIDTH + 140;
        this.h = 50;
        this.y = GAME_SCREEN_HEIGHT - 30;
        this.color("white")
        this.alpha = 0.08;


		var hudCounter = Crafty.e("HudCounter").attr({x:515, y: GAME_SCREEN_HEIGHT - 20});
		var hudTreeLife = Crafty.e("HudHealth")
	
		this.attach(hudTreeLife);
		this.attach(hudCounter);

		hudTreeLife.attr({x:-440 + 20, y: GAME_SCREEN_HEIGHT - 20});
    },
})
