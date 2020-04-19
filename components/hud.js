Crafty.c("HUD", {
    init: function() { 
        this.addComponent("2D, DOM, Color");
        this.z = 500;
        this.w = GAME_SCREEN_WIDTH - 15;
        this.h = 30;
        this.x = -410;
        this.y = 130;
        this.color("black")
        this.alpha = 0.05;
        this.padding = 5;

		var hudCounter = Crafty.e("HudCounter")
        
		var hudTreeLife = Crafty.e("HudHealth")
	

        hudCounter.y = this.y + this.padding;
        hudCounter.x = this.x + GAME_SCREEN_WIDTH - hudCounter.w;
		this.attach(hudCounter);

        hudTreeLife.x = this.x + this.padding;
        hudTreeLife.y = this.y + this.padding;
		this.attach(hudTreeLife);

    },
})
