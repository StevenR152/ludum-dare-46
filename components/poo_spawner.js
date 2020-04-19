Crafty.c("PooSpawner", {
	init: function() {
        this.addComponent("PooSpawner, 2D, Delay");
		this.bind("RandomPoo", function() {
			this.spawnNewPoo();
		});
    },
	spawnNewPoo: function() {
		var nextLocation = this.newLocation()
		Crafty.e("Poo").place(nextLocation.x, nextLocation.y);
	},
	newLocation: function() {
		return SPAWN_LOCATIONS[Math.floor(Math.random() * SPAWN_LOCATIONS.length)];
	}
})
