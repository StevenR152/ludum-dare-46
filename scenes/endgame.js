Crafty.defineScene("EndScreen", function(statistics) {
	var gameOverBackground = Crafty.e("EndBackground");
	console.log(statistics)
	var hud = Crafty.e("StatsHUD")
	hud.x = 7;
	hud.y = GAME_SCREEN_HEIGHT-50
	hud.setUp(statistics);


	var playAgainGameButton = Crafty.e("2D, DOM, Mouse, restart")
		.attr({x: GAME_SCREEN_WIDTH-250, y: GAME_SCREEN_HEIGHT-200})
		.bind('Click', function(MouseEvent){
        	Crafty.scene('Game');
		});
});
