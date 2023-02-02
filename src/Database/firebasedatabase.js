import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"
import {onAuthStateChanged,getAuth,signOut} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"
import {getDatabase,ref,set,update,remove,get,child} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"
import {getStorage, ref as sRef,uploadBytesResumable,getDownloadURL} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js"

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
  const dbRef = ref(database);

  const imgDiv=document.querySelector('.profile_pic_div'),
   img=document.querySelector('#photo'),
   file=document.querySelector('#file'),
   uploadbtn=document.querySelector('#uploadbtn'),
   logout=document.querySelector('#logout'),
   editproform=document.getElementById('editproform');

  

  onAuthStateChanged(auth, (user) => {
      if (user) {

            get(child(dbRef, 'WebUsers/Login/' + user.uid+'/User_details')).then((snapshot) => {
              if (snapshot.exists())
              {
                var name=snapshot.val().Name;
                var mail=snapshot.val().Email;
                var phone_no=snapshot.val().Phone_no;
                var profile_img=snapshot.val().ImgUrl;

                document.getElementById('name').innerHTML=name;
                document.getElementById('d_email').innerHTML=mail;
                document.getElementById('d_phoneno').innerHTML="User ID : "+user.uid;
                
               if(profile_img!=null){
                  img.src=profile_img;
                }
              
                document.getElementById("fname").value=name;
                document.getElementById("email").value=mail;
                document.getElementById("phoneno").value=phone_no;
                document.getElementById("dob").value=snapshot.val().Date_of_Birth;
                document.getElementById("aadharno").value=snapshot.val().Aadharcard_no;
                document.getElementById("panno").value=snapshot.val().Pancard_no;
                document.getElementById("pincode").value=snapshot.val().Pincode;
                document.getElementById("industry").value=snapshot.val().Industry;
               document.getElementById("desi").value=snapshot.val().User_designation;
               document.getElementById("cname").value=snapshot.val().Company_name;
               document.getElementById("caddress").value=snapshot.val().Company_address;

               file.addEventListener('change',function(){

                  const choosedfile=this.files[0];    
            
                if(choosedfile){
                  const reader=new FileReader();
                  reader.addEventListener('load',function(){
                    img.setAttribute('src',reader.result);
                  });
                  reader.readAsDataURL(choosedfile);

                 
                 }
                
                  var imgname=choosedfile.name;
                  const metaData={
                    contentType:choosedfile.type
                  }
            
                  const storage=getStorage();
                  const storageRef=sRef(storage,"profiles/"+mail+"/"+imgname);
                  const UploadTask=uploadBytesResumable(storageRef,choosedfile,metaData);
            
                  UploadTask.on('state-changed',(snapshot)=>{
                  },
                  (error)=>{
                    alert(error);
                  },
                  ()=>{
                    getDownloadURL(UploadTask.snapshot.ref).then((downloadURL)=>{
                      console.log(downloadURL)

                      update(ref(database, 'WebUsers/Login/' + user.uid+'/User_details'), {
                        ImgUrl:downloadURL
                       });
                    });
                  }
                  );
                });

                // //retrieve profile image
                // get(child(dbRef, 'WebUsers/Login/' + user.uid+'/User_details')).then((snapshot) => {
                //   if (snapshot.exists()) {
                //     img.src=snapshot.val().ImgUrl;
                //   }
                // });
                

             editproform.addEventListener('submit',(e)=>{

                editproform.checkValidity();
                e.preventDefault();

                var fname=document.getElementById("fname").value;
                var email=document.getElementById("email").value;
                var phoneno=document.getElementById("phoneno").value;
                var dob=document.getElementById("dob").value;
                var aadharno=document.getElementById("aadharno").value;
                var panno=document.getElementById("panno").value;
                var pincode=document.getElementById("pincode").value;
                var industry=document.getElementById("industry").value;
                var desi=document.getElementById("desi").value;
                var cname=document.getElementById("cname").value;
                var caddress=document.getElementById("caddress").value;
              
                
                update(ref(database, 'WebUsers/Login/' + user.uid+'/User_details'), {
                  Name:fname,
                  Email:email,
                  Phone_no:phoneno,
                  Date_of_Birth:dob,
                  Pancard_no:panno,
                  Aadharcard_no:aadharno,
                  Pincode:pincode,
                  Industry:industry,
                  Company_name:cname,
                  User_designation:desi,
                  Company_address:caddress
                 });
                
                document.querySelector('.overlay').classList.add('hidden');
                document.querySelector('.edit_profile').classList.add('hidden');
    
               })

            }
                  
          else {
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
   

    })
   
  

    imgDiv.addEventListener('mouseenter',function(){
      uploadbtn.style.display="block";
    });

    imgDiv.addEventListener('mouseleave',function(){
      uploadbtn.style.display="none";
    });
    

    logout.addEventListener('click',(e)=>{

      e.preventDefault();

      signOut(auth).then(() => {
        window.location.replace('../index.html'); 
      }).catch((error) => {
        alert('something went wrong!!')
      })
    })

