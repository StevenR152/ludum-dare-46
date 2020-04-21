var audioController = Crafty.e("AudioController");
Crafty.defineScene("Loading", function() {
    Crafty.background("#a6d5df");
    Crafty.e("2D, DOM, Text")
          .attr({ w: 200, h: 50, x: 360, y: 175 })
          .text("Loading...")
          .textFont({ size: '20px', weight: 'bold' })
          .textAlign("center")
          .textColor("#111")
          .unselectable();

    var background = Crafty.e("Background");
    var foreground = Crafty.e("Foreground");
  	Crafty.load(gameAssets, function(){
       setTimeout(function () {
         Crafty.scene('HomeScreen',
         { // debugging code
          raindrops_collected: 12,
          number_of_full_buckets: 20,
          apples_grown: 65,
          number_of_times_fed_tree: 30,
          poos_collected: 10,
          number_of_times_powerupSpeed: 20,
          number_of_times_powerupJump: 14,
          number_of_times_powerupRain: 35,
          finish_time: 85
         });
       }, 1000);
    },  function () {
      console.log("Crafty Load Issue");
    },  function (e) {
      console.log("Crafty Load Error", e);
    });
  });
