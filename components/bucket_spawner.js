Crafty.c("BucketSpawner", {
	init: function() {
		console.log("spawner loaded");
        this.addComponent("BucketSpawner, 2D, Delay");
		this.bind("collectBucket", function() {
			this.delay(this.spawnNewBucket, 1000, 1);
		});
    },
	spawnNewBucket: function() {
		Crafty.e("Bucket").place(this.newLocation);
	},
	newLocation: function() {
		var newLocation = BUCKET_LOCATIONS[Math.floor(Math.random() * BUCKET_LOCATIONS.length)];
		console.log(newLocation);
	}
})
