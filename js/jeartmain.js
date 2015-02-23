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


//SCRIPTS TO SHOW AND HIDE AN HTML ELEMENT Portfolio page

var hiddenBox = $( ".slideToggleDesign" );
var webHiddenBox = $(".slideToggleWeb");
var illusHiddenBox = $(".slideToggleIllus");

//Hide all toggle elements
$( ".slideToggleDesign,.slideToggleWeb, .slideToggleIllus,.illusHideButtonContainer,.designHideButtonContainer,.webHideButtonContainer" ).hide();


//design gallery show/hide functions
$( ".designShowButtonContainer button" ).on( "click", function( event ) {
  hiddenBox.slideDown("slow");
    $ (".designHideButtonContainer").slideDown("slow");
    
});
$( ".designHideButtonContainer button" ).on( "click", function( event ) {
  hiddenBox.slideUp("slow");
    $ (".designHideButtonContainer").slideUp("slow");
});

//web gallery show/hide functions
$( ".webShowButtonContainer button" ).on( "click", function( event ) {
  webHiddenBox.slideDown("slow");
    $ (".webHideButtonContainer").slideDown("slow");
    
});
$( ".webHideButtonContainer button" ).on( "click", function( event ) {
  webHiddenBox.slideUp("slow");
    $ (".webHideButtonContainer").slideUp("slow");
});

//Illustration gallery show/hide functions
$( ".illusShowButtonContainer button" ).on( "click", function( event ) {
  illusHiddenBox.slideDown("slow");
    $ (".illusHideButtonContainer").slideDown("slow");
    
});
$( ".illusHideButtonContainer button" ).on( "click", function( event ) {
  illusHiddenBox.slideUp("slow");
    $ (".illusHideButtonContainer").slideUp("slow");
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
