Crafty.c("Player", {
	init: function() {
        this.addComponent("2D, DOM, Color, Image, Twoway,  Gravity, Collision, player, bear_right");
        this.x = 50;
        this.y = GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 6;
        this.w = 314 / 5;
        this.h = 429 / 5;
		this.gravity("solid");

		// This is a rectangle hitbox slightly in from the sprite of the player.
        this.collision([
        	0 + (this.w/6), 10,
         	this.w - (this.w/6), 10,
         	this.w - (this.w/6), this.h - 10,
         	0 + (this.w/6), this.h - 10
        ]);

		this.twoway(300, 390);

		this.onHit("Bucket", function(collectBucket) {
			collectBucket[0].obj.destroy();
			var raindropSpawner = Crafty.e("RaindropSpawner");
			if (facing == "right") {
				this.addComponent("bear_bucket_right");
				this.removeComponent("bear_right");
				this.w = 314 / 5;
		        this.h = 429 / 5;
			}
			else if (facing == "left") {
				this.addComponent("bear_bucket_left");
				this.removeComponent("bear_left");
				this.w = 314 / 5;
		        this.h = 429 / 5;
			}
			hasBucket = true;
			this.addComponent("solid");
			Crafty.trigger("collectBucket");
		});

		this.bind("CheckLanding", function(ground) {
			// disallow landing of player, if player's feet are not above ground
			if (this.y + this.h > ground.y + ground.h/2) {
				this.canLand = false;
			}
		})
		this.bind("KeyDown", function(arrow) {
				if (arrow.key == Crafty.keys.LEFT_ARROW) {
					facing = "left";
					if (hasBucket == true) {
						this.addComponent("bear_bucket_left");
						this.removeComponent("bear_bucket_right");
						this.w = 314 / 5;
						this.h = 429 / 5;
					}
					else {
						this.addComponent("bear_left");
						this.removeComponent("bear_right");
						this.w = 314 / 5;
						this.h = 429 / 5;
					}
				} else if (arrow.key == Crafty.keys.RIGHT_ARROW) {
					facing = "right";
					if (hasBucket == true) {
						this.addComponent("bear_bucket_right");
						this.removeComponent("bear_bucket_left");
						this.w = 314 / 5;
						this.h = 429 / 5;
					}
					else {
						this.addComponent("bear_right");
						this.removeComponent("bear_left");
						this.w = 314 / 5;
						this.h = 429 / 5;
					}
				}
			});
		this.bind("KeyDown", function(debugPlayer) {
			if (debugPlayer.key == Crafty.keys.SPACE) {
				console.log((this.x + (this.w/4)), + " " + (this.y + (this.h/1.2)));
				console.log("healing str " + healing_strength);
			} // debug code used for player positioning and tree str into console
		});

		this.onHit("Tree", function(giveBucket) {
			// if (facing == "right") {
			// 	this.addComponent("bear_right");
			// 	this.removeComponent("bear_bucket_right");
			// 	this.w = 314 / 5;
			// 	this.h = 429 / 5;
			// }
			// else if (facing == "left") {
			// 	this.addComponent("bear_left");
			// 	this.removeComponent("bear_bucket_left");
			// 	this.w = 314 / 5;
			// 	this.h = 429 / 5;
			// }
			// hasBucket = false;
			if (inBucket.water > 0) {
				Crafty.trigger("waterTree");
				healing_strength = DEFAULT_HEALING_STR; // RESET healing strength
			}
		});

		this.onHit("Raindrop", function(collectWater) {
			inBucket.water += 1;
			collectWater[0].obj.destroy();
		})
    },

    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
})
