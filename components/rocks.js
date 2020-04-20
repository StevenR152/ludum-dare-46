Crafty.c("Placeable", {
    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
})

Crafty.c("Rock", {
	init: function() {
        this.randomscale = Math.floor((Math.random() * 30) -15)
        this.addComponent("2D, DOM, Placeable, rock");
        this.w = 60 + this.randomscale;
        this.h = 60 + this.randomscale;
        this.z = 800;
       this.alpha = 0.9;
    },
})

Crafty.c("Rock2", {
    init: function() {
        this.randomscale = Math.floor((Math.random() * 30) -15)
        this.addComponent("2D, DOM, Placeable, rock2");
        this.w = 60 + this.randomscale;
        this.h = 60 + this.randomscale;
        this.z = 800;
        this.alpha = 0.9;
    }
})

Crafty.c("Rock3", {
    init: function() {
        this.randomscale = Math.floor((Math.random() * 30) -15)
        this.addComponent("2D, DOM, Placeable, rock3");
        this.w = 60 + this.randomscale;
        this.h = 60 + this.randomscale;
        this.z = 800;
        this.alpha = 0.9;
    }
})

Crafty.c("GrassPatch", {
    init: function() {
        this.addComponent("2D, DOM, Placeable, grass_patch");
        this.randomscale = Math.floor((Math.random() * 30) -15)
        this.w = 40 + this.randomscale;
        this.h = 40 + this.randomscale;
        this.z = 799;
        this.alpha = 0.9;
    }
})

