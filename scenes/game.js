var PLATFORM_HEIGHT = 30;

Crafty.defineScene("Game", function() {
	var floor = Crafty.e("2D, DOM, Color, Platform")
		.attr({
			x: -900, 
			y: GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT, 
			w: 2700, 
			h: PLATFORM_HEIGHT
		})
		.color("#563");

	var platform1 = Crafty.e("2D, DOM, Color, Platform")
		.attr({
			x: 150, 
			y: GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5, 
			w: 150, 
			h: PLATFORM_HEIGHT
		})
		.color("#563");

	var platform2 = Crafty.e("2D, DOM, Color, Platform")
		.attr({
			x: 650, 
			y: GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5, 
			w: 150, 
			h: PLATFORM_HEIGHT
		})
		.color("#563");

	var tree = Crafty.e("2D, DOM, Color, Platform")
		.attr({
			x: 400, 
			y: GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 6,
			w: PLATFORM_HEIGHT * 5,
			h: PLATFORM_HEIGHT * 5
		})
		.color("#382");

	var player = Crafty.e("2D, DOM, Color, Twoway, Gravity")
		.attr({
			x: 50, 
			y: GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 6,
			w: 35,
			h: 70
		})
		.gravity("Platform")
		.twoway(200, 350)
		.color("#832");
});