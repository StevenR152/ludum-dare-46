Crafty.c("PooSpawner", {
	init: function() {
        this.addComponent("PooSpawner, 2D, Delay");
		this.delay(this.spawnNewPoo, 3000, -1);
    },
	spawnNewPoo: function() {
		if (Crafty("Poo").length < 3) {
			if(Math.random() < 0.2) {
				var nextLocation = this.newLocation()
				Crafty.e("Poo").place(nextLocation.x, nextLocation.y);
			}
		}
	},
	newLocation: function() {
		return SPAWN_LOCATIONS[Math.floor(Math.random() * SPAWN_LOCATIONS.length)];
	}
})
