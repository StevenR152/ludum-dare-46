Crafty.c("AudioController", {
	init: function() {
        // Crafty.bind("Play Sound", function {
        //     this.loadTrack(trackName, timesToPlay);
        // });
    },

    loadTrack : function(trackName, timesToPlay) {
        Crafty.audio.add(trackName);
        this.playTrack(trackName, timesToPlay);
    },

    playTrack : function(trackName, timesToPlay) {
        Crafty.audio.play(trackName, timesToPlay);
    },
})
