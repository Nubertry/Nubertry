var letters = 'uselessbuttonfunnymancodingretardhelpzebrawantkissjeffquintonxavier';

var myFuncCalls = 0;

function myFunction() {
  myFuncCalls++;
  alert("I have been called " + myFuncCalls + " times");
}
function uselessMessage(length) {
  let result = ' ';
  var lettersLength = letters.length;
  for (let i = 0; i < length; i++) {
    result += letters.charAt(Math.floor(Math.random() * lettersLength));
  }

  return result;
}
function beUseless() {
  myFuncCalls++;
  if (myFuncCalls <= 2) {
    alert(uselessMessage(9));
  } else {
    var coinside = Math.random();
    if (coinside <= 0.75) {
      alert(uselessMessage(9));
    } else {
      alert("The doors give secret to dog")
    }
  }
}
function beUseless2() {
  alert("identity theft funny");
}
function dogChase() {
  let x = document.getElementById('funydog');
  let displaySetting = x.style.display;
  if (displaySetting == 'block') {
    x.style.display = 'none';
  }
  else {
    x.style.display = 'block';
  }
  $(document).mousemove(function (e) {
    $("#funydog").css({
      left: e.pageX,
      top: e.pageY + 25
    });
  });
}
function rooPer() {
  var audi = document.getElementById("bloop");
  audi.loop = true
  if (audi.paused) {
    audi.play();
  }
  else {
    audi.pause();
  }
}
function doorOpen() {
  let sex = document.getElementById('funydog');
  let displaySetting = sex.style.display;
  if (displaySetting == 'none') {
    var audio = new Audio('Images/navtellclosedoor.mp3');
    audio.play();
    if (document.getElementById("dorr").src == "Images/door.png") {
      document.getElementById("dorr").src = "Images/door.png";
    }
    else {
      document.getElementById("dorr").src = "Images/navclosedoor.gif";
    }
    setTimeout(() => { document.getElementById("dorr").src = "Images/door.png"; }, 2000);
  }
  else {
    window.open('https://bertry.repl.co/numbed.html', '_blank');
  }
}
function naeDoor() {
  let ape = document.getElementById("knobb");
  let sex = document.getElementById('funydog');
  let displaySetting = sex.style.display;
  if (displaySetting == 'none') {
    if (ape.src == "Images/door.png") {
      ape.src = "Images/door.png";
    }
    else {
      ape.src = "Images/naenaedoor.png";
      setTimeout(() => { document.getElementById('naenae').style.display = 'block'; }, 2000);
      setTimeout(() => { document.getElementById('naenae').style.display = 'none'; }, 17000);
      setTimeout(() => { naenae.play(); }, 2000);
      setTimeout(() => { naenae.pause(); }, 17000);
    }
    setTimeout(() => { ape.src = "Images/door.png"; }, 1500);
  }
  else {
    window.open('https://bertry.repl.co/book.html', '_blank');
  }
}
function showIB() {
  let no = document.getElementById('IBCards');
  let displaySetting = no.style.display;
  if (displaySetting == 'flex') {
    no.style.display = 'none';
  }
  else {
    no.style.display = 'flex';
  }
}