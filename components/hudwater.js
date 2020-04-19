Crafty.c("HudWaterGroup", {
    init : function () {
        this.requires('2D, DOM, Color')
        this.attr({
            w: 71 / 6,
            h: 98 / 6,
            x: 200,
            y: 20
        })
        this.z = 1000;
        this.color("blue")
    },
});

Crafty.c("HudWater", {
    init : function () {
        this.requires('2D, DOM, raindrop')
        this.attr({
            w: 71 / 6,
            h: 98 / 6,
            x: 200,
            y: 20
        })
        this.z = 1000;
        this.bind("waterCollected", this.updateHealth);
        this.bind("treeDecayed", this.updateHealth);
        this.updateHealth()
        this.textFont({ size: '26px', weight: 'bold' });
    },

    updateHealth : function () {
        this.text("Tree Life:" + tree_health);
    },

    setCountdownOverAction : function (func) {
        this.countdownOver = func;
    }
});
