let circle = document.getElementById("circle");
let upBtn = document.getElementById("upBtn");
let downBtn = document.getElementById("downBtn");

let rotateValue = circle.style.transform;
let rotateSum;

upBtn.onclick = () => {
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};

downBtn.onclick = () => {
  rotateSum = rotateValue + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};
let a = [1, 3, 3, 4];
let element = [];

for (let i = 0; i < a.length; i++) {
  element = a[i];
}

console.log(element);
