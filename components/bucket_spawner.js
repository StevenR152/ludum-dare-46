Crafty.c("BucketSpawner", {
	init: function() {
        this.addComponent("BucketSpawner");
		this.bind("collectBucket" function() {
			this.delay(this.spawnNewBucket, 1000)
		});
    },
	spawnNewBucket: function() {
		Crafty.e("Bucket").place(this.newLocation);
	},
	newLocation: function() {
		return BUCKET_LOCATIONS[Math.floor(Math.random() * BUCKET_LOCATIONS.length))];
	}
})
