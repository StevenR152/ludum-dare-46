Crafty.c("Tree", {
	init: function() {
        this.addComponent("2D, DOM, Delay, Renderable, tree_100");
        this.x = 400;
        this.y = GAME_SCREEN_HEIGHT - 989 / 4 * 6;
        this.w = 850 / 4;
        this.h = 989 / 4;
        this.z = 9;
        this.delay(this.treeDecay, tree_decay_tick, -1);
        this.bind("waterTree", function() {
            this.treeHeal();
        })
    },

    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    },

    // fadeTree: function () {
    //     this.alpha -= 0.10;
    // }

	treeDecay: function () {
		tree_health -= 10;
		Crafty.trigger("treeDecayed");
		if (tree_health <= 0) {
			Crafty.trigger("Tree Death");
			Crafty.scene("EndScreen");
		}
		this.treeImgUpdate();
		return this;
	},

	treeHeal: function () {
		tree_health += healing_strength; // healing_strength is variable based on whether there is water in the bucket or not def:10
		if (tree_health > 100) {
			currency += (tree_health - 100);
			tree_health = 100;
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
		 if (tree_health <= 20) {
			this.addComponent("tree_0");
		} else if (tree_health <= 40) {
			this.addComponent("tree_20");
		}
		else if (tree_health <= 60) {
			this.addComponent("tree_40");
		}
		else if (tree_health <= 80) {
			this.addComponent("tree_60");
		} else if (tree_health <= 100) {
			this.addComponent("tree_80")
		} else if (tree_health <= 120) {
			this.addComponent("tree_100")
		}
		this.w = 850 / 4;
        this.h = 989 / 4;
		return this;
	}
})
