Crafty.c("HudCompostGroup", {
    init : function () {
        this.requires('2D, DOM, Color')
        this.attr({
            w: 250,
            h: 22,
        })
        this.z = 1000;
        this.alpha = 0;
        this.color("brown")
        this.padding = 1;
        
        this.hudcomposts = [];

        this.compostCollectedCounter = 0;
        this.bind("getCompost", function() {
            this.compostCollectedCounter += 1;
            this.updateBar();
        })
        this.bind("emptyBucket", function() {
            this.compostCollectedCounter = 0;
            this.updateBar();
        })
    },

    fillTheBar: function () {
        for (var i = 0; i < 5; i++) {
            var hudcompost = Crafty.e("HudCompost")
            this.attach(hudcompost);
            hudcompost.x = this.x + this.padding + (hudcompost.w + this.padding * 17) * i;
            hudcompost.y = this.y + this.padding;
            this.hudcomposts.push(hudcompost);
        }       
    },

    updateBar: function() {
        for (var i = 0; i < this.hudcomposts.length; i++) {
            this.hudcomposts[i].alpha = 0.3;
        }

        for (var i = 0; i < this.compostCollectedCounter; i++) {
            this.hudcomposts[i].alpha = 1;
        }
    }
});

Crafty.c("HudCompost", {
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
