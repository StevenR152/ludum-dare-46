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
		player_speed = 500;
    },
    powerupJump: function() {
		// this will need to become double jump I think
		// super high jumping is actually making some aspects more difficult
		player_jump = 600;
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
})
