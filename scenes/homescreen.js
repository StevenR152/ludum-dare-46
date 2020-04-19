var PLATFORM_HEIGHT = 30;

var hasBucket = false;

Crafty.defineScene("HomeScreen", function() {
	var floor = Crafty.e("Ground");
	var grass = Crafty.e("Grass");

	var raindropSpawner = Crafty.e("RaindropSpawner").setSpawnSpreadWidth(900);
	// var platform1 = Crafty.e("Platform").place(225, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5);
	// var platform2 = Crafty.e("Platform").place(825, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5);
	// var platform2 = Crafty.e("Platform").place(300, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 9);

	tree_health = 10;
	var tree = Crafty.e("Tree").place(400, GAME_SCREEN_HEIGHT - ((989 / 4)) - 24);
	tree.fadeTree();
	tree.cancelDelay(tree.fadeTree);

	var startGameButton = Crafty.e("2D, DOM, Color, Mouse")
		.attr({x: 850, y: GAME_SCREEN_HEIGHT-100, w: 80, h: 80})
		.color("white")
		.bind('Click', function(MouseEvent){
        	Crafty.scene('Game');
		});

	var player = Crafty.e("2D, DOM, player")
		.attr({
			x : 150,
        	y : GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 4,
        	w : 314 / 5,
        	h : 429 / 5
    	})

	var GameTitle = Crafty.e("2D, DOM, Color, Mouse")
		.attr({x: 100, y: 30, w: 200, h: 80})
		.color("white")
		.bind('Click', function(MouseEvent){
        	Crafty.scene('Game');
		});

	var init_bucket = Crafty.e("Bucket").place(321,340);

	var background = Crafty.e("Background");
	makeCameraTrackEntity(tree, 50);
});
