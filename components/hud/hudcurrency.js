Crafty.c("HudCurrency", {
    init : function () {
        this.requires('2D, DOM, Text, Color, Delay')
        this.attr({w: 65, h: 100, x: 0, y: 0})
        this.z = 1000;

        var hudCurrencyImg = Crafty.e("HudCurrencyImg")
        this.attach(hudCurrencyImg);
        hudCurrencyImg.x = this.x + 25;
        hudCurrencyImg.y = this.y - 3;
        var hudCurrencyText = Crafty.e("HudCurrencyText")
        this.attach(hudCurrencyText);

        this.delay(this.updateCurrency, 100, -1);
    },
    updateCurrency : function () {
        //display currency on screen
        this.text(currency);
    },
});

Crafty.c("HudCurrencyImg", {
    init : function () {
        this.requires('2D, DOM, currency')
        this.attr({
            w: 22,
            h: 23,
        })
        this.z = 1000;
        this.alpha = 0.7;
    }
});

Crafty.c("HudCurrencyText", {
    init : function () {
        this.requires('2D, DOM, Text')
        this.attr({
            w: 100,
            h: 23,
        })
        this.text(currency);
        this.css('text-shadow', '1px 1px 1px black');
        this.textColor('#EEE');
        this.unselectable();
        this.textFont({ size: '17px', weight: 'bold'});
        this.z = 1000;
    }
})
