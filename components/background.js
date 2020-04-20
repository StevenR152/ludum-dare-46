var widthOfImage = 96;
var heightOfImage = 96;

Crafty.c("Background", {
    init: function () {
        this.requires('2D, DOM, Image');
        this.attr({
            x: -50000,
            y: -650,
            z: -100,
            w: 1500 * 100,
            h: 1224
        });
        this.alpha = 0.5;
        this.image("assets/images/background_only.png", "repeat-x");
    }
});

Crafty.c("Foreground", {
    init: function () {
        this.requires('2D, DOM, Image');
        this.attr({
            x: -50000,
            y: -650,
            z: -100,
            w: 1500 * 100,
            h: 1224
        });
        this.alpha = 0.9;
        this.image("assets/images/foreground.png", "repeat-x");
    }
});

Crafty.c("StartBackground", {
    init: function () {
        this.requires('2D, DOM, Mouse, titleScreen');
        this.attr({x: -100, y: -310, w: 1496/1.48, h: 1224/1.52});
        this.vx -= 1;
    }
});

Crafty.c("EndBackground", {
    init: function () {
        this.requires('2D, DOM, gameOver');
        this.attr({x: 0, y: -300, w: 1496/1.6, h: 1224/1.6});
        this.vx -= 1;
    }
});