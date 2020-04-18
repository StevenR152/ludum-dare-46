var PLATFORM_HEIGHT = 30;
var BUCKET_LOCATIONS = [{x:157,y:235}, {x:309,y:115}, {x:757,y:115}, {x:961,y:235}];
var hasBucket = false;
var facing = "right";

Crafty.defineScene("Game", function() {
	var floor = Crafty.e("Ground");
	var grass = Crafty.e("Grass");

	var bucketSpawner = Crafty.e("BucketSpawner");
	var raindropSpawner = Crafty.e("RaindropSpawner");

	var platform1 = Crafty.e("Platform").place(100, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5);

	var platform2 = Crafty.e("Platform").place(900, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5);

	var platform2 = Crafty.e("Platform").place(250, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 9);

	var platform2 = Crafty.e("Platform").place(700, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 9);

	var tree = Crafty.e("Tree").place(400, GAME_SCREEN_HEIGHT - ((989 / 4)) - 24);

	var init_bucket = Crafty.e("Bucket").place(321,340);

	var player = Crafty.e("Player").place(50, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5);

	var background = Crafty.e("Background");
	makeCameraTrackEntity(player, 50);
});
