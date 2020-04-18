var PLATFORM_HEIGHT = 30;

Crafty.defineScene("Game", function() {
	var floor = Crafty.e("Platform").place(150, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5)
		.attr({
			x: -900,
			y: GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT,
			w: 2700
		});

	var platform1 = Crafty.e("Platform").place(150, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5);

	var platform2 = Crafty.e("Platform").place(650, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5);

	var tree = Crafty.e("2D, DOM, Color, Tree")
		.attr({
			x: 400,
			y: GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 6,
			w: PLATFORM_HEIGHT * 5,
			h: PLATFORM_HEIGHT * 5
		})
		.color("#382");

	var bucket1 = Crafty.e("Bucket").place(700,200);

	var player = Crafty.e("Player").place(50, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5);
});
