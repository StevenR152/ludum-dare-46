Crafty.c("Bucket", {
	init: function() {
        this.addComponent("2D, Canvas, bucket");
        this.w = 228 / 7;
        this.h = 265 / 7;
    },

    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
})
