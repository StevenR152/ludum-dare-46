Crafty.c("RaindropSpawner", {
	init: function() {
        this.addComponent("RaindropSpawner, 2D, Delay");
		this.spawnNewRaindrop();
		this.bind("raindropMissed", function(rainCollision) {
			this.delay(this.spawnNewRaindrop, 500, 0);
		});
    },
	spawnNewRaindrop: function() {
		Crafty.e("Raindrop").place(0, -250);
	}, //x and y positions generated (temp method) (Math.floor(Math.random() * 1500) - 500)
})
