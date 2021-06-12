function myclick() {
  let x = prompt("Enter number of cards u want to make", "1");
  if (x != null) {
    let main = document.getElementById("card-insertion");
    let num = parseInt(x);
    let i,
      flag = 0;
    const red =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore";
    let div = [];
    for (i = 0; i < num; i++) {
      div.push(document.createElement("div"));
      div[i].setAttribute("class", "col");
      div.push(document.createElement("div"));
      div[i].setAttribute("class", "card h-100  ");
      const image = document.createElement("img");
      image.setAttribute("class", "card-img-top");
      image.src = "../product1.jpg";
      div[i].appendChild(image);
      let innerDiv = document.createElement("div");
      innerDiv.setAttribute("class", "card-body");
      let h4 = document.createElement("h4");
      h4.textContent = "Add Product";
      let p1 = document.createElement("p1");
      p1.setAttribute("class", "card-text");
      p1.textContent = red;
      innerDiv.appendChild(h4);
      innerDiv.appendChild(p1);
      div[i].appendChild(innerDiv);
      main.insertBefore(div[i], main.childNodes[0]);
      flag = 1;
      // main.appendChild(div[i]);
    }
    if (flag === 1) {
      let btn = document.getElementsByClassName("change-cursor");
      for (let i = 0; i < btn.length; i++) {
        btn[i].style.cssText =
          "cursor: pointer!important;pointer-events: auto!important;color:white!important ;text-decoration: underline !important;";
      }
    }
  }
}

