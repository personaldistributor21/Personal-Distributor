


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

function optioncolor(){
 document.querySelector('.select').style.color="black";
}
rm=document.getElementById("rmail");
rpwd=document.getElementById("rpwd");
rcn=document.getElementById("cpname");
rcd=document.getElementById("cpdesi");
lm=document.getElementById("lmail");
lpwd=document.getElementById("lpwd");
terms=document.getElementById("t&c");
function register_form(){
   if(rm.value != "" && rpwd.value != "" && rcn.value != "" && rcd.value != "" && terms.checked == true){
     alert("Register successfully")
   }
   else{
    // alert("please fill all the field");
   }
   
}
function login_form(){
    
    
    if(lm.value == rm.value && lpwd.value == rpwd.value){
       
    }
    // else{
    //     alert("wrong Email ID/Password");
    //    }
    
    }
    