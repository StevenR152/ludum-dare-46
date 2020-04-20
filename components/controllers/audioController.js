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
        this.delay(Crafty.audio.unpause(trackName), timeToPause, 0)
    }
})
