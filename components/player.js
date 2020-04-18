Crafty.c("Player", {
	init: function() {
        this.addComponent("2D, DOM, Color, Image, Twoway,  Gravity, Collision, player");
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

		this.twoway(200, 390);

		this.onHit("Bucket", function(collectBucket) {
			collectBucket[0].obj.destroy();
			if (facing == "right") {
				this.image("assets/images/bear_bucket_right.png");
			}
			else if (facing == "left") {
				this.image("assets/images/bear_bucket_left.png");
			}
			hasBucket = true;
			Crafty.trigger("collectBucket");
		});
		this.bind("CheckLanding", function(ground) {
			// disallow landing of player, if player's feet are not above ground
			console.log(ground)
			if (this.y + this.h > ground.y + ground.h/2) {
				console.log("Check landing prevented landing")
				this.canLand = false;
			}
		})
		this.bind("KeyDown", function(arrow) {
				if (arrow.key == Crafty.keys.LEFT_ARROW) {
					facing = "left";
					if (hasBucket == true) {
						this.image("assets/images/bear_bucket_left.png");
					}
					else {
						this.image("assets/images/bear_left.png");
					}
				} else if (arrow.key == Crafty.keys.RIGHT_ARROW) {
					facing = "right";
					if (hasBucket == true) {
						this.image("assets/images/bear_bucket_right.png");
					}
					else {
						this.image("assets/images/bear_right.png");
					}
				}
			})
		this.onHit("Tree", function(giveBucket) {
			if (hasBucket == true) {
				if (facing == "right") {
					this.image("assets/images/bear_right.png");
				}
				else if (facing == "left") {
					this.image("assets/images/bear_left.png");
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
