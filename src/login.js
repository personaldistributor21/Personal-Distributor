

var x = document.getElementById("login");
  var y = document.getElementById("register");
  var z = document.getElementById("btn");
  
  function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
  }
  function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
  }

  function changecolor(){
 document.querySelector('.select_i').style.color="black";
}
function optioncolor(){
  document.querySelector('.select_d').style.color="black";
}