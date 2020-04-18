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
			Crafty.trigger("collectBucket");
		});
		this.bind("CheckLanding", function(ground) {
			// disallow landing of player, if player's feet are not above ground
			//console.log(ground)
			if (this.y + this.h > ground.y + ground.h/2) {
				console.log("Check landing prevented landing")
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
		this.bind("KeyDown", function(checkPos) {
			if (checkPos.key == Crafty.keys.SPACE) {
				console.log((this.x + (this.w/4)), (this.y + (this.h/1.2)));
			} // debug code used for player positioning into console
		});
		this.onHit("Tree", function(giveBucket) {
			if (hasBucket == true) {
				if (facing == "right") {
					this.addComponent("bear_right");
					this.removeComponent("bear_bucket_right");
					this.w = 314 / 5;
					this.h = 429 / 5;
				}
				else if (facing == "left") {
					this.addComponent("bear_left");
					this.removeComponent("bear_bucket_left");
					this.w = 314 / 5;
					this.h = 429 / 5;
				}
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
