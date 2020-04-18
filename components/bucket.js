Crafty.c("Bucket", {
	init: function() {
        this.addComponent("2D, DOM, bucket");
        this.w = 30;
        this.h = 30;
    },

    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
})
