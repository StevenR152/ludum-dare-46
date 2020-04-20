Crafty.c("CreditsText", {
	init: function() {
        this.requires('2D, DOM, Text')
        this.attr({w: 200, h: 100, x: -60, y: -35})
        this.z = 1000;
        // HashSet of Messages Received to only notify once.
        this.textAlign("center");
        // this.css('text-shadow', '2px 2px 5px white')
        this.textColor('#555');
        this.unselectable();
        this.alpha = 0.9;
        this.textFont({ size: '11px', weight: "bold" });
    }
})