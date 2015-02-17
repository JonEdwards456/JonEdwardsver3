// ANIMATE.CSS HOVER OR CLICK CODE, ADD ELEMENT AND ID TO LIST BELOW

$(document).ready(function() {
    
    animationHover('.animex', 'swing');
    animationHover('.animex2', 'rotateIn');             
    animationHover('.animex3', 'lightSpeedIn');
    animationHover('.animexlogo', 'rubberBand');
    
    function animationHover(element, animation) {
      element = $(element);
      element.hover(
        function() {
          element.addClass('animated ' + animation);
        },
        function(){
          //wait for animation to finish before removing classes
          window.setTimeout( function(){
            element.removeClass('animated ' + animation);
          }, 1000);
        }
      );
    };

    function animationClick(element, animation){
      element = $(element);
      element.click(
        function() {
          element.addClass('animated ' + animation);
          //wait for animation to finish before removing classes
          window.setTimeout( function(){
              element.removeClass('animated ' + animation);
          }, 2000);
        }
      );
    };
    
   
    
});


//SCRIPTS TO SHOW AND HIDE AN HTML ELEMENT

var hiddenBox = $( ".slideToggle" );

$( ".showButtonContainer button" ).on( "click", function( event ) {
  hiddenBox.slideDown("slow");
    $ (".hideButtonContainer").slideDown("slow");
    
});


$( ".hideButtonContainer button" ).on( "click", function( event ) {
  hiddenBox.slideUp("slow");
    $ (".hideButtonContainer").slideUp("slow");
});


//var hiddenBox = $( "#bannerMessage" );
//$( "#buttonContainer button" ).on( "click", function( event ) {
//  hiddenBox.slideDown("slow");
//});
//
//
//$( "#buttonContainer2 button" ).on( "click", function( event ) {
//  hiddenBox.slideUp("slow");
//});
