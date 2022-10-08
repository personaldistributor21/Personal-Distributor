const api_url = "https://api.postalpincode.in/pincode/";
let pin=document.getElementById("pinSearch");
let pinshow=document.getElementById("pinShow");
pinshow.addEventListener("click",fetchpin);
function fetchpin(){
    if(pin.value.trim().length<=0){
        alert("please enter pin");
    }
    else{
        document.getElementById('loading').style.display = 'block';
        getapi(pin.value);
    }
}
async function getapi(pin) {
    
    const response = await fetch(api_url+pin);
    var data = await response.json();
    console.log(data);
    if (response) {
        document.getElementById('loading').style.display = 'none';
        if(data[0].Status==="Success"){
            show(data)
        }
        else{
            show(data)
        }
    }
    else{
        console.log("ERROR OCCURED");
    }
}

function show(data) {
    let tab=
    `<h2>${data[0].Message} </h2>`
    if(data[0].Status==="Success"){
    let locations="";
    data[0].PostOffice.forEach(element => {
        locations+= `<p>${element.Name}</p> &emsp;&nbsp;` 
    });
    let divLocation=document.createElement("div");
    divLocation.style.cssText="display:flex;color:blue;justify-content:center";
    divLocation.innerHTML=locations;
    
    document.getElementById("pincodeDetail").innerHTML = tab;
    document.getElementById("pincodeDetail").appendChild(divLocation)
    showcard();
    }
    else{
    document.getElementById("pincodeDetail").innerHTML = tab;
    document.getElementById("agent-cards").innerHTML="";
    }

}
function showcard(){
    let card=`<div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card h-100">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button><a href="/home-website/vendors.html?id=1">View Vendors</a></button>
        </div>
       
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a short card.</p>
          <button><a href="/home-website/vendors.html?id=1">View Vendors</a></button>
        </div>
       
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          <button><a href="/home-website/vendors.html?id=1">View Vendors</a></button>
        </div>
       
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button><a href="/home-website/vendors.html?id=1">View Vendors</a></button>
        </div>
      </div>
    </div>
  </div>`
  document.getElementById("agent-cards").innerHTML=card;
}