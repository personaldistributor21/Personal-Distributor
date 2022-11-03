import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword ,signOut,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import {getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

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
    const auth = getAuth();
    const database = getDatabase(app);

document.getElementById('register').addEventListener('submit',(e) => {

    document.getElementById('register').checkValidity();
    e.preventDefault();


    //   e.preventDefault();

      var rmail=document.getElementById("rmail").value;
      var rpwd=document.getElementById("rpwd").value;
      var rname=document.getElementById("rname").value;
      var industry=document.getElementById("industry").value;
      var company_name=document.getElementById("cpname").value;
      var company_designation=document.getElementById("desi").value;
      
  
      createUserWithEmailAndPassword(auth, rmail, rpwd)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ... user.uid
          set(ref(database, 'WebUsers/Login/' + user.uid), {
              Name:rname,
              Email: rmail,
              Industry:industry,
              Company_name:company_name,
              Company_designation:company_designation,
          })
              .then(() => {
                  // Data saved successfully!
                  alert('Register successfully');
                  window.location='./login.html';
  
              })
              .catch((error) => {
                  // The write failed...
                  alert(error);
              });
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          alert('Email is already exists')
      });
    })


document.getElementById('login').addEventListener('submit', (e) => {


    document.getElementById('login').checkValidity();
    e.preventDefault();

    var lmail=document.getElementById("lmail").value;
    var lpwd=document.getElementById("lpwd").value;

    signInWithEmailAndPassword(auth, lmail, lpwd)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...

                // save log in details into real time database
                
                update(ref(database, 'WebUsers/Login/' + user.uid), {
                    last_login:Date.now()
                })
                    .then(() => {
                        // Data saved successfully!
                        window.location = 'src/user_profile.html';
                    })
                    .catch((error) => {
                        // The write failed...
                        alert("Incorrect Email or password");
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("Incorrect Email or password");
            });
        })
        
    // function logoutuser(){

    //     e.preventDefault();

    //     signOut(auth).then(() => {
    //         // Sign-out successful.
    //        window.location = './login.html';
    //       }).catch((error) => {
    //         console.log(error);
    //       });
    // }
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //           // User is signed in, see docs for a list of available properties
    //           // https://firebase.google.com/docs/reference/js/firebase.User
    //           console.log('User is signed in');
    //           // ...
    //         } else {
    //           console.log('User is signed out');
    //           // ...
    //         }
    //       });

          

