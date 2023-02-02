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

  const picfileInput = document.querySelector('#pic'),
  aadharfileInput = document.querySelector('#aadhar'),
  panfileInput = document.querySelector('#pan'),
  gstfileInput = document.querySelector('#gst'),
  bankingfileInput = document.querySelector('#banking'),
  itrfileInput = document.querySelector('#itr'),
  addressfileInput = document.querySelector('#address_proof'),
  picupload_btn=document.getElementById('pic_upload'),
  aadharupload_btn=document.getElementById('aadhar_upload'),
  panupload_btn=document.getElementById('pan_upload'),
  gstupload_btn=document.getElementById('gst_upload'),
  bankingupload_btn=document.getElementById('banking_upload'),
  itrupload_btn=document.getElementById('itr_upload'),
  addressupload_btn=document.getElementById('address_upload'),
  pic_view=document.getElementById('pic_view'),
  aadhar_view=document.getElementById('aadhar_view'),
  pan_view=document.getElementById('pan_view'),
  gst_view=document.getElementById('gst_view'),
  banking_view=document.getElementById('banking_view'),
  itr_view=document.getElementById('itr_view'),
  addressproof_view=document.getElementById('addressproof_view'),
  documentform=document.getElementById('doc_form');
   
  onAuthStateChanged(auth, (user) => {
    if (user) 
    {

        get(child(dbRef, 'WebUsers/Login/' + user.uid+'/Insurance_documents')).then((snapshot) => {
            if (snapshot.exists())
            {

             if(snapshot.val().Photo_URL!=null){
                picfileInput.style.display="none";
                picupload_btn.style.backgroundColor='red';
                picupload_btn.innerHTML='Delete';
                pic_view.style.display='block';
                pic_view.href=snapshot.val().Photo_URL;
             }
             if(snapshot.val().Aadharcard_URL!=null){
                aadharfileInput.style.display="none";
                aadharupload_btn.style.backgroundColor='red';
                aadharupload_btn.innerHTML='Delete';
               aadhar_view.style.display='block';
               aadhar_view.href=snapshot.val().Aadharcard_URL;
             }
             if(snapshot.val().Pancard_URL!=null){
                panfileInput.style.display="none";
                panupload_btn.style.backgroundColor='red';
                panupload_btn.innerHTML='Delete';
                pan_view.style.display='block';
                pan_view.href=snapshot.val().Pancard_URL;
             }
             if(snapshot.val().GST_URL!=null){
                gstfileInput.style.display="none";
                gstupload_btn.style.backgroundColor='red';
                gstupload_btn.innerHTML='Delete';
                gst_view.style.display='block';
                gst_view.href=snapshot.val().GST_URL;
             }
              if(snapshot.val().Banking_URL!=null){
                bankingfileInput.style.display="none";
                bankingupload_btn.style.backgroundColor='red';
                bankingupload_btn.innerHTML='Delete';
                banking_view.style.display='block';
                banking_view.href=snapshot.val().Banking_URL;
             }
             if(snapshot.val().ITR_URL!=null){
                itrfileInput.style.display="none";
                itrupload_btn.style.backgroundColor='red';
                itrupload_btn.innerHTML='Delete';
                itr_view.style.display='block';
                itr_view.href=snapshot.val().ITR_URL;
             }
              if(snapshot.val().Addressproof_URL!=null){
                addressfileInput.style.display="none";
                addressupload_btn.style.backgroundColor='red';
                addressupload_btn.innerHTML='Delete';
                addressproof_view.style.display='block';
                addressproof_view.href=snapshot.val().Addressproof_URL;
             }  
               document.getElementById("submitbtn").style.display="none"; 
               document.getElementById("text").style.display="none"; 
            }
        })   

        get(child(dbRef, 'WebUsers/Login/' + user.uid+'/User_details')).then((snapshot) => {
            if (snapshot.exists())
            {
                var mail=snapshot.val().Email;

         
                picfileInput.addEventListener('change',function(){

                    let file = this.files[0];
                    let fileName = file.name;
        
                    const metaData={
                        contentType:file.type
                      }
                      const storage=getStorage();
                      const storageRef=sRef(storage,"Insurance_documents/"+mail+"/photo/"+fileName);
                      const UploadTask=uploadBytesResumable(storageRef,file,metaData);
                
                      UploadTask.on('state-changed',(snapshot)=>{

                        picfileInput.style.display="none";
                        pic_view.style.display='block';
                        pic_view.innerHTML=fileName;
                        picupload_btn.style.backgroundColor='green';
                        picupload_btn.innerHTML='Uploaded';
                      },
                      (error)=>{
                        alert(error);
                      },
                      ()=>{
                        getDownloadURL(UploadTask.snapshot.ref).then((downloadURL)=>{
                          console.log(downloadURL)

                       documentform.addEventListener('submit', (e) =>{ 
                            e.preventDefault();

                          update(ref(database, 'WebUsers/Login/' + user.uid+'/Insurance_documents'), {
                            Photo_URL:downloadURL
                           })  
                           
                           alert("Data submitted successfully");
                        })
                      })
                    })
                })
                    aadharfileInput.addEventListener('change',function(){

                        let file = this.files[0];
                        let fileName = file.name;
            
                        const metaData={
                            contentType:file.type
                          }
                          const storage=getStorage();
                          const storageRef=sRef(storage,"Insurance_documents/"+mail+"/Aadhar/"+fileName);
                          const UploadTask=uploadBytesResumable(storageRef,file,metaData);
                    
                          UploadTask.on('state-changed',(snapshot)=>{

                                aadharfileInput.style.display="none";
                                aadhar_view.style.display='block';
                                aadhar_view.innerHTML=fileName;
                               aadharupload_btn.style.backgroundColor='green';
                               aadharupload_btn.innerHTML='Uploaded';
                          },
                          (error)=>{
                            alert(error);
                          },
                          ()=>{
                            getDownloadURL(UploadTask.snapshot.ref).then((downloadURL)=>{
                              console.log(downloadURL)

                              documentform.addEventListener('submit', (e) =>{ 
                                e.preventDefault();
    
                              update(ref(database, 'WebUsers/Login/' + user.uid+'/Insurance_documents'), {
                                Aadharcard_URL:downloadURL
                               })
                               
                            })
                            })
                          })
                        })


                        panfileInput.addEventListener('change',function(){

                            let file = this.files[0];
                            let fileName = file.name;
                
                            const metaData={
                                contentType:file.type
                              }
                              const storage=getStorage();
                              const storageRef=sRef(storage,"Insurance_documents/"+mail+"/Pancard/"+fileName);
                              const UploadTask=uploadBytesResumable(storageRef,file,metaData);
                        
                              UploadTask.on('state-changed',(snapshot)=>{

                                panfileInput.style.display="none";
                                panupload_btn.style.backgroundColor='green';
                                panupload_btn.innerHTML='Uploaded';
                                pan_view.style.display='block';
                                pan_view.innerHTML=fileName;
                              },
                              (error)=>{
                                alert(error);
                              },
                              ()=>{
                                getDownloadURL(UploadTask.snapshot.ref).then((downloadURL)=>{
                                  console.log(downloadURL)

                                  documentform.addEventListener('submit', (e) =>{ 
                                    e.preventDefault();    
                
                                  update(ref(database, 'WebUsers/Login/' + user.uid+'/Insurance_documents'), {
                                    Pancard_URL:downloadURL
                                   });
                
                                })
                            })
                              })
                            })


                            gstfileInput.addEventListener('change',function(){

                                let file = this.files[0];
                                let fileName = file.name;
                    
                                const metaData={
                                    contentType:file.type
                                  }
                                  const storage=getStorage();
                                  const storageRef=sRef(storage,"Insurance_documents/"+mail+"/GST/"+fileName);
                                  const UploadTask=uploadBytesResumable(storageRef,file,metaData);
                            
                                  UploadTask.on('state-changed',(snapshot)=>{

                                    gstfileInput.style.display="none";
                                    gstupload_btn.style.backgroundColor='green';
                                    gstupload_btn.innerHTML='Uploaded';
                                    gst_view.style.display='block';
                                    gst_view.innerHTML=fileName;
                                  },
                                  (error)=>{
                                    alert(error);
                                  },
                                  ()=>{
                                    getDownloadURL(UploadTask.snapshot.ref).then((downloadURL)=>{
                                      console.log(downloadURL)
                    
                                      documentform.addEventListener('submit', (e) =>{ 
                                        e.preventDefault();
            
                                      update(ref(database, 'WebUsers/Login/' + user.uid+'/Insurance_documents'), {
                                        GST_URL:downloadURL
                                       });
                                    })
                                    })
                                  })
                                })

                                bankingfileInput.addEventListener('change',function(){

                                    let file = this.files[0];
                                    let fileName = file.name;
                        
                                    const metaData={
                                        contentType:file.type
                                      }
                                      const storage=getStorage();
                                      const storageRef=sRef(storage,"Insurance_documents/"+mail+"/Banking/"+fileName);
                                      const UploadTask=uploadBytesResumable(storageRef,file,metaData);
                                
                                      UploadTask.on('state-changed',(snapshot)=>{

                                        bankingfileInput.style.display="none";
                                        bankingupload_btn.style.backgroundColor='green';
                                        bankingupload_btn.innerHTML='Uploaded';
                                        banking_view.style.display='block';
                                        banking_view.innerHTML=fileName;
                                      },
                                      (error)=>{
                                        alert(error);
                                      },
                                      ()=>{
                                        getDownloadURL(UploadTask.snapshot.ref).then((downloadURL)=>{
                                          console.log(downloadURL)
                        
                                          documentform.addEventListener('submit', (e) =>{ 
                                            e.preventDefault();
                
                                          update(ref(database, 'WebUsers/Login/' + user.uid+'/Insurance_documents'), {
                                            Banking_URL:downloadURL
                                           });
                        
                                        }) 
                                        })
                                      })
                                    })

                                    itrfileInput.addEventListener('change',function(){

                                        let file = this.files[0];
                                        let fileName = file.name;
                            
                                        const metaData={
                                            contentType:file.type
                                          }
                                          const storage=getStorage();
                                          const storageRef=sRef(storage,"Insurance_documents/"+mail+"/ITR/"+fileName);
                                          const UploadTask=uploadBytesResumable(storageRef,file,metaData);
                                    
                                          UploadTask.on('state-changed',(snapshot)=>{
                                            itrfileInput.style.display="none";
                                            itrupload_btn.style.backgroundColor='green';
                                            itrupload_btn.innerHTML='Uploaded';
                                            itr_view.style.display='block';
                                            itr_view.innerHTML=fileName;

                                          },
                                          (error)=>{
                                            alert(error);
                                          },
                                          ()=>{
                                            getDownloadURL(UploadTask.snapshot.ref).then((downloadURL)=>{
                                              console.log(downloadURL)
                                              documentform.addEventListener('submit', (e) =>{ 
                                                e.preventDefault();
                    
                                              update(ref(database, 'WebUsers/Login/' + user.uid+'/Insurance_documentss'), {
                                                ITR_URL:downloadURL
                                               });
                            
                                            })
                                            })
                                          })
                                        })

                                        addressfileInput.addEventListener('change',function(){

                                            let file = this.files[0];
                                            let fileName = file.name;
                                
                                            const metaData={
                                                contentType:file.type
                                              }
                                              const storage=getStorage();
                                              const storageRef=sRef(storage,"Insurance_documents/"+mail+"/Address/"+fileName);
                                              const UploadTask=uploadBytesResumable(storageRef,file,metaData);
                                        
                                              UploadTask.on('state-changed',(snapshot)=>{

                                                addressfileInput.style.display="none";
                                                addressupload_btn.style.backgroundColor='green';
                                                addressupload_btn.innerHTML='Uploaded';
                                                addressproof_view.style.display='block';
                                                addressproof_view.innerHTML=fileName;
                                              },
                                              (error)=>{
                                                alert(error);
                                              },
                                              ()=>{
                                                getDownloadURL(UploadTask.snapshot.ref).then((downloadURL)=>{
                                                  console.log(downloadURL)

                                                  documentform.addEventListener('submit', (e) =>{ 
                                                    e.preventDefault();
                        
                                                  update(ref(database, 'WebUsers/Login/' + user.uid+'/Insurance_documents'), {
                                                    Addressproof_URL:downloadURL
                                                   });
                                
                                                })
                                                })
                                              })
                                            })
        }
    })

       console.log('User is signed in');
        // ...
    } else
    {
        console.log('User is signed out');
        // ...
    }
});