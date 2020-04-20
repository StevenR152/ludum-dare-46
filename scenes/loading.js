Crafty.defineScene("Loading", function() {
    Crafty.background("#AAA");
    Crafty.e("2D, DOM, Text")
          .attr({ w: 200, h: 50, x: 360, y: 175 })
          .text("Loading...")
          .textFont({ size: '20px', weight: 'bold' })
          .textAlign("center")
          .textColor("#111");

    // Game Assets would be a list of images, but this tutorial doesn't use them.
    // var gameAssets = {};

    var background = Crafty.e("Background");
    var foreground = Crafty.e("Foreground");
  	Crafty.load(gameAssets, function(){
       setTimeout(function () {
         Crafty.scene('HomeScreen');
       }, 1000);
    },  function () {
      console.log("Crafty Load Issue");
    },  function (e) {
      console.log("Crafty Load Error", e);
    });
  });
