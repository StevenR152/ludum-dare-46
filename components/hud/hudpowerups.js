Crafty.c("HudPowerups", {
    init : function () {
        this.requires('2D, DOM, Color, Delay')
        //this.color("#FF0000");
        this.attr({w: 200, h: 100});
        this.z = 1000;
        this.padding = 1;

        var hudJump = Crafty.e("HudJump");
        this.attach(hudJump);
        hudJump.x = this.x;
        hudJump.y = this.y-2;

        var hudSpeed = Crafty.e("HudSpeed");
        this.attach(hudSpeed);
        hudSpeed.x = this.x + hudJump.w + (this.padding * 15);
        hudSpeed.y = this.y-2;

        var hudRain = Crafty.e("HudRain");
        this.attach(hudRain);
        hudRain.x = this.x + (2 * (hudSpeed.w + this.padding * 15));
        hudRain.y = this.y-2;
    },

    togglePowerups : function () {
        if (powerupJump == true) {
            hudJump.addComponent("jumpPowerupOn");
            hudJump.removeComponent("jumpPowerupOff");
        }
    },
});
Crafty.c("HudJump", {
    init : function () {
        this.requires('2D, DOM, jumpPowerupOff')
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
        this.requires('2D, DOM, speedPowerupOff')
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
        this.requires('2D, DOM, rainPowerupOff')
        this.attr({
            w: 25,
            h: 25,
        })
        this.alpha = 0.3;
        this.z = 1000;
    },
})
