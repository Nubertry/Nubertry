var bokPag = 0;
console.log(bokPag);
function prevPage() {
  if (bokPag > 0) {
    bokPag--;
  }
}
function nextPage() {
  if (bokPag<5) {
    bokPag++;
  }
}
  if (bokPag==0) {
document.getElementById("papar1").style.display = 'block'
document.getElementById("papar2").style.display = 'none'
document.getElementById("papar3").style.display = 'none'
document.getElementById("papar4").style.display = 'none'
document.getElementById("papar5").style.display = 'none'
document.getElementById("papar6").style.display = 'none'
  }
  if (bokPag==1) {
document.getElementById("papar1").style.display = 'none'
document.getElementById("papar2").style.display = 'block'
document.getElementById("papar3").style.display = 'none'
document.getElementById("papar4").style.display = 'none'
document.getElementById("papar5").style.display = 'none'
document.getElementById("papar6").style.display = 'none'
  }
  if (bokPag==2) {
document.getElementById("papar1").style.display = 'none'
document.getElementById("papar2").style.display = 'none'
document.getElementById("papar3").style.display = 'block'
document.getElementById("papar4").style.display = 'none'
document.getElementById("papar5").style.display = 'none'
document.getElementById("papar6").style.display = 'none'
  }
  if (bokPag==3) {
document.getElementById("papar1").style.display = 'none'
document.getElementById("papar2").style.display = 'none'
document.getElementById("papar3").style.display = 'none'
document.getElementById("papar4").style.display = 'block'
document.getElementById("papar5").style.display = 'none'
document.getElementById("papar6").style.display = 'none'
  }
  if (bokPag==4) {
document.getElementById("papar1").style.display = 'none'
document.getElementById("papar2").style.display = 'none'
document.getElementById("papar3").style.display = 'none'
document.getElementById("papar4").style.display = 'none'
document.getElementById("papar5").style.display = 'block'
document.getElementById("papar6").style.display = 'none'
  }
  if (bokPag==5) {
document.getElementById("papar1").style.display = 'none'
document.getElementById("papar2").style.display = 'none'
document.getElementById("papar3").style.display = 'none'
document.getElementById("papar4").style.display = 'none'
document.getElementById("papar5").style.display = 'none'
document.getElementById("papar6").style.display = 'block'
  }