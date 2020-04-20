Crafty.c("Cloud", {
	init: function() {
        this.addComponent("2D, Motion, DOM, Delay, cloud");
        this.x = 50;
        this.y = -1.5 * GAME_SCREEN_HEIGHT,
        this.w = 290;
        this.h = 230;
        this.vx = 50;
        this.cloudlifetimeinms = Math.floor(Math.random() * 15000 + 3000);
        this.delay(this.destroy, this.cloudlifetimeinms, 0);
        this.delay(this.spawnRainDrops, 1500, -1);
        this.delay(this.randomMoveSwitch, 1000, -1);
        this.bind("Move", function () {
            if (this.x > 1500 || this.x < -400) {
                this.vx = -1 * this.vx;
            }
        })
    },
    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    },
    spawnRainDrops: function () {
        if(Math.random() < 0.8) {
           Crafty.e("Raindrop").place(this.x + this.w/2, this.y + this.h);
        }
        if(Math.random() < 0.7) {
            Crafty.e("Raindrop").place(this.x + this.w/2 - this.w/4, this.y + this.h);
        }
        if(Math.random() < 0.7) {
           Crafty.e("Raindrop").place(this.x + this.w/2 + this.w/4, this.y + this.h);
        }
    },
    randomMoveSwitch: function () {
        if(Math.random() < 0.25) {
            this.vx = -1 * this.vx;
        }
    }
})
