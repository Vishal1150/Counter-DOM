let plusBtn = document.getElementById("btn1");
let substractBtn = document.getElementById("btn2"); 
let  resetBtn = document.getElementById("resetbtn");
let box = document.getElementById("para-box-for-answer");




substractBtn.addEventListener("click", () => {
    const value = Number(box.innerText);
    if (value > 0) {
      box.innerText = value - 1;
    } else {
      alert("Negative value not allowed");
    }
  });

  plusBtn.addEventListener("click", () => {
    const value = Number(box.innerText);
    if (value >= 100) {
      alert("100+ values are not allowed");
    } else {
      box.innerText = value + 1;
    }
  });

  resetBtn.addEventListener("click", () => {
    box.innerText = 0;
  });