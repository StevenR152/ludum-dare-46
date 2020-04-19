document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
           Crafty.trigger("KeyDown", {"eventName": "KeyDown", "key":37, "mobile": "SwipeEvent", "originalEvent": "KeyboardEvent", "which": 0})
        } else {
           Crafty.trigger("KeyDown", {"eventName": "KeyDown", "key":39, "mobile": "SwipeEvent", "originalEvent": "KeyboardEvent", "which": 0})
        }                       
    } else {
        if ( yDiff > 0 ) {    
           Crafty.trigger("KeyDown", {"eventName": "KeyDown", "key":38, "mobile": "SwipeEvent", "originalEvent": "KeyboardEvent", "which": 0})
        } else { 
           Crafty.trigger("KeyDown", {"eventName": "KeyDown", "key":40, "mobile": "SwipeEvent", "originalEvent": "KeyboardEvent", "which": 0})
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};