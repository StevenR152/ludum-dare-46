Crafty.c("RaindropSpawner", {
	init: function() {
        this.addComponent("RaindropSpawner, 2D, Delay");
		this.setSpawnSpreadWidth(1000)
		this.spawnNewRaindrop();
		this.delay(this.spawnNewRaindrop,60000/raindropsPerMinute, -1);
		this.bind("raindropSpeedChange", function() {
		 this.cancelDelay(this.spawnNewRaindrop);
		 this.delay(this.spawnNewRaindrop,60000/raindropsPerMinute, -1);
		});
    },

    setSpawnSpreadWidth: function (width) {
    	this.spawnZoneWidth = width;
    },

    spawnNewRaindrop: function() {
    	var x = Math.floor(Math.random() * (this.spawnZoneWidth  + this.spawnZoneWidth/2)) - this.spawnZoneWidth/2;
		Crafty.e("Raindrop").place(x, -1250);
	}, //x and y positions generated (temp method)
})
