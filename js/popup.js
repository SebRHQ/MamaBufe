// BEJELENTKEZÉS  BEJELENTKEZÉS  BEJELENTKEZÉS  BEJELENTKEZÉS  BEJELENTKEZÉS  BEJELENTKEZÉS  BEJELENTKEZÉS  BEJELENTKEZÉS  BEJELENTKEZÉS  BEJELENTKEZÉS  BEJELENTKEZÉS  BEJELENTKEZÉS 

var popup = document.getElementById("authLogin");
var btn = document.getElementsByClassName("authGomb")[0];
var btn3 = document.getElementsByClassName("authGomb")[1];
var span = document.getElementsByClassName("bezaras")[0];
    btn.onclick = function() {
        popup2.style.display = "none";
        popup.style.display = "block";
    }
    btn3.onclick = function() {
        popup2.style.display = "none";
        popup.style.display = "block";
    }
    span.onclick = function() {
        popup.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == popup) {
        popup.style.display = "none";
      }
    }
    
// REGISZTÁCIÓ  REGISZTÁCIÓ   REGISZTÁCIÓ   REGISZTÁCIÓ   REGISZTÁCIÓ   REGISZTÁCIÓ   REGISZTÁCIÓ   REGISZTÁCIÓ   REGISZTÁCIÓ   REGISZTÁCIÓ   REGISZTÁCIÓ   REGISZTÁCIÓ   REGISZTÁCIÓ  


var popup2 = document.getElementById("authRegister");
var btn2 = document.getElementsByClassName("authRegGomb")[0];
var span2 = document.getElementsByClassName("bezaras")[1];
    btn2.onclick = function() {
      popup.style.display = "none";
      popup2.style.display = "block";
    }
    span2.onclick = function() {
        popup2.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == popup2) {
        popup2.style.display = "none";
      }
    }