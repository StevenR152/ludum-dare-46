Crafty.c("Player", {
	init: function() {
        this.addComponent("2D, DOM, Color, Image, Twoway,  SpriteAnimation, Gravity, Collision, player, bear_right");
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

		this.setReelSpeed()

		var playerNotification = Crafty.e("PlayerNotification");
		this.attach(playerNotification);

		this.twoway(player_speed, player_jump);

		this.setKeybinding();
		this.setCollisionHitActions();

		this.bind("CheckLanding", function(ground) {
			// disallow landing of player, if player's feet are not above ground
			if (this.y + this.h > ground.y + ground.h/2) {
				this.canLand = false;
			}
		});

		this.bind("changePlayerSpeed", function() {
			this.setReelSpeed()
			this.twoway(player_speed, player_jump);
		});
    },
    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    },
	charImg: function() {
		//code controlling the char Sprite state
		if (inBucket.water > 0 || inBucket.poo > 0) {
			if (facing == "right") {
				this.animate("walking_right_water", -1);
			}
			else {
				this.animate("walking_left_water", -1);
			}
		}
		else if (hasBucket == false) {
			if (facing == "right") {
				this.animate("walking_right_no", -1);
			}
			else {
				this.animate("walking_left_no", -1);
			}
		}
		else {
			if (facing == "right") {
				this.animate("walking_right_empty", -1);
			}
			else {
				this.animate("walking_left_empty", -1);
			}
		}
	},
	setKeybinding: function () {
		this.bind("KeyDown", function(arrow) {
			if (arrow.key == Crafty.keys.LEFT_ARROW) {
				facing = "left";
				this.charImg();
			}
			else if (arrow.key == Crafty.keys.RIGHT_ARROW) {
				facing = "right";
				this.charImg();
			}
		});

		this.bind("KeyUp", function(arrow) {
			if (arrow.key == Crafty.keys.LEFT_ARROW) {
				this.pauseAnimation();
			} else if (arrow.key == Crafty.keys.RIGHT_ARROW) {
				this.pauseAnimation();
			}
		});

		this.bind("KeyDown", function(powerup) {
			if (powerup.key == Crafty.keys["1"]) {
				Crafty.trigger("powerupSpeed");
			}
			else if (powerup.key == Crafty.keys["2"]) {
				Crafty.trigger("powerupJump");
				this.twoway(player_speed, player_jump);
			}
			else if (powerup.key == Crafty.keys["3"]) {
				Crafty.trigger("powerupRain");
			}
		});

		this.bind("MotionChange", function () {

			if ( this.x < -1300  || 2200 < this.x ) {
				Crafty.trigger("PlayerLeftGameZone")
			} else if ( this.x < -800 || 1700 < this.x ) {
				Crafty.trigger("PlayerLeavingGameZone")
			}

		})
		// this.bind("KeyDown", function(debugPlayer) {
		// 	if (debugPlayer.key == Crafty.keys.SPACE) {
		// 		console.log((this.x + (this.w/4)), + " " + (this.y + (this.h/1.2)));
		// 	} // debug code used for player positioning
		// });
	},
	setCollisionHitActions: function () {
		this.onHit("Bucket", function(collectBucket) {
			collectBucket[0].obj.destroy();
			var raindropSpawner = Crafty.e("RaindropSpawner");
			hasBucket = true;
			this.charImg();
			audioController.playTrack("bucketGrab", 1, 0.3)
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


		this.onHit("Tree", function(emptyBucket) {;
			if (inBucket.water > 0 || inBucket.poo > 0) {
				Crafty.trigger("emptyBucket");
				this.charImg();
				healing_strength = DEFAULT_HEALING_STR; // RESET healing strength
			}
		});

		this.onHit("Raindrop", function(collectWater) {
			if (inBucket.water == 4) {
				Crafty.trigger("bucketFull");
			}

			if (inBucket.water < 5) {
				inBucket.water += 1;
				this.charImg();
				collectWater[0].obj.destroy();
				Crafty.trigger("getRaindrop");
				audioController.playTrack("dropCatch", 1, 0.1);
			}
			else {
				Crafty.trigger("fullBucket");
			}
		})
	},
	setReelSpeed: function () {
		this.reel("walking_right_no", char_anim_time, [
			[0, 2], [4, 1], [1, 2], [4, 1]
		])

		this.reel("walking_left_no", char_anim_time, [
			[2, 1], [1, 1], [3, 1], [1, 1]
		])

		this.reel("walking_right_empty", char_anim_time, [
			[4, 0], [3, 0], [0, 1], [3, 0]
		])

		this.reel("walking_left_empty", char_anim_time, [
			[1, 0], [0, 0], [2, 0], [0, 0]
		])
		this.reel("walking_right_water", char_anim_time, [
			[5, 3], [5, 1], [5, 2], [5, 1]
		])

		this.reel("walking_left_water", char_anim_time, [
			[5, 0], [3, 3], [4, 3], [3, 3]
		])
		this.reel("pouring_right", char_anim_time, [
			[0, 3], [1, 3], [2, 3]
		])

		this.reel("pouring_left", 500, [
			[2, 2], [3, 2], [4, 2]
		])
	}
})
