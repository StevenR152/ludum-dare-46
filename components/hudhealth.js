Crafty.c("HudHealth", {
    init : function () {
        this.requires('2D, DOM, Text, Delay')
        this.totalSeconds = 0;
        this.attr({w: 500, h: 100, x: 200, y: 20})
        this.text("Tree Life:")
        this.css('text-shadow', '2px 2px 1px black')
        this.textColor('#EEE');
        this.unselectable()
        this.bind("emptyBucket", this.updateHealth);
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
