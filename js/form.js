var obj1 = document.getElementById("objective_1");
var obj2 = document.getElementById("objective_2");
var obj3 = document.getElementById("objective_3");
var obj4 = document.getElementById("objective_4");
var obj5 = document.getElementById("objective_5");
var sub1 = document.getElementById("subjective_1");
var sub2 = document.getElementById("subjective_2");
var sub3 = document.getElementById("subjective_3");
var sub4 = document.getElementById("subjective_4");
var sub5 = document.getElementById("subjective_5");
var idArray=[obj1,obj2,obj3,obj4,obj5,sub1,sub2,sub3,sub4,sub5];
idArray.forEach((item) => {
  console.log(item);
  item.addEventListener("click", function () {
    filterFormData(item.id);
  });
});
var mainContent = document.getElementById("mainContent");
var formContent = document.getElementById("formContent");
let arr;
function filterFormData(id) {
  if (id == "objective_5") {
    arr = [
      {
        question:
          "the main written part of a book, newspaper, etc. (not theeople usually have half their fingers on one handh What word would you use to describe a man who does not have all his fingers on one hand?",
        option1:
          "Normal, because people usually have half their fingers on one hand",
        option2:
          "Normal, because people usually have half their fingers on one hand",
        option3:
          "Normal, because people usually have half their fingers on one hand",
        option4:
          "Normal, because people usually have half their fingerrs on one handh What word would you use to ",
      },
      {
        question: "Who is your friend",
        option1: "shubham",
        option2: "hritesh1",
        option3: "adarsh",
      },
      {
        question: "who is your enemy",
        option1: "shubham",
        option2: "hritesh",
        option3: "adarsh1",
      },
    ];
    mainContent.setAttribute("style", "display:none");
    formContent.setAttribute("style", "display:block");
    singleDisplay(arr);
  } else if ((id = "objective_2")) {
    alert("hi");
  } else if ((id = "objective_3")) {
  } else if ((id = "objective_4")) {
  } else if ((id = "objective_5")) {
  } else if ((id = "subjective_1")) {
  } else if ((id = "subjective_2")) {
  } else if ((id = "subjective_3")) {
  } else if ((id = "subjective_4")) {
  } else if ((id = "subjective_5")) {
  }
}

