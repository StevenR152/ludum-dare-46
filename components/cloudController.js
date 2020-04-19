Crafty.c("CloudController", {
	init: function() {
        this.addComponent("Delay");
        this.delay(this.spawnCloud, 3000, -1);
        this.spawnZoneWidth = 1000;
    },

    spawnCloud: function () {
        if(Math.random() < 0.1) {
            var x = Math.floor(Math.random() * (this.spawnZoneWidth  + this.spawnZoneWidth/2)) - this.spawnZoneWidth/2;
            Crafty.e("Cloud").attr({x:x});
        }
    }
})
