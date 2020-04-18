Crafty.c("Player", {
	init: function() {
        this.addComponent("2D, DOM, Color, Twoway, Gravity, Collision");
        this.x = 50;
        this.y = GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 6;
        this.w = 35;
        this.h = 70;
		this.gravity("Platform");
		this.twoway(200, 350);
		this.color("#832");
		this.onHit("Bucket", function(collectBucket) {
			collectBucket[0].obj.destroy();
			this.color("#F32");
			hasBucket = true;
		});
		this.onHit("Tree", function(giveBucket) {
			if (hasBucket == true) {
				this.color("#832");
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
