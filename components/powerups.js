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
			player_speed *= 1.6;
			powerupSpeed = true;
			this.delay(this.resetSpeed,POWERUP_TIME, 0);
			Crafty.trigger("changePlayerSpeed");
		}
    },
    powerupJump: function() {
		// this will need to become double jump I think
		// super high jumping is actually making some aspects more difficult

		if (powerupJump == false){
			player_jump *= 1.5;
			Crafty.trigger("changePlayerSpeed");
			powerupJump = true;
			this.delay(this.resetJump,POWERUP_TIME, 0);
		}
    },
    powerupRain: function() {
		if (powerupRain == false){
			powerupRain = true; //could be powerupActive to limit total powerups
			raindropsPerMinute *= 2;
			Crafty.trigger("raindropSpeedChange");
			this.delay(this.resetRainSpeed,POWERUP_TIME, 0);
		}
    },
	resetRainSpeed: function() {
		raindropsPerMinute /= 2;
		Crafty.trigger("raindropSpeedChange");
		powerupRain = false;
	},
	resetSpeed: function() {
		player_speed /= 1.6;
		Crafty.trigger("changePlayerSpeed");
		powerupSpeed = false;
	},
	resetJump: function() {
		player_jump /= 1.5;
		Crafty.trigger("changePlayerSpeed");
		powerupJump = false;
	}
})
