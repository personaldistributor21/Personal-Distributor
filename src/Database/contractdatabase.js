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
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const database = getDatabase(app);
  const dbRef = ref(database);


const fileInput = document.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadedArea = document.querySelector(".uploaded-area"),
contractform=document.getElementById('contract_form'),
detailform=document.getElementById('detail_form');

var day=document.getElementById("day_dd");
var week=document.getElementById("week_dd");
let year=document.getElementById("year_dd");


let daydd,weekdd,yeardd;
day.addEventListener("change",(e)=>{
  daydd=day.value;
  console.log(daydd);
})
  week.addEventListener("change",(e)=>{
    weekdd=week.value;
  })
    year.addEventListener("change",(e)=>{
      yeardd=year.value;
    })
for(var i=1;i<=31;i++){
let dateOption = document.createElement('option'); 
    dateOption.text = i;  
    dateOption.value = i;     
    day.add(dateOption);   
}
 
for(var i=1;i<=52;i++){
  let dateOption = document.createElement('option'); 
      dateOption.text = "week "+i;  
      dateOption.value = i;     
      week.add(dateOption);   
  }

  for(var i=new Date().getFullYear();i<=2060;i++){
    let dateOption = document.createElement('option'); 
        dateOption.text = i;  
        dateOption.value = i;     
        year.add(dateOption);   
}

onAuthStateChanged(auth, (user) => {
    if (user) 
    {

      get(child(dbRef, 'WebUsers/Login/' + user.uid+'/Contract')).then((snapshot) => {
        if (snapshot.exists())
        {

          contractform.style.display="none";
          detailform.style.display="block";

          document.getElementById('type_contract').innerHTML="Conract type : "+snapshot.val().Contract_type;
          document.getElementById('service_duration').innerHTML="sevice duration : "+snapshot.val().Service_duration;
          document.getElementById('contract_end').innerHTML="Contract end date : "+snapshot.val().Conract_end;
          document.getElementById('contract_start').innerHTML="Contract start date : "+snapshot.val().Conract_start;
          document.getElementById('contract_pdf_name').innerHTML="Contract file : "+snapshot.val().Contract_file_name;
          
        }})
            
        get(child(dbRef, 'WebUsers/Login/' + user.uid+'/User_details')).then((snapshot) => {
            if (snapshot.exists())
            {
                var mail=snapshot.val().Email;

         
               
          fileInput.onchange = function(){

            let file = this.files[0];
            if(file){
              let fileName = file.name;
              if(fileName.length >= 12){
                let splitName = fileName.split('.');
                fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
              }

              const storage=getStorage();
              const storageRef=sRef(storage,"contract/"+mail+"/"+fileName);
                const metaData={
                    contentType:file.type
                  }
                const UploadTask=uploadBytesResumable(storageRef,file,metaData);

                UploadTask.on('state-changed',(snapshot)=>{

                  document.querySelector('.wrapper').style.display = "none";
                  

                    var loaded=snapshot.bytesTransferred;
                    var total=snapshot.totalBytes;

                    let fileLoaded = Math.floor(loaded / total) * 100;
                   
                    let fileTotal = Math.floor(total / 1000);
                    let fileSize;
                    (fileTotal < 1024) ? fileSize = fileTotal + " KB" : fileSize = (loaded / (1024*1024)).toFixed(2) + " MB";
                    let progressHTML = `<li class="row">
                                          <div class="content">
                                          <i class="fas fa-file-alt"></i>
                                            <div class="details">
                                              <span class="name">${fileName}</span>
                                              <span class="size">${fileSize}</span>
                                              <span class="dot-pulse"></span>
                                            </div>
                                          </div>
                                        </li>`;
                    uploadedArea.classList.add("onprogress");
                    progressArea.innerHTML = progressHTML;
                    if(loaded == total){
                      progressArea.innerHTML = "";
                      let uploadedHTML = `<li class="row">
                                            <div class="content upload">
                                              <i class="fas fa-file-alt"></i>
                                              <div class="details">
                                                <span class="name">${fileName}</span>
                                                <span class="size">${fileSize}</span>
                                                <span style="font-size:18px"><i class="fas fa-check"></i> Uploaded successfully</span>
                                              </div>
                                            </div>
                                            <i class="fas fa-trash-alt"></i>
                                          </li>`;
                      uploadedArea.classList.remove("onprogress");
                      uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
                      
                    }
                },(error)=>{
                    alert(error);
                    console.log(error);
                    },()=>{
                        getDownloadURL(UploadTask.snapshot.ref).then((downloadURL)=>{
                            console.log(downloadURL)
                            
                         
                            contractform.addEventListener('submit', (e) => {
    
                              
                              e.preventDefault();
                               
                              var contracttype=document.getElementById('contact_type').value;
                              var duration_service=daydd+","+weekdd+" week,"+yeardd;
                              console.log(duration_service);
                              var contractend=document.getElementById('end_contract').value;
                              var contractstart=document.getElementById('start_contract').value;

                              update(ref(database, 'WebUsers/Login/' + user.uid+'/Contract'), {
                                Contract_type:contracttype,
                                Service_duration:duration_service,
                                Conract_end:contractend,
                                Conract_start:contractstart,
                                Contract_file_name:fileName,
                                Contract_pdf:downloadURL
                               })
                               .then(() => {
                                 alert('data submitted successfully');

                                 contractform.style.display="none";
                                 detailform.style.display="block";

                               })

                            })
                           
                          });
                    }
                
                
                )
          
          
        }
      }

            }
        })

        console.log('User is signed in');
        // ...
      } else {
        console.log('User is signed out');
        // ...
      }
});