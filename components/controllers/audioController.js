Crafty.c("AudioController", {
	init: function() {
        this.addComponent("Delay");
    },

    loadTrack : function(trackName, timesToPlay) {
        Crafty.audio.add(trackName);
        this.playTrack(trackName, timesToPlay);
    },

    playTrack : function(trackName, timesToPlay) {
        Crafty.audio.play(trackName, timesToPlay);
    },

    pauseTrack : function(trackName, timeToPause) {
        Crafty.audio.pause(trackName);
        this.delay(Crafty.audio.unpause(trackName), timeToPause, 0)
    }
})
