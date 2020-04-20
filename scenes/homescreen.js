Crafty.defineScene("HomeScreen", function() {
	var gameStartBackground = Crafty.e("StartBackground");

	var playGameButton = Crafty.e("2D, DOM, Image, Mouse, playbutton")
		.attr({x: GAME_SCREEN_WIDTH-250, y: GAME_SCREEN_HEIGHT-150})
		.bind('Click', function(MouseEvent){
        	Crafty.scene('Game');
		});

	var title = Crafty.e("2D, DOM, title")
		.attr({x: 150, y: 0})
});
