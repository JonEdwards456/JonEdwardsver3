var hiddenBox = $( "#bannerMessage" );
$( "#buttonContainer button" ).on( "click", function( event ) {
  hiddenBox.slideDown("slow");
});


$( "#buttonContainer2 button" ).on( "click", function( event ) {
  hiddenBox.slideUp("slow");
});
