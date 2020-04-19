Crafty.defineScene("EndScreen", function() {
	var gameOverBackground = Crafty.e("EndBackground");

	var playAgainGameButton = Crafty.e("2D, DOM, Image, Mouse, playagain")
		.attr({x: GAME_SCREEN_WIDTH-250, y: GAME_SCREEN_HEIGHT-150})
		.image("assets/images/restart.png")
		.bind('Click', function(MouseEvent){
        	Crafty.scene('Game');
		});
});