let main = document.getElementById("singleMark"); //single mcq
// let arr = [
//   {
//     question:
//       "the main written part of a book, newspaper, etc. (not theeople usually have half their fingers on one handh What word would you use to describe a man who does not have all his fingers on one hand?",
//     option1:
//       "Normal, because people usually have half their fingers on one hand",
//     option2:
//       "Normal, because people usually have half their fingers on one hand",
//     option3:
//       "Normal, because people usually have half their fingers on one hand",
//     option4:
//       "Normal, because people usually have half their fingerrs on one handh What word would you use to ",
//   },
//   {
//     question: "Who is your friend",
//     option1: "shubham",
//     option2: "hritesh1",
//     option3: "adarsh",
//   },
//   {
//     question: "who is your enemy",
//     option1: "shubham",
//     option2: "hritesh",
//     option3: "adarsh1",
//   },
// ];
function singleDisplay(arr) {
  let i = 0;
  var newid = 1;
  let number1division = document.createElement("div"); //top 3 dot numberdivision created
  number1division.style.textAlign = "center";
  main.appendChild(number1division); //div appended in main
  while (i < arr.length) {
    //while loop start from 0

    //
    //
    // 3 dots created
    //
    let number1 = document.createElement("input"); //input element created for 3 dots named number1
    number1.type = "radio"; // radio type input
    number1.setAttribute("class", "form-check-input"); //classes set for radio button
    number1.name = "inlineRadioOptions1";
    number1.id = "inlineRadios" + (i + 1);
    number1.value = i + 1;
    number1.style.pointerEvents = "none"; //cursor set to none
    number1.style.margin = "1rem";
    number1division.appendChild(number1); //added number1 in number division means 3 dots

    //
    // division created
    //
    let division = document.createElement("div"); //new division created
    division.id = "divi" + i;
    division.setAttribute("class", "maininnerdiv");
    //
    //
    // heading of question
    //
    let mcq = document.createElement("h2"); //h2 element created named MCQ
    mcq.id = "H" + i;
    mcq.textContent = arr[i]["question"];
    mcq.style.cssText =
      "border:solid 2px ;font-weight:lighter;border-radius: 5px 20px 5px;;color:white;font-size:16px;background-color:#663399;margin-right:15%;padding:2%;text-align:left;padding-left:25px";
    division.appendChild(mcq); //appended MCQ in division div

    //
    //
    // next button
    //
    let nxt = document.createElement("button"); //button created named nxt for next question
    nxt.type = "button";
    nxt.id = "singlenext" + (i + 1);
    nxt.value = i + 1;
    nxt.style.cursor = "pointer"; //cursor of next set to pointer
    nxt.setAttribute("class", "btn btn-outline-secondary btn-sm nxtmain");
    if (i != arr.length - 1) nxt.textContent = "Next";
    else nxt.textContent = "Submit";
    //next button appended in division

    //
    //
    // length of array options
    //

    let len = Object.keys(arr[i]).length;

    //
    //
    //for loop
    //
    for (let j = 1; j < len; j++) {
      //for loop starts
      let radio = document.createElement("input"); //radio input created
      radio.type = "radio";
      radio.name = arr[i]["question"];
      radio.value = arr[i]["option" + j];
      radio.id = "option" + j + "radio" + i;
      radio.setAttribute("class", "btn-check ");
      division.appendChild(radio); //radio input appended in labeldiv
      // ____________________________________________________________
      // |                                                           |
      // |                                                           |
      // |      |-----------------------------------|                |
      // |      | __________________________________|                |
      // |                                                           |
      // |                                                           |
      // |                                                           |
      // |       |______________________________________|            |
      // |       |                                      |            |
      // |       |  h1                                  |            |
      // |       |                                      |            |
      // |       |       absolute                       |            |
      // |       |                                      |            |
      // |       |                                      |            |
      // |       |                                      |            |
      // |       |   button                             |            |
      // |       |                                      |            |
      // |       |                                      |            |
      // |       |                                      |            |
      // |       |______________________________________|            |
      // |                                                           |
      // |                                                           |
      // |        relative                                           |
      // |___________________________________________________________|

      let label = document.createElement("label"); //label created for radio input
      label.htmlFor = "option" + j + "radio" + i;
      label.setAttribute("class", "btn btn-outline-primary");
      label.textContent = arr[i]["option" + j];
      label.style.margin = "1vh 2vw 3vh 1vw";
      label.style.textAlign = "left";
      label.style.fontSize = "13px";
      //
      //
      // element appended
      //
      division.appendChild(label); //label apppended in labeldiv
      // division.appendChild(labeldivision);
      main.appendChild(division); //division appended in main
      document.getElementById("inlineRadios1").checked = true;
      if (i >= 1) {
        document.getElementById("divi" + i).style.display = "none";
      }
    }
    division.appendChild(nxt);
    document
      .getElementById("singlenext" + newid++)
      .addEventListener("click", function () {
        let val = Number(this.value);
        let arlen = Object.keys(arr[val - 1]).length;
        for (let m = 1; m < arlen; m++) {
          if (
            document.getElementById("option" + m + "radio" + (val - 1)).checked
          ) {
            func(val);
          }
        }
      });

    i++;
  }
}
function func(value) {
  for (let i = 0; i < arr.length; i++) {
    if (i == value) {
      document.getElementById("inlineRadios" + (value + 1)).checked = true;
      document.getElementById("divi" + i).style.display = "block";
    } else document.getElementById("divi" + i).style.display = "none";
  }
  if (value == arr.length) {
    main.textContent = "Your Response Submitted";
    main.style.textAlign = "center";
  }
}

let newid1 = 1;
let main1 = document.getElementById("multiMark");
let arr1 = [
  {
    question: "Identify your earliar adopters?",
    option1: "shubham",
    option2: "hritesh",
    option3: "adarsh",
    option4: "hritesh",
    option5: "adarsh",
    option6: "hritesh",
  },
  {
    question: "Share the response of your previous customers",
    option1: "shubham",
    option2: "hritesh1",
    option3: "adarsh",
  },
  {
    question: "Choose your engine of growth",
    option1: "Paid",
    option2: "Sticky",
    option3: "Viral",
  },
];

