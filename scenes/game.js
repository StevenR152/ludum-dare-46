var PLATFORM_HEIGHT = 30;
var BUCKET_LOCATIONS = [{x:157,y:230}, {x:309,y:80}, {x:757,y:80}, {x:961,y:230}];
var hasBucket = false;
var facing = "right";
var tree_decay_tick = 4000;
var currency = 0;
var tree_health = 100;

Crafty.defineScene("Game", function() {
	var floor = Crafty.e("Ground");
	var grass = Crafty.e("Grass");

	var bucketSpawner = Crafty.e("BucketSpawner");
	var raindropSpawner = Crafty.e("RaindropSpawner");

	var platform1 = Crafty.e("Platform").place(-350, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 12);
	var platform2 = Crafty.e("Platform").place(-150, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 7);
	var platform3 = Crafty.e("Platform").place(100, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5);
	var platform4 = Crafty.e("Platform").place(0, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 14);
	var platform5 = Crafty.e("Platform").place(900, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5);
	var platform6 = Crafty.e("Platform").place(250, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 10);
	var platform7 = Crafty.e("Platform").place(450, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 15);
	var platform8 = Crafty.e("Platform").place(700, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 10);
	var platform9 = Crafty.e("Platform").place(700, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 17);
	var platform10 = Crafty.e("Platform").place(1200, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 7);
	var platform11 = Crafty.e("Platform").place(1000, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 13);
	
	var tree = Crafty.e("Tree").place(400, GAME_SCREEN_HEIGHT - ((989 / 4)) - 24);

	var init_bucket = Crafty.e("Bucket").place(321,340);

	var player = Crafty.e("Player").place(50, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5);

	var background = Crafty.e("Background");
	makeCameraTrackEntity(player, 50);
});
