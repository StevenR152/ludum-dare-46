Crafty.c("BucketSpawner", {
	init: function() {
        this.addComponent("BucketSpawner, 2D, Delay");
		this.bind("waterTree", function() {
			this.delay(this.spawnNewBucket, 1000, 0);
		}); // called in player component when collission with tree occurs
    },
	spawnNewBucket: function() {
		var nextLocation = this.newLocation()
		Crafty.e("Bucket").place(nextLocation.x, nextLocation.y);
	},
	newLocation: function() {
		return BUCKET_LOCATIONS[Math.floor(Math.random() * BUCKET_LOCATIONS.length)];
	}
})
