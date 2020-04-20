Crafty.c("Raindrop", {
	init: function() {
        this.addComponent("2D, Collision, Motion, Delay, DOM, SpriteAnimation, raindrop");
        this.randomscale = Math.floor((Math.random() * 4) -1)
        this.w = 78 / 6 + this.randomscale;
        this.h = 98 / 6 + this.randomscale;
        this.z = 8;
        this.vy = 250;
		this.onHit("solid", function() {
			var splash = Crafty.e("Splash");
			splash.x = this.x;
			splash.y = this.y+4;
			splash.w += this.randomscale;
			splash.y += this.randomscale;
			//audioController.playTrack("missRain", 1, 0.3);
			this.destroy()
		});
    },
    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    },
})
Crafty.c("Splash", {
	init: function() {
		this.addComponent("SpriteAnimation, Delay, splash, 2D, DOM")
		this.w = 113 / 6;
        this.h = 98 / 6;
		this.reel("splash", 150, [[1, 0], [2, 0], [3, 0]]);
		this.animate("splash");
		this.delay(this.destroy, 150, 0);
	}
})
