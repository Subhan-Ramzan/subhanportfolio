let btn = document.querySelectorAll(".btn");

let Val = true;

let showmsg = document.querySelector(".msg-container");

let winner = document.getElementById("winner");

let reset = document.getElementById("reset");
let newbtn = document.querySelector(".newbtn");

let arr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [1, 4, 7],
  [0, 3, 6],
  [2, 5, 8],
];

const disabledbtn = () => {
  btn.forEach((button) => {
    button.disabled = true;
  });
};

const enablebtn = () => {
  btn.forEach((button) => {
    button.disabled = false;
    button.innerHTML = "";
  });
};

const wingame = (win) => {
  winner.innerHTML = `Winner is ${win}`;
  showmsg.classList.remove("hide");
  disabledbtn();
};

const resetgame = () => {
  showmsg.classList.add("hide");
  enablebtn();
  Val = true;
};

btn.forEach((button) => {
  button.addEventListener("click", () => {
    if (Val) {
      button.innerHTML = "X";
      Val = false;
    } else {
      button.innerHTML = "O";
      Val = true;
    }
    button.disabled = true;

    if (checkwon()) {
      return;
    }
  });
});

const checkwon = () => {
  for (const match of arr) {
    let Val1 = btn[match[0]].innerHTML;
    let Val2 = btn[match[1]].innerHTML;
    let Val3 = btn[match[2]].innerHTML;
    if (Val1 && Val1 === Val2 && Val2 === Val3) {
      wingame(Val1);
      return true;
    } 
  }
};

reset.addEventListener("click", () => {
  resetgame();
});
newbtn.addEventListener("click", () => {
  resetgame();
});
