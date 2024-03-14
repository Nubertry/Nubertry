function prevPage() {
if (document.getElementById("papar2").style.display == 'block') {
document.getElementById("papar1").style.display = 'block'
document.getElementById("papar2").style.display = 'none'
document.getElementById("moveFoe").style.display = 'block'
document.getElementById("moveFor").style.display = 'none'
  }
}
function prevPagr() {
if (document.getElementById("papar3").style.display == 'block') {
document.getElementById("papar3").style.display = 'none'
document.getElementById("papar2").style.display = 'block'
document.getElementById("moveFor").style.display = 'block'
document.getElementById("moveFot").style.display = 'none'
document.getElementById("moveBace").style.display = 'block'
document.getElementById("moveBacr").style.display = 'none'
  }
}
function prevPagt() {
if (document.getElementById("papar4").style.display == 'block') {
document.getElementById("papar4").style.display = 'none'
document.getElementById("papar3").style.display = 'block'
document.getElementById("moveFot").style.display = 'block'
document.getElementById("moveFoy").style.display = 'none'
document.getElementById("moveBacr").style.display = 'block'
document.getElementById("moveBact").style.display = 'none'
  }
}
function prevPagy() {
if (document.getElementById("papar5").style.display == 'block') {
document.getElementById("papar5").style.display = 'none'
document.getElementById("papar4").style.display = 'block'
document.getElementById("moveFoy").style.display = 'block'
document.getElementById("moveFou").style.display = 'none'
document.getElementById("moveBact").style.display = 'block'
document.getElementById("moveBacy").style.display = 'none'
  }
}
function prevPagu() {
if (document.getElementById("papar6").style.display == 'block') {
document.getElementById("papar6").style.display = 'none'
document.getElementById("papar5").style.display = 'block'
document.getElementById("moveFou").style.display = 'block'

document.getElementById("moveBacy").style.display = 'block'
document.getElementById("moveBacu").style.display = 'none'
  }
}

function nextPage() {
//Pg.1
//Pg.2
if (document.getElementById("papar1").style.display == 'block') {
document.getElementById("papar1").style.display = 'none'
document.getElementById("papar2").style.display = 'block'
document.getElementById("moveFoe").style.display = 'none'
document.getElementById("moveFor").style.display = 'block'
  }
}
//Pg.3
function nextPagr() {
if (document.getElementById("papar2").style.display == 'block') {
document.getElementById("papar2").style.display = 'none'
document.getElementById("papar3").style.display = 'block'
document.getElementById("moveFor").style.display = 'none'
document.getElementById("moveFot").style.display = 'block'
document.getElementById("moveBacr").style.display = 'block'
document.getElementById("moveBace").style.display = 'none'
  }
}
//Pg.4
function nextPagt() {
if (document.getElementById("papar3").style.display == 'block') {
document.getElementById("papar3").style.display = 'none'
document.getElementById("papar4").style.display = 'block'
document.getElementById("moveFot").style.display = 'none'
document.getElementById("moveFoy").style.display = 'block'
document.getElementById("moveBacr").style.display = 'none'
document.getElementById("moveBact").style.display = 'block'
  }
}
//Pg.5
function nextPagy() {
if (document.getElementById("papar4").style.display == 'block') {
document.getElementById("papar4").style.display = 'none'
document.getElementById("papar5").style.display = 'block'
document.getElementById("moveFoy").style.display = 'none'
document.getElementById("moveFou").style.display = 'block'
document.getElementById("moveBact").style.display = 'none'
document.getElementById("moveBacy").style.display = 'block'
  }
}
//Pg.6
function nextPagu() {
if (document.getElementById("papar5").style.display == 'block') {
document.getElementById("papar5").style.display = 'none'
document.getElementById("papar6").style.display = 'block'
document.getElementById("moveBacy").style.display = 'none'
document.getElementById("moveBacu").style.display = 'block'
  }
}