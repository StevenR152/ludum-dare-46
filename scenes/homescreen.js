Crafty.defineScene("HomeScreen", function() {
	var gameStartBackground = Crafty.e("StartBackground");
	gameStartBackground.bind('Click', function() {
		if (Crafty.audio.isPlaying("bgAudio") == false) {
			audioController.loadTrack("bgAudio", -1, 0.25);
		}
	})

	var playGameButton = Crafty.e("2D, DOM, Image, Mouse, playbutton")
		.attr({x: GAME_SCREEN_WIDTH-200, y: GAME_SCREEN_HEIGHT-140})
		.bind('Click', function(MouseEvent){
			if (Crafty.audio.isPlaying("bgAudio") == false) {
				audioController.loadTrack("bgAudio", -1, 0.25);
			}
        	Crafty.scene('Game');
		});

	var title = Crafty.e("2D, DOM, title")
		.attr({x: 200, y: 0});

	var title = Crafty.e("CreditsText")
        .text("Game Art by Veera Villgren")
		.attr({x: 20, y: GAME_SCREEN_HEIGHT-17});

	var title = Crafty.e("CreditsText")
        .text("Game Dev by Steven Rutherford")
		.attr({x: 230, y: GAME_SCREEN_HEIGHT-17});	

	var title = Crafty.e("CreditsText")
        .text("Game Dev by Joshua Pearson")
		.attr({x: 465, y: GAME_SCREEN_HEIGHT-17});	

	var title = Crafty.e("CreditsText")
        .text("Music & SFX by Tom Stroll")
		.attr({x: 680, y: GAME_SCREEN_HEIGHT-17});
});
