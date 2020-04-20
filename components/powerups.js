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
				player_speed *= 1.6;
				powerupSpeed = true;
				this.delay(this.resetSpeed,POWERUP_TIME, 0);
				Crafty.trigger("changePlayerSpeed");
				Crafty.trigger("toggleSpeedPowerup");
				Crafty.trigger("enableSpeedPowerup");
				currency -= powerupSpeedCost;
				audioController.loadTrack("powerupYes", 1);
			}
		}
    },
    powerupJump: function() {
		// this will need to become double jump I think
		// super high jumping is actually making some aspects more difficult
		if (powerupJump == false){
			if (powerupJumpCost < currency){
				player_jump *= 1.5;
				Crafty.trigger("changePlayerSpeed");
				powerupJump = true;
				this.delay(this.resetJump,POWERUP_TIME, 0);
				Crafty.trigger("toggleJumpPowerup");
				Crafty.trigger("enableJumpPowerup");
				currency -= powerupJumpCost;
				audioController.loadTrack("powerupYes", 1);
			}
		}
    },
    powerupRain: function() {
		if (powerupRain == false){
			if (powerupRainCost < currency){
				powerupRain = true
				raindropsPerMinute *= 2;
				Crafty.trigger("raindropSpeedChange");
				this.delay(this.resetRainSpeed,POWERUP_TIME, 0);
				Crafty.trigger("toggleRainPowerup");
				Crafty.trigger("enableRainPowerup");
				currency -= powerupRainCost;
				audioController.loadTrack("powerupYes", 1);
			}
		}
    },
	resetRainSpeed: function() {
		raindropsPerMinute /= 2;
		Crafty.trigger("raindropSpeedChange");
		powerupRain = false;
		audioController.loadTrack("powerupNo", 1);
		Crafty.trigger("toggleRainPowerup");
	},
	resetSpeed: function() {
		player_speed /= 1.6;
		powerupSpeed = false;
		Crafty.trigger("changePlayerSpeed");
		audioController.loadTrack("powerupNo", 1);
		Crafty.trigger("toggleSpeedPowerup");
	},
	resetJump: function() {
		player_jump /= 1.5;
		Crafty.trigger("changePlayerSpeed");
		powerupJump = false;
		audioController.loadTrack("powerupNo", 1);
		Crafty.trigger("toggleJumpPowerup");
	}
})
