Crafty.c("Poo", {
	init: function() {
        this.addComponent("2D, DOM, poo");
        this.w = 72/2;
        this.h = 38/2;
    },
    place: function(x, y) {
        this.x = x;
        this.y = y + 7;
        return this;
    }
})
