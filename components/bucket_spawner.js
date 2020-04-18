Crafty.c("BucketSpawner", {
	init: function() {
        this.addComponent("BucketSpawner, 2D, Delay");
		this.bind("collectBucket", function() {
			this.delay(this.spawnNewBucket, 1000, 0);
		});
    },
	spawnNewBucket: function() {
		var nextLocation = this.newLocation()
		console.log("spawnNewBucket " + nextLocation.x + nextLocation.y);
		Crafty.e("Bucket").place(nextLocation.x, nextLocation.y);
	},
	newLocation: function() {
		return BUCKET_LOCATIONS[Math.floor(Math.random() * BUCKET_LOCATIONS.length)];
	}
})
