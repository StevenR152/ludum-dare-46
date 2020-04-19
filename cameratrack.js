function makeCameraTrackEntity(entity, yoffset) {
    // Sets up the Camera Tracking to the player entity
    Crafty.viewport.clampToEntities = false;
    Crafty.viewport.scale(0.85);
    Crafty.one("CameraAnimationDone", function () {
        Crafty.viewport.follow(entity, 0, 0 + yoffset);
    });
    Crafty.viewport.centerOn(entity, 0);
}