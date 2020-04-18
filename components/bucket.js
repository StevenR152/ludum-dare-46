Crafty.c("Bucket", {
	init: function() {
        this.addComponent("2D, Canvas, Color");
        this.w = 30;
        this.h = 30;
        this.color("#569");
    },

    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
})
