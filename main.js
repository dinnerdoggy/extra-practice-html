let legend = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ",]

let pg = document.getElementById("paragraph")
pArray = [];

function randomWholeNum() {
  return Math.floor(Math.random() * 37);
}



for (let i = 0; i < 1000; i++) {
  pArray.push(legend[randomWholeNum()])
}

pg.innerHTML = pArray.join("");
