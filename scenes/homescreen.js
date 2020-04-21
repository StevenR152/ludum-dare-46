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
			audioController.playTrack("jump2,", 1, 0.07)
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

	var muteMusic = Crafty.e("2D, Color, Mouse, DOM, mutebutton");
	muteMusic.attr({x: GAME_SCREEN_WIDTH-870, y: GAME_SCREEN_HEIGHT-370, w: 50/1.5, h:50/1.5, vx:5});
	muteMusic.bind('Click', function(MouseEvent){
		if (BGmuted == false) {
			BGmuted = true;
			this.alpha = 0.2;
			audioController.pauseTrack("bgAudio", 0)
		}
		else {
			BGmuted = false;
			this.alpha = 1;
			audioController.playTrack("bgAudio", -1, 0.25)
		}
	});
});
