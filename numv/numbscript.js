function togamu() {
  document.getElementById('numbroom').style.display = 'block';
  var audio = document.getElementById("amend");
  audio.play();
  audio.loop=true;
  document.getElementById('muical').style.display = 'none';
  document.getElementById('alfy').style.display = 'block';
    let x = document.getElementById('funydog');
  let displaySetting = x.style.display;
  if (displaySetting == 'block') {
    x.style.display = 'none';
  }
  else {
    x.style.display = 'block';
  }
  $(document).mousemove(function(e) {
  $("#funydog").css({
    left: e.pageX,
    top: e.pageY+25 
  });
});
}
function togsc() {
var audio = document.getElementById("scary");
audio.play();
audio.loop=true;
document.getElementById('scalfy').style.display = 'block';
document.getElementById('flashy').style.display = 'block';
}