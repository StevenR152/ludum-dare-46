Crafty.c("HudWaterGroup", {
    init : function () {
        this.requires('2D, DOM, Color')
        this.attr({
            w: 250,
            h: 22,
        })
        this.z = 1000;
        this.alpha = 0;
        this.color("blue")
        this.padding = 1;
    },

    fillTheBar: function () {
        for (var i = 5; i >= 1; i--) {
            var hudWater = Crafty.e("HudWater")
            this.attach(hudWater);
            hudWater.x = this.x + this.padding + (hudWater.w + this.padding * 17) * i;
            hudWater.y = this.y + this.padding;
        }
       
    }
});

Crafty.c("HudWater", {
    init : function () {
        this.requires('2D, DOM, raindrop')
        this.attr({
            w: 71 / 5,
            h: 98 / 5,
        })
        this.alpha = 0.3;
        this.z = 1000;
    },
});
