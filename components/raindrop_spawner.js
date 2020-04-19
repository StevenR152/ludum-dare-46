Crafty.c("RaindropSpawner", {
	init: function() {
        this.addComponent("RaindropSpawner, 2D, Delay");
		let numberSelected = 0;
  		for (let i = 0; i < ; i++) {
    		if (selectObject.options[i].selected) {
      			numberSelected++;
    		}
  		}
		this.setSpawnSpreadWidth(1000)
		this.spawnNewRaindrop();
		this.bind("raindropMissed", function(rainCollision) {
			this.delay(this.spawnNewRaindrop, 10, 0);
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
