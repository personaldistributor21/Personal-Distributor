import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail,onAuthStateChanged,getAuth} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"
import {getDatabase,ref,set,update,get} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"

// import * as nodemailer from "./node_modules/nodemailer/lib/";
// import { google } from 'https://apis.google.com/js/api.js';

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
    

    // const CLIENT_ID='75902923737-36tqu151oa292kt4vlnm3ek8bhlvgalv.apps.googleusercontent.com'
    // const CLIENT_SECRET='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'
    // const REDIRECT_URI='https://developers.google.com/oauthplayground'
    // const REFRESH_TOKEN='1//0402ypgO-3NJxCgYIARAAGAQSNwF-L9IrhSJ2431zCAmP1ntrBECDc_2nf7gKBKJX4iHQzD9NSi8DJdKvRd4rChXBSIeomknqsPg'

    // const oauth2client=new OAuth2Client(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
    // oauth2client.setCredentials({refresh_token:REFRESH_TOKEN})


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

              //   async function sendMail(){

              //     try{
              
              //         const accessToken=await google.auth.OAuth2.getAccessToken()
              
              //         const transport=nodemailer.createTransport({
              //             service:'gmail',
              //             auth:{
              //                 type:'OAuth2',
              //                 user:'personaldistributor21@gmail.com',
              //                 clientId:CLIENT_ID,
              //                 clientSecret:CLIENT_SECRET,
              //                 refreshToken:REFRESH_TOKEN,
              //                 accessToken:accessToken
              //             }
              //         })
              
              //         const mailOptions={
              
              //             from:'personaldistributor21@gmail.com',
              //             to:rmail,
              //             subject:'Welocme to Personal Distributor',
              //             html:"<h2>Hello "+rname+"</h2><br>"
              //         }
              
              //         const result=await transport.sendMail(mailOptions)
              //         return result
              //     }
              //     catch(error){
              //         return error
              //     }
              // }
              
              // sendMail().then(result => console.log('email is sent',result))
              // .catch(error => console.log(error.message))
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
                            window.location = 'src/user_profile.html'; 
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

    // function logoutuser(){

    //     e.preventDefault();

    //     signOut(auth).then(() => {
    //         // Sign-out successful.
    //        window.location = './login.html';
    //       }).catch((error) => {
    //         console.log(error);
    //       });
    // }
    
    const dbRef = ref(database);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                get(child(dbRef, 'WebUsers/Login/' + user.uid)).then((snapshot) => {
                    if (snapshot.exists()) {
                      var name=snapshot.val().Name;
                      document.getElementById('name').innerHTML=name;
                    } else {
                      console.log("No data available");
                    }
                  }).catch((error) => {
                    console.error(error);
                  });
                  
              console.log('User is signed in');
              // ...
            } else {
              console.log('User is signed out');
              // ...
            }
          });

          

