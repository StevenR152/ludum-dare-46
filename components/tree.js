Crafty.c("Tree", {
	init: function() {
        this.addComponent("2D, DOM, Delay, Renderable, tree_100");
        this.x = 400;
        this.y = GAME_SCREEN_HEIGHT - 989 / 4 * 6;
        this.w = 850 / 4;
        this.h = 989 / 4;
        this.z = 9;
		Crafty.trigger("tree_health", "tree_100")
		this.bind("collectBucket", function() {
	        this.delay(this.treeDecay, tree_decay_tick, -1);
			this.delay(this.increaseDecay, 15000, -1); // every 15 seconds call trigger
		});
        this.bind("emptyBucket", function() {
            this.treeHeal();
		})
	},
    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    },
	increaseDecay: function() {
		this.cancelDelay(this.treeDecay);
		tree_decay_tick /= 1.08;
		this.delay(this.treeDecay,tree_decay_tick, -1);
	},
	treeDecay: function () {
		tree_health -= 10;
		Crafty.trigger("treeDecayed");
		if (tree_health <= 0) {
			Crafty.trigger("Tree Death");
			addStatisticValue("finish_time", Crafty("HudCounter").getTotalSeconds());
			if (BGmuted == false) {
				audioController.pauseTrack("bgAudio", 2000);
			}
			audioController.loadTrack("leavesAllGone", 1, 0.1);
			Crafty.scene("EndScreen", statistics);
		}
		this.treeImgUpdate();
		return this;
	},
	treeHeal: function () {
		healing_strength = (5 * inBucket.water) + (15 * inBucket.poo); //per raindrop/poo healing
		inBucket.water = 0;
		inBucket.poo = 0;
		tree_health += healing_strength; // healing_strength is variable based on whether there is water in the bucket or not def:10


		if (tree_health > 100) {
			Crafty.trigger("InstructionText", "The tree grows you some apples")
			var increase = (tree_health - 100);
			currency += increase;

			addStatisticValue("apples_grown", increase);
			if (currency >  40) {
				Crafty.trigger("InstructionText", "Use your apples for power ups ")
				this.delay(function () {
	                Crafty.trigger("InstructionText", "Press key 1, 2 or 3 to activate")
	            }, 3000, -1)
			}
		}
		if (tree_health > 120) {
			tree_health = 120;
		}
		this.treeImgUpdate();
		return this;
	},
	treeImgUpdate: function () {
		// console.log	(tree_health);
		this.removeComponent("tree_100");
		this.removeComponent("tree_80");
		this.removeComponent("tree_60");
		this.removeComponent("tree_40");
		this.removeComponent("tree_20");
		this.removeComponent("tree_0");
		if (tree_health <= 10) {
			this.addComponent("tree_0");
			Crafty.trigger("tree_health", "tree_0")
			// if (BGmuted == false) {
			// 	audioController.pauseTrack("bgAudio", 600)
			// }
			audioController.playTrack("leavesLost", 1)
		}
		else if (tree_health <= 40) {
			this.addComponent("tree_20");
			Crafty.trigger("tree_health", "tree_20")
		}
		else if (tree_health <= 60) {
			this.addComponent("tree_40");
			Crafty.trigger("tree_health", "tree_40")
		}
		else if (tree_health <= 80) {
			this.addComponent("tree_60");
			Crafty.trigger("tree_health", "tree_60")
		} else if (tree_health <= 100) {
			this.addComponent("tree_80")
			Crafty.trigger("tree_health", "tree_80")
		} else if (tree_health <= 120) {
			this.addComponent("tree_100")
			Crafty.trigger("tree_health", "tree_100")
		}
		this.w = 850 / 4;
        this.h = 989 / 4;
		return this;
	}
})
