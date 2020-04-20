Crafty.c("PlayerNotification", {
	init: function() {
        this.requires('2D, DOM, Text, Delay, Keyboard')
        this.totalSeconds = 0;
        this.attr({w: 200, h: 100, x: -60, y: -35})
        this.z = 1000;
        // HashSet of Messages Received to only notify once.
        this.messagesReceived = {};
        this.textAlign("center");
        // this.css('text-shadow', '2px 2px 5px white')
        this.textColor('#555');
        this.unselectable();
        this.textFont({ size: '17px', weight: "bold" });
        this.bind("InstructionText", function (message) {
            if(this.messagesReceived[message] != "SEENBEFORE"){
                this.text(message);
                this.alpha = 1.3;
                this.delay(this.decayMessage, 200, this.alpha/0.1);
            }
            this.messagesReceived[message] = "SEENBEFORE";

        }.bind(this))
        this.setMessageEvents();
        Crafty.trigger("InstructionText", "Arrow keys to move")
    },

    decayMessage: function() {
        this.alpha -= 0.1;
        return this;
    },
    
    setMessageEvents: function () {
        this.bind("KeyDown", function () {
            this.delay(function () {
                Crafty.trigger("InstructionText", "Go find your bucket")
            }, 1000, -1)
        })

        this.bind("collectBucket", function() {
            this.delay(function () {
               Crafty.trigger("InstructionText", "Gather a raindop")
            }, 1000, -1)
        })

        this.bind("getRaindrop", function() {
            Crafty.trigger("InstructionText", "Fill your bucket")
        })

        this.bind("getPoo", function() {
            Crafty.trigger("InstructionText", "Fertilise the tree")
        })

        this.bind("bucketFull", function() {
            Crafty.trigger("InstructionText", "Water the tree")
        })

        this.bind("emptyBucket", function() {
            Crafty.trigger("InstructionText", "You partly heal the tree")
            this.delay(function () {
                Crafty.trigger("InstructionText", "Keep it alive!")
            }, 3000, -1)
        })
    }
})