let k = 0;
numberdivision = document.createElement("div");
main1.appendChild(numberdivision);
numberdivision.style.textAlign = "center";
main1.style.marginTop = "2rem";
while (k < arr1.length) {
  let division1 = document.createElement("div");
  division1.id = "division" + k;
  division1.setAttribute("class", "main1innerdiv");
  let mcq1 = document.createElement("h2");
  mcq1.id = "heading" + k;
  mcq1.textContent = arr1[k]["question"];
  mcq1.style.cssText =
    "border:solid 2px ;font-weight:lighter;border-radius: 5px 20px 5px;;color:white;font-size:16px;background-color:#663399;margin-right:15%;padding:2%;text-align:left;padding-left:25px";
  let len = Object.keys(arr1[k]).length;

  let number = document.createElement("input");
  number.type = "radio";
  number.setAttribute("class", "form-check-input ");
  number.name = "inlineRadioOptions";
  number.id = "inlineRadio" + (k + 1);
  number.value = k + 1;
  number.style.margin = "1rem";
  number.style.pointerEvents = "none";
  numberdivision.appendChild(number);

  let next = document.createElement("button");
  next.type = "button";
  next.id = "multinext" + (k + 1);
  next.value = k + 1;
  next.style.cursor = "pointer";
  next.setAttribute("class", "btn btn-outline-secondary btn-sm nxtmain1");
  if (k != arr1.length - 1) next.textContent = "Next";
  else next.textContent = "Submit";
  division1.appendChild(next);

  division1.appendChild(mcq1);

  for (let m = 1; m < len; m++) {
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = arr1[k]["question"];
    checkbox.value = arr1[k]["option" + m];
    checkbox.id = "btn-check-" + m + "-outlined" + k;
    checkbox.setAttribute("class", "btn-check ");
    division1.appendChild(checkbox);

    let label1 = document.createElement("label");
    label1.htmlFor = "btn-check-" + m + "-outlined" + k;
    label1.setAttribute("class", "btn btn-outline-primary checkboxmain1");
    label1.textContent = arr1[k]["option" + m];
    label1.style.margin = "1vh 1vw 3vh 1vw";
    label1.style.textAlign = "left";
    label1.style.fontSize = "13px";
    division1.appendChild(label1);
    // division1.appendChild(labeldivision1);
    main1.appendChild(division1);

    if (k >= 1) {
      document.getElementById("inlineRadio" + 1).checked = true;
      document.getElementById("division" + k).style.display = "none";
    }
  }
  document
    .getElementById("multinext" + newid1++)
    .addEventListener("click", function () {
      let val = Number(this.value);
      let arlen = Object.keys(arr1[val - 1]).length;
      for (let m = 1; m < arlen; m++) {
        if (
          document.getElementById("btn-check-" + m + "-outlined" + (val - 1))
            .checked
        ) {
          func1(val);
        }
      }
    });
  k++;
}
function func1(value) {
  for (let i = 0; i < arr.length; i++) {
    if (i == value) {
      document.getElementById("inlineRadio" + (value + 1)).checked = true;
      document.getElementById("division" + i).style.display = "block";
    } else document.getElementById("division" + i).style.display = "none";
  }
  if (value == arr1.length) {
    main1.textContent = "Your Response Submitted";
    main1.style.textAlign = "center";
  }
}

//
//

//

//

//
//
let newid2 = 1;
let main2 = document.getElementById("subjective");
let arr2 = [
  "What is the mark of excellence in your brand?",
  "What markets to avoid?",
  "What is your hype?",
  "What were your previous location?",
];

let x = 0;
numberdivision2 = document.createElement("div");
main2.appendChild(numberdivision2);
numberdivision2.style.textAlign = "center";
main2.style.marginTop = "2rem";
while (x < arr2.length) {
  let division2 = document.createElement("div");
  division2.id = "division2" + x;
  division2.setAttribute("class", "main2innerdiv");
  let mcq2 = document.createElement("h3");
  mcq2.id = "heading3" + x;
  mcq2.textContent = arr2[x];
  mcq2.style.cssText =
    "border:solid 2px ;font-weight:lighter;border-radius: 5px 20px 5px;;color:white;font-size:16px;background-color:#663399;margin-right:15%;padding:2%;text-align:left;padding-left:25px";

  let number2 = document.createElement("input");
  number2.type = "radio";
  number2.setAttribute("class", "form-check-input ");
  number2.name = "textareaRadiosOptions";
  number2.id = "textareaRadios" + (x + 1);
  number2.value = x + 1;
  number2.style.margin = "1rem";
  number2.style.pointerEvents = "none";
  numberdivision2.appendChild(number2);

  let next2 = document.createElement("button");
  next2.type = "button";
  next2.id = "subjectivenext" + (x + 1);
  next2.value = x + 1;
  next2.style.cursor = "pointer";
  next2.setAttribute("class", "btn btn-outline-secondary btn-sm nxtmain2");
  if (x != arr2.length - 1) next2.textContent = "Next";
  else next2.textContent = "Submit";
  division2.appendChild(next2);

  division2.appendChild(mcq2);
  let textarea = document.createElement("TEXTAREA");
  textarea.row = "50";
  textarea.required = "required";
  textarea.column = "250";
  textarea.id = "textareaid" + x;
  textarea.style.width = "70%";
  textarea.style.textAlign = "center";
  division2.appendChild(textarea);
  main2.appendChild(division2);
  if (x >= 1) {
    document.getElementById("textareaRadios" + 1).checked = true;
    document.getElementById("division2" + x).style.display = "none";
  }
  document
    .getElementById("subjectivenext" + newid2++)
    .addEventListener("click", function () {
      let val = Number(this.value);
      if (document.getElementById("textareaid" + (val - 1)).value) func2(val);
    });
  x++;
}
function func2(value) {
  for (let i = 0; i < arr2.length; i++) {
    if (i == value) {
      document.getElementById("textareaRadios" + (value + 1)).checked = true;
      document.getElementById("division2" + i).style.display = "block";
    } else document.getElementById("division2" + i).style.display = "none";
  }
  if (value == arr2.length) {
    main2.textContent = "Your all Responses has been Submitted";
    main2.style.textAlign = "center";
  }
}

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

const range = document.getElementById("range"),
  rangeV = document.getElementById("rangeV"),
  setValue = () => {
    const newValue = Number(
        ((range.value - range.min) * 100) / (range.max - range.min)
      ),
      newPosition = 10 - newValue * 0.2;
    rangeV.innerHTML = `<span>${range.value}</span>`;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener("input", setValue);
