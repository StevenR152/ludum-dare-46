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
			audioController.playTrack("jump2,", 1, 0.3)
        	Crafty.scene('Game', true);
		});

	var muteMusic = Crafty.e("2D, Color, Mouse, DOM, mutebutton");
	muteMusic.attr({x: GAME_SCREEN_WIDTH-870, y: GAME_SCREEN_HEIGHT-370, w: 50/1.5, h:50/1.5, vx:5});
	muteMusic.bind('Click', function(MouseEvent){
		if (BGmuted == false) {
			BGmuted = true;
			this.alpha = 0.2;
			audioController.pauseTrack("bgAudio", 0);
		}
		else {
			BGmuted = false;
			this.alpha = 1;
			audioController.playTrack("bgAudio", -1, 0.25)
		}
	});
	if (BGmuted == true) {
		muteMusic.alpha = 0.2;
	}
});
