// var tombolmenu = document.getElementsByClassName('tombol-menu')[0];
// var menu = document.getElementsByClassName('menu')[0];

// tombolmenu.Onclick = function() {
//     menu.classList.toggle('active');
// }

// menu.Onclick = function() {
//     menu.classList.toggle('active');
// }

function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }