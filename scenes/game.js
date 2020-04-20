var PLATFORM_HEIGHT = 30;
var DEFAULT_HEALING_STR = 15; // default healing strength value
var POWERUP_TIME = 15000 // powerups last this long
var SPAWN_LOCATIONS = [
	{x:179, y:230},
	{x:-96, y:170},
	{x:-300, y:20},
	{x:47, y:-40},
	{x:347, y:80},
	{x:467, y:-70},
	{x:551, y:-70},
	{x:737, y:-130},
	{x:797, y:-130},
	{x:1031, y:-10},
	{x:785, y:80},
	{x:1007, y:230},
	{x:905, y:230},
	{x:1277, y:170},
	{x:1121, y:345},
	{x:707, y:345}
];
var hasBucket = false;
var facing = "right";
var tree_decay_tick = 4000;
var currency = 0;
var tree_health = 100;
var healing_strength = DEFAULT_HEALING_STR;
var raindropsPerMinute = 200;
var inBucket = {};
var cloudChance = 0.1;
var player_speed = 300;
var player_jump = 390;
var powerupRain = false;
var powerupSpeed = false;
var powerupJump = false;
inBucket.water = 0;
inBucket.poo = 0;

Crafty.defineScene("Game", function() {
	setInitialGameState();
	var floor = Crafty.e("Ground");
	var grass = Crafty.e("Grass");

	var background = Crafty.e("Background");
	var foreground = Crafty.e("Foreground");
	var bucketSpawner = Crafty.e("BucketSpawner");
	var pooSpawner = Crafty.e("PooSpawner");
	var cloudController = Crafty.e("CloudController");
	var powerups = Crafty.e("Powerups");

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

	var arrow = Crafty.e("Arrow").origin("center");
	var init_bucket = Crafty.e("Bucket").place(180, 238);
	arrow.x = init_bucket.x - 3;
	arrow.y = init_bucket.y - 30;
	init_bucket.attach(arrow);

	var hud = Crafty.e("HUD");
	var player = Crafty.e("Player");
	// Attach Hud to player so its location follows player.
	player.attach(hud);
	player.place(-100, 300);

	makeCameraTrackEntity(player, 75);
});

function setInitialGameState() {
	tree_decay_tick = 4000;
	tree_health = 100;
	currency = 0;
	hasBucket = false;
}
