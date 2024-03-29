
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail,onAuthStateChanged,getAuth} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"
import {getDatabase,ref,set,update,get,child} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"


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
  
    // // Initialize Firebase
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
      var user_designation=document.getElementById("desi").value;
  
      createUserWithEmailAndPassword(auth, rmail, rpwd)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          
          // ... user.uid
          set(ref(database, 'WebUsers/Login/' + user.uid+'/User_details'), {
              Name:rname,
              Email: rmail,
              Industry:industry,
              Company_name:company_name,
              User_designation:user_designation,
          })
              .then(() => {

                Email.send({
		
                  Host: "smtp.elasticemail.com",
                  Username: "contact@personaldistributor.com",
                  Password: "EE644198A7229A226A4951441B284B9E6E10",
                  To: rmail,
                  From: "personaldistributor21@gmail.com",
                  Subject: "Welcome to Personal Distributor",
                  Body: "Congratulations on becoming a personal distributor!<br>We support those who believe in quality and want to help the world with their unique products.welcome to the community where thousands of smart entrepreneurs like yourself help each other build their dreams.<br>The path is not easy and the struggle is real.But we are in it together.So don’t hesitate to ask for help<br>The world needs you!<br>Good Luck!",
                })
                  .then(message => console.log(message));
              
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

    e.preventDefault();
    document.getElementById('login').checkValidity();
    

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
                        onAuthStateChanged(auth,(user) => {
                          if(user) {
                            window.location.replace('src/user_profile.html'); 
                          }
                        });
                      
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
        
        //forgot password code

       const resetpwdform=document.getElementById('resetpwdform');

       resetpwdform.addEventListener('submit', (e) => {
    
            resetpwdform.checkValidity();
            e.preventDefault();

            const resetemail=document.getElementById('resetemail').value;

            sendPasswordResetEmail(auth, resetemail)
            .then(() => {
              // Password reset email sent!
              alert('password reset email sent.please check your inbox')
             
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
              alert('Incorrect email-address')
            });


 })

    

          

