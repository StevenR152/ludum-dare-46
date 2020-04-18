var PLATFORM_HEIGHT = 30;
var BUCKET_LOCATIONS = [{x:157,y:265}, {x:309,y:145}, {x:757,y:145}, {x:961,y:265}];
var hasBucket = false;
var facing = "right";

Crafty.defineScene("Game", function() {
	var floor = Crafty.e("Ground");
	var grass = Crafty.e("Grass");

	var bucketSpawner = Crafty.e("BucketSpawner");

	var platform1 = Crafty.e("Platform").place(100, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 4);

	var platform2 = Crafty.e("Platform").place(900, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 4);

	var platform2 = Crafty.e("Platform").place(250, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 8);

	var platform2 = Crafty.e("Platform").place(700, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 8);

	var tree = Crafty.e("Tree").place(400, GAME_SCREEN_HEIGHT - ((989 / 4)) - 24);

	var bucket1 = Crafty.e("Bucket").place(700,GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 6);

	var player = Crafty.e("Player").place(50, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5);

	var background = Crafty.e("Background");
	makeCameraTrackEntity(player, 50);
});
