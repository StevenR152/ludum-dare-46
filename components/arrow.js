Crafty.c("Arrow", {
	init: function() {
        this.addComponent("2D, DOM, Delay, arrow");
        this.w = 60;
        this.h = 68;
        this.attr({x:30, y: -15});
        this.delay(this.toggle, 500, -1)
    },
    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    },
    toggle: function () {
        if(this.alpha > 0) {
            this.alpha = 0;
        } else {
            this.alpha = 100;
        }
    },

})
