Crafty.c("HudPowerups", {
    init : function () {
        this.requires('2D, DOM, Color, Delay')
        //this.color("#FF0000");
        this.attr({w: 200, h: 100});
        this.z = 1000;
        this.padding = 1;

        var hudSpeed = Crafty.e("HudSpeed");
        this.attach(hudSpeed);
        hudSpeed.x = this.x;
        hudSpeed.y = this.y-2;
        this.toggleSpeedPowerup(hudSpeed);

        var hudJump = Crafty.e("HudJump");
        this.attach(hudJump);
        hudJump.x = this.x + hudSpeed.w + (this.padding * 45);
        hudJump.y = this.y-2;
        this.toggleJumpPowerup(hudJump);

        var hudRain = Crafty.e("HudRain");
        this.attach(hudRain);
        hudRain.x = this.x + (2 * (hudSpeed.w + this.padding * 45));
        hudRain.y = this.y-2;
        this.toggleRainPowerup(hudRain);

        Crafty.bind("toggleJumpPowerup", function() {
            this.toggleJumpPowerup(hudJump);
        }.bind(this));
        Crafty.bind("toggleSpeedPowerup", function() {
            this.toggleSpeedPowerup(hudSpeed);
        }.bind(this));
        Crafty.bind("toggleRainPowerup", function() {
            this.toggleRainPowerup(hudRain);
        }.bind(this));

    },
    toggleJumpPowerup : function(hudJump) {
        if (powerupJump == true) {
            hudJump.alpha = 1;
        }
        else {
            hudJump.alpha = 0.3;
        }
    },
    toggleSpeedPowerup : function(hudSpeed) {
        if (powerupSpeed == true) {
            hudSpeed.alpha = 1;
        }
        else {
            hudSpeed.alpha = 0.3;
        }
    },
    toggleRainPowerup : function(hudRain) {
        if (powerupRain == true) {
            hudRain.alpha = 1;
        }
        else {
            hudRain.alpha = 0.3;
        }
    }
});

Crafty.c("HudJump", {
    init : function () {
        this.requires('2D, DOM, jumpPowerup')
        this.attr({
            w: 25,
            h: 25,
        })
        this.alpha = 0.3;
        this.z = 1000;
    },
});
Crafty.c("HudSpeed", {
    init : function () {
        this.requires('2D, DOM, speedPowerup')
        this.attr({
            w: 25,
            h: 25,
        })
        this.alpha = 0.3;
        this.z = 1000;
    },
});
Crafty.c("HudRain", {
    init : function () {
        this.requires('2D, DOM, rainPowerup')
        this.attr({
            w: 25,
            h: 25,
        })
        this.alpha = 0.3;
        this.z = 1000;
    },
})
