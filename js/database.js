// const firebase = require("firebase");
var firebaseConfig = {
  apiKey: "AIzaSyDhnPRXeJJt8Dr3bCIq4Fj0kyGGr9ypb1g",
  authDomain: "personal-distributor-85015.firebaseapp.com",
  projectId: "personal-distributor-85015",
  storageBucket: "personal-distributor-85015.appspot.com",
  messagingSenderId: "274569371940",
  appId: "1:274569371940:web:d61fef1c8277d9ee2953b1",
  measurementId: "G-F3Q9ZT90FR",
};
firebase.initializeApp(firebaseConfig);
let i = 0;
var db = firebase.firestore();
let main = document.getElementById("card-show");
let div = [];
db.collection("Users").onSnapshot(
  { includeMetadataChanges: true },
  (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().Description}`);

      div.push(document.createElement("div"));
      div[i].setAttribute("class", "col");
      div[i].style.margin = "2vh 1vw";
      div[i].style.width = "auto";
      div.push(document.createElement("div"));
      div[i].setAttribute("class", "card h-100 w-20");
      const image = document.createElement("img");
      image.setAttribute("class", "card-img-top");
      image.style.height = "30vh";
      image.style.width = "15vw";
      image.style.margin = "auto";
      image.src = "../product1.jpg";

      div[i].appendChild(image);
      let innerDiv = document.createElement("div");
      innerDiv.setAttribute("class", "card-body");
      let h4 = document.createElement("h4");
      h4.textContent = doc.data().productName;
      let p1 = document.createElement("p1");
      p1.setAttribute("class", "card-text");
      p1.textContent = doc.data().productCompany;
      innerDiv.appendChild(h4);
      innerDiv.appendChild(p1);
      div[i].appendChild(innerDiv);
      main.insertBefore(div[i], main.childNodes[0]);
      // main.appendChild(div[i]);
      i++;
      //
      //
      //
      Desc = doc.data().Description;
      console.log(Desc);
    });
  }
);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// db.collection("Users")
//   .doc("Product1")
//   .onSnapshot((doc) => {
//     console.log("Current data: ", doc.data().Description);
//   });
