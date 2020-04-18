Crafty.c("Player", {
	init: function() {
        this.addComponent("2D, DOM, Color, Twoway, Gravity, Collision, player");
        this.x = 50;
        this.y = GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 6;
        this.w = 314 / 5;
        this.h = 429 / 5;
		this.gravity("solid");
		this.twoway(200, 350);
		this.onHit("Bucket", function(collectBucket) {
			collectBucket[0].obj.destroy();
			this.addComponent("Color")
			this.color("#FAFAD2");
			hasBucket = true;
			console.log("bucket collected in player")
			Crafty.trigger("collectBucket");
		});
		this.bind("KeyDown", function(arrow) {
				if (arrow.key == Crafty.keys.LEFT_ARROW) {
					this.image("assets/images/bear_left.png");
				} else if (arrow.key == Crafty.keys.RIGHT_ARROW) {
					this.image("assets/images/bear_right.png");
				}
			})
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
