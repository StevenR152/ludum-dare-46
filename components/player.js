Crafty.c("Player", {
	init: function() {
        this.addComponent("2D, DOM, Color, Image, Twoway,  Gravity, Collision, player, bear_right");
        this.x = 0;
        this.y = 0;
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
			hasBucket = true;
			this.charImg();
			Crafty.trigger("collectBucket");
		});

		this.onHit("Poo", function(collectPoo) {
			if (inBucket.poo < 3) {
				collectPoo[0].obj.destroy();
				inBucket.poo += 1;
				this.charImg();
				Crafty.trigger("getPoo");
			}
			else {
				Crafty.trigger("fullBucket");
			}
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
					this.charImg();
				} else if (arrow.key == Crafty.keys.RIGHT_ARROW) {
					facing = "right";
					this.charImg();
				}
			});
		this.bind("KeyDown", function(debugPlayer) {
			if (debugPlayer.key == Crafty.keys.SPACE) {
				console.log((this.x + (this.w/4)), + " " + (this.y + (this.h/1.2)));
			} // debug code used for player positioning
		});

		this.onHit("Tree", function(emptyBucket) {;
			if (inBucket.water > 0 || inBucket.poo > 0) {
				Crafty.trigger("emptyBucket");
				this.charImg();
				healing_strength = DEFAULT_HEALING_STR; // RESET healing strength
			}
		});

		this.onHit("Raindrop", function(collectWater) {
			if (inBucket.water < 5) {
				inBucket.water += 1;
				this.charImg();
				collectWater[0].obj.destroy();
				Crafty.trigger("getRaindrop");
			}
			else {
				Crafty.trigger("fullBucket");
			}
		})
    },

    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    },

	charImg: function() {
		//code controlling the char Sprite state
		this.removeComponent("bear_bucket_right");
		this.removeComponent("bear_bucket_full_left");
		this.removeComponent("bear_bucket_left");
		this.removeComponent("bear_bucket_full_right");
		this.removeComponent("bear_right");
		this.removeComponent("bear_left");
		if (inBucket.water > 0 || inBucket.poo > 0) {
			if (facing == "right") {
				this.addComponent("bear_bucket_full_right");
				this.w = 314 / 5;
				this.h = 429 / 5;
			}
			else {
				this.addComponent("bear_bucket_full_left");
				this.w = 314 / 5;
				this.h = 429 / 5;
			}
		}
		else if (hasBucket == false) {
			if (facing == "right") {
				this.addComponent("bear_right");
				this.w = 314 / 5;
				this.h = 429 / 5;
			}
			else {
				this.addComponent("bear_left");
				this.w = 314 / 5;
				this.h = 429 / 5;
			}
		}
		else {
			if (facing == "right") {
				this.addComponent("bear_bucket_right");
				this.w = 314 / 5;
				this.h = 429 / 5;
			}
			else {
				this.addComponent("bear_bucket_left");
				this.w = 314 / 5;
				this.h = 429 / 5;
			}
		}
	}
})
