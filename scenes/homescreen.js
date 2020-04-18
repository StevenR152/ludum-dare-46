var PLATFORM_HEIGHT = 30;
var BUCKET_LOCATIONS = [{x:700,y:200}, {x:900,y:200}, {x:200,y:200}];
var hasBucket = false;

Crafty.defineScene("HomeScreen", function() {
	var floor = Crafty.e("Platform").place(150, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5)
		.attr({
			x: -900,
			y: GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT,
			w: 2700
		});

	var bucketSpawner = Crafty.e("BucketSpawner");

	var platform1 = Crafty.e("Platform").place(200, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5);

	var platform2 = Crafty.e("Platform").place(700, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5);

	var platform2 = Crafty.e("Platform").place(300, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 11);

	var platform2 = Crafty.e("Platform").place(600, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 11);

	var tree = Crafty.e("Tree").place(400, GAME_SCREEN_HEIGHT - ((989 / 4)) - 10);

	var bucket1 = Crafty.e("Bucket").place(700,GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 6);

	var player = Crafty.e("Player").removeComponent("Twoway").place(50, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5);

	makeCameraTrackEntity(player, 50);
});
