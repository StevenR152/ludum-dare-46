Crafty.c("AudioController", {
	init: function() {
        this.addComponent("Delay");
    },

    loadTrack : function(trackName, timesToPlay=1, trackVolume=1.0) {
        Crafty.audio.add(trackName);
        this.playTrack(trackName, timesToPlay, trackVolume=1.0);
    },

    playTrack : function(trackName, timesToPlay=1, trackVolume=1.0) {
        Crafty.audio.play(trackName, timesToPlay,trackVolume);
    },

    pauseTrack : function(trackName, timeToPause) {
        Crafty.audio.pause(trackName);
        this.delay(function () {
			Crafty.audio.unpause(trackName)
		}, timeToPause, 0)
    },

	stopTrack : function(trackName="all") {
		if (trackName == "all") {
			Crafty.audio.stop();
			Crafty.audio.remove() // memory clear
		}
		else {
			Crafty.audio.stop(trackName);
			Crafty.audio.remove(trackName) //memory clear
		}
	},

	muteToggle : function() {
		Crafty.audio.toggleMute()
	}
})
