Crafty.c("CloudController", {
	init: function() {
        this.addComponent("2D, DOM, Delay");
        this.delay(this.spawnCloud, 3000, -1);
        this.spawnZoneWidth = 1000;
    },
    spawnCloud: function () {
        if(Math.random() < cloudChance) {
            var x = Math.floor(Math.random() * (this.spawnZoneWidth  + this.spawnZoneWidth/2)) - this.spawnZoneWidth/2;
            var cloud = Crafty.e("Cloud").attr({x:x});
            cloud.y += Math.random() * 70 - 35;
            var scale =  Math.random() * 0.2 + 0.8;
            cloud.w *= scale;
            cloud.h *= scale;
			audioController.playTrack("cloudSpawn", 1, 0.1)
        }
    }
})
