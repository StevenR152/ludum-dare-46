Crafty.c("Poo", {
	init: function() {
        this.addComponent("2D, DOM, poo");
        this.randomscale = Math.floor((Math.random() * 7) -2)
        this.w = 72/2;
        this.h = 38/2;
        this.w += this.randomscale;
        this.y += this.randomscale;
    },
    place: function(x, y) {
        this.x = x;
        this.y = y + 7;
        return this;
    }
})
