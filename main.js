let legend = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ",]

let pg1 = document.getElementById("paragraph1")
let pg2 = document.getElementById("paragraph2")
let pg3 = document.getElementById("paragraph3")
pArray = [];

function randomWholeNum() {
  return Math.floor(Math.random() * 37);
}

for (let i = 0; i < 1000; i++) {
  pArray.push(legend[randomWholeNum()])
}

pg1.innerHTML = pArray.join("");
pg2.innerHTML = pArray.join("");
pg3.innerHTML = pArray.join("");
