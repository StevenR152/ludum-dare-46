function makeCameraTrackEntity(entity, yoffset) {
    // Sets up the Camera Tracking to the player entity
    Crafty.viewport.clampToEntities = false;
<<<<<<< HEAD
    Crafty.viewport.scale(1.0);
=======
    Crafty.viewport.scale(1);
>>>>>>> b80e0dbec1a963ae70af3455b73382f6b8c8a527
    Crafty.one("CameraAnimationDone", function () {
        Crafty.viewport.follow(entity, 0, 0 + yoffset);
    });
    Crafty.viewport.centerOn(entity, 0);
}
