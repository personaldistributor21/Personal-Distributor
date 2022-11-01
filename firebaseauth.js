import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

    const firebaseConfig = {
      apiKey: "AIzaSyDhnPRXeJJt8Dr3bCIq4Fj0kyGGr9ypb1g",
      authDomain: "personal-distributor-85015.firebaseapp.com",
      databaseURL: "https://personal-distributor-85015-default-rtdb.firebaseio.com",
      projectId: "personal-distributor-85015",
      storageBucket: "personal-distributor-85015.appspot.com",
      messagingSenderId: "274569371940",
      appId: "1:274569371940:web:d61fef1c8277d9ee2953b1",
      measurementId: "G-F3Q9ZT90FR"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    document.getElementById('registerbtn').addEventListener('click',function(){


      var rmail=document.getElementById("rmail").value;
      var rpwd=document.getElementById("rpwd").value;
        console.log(rmail)
      createUserWithEmailAndPassword(auth, rmail, rpwd)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert('register successfull')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error.message);
  });
    })