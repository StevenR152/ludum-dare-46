Crafty.c("Bucket", {
	init: function() {
        this.addComponent("2D, DOM, bucket");
        this.w = 20;
        this.h = 20;
    },
    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
})
