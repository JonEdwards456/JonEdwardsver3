/* <![CDATA[ */
function blankTargetFix(){
  if(!document.getElementsByTagName){
    return;
  }

  var anchors = document.getElementsByTagName("a");

  for(var i = 0; i < anchors.length; i++){
    var anchor = anchors[i];

    if(anchor.getAttribute("href") && anchor.getAttribute("rel") == "external"){
      anchor.target = "_blank";
    }
  }
}
/* ]]> */

            Cufon.replace('.arial', { fontFamily: 'arial',hover: true });
			Cufon.replace('.gradient-arial', { color: '-linear-gradient(#E5E6E6, #CCCDCE)', fontFamily: 'arial' });
			Cufon.replace('.gradient-triple-arial', { color: '-linear-gradient(#E5E6E6, #CCCDCE, #929597, rgb(0, 0, 0))', fontFamily: 'arial' });
			Cufon.replace('.text-shaddow-arial', { textShadow: '1px 1px #FFF', fontFamily: 'arial' });
			Cufon.replace('.text-shaddow2-arial', { textShadow: '1px 1px #000', fontFamily: 'arial' });