var PLATFORM_HEIGHT;
var DEFAULT_HEALING_STR; // default healing strength value
var POWERUP_TIME; // powerups last this long
var SPAWN_LOCATIONS;
var hasBucket;
var totalSeconds;
var facing;
var tree_decay_tick;
var currency;
var tree_health;
var healing_strength;
var raindropsPerMinute;
var inBucket;
var cloudChance;
var player_speed;
var player_jump;
var powerupRain;
var powerupSpeed;
var powerupJump;
var powerupRainCost;
var powerupSpeedCost;
var powerupJumpCost;
var statistics;
var char_anim_time;
var BGmuted = false;

Crafty.defineScene("Game", function() {
	setInitialGameState();
	var floor = Crafty.e("Ground");
	var grass = Crafty.e("Grass");

	var background = Crafty.e("Background");
	var foreground = Crafty.e("Foreground");
	var bucketSpawner = Crafty.e("BucketSpawner");
	this.bind("collectBucket", function() {
		var pooSpawner = Crafty.e("PooSpawner");
		var cloudController = Crafty.e("CloudController");
	});

	setStatisticsListeners();
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


	Crafty.e("Rock").place(715, 380);
	Crafty.e("Rock").place(-350, 390);
	Crafty.e("Rock2").place(25, 410);
	Crafty.e("Rock3").place(1159, 390);
	Crafty.e("Rock3").place(-159, 380);
	Crafty.e("GrassPatch").place(415, 380);
	Crafty.e("GrassPatch").place(34, 415);
	Crafty.e("GrassPatch").place(-765, 415);
	Crafty.e("GrassPatch").place(989, 390);
	Crafty.e("GrassPatch").place(829, 375);
	Crafty.e("GrassPatch").place(899, 382);
	Crafty.e("GrassPatch").place(-259, 380);
	Crafty.e("GrassPatch").place(-459, 375);
	Crafty.e("GrassPatch").place(1110, 400);
	Crafty.e("GrassPatch").place(1510, 400);

	var tree = Crafty.e("Tree").place(400, GAME_SCREEN_HEIGHT - ((989 / 4)) - 24);

	var arrow = Crafty.e("Arrow").origin("center");
	var init_bucket = Crafty.e("Bucket").place(950, 235);
	arrow.x = init_bucket.x - 3;
	arrow.y = init_bucket.y - 30;
	init_bucket.attach(arrow);

	var hud = Crafty.e("HUD");
	var player = Crafty.e("Player");
	// Attach Hud to player so its location follows player.
	player.attach(hud);
	player.place(130, 120);

	makeCameraTrackEntity(player, 75);
});


function addStatisticValue(name, value) {
	if(typeof statistics[name] === 'undefined') {
		statistics[name] = value;
	}
	statistics[name] += value;
}

function increaseStatisticCounter(name) {
	if(typeof statistics[name] === 'undefined') {
		statistics[name] = 0;
	}
	statistics[name] += 1;
}

function addTriggerBasedStatCounter(trigger, statistic) {
	Crafty.bind(trigger, function () {
		increaseStatisticCounter(statistic);
	})
}

function setStatisticsListeners() {
	addTriggerBasedStatCounter("getRaindrop", "raindrops_collected");
	addTriggerBasedStatCounter("getPoo", "poos_collected");
	addTriggerBasedStatCounter("bucketFull", "number_of_full_buckets");
	addTriggerBasedStatCounter("emptyBucket", "number_of_times_fed_tree");
	addTriggerBasedStatCounter("enableSpeedPowerup", "number_of_times_powerupSpeed");
	addTriggerBasedStatCounter("enableJumpPowerup", "number_of_times_powerupJump");
	addTriggerBasedStatCounter("enableRainPowerup", "number_of_times_powerupRain");
}

function setInitialGameState() {
	PLATFORM_HEIGHT = 30;
	DEFAULT_HEALING_STR = 15; // default healing strength value
	POWERUP_TIME = 15000 // powerups last this long
	SPAWN_LOCATIONS = [
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
	hasBucket = false;
	facing = "right";
	tree_decay_tick = 5000;
	currency = 0;
	tree_health = 100;
	healing_strength = DEFAULT_HEALING_STR;
	raindropsPerMinute = 200;
	inBucket = {};
	cloudChance = 0.1;
	player_speed = 300;
	player_jump = 390;
	powerupRain = false;
	powerupSpeed = false;
	powerupJump = false;
	powerupRainCost = 50;
	powerupSpeedCost = 30;
	powerupJumpCost = 10;
	inBucket.water = 0;
	inBucket.poo = 0;
	statistics = {};
	totalSeconds = 0;
	char_anim_time = 500;
}
