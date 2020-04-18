Crafty.c("Player", {
	init: function() {
        this.addComponent("2D, DOM, Color, Twoway, Gravity, Collision, player");
        this.x = 50;
        this.y = GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 6;
        this.w = 314 / 5;
        this.h = 429 / 5;
		this.gravity("Platform");
		this.twoway(200, 350);
		this.onHit("Bucket", function(collectBucket) {
			collectBucket[0].obj.destroy();
			this.addComponent("Color")
			this.color("#FAFAD2");
			hasBucket = true;
			Crafty.trigger("collectBucket");
		});
		this.onHit("Tree", function(giveBucket) {
			if (hasBucket == true) {
				this.removeComponent("Color");
				hasBucket = false;
				Crafty.trigger("waterTree");
			}
		});
    },

    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
})
