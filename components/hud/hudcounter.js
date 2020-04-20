Crafty.c("HudCounter", {
    init : function () {
        this.requires('2D, DOM, Text, Delay')
        this.totalSeconds = 0;
        this.attr({w: 65, h: 100, x: 0, y: 0})
        this.z = 1000;
        this.text("00:00")
        this.css('text-shadow', '1px 1px 1px black')
        this.textColor('#EEE');
        this.unselectable()
        this.delay(this.updateTimer, 1000, -1);
        this.textFont({ size: '17px', weight: 'bold' });
    },

    updateTimer : function () {
        //calculate time
        this.totalSeconds += 1;
        var minutes = parseInt(this.totalSeconds / 60);
        var seconds = this.totalSeconds % 60;
        if (this.totalSeconds <= 0) {
            if(typeof this.countdownOver !== 'undefined') {
                this.countdownOver();
            }
        }

        gametime = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2)
        //update time text
        this.text(gametime);
    },

    setCountdownOverAction : function (func) {
        this.countdownOver = func;
    },

    getTotalSeconds: function () {
        return this.totalSeconds;
    }
});

