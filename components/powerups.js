// code that handles the powerups
Crafty.c("Powerups", {
	init: function() {
		this.addComponent("Delay");
        this.bind("powerupSpeed", function(){
			this.powerupSpeed();
		});
		this.bind("powerupJump", function(){
			this.powerupJump();
		});
		this.bind("powerupRain", function(){
			this.powerupRain();
		});
    },
    powerupSpeed: function() {
		//seems reasonable, could take some tweaking or a % increase
		if (powerupSpeed == false){
			if (powerupSpeedCost < currency){
				Crafty.trigger("InstructionText","Powerups last " + POWERUP_TIME/1000 + " seconds!")
				player_speed *= 1.6;
				char_anim_time /= 1.6;
				powerupSpeed = true;
				this.delay(this.resetSpeed,POWERUP_TIME, 0);
				Crafty.trigger("changePlayerSpeed");
				Crafty.trigger("toggleSpeedPowerup");
				Crafty.trigger("enableSpeedPowerup");
				currency -= powerupSpeedCost;
				audioController.loadTrack("speedPowerup", 1, 0.5);
			} else {
				Crafty.trigger("InstructionText", "You need 30 apples for the speed up")
			}
		}
    },
    powerupJump: function() {
		// this will need to become double jump I think
		// super high jumping is actually making some aspects more difficult
		if (powerupJump == false){
			if (powerupJumpCost < currency){
				Crafty.trigger("InstructionText","Powerups last " + POWERUP_TIME/1000 + " seconds!")
				player_jump *= 1.5;
				Crafty.trigger("changePlayerSpeed");
				powerupJump = true;
				this.delay(this.resetJump,POWERUP_TIME, 0);
				Crafty.trigger("toggleJumpPowerup");
				Crafty.trigger("enableJumpPowerup");
				currency -= powerupJumpCost;
				audioController.loadTrack("jumpPowerup", 1, 0.5);
			} else {
				Crafty.trigger("InstructionText", "You need 10 apples for higher jump")
			}
		}
    },
    powerupRain: function() {
		if (powerupRain == false){
			if (powerupRainCost < currency){
				Crafty.trigger("InstructionText","Powerups last " + POWERUP_TIME/1000 + " seconds!")
				powerupRain = true
				raindropsPerMinute *= 2;
				Crafty.trigger("raindropSpeedChange");
				this.delay(this.resetRainSpeed,POWERUP_TIME, 0);
				Crafty.trigger("toggleRainPowerup");
				Crafty.trigger("enableRainPowerup");
				currency -= powerupRainCost;
				audioController.loadTrack("rainPowerup", 1, 0.5);
			} else {
				Crafty.trigger("InstructionText", "You need 50 apples for rain storm")
			}
		}
    },
	resetRainSpeed: function() {
		raindropsPerMinute /= 2;
		Crafty.trigger("raindropSpeedChange");
		powerupRain = false;
		audioController.loadTrack("powerupNo", 1, 0.5);
		Crafty.trigger("toggleRainPowerup");
	},
	resetSpeed: function() {
		player_speed /= 1.6;
		char_anim_time *= 1.6;
		powerupSpeed = false;
		Crafty.trigger("changePlayerSpeed");
		audioController.loadTrack("powerupNo", 1, 0.5);
		Crafty.trigger("toggleSpeedPowerup");
	},
	resetJump: function() {
		player_jump /= 1.5;
		Crafty.trigger("changePlayerSpeed");
		powerupJump = false;
		audioController.loadTrack("powerupNo", 1, 0.5);
		Crafty.trigger("toggleJumpPowerup");
	}
})
