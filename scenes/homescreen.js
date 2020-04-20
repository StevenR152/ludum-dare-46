Crafty.defineScene("HomeScreen", function() {
	var gameStartBackground = Crafty.e("StartBackground");
	gameStartBackground.bind('Click', function() {
		// if (Crafty.audio.isPlaying("bgAudio") == false) {
		// 	audioController.loadTrack("bgAudio", -1);
		// }
	})

	var playGameButton = Crafty.e("2D, DOM, Image, Mouse, playbutton")
		.attr({x: GAME_SCREEN_WIDTH-200, y: GAME_SCREEN_HEIGHT-140})
		.bind('Click', function(MouseEvent){
			// if (Crafty.audio.isPlaying("bgAudio") == false) {
			// 	audioController.loadTrack("bgAudio", -1);
			// }
        	Crafty.scene('Game');
		});

	var title = Crafty.e("2D, DOM, title")
		.attr({x: 200, y: 0});
});
