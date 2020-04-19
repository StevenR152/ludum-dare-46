Crafty.c("BucketsScore", {
	init: function() {
        this.addComponent("2D, DOM, Text");
        this.score = 0;
        this.attr({w: 200, h: 200, x: -100, y: -100})
        this.text("Buckets Collected: " + this.score)
        this.css('text-shadow', '3px 3px 3px black')
        this.textColor('#EEE');
        this.unselectable()
        this.bind("collectBucket", function () {
            this.score += 1;
            this.text("Buckets Collected: " + this.score)
        })
    },
})