Crafty.c("Bucket", {
	init: function() {
        this.addComponent("2D, DOM, Motion, bucket");
        this.w = 20;
        this.h = 20;


        this.bind('SET_MOVE_RIGHT', function(e) {
            console.log("RIGHT")
            console.log(this)
            // this.jump();
            this.vx = 100;
        })

        this.bind('SET_MOVE_LEFT', function(e) {
            console.log("LEFT")
            this.vx = -100;
        })

    },

    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
})
