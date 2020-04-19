var widthOfImage = 96;
var heightOfImage = 96;

Crafty.c("Background", {
    init: function () {
        this.requires('2D, DOM, Image');
        this.attr({
            x: -4900,
            y: -650,
            z: -100,
            w: 1500 * 25,
            h: 1224
        });
        this.alpha = 0.6;
        this.image("assets/images/background.png", "repeat-x");
    }
});

Crafty.c("StartBackground", {
    init: function () {
        this.requires('2D, DOM, Image');
        this.attr({x: 0, y: 0, w: 624, h: 480});
        this.image("assets/images/title-screen.png");
        this.vx -= 1;
    }
});

Crafty.c("EndBackground", {
    init: function () {
        this.requires('2D, DOM, Image');
        this.attr({x: 0, y: 0, w: 624, h: 480});
        this.image("assets/images/end-screen.png");
        this.vx -= 1;
    }
});


Crafty.c("MobileInstructions", {
    init: function () {
        this.requires('2D, DOM, Image');
        this.attr({x: 0, y: 0, w: 624, h: 480})
        this.image("assets/images/instructionmobile.png", "repeat");
        this.vx -= 1;
    }
});

Crafty.c("DesktopInstructions", {
    init: function () {
        this.requires('2D, DOM, Image');
        this.attr({x: 0, y: 0, w: 624, h: 480});
        this.image("assets/images/instructiondesktop.png", "repeat");
        this.vx -= 1;
    }
});
