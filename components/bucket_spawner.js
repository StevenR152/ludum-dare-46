Crafty.c("BucketSpawner", {
	init: function() {
        this.addComponent("BucketSpawner");
		this.bind("collectBucket" function() {
			this.delay(this.spawnNewBucket, 1000)
		});
    },
	spawnNewBucket: function() {
		return this;
	}

})
