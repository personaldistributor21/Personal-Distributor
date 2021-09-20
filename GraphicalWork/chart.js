let monthname = document.getElementById("month");
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let allMonths = document.getElementsByClassName("months");
monthname.addEventListener("change", function () {
  let value = parseInt(monthname.value);
  console.log(value);
  let index = value;
  let k = 0;
  for (let i = index; i < 11 + index; i++) {
    allMonths[k++].textContent = months[i % 12];
  }
});
let plannedDiv = document.getElementsByClassName("selectLabel")[0].offsetWidth;
var container = document.getElementById("planned");
var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
let xOffset = [];
let yOffset = [];
let dragItem = [];
let circleHome=document.getElementById("circleHome").offsetLeft;
for (let i = 1; i <= 5; i++) {
  dragItem[i] = document.getElementById("plannedCircle" + i);
  xOffset[i] =0// dragItem[i].offsetLeft-circleHome;
  yOffset[i] = 0;
}
xOffset[6] = 0;
xOffset[0] = container.offsetWidth;
yOffset[6] = 0;
yOffset[0] = container.offsetWidth;
console.log(xOffset[0]);
console.log(document.getElementById("planLabel").offsetWidth)

console.log(circleHome,dragItem[1].offsetLeft,"hi");
container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);
let dragCircle;
function dragStart(e) {
  for (let i = 1; i <= 5; i++) {
    if (e.target === dragItem[i]) {
      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset[i];
        initialY = e.touches[0].clientY - yOffset[i];
      } else {
       
        initialX = e.clientX - xOffset[i];
        initialY = e.clientY - yOffset[i];
        console.log(e.clientX,xOffset[i],"hi0",initialX);
      }
      active = true;
      dragCircle = e.target;
      break;
    }
  }
}
function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;
  active = false;
}

function drag(e) {
  if (active) {
    e.preventDefault();
    for (let i = 1; i <= 5; i++) {
      if (dragItem[i] == dragCircle) {
        // if (
        //   Math.abs(xOffset[i - 1]) >= Math.abs(xOffset[i] - i) &&
        //   Math.abs(xOffset[i]) >= Math.abs(xOffset[i + 1])){
         
          if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
          } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
          }
          if(currentX>0){
            currentX=-currentX
          }
          xOffset[i] = currentX;
          yOffset[i] = currentY;
          console.log(e.clientX,currentX,initialX,container.offsetWidth);
          if(Math.abs(currentX)<=container.offsetWidth)
          setTranslate(currentX, dragCircle);
          break;
        // }
      }
    }
  }
}

function setTranslate(xPos, el) {
  el.style.transform = "translateX(" + xPos + "px)";
}
