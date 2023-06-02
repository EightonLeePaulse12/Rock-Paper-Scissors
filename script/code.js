const computerAnswer = document.querySelector("#computerDisplay");
const yourAnswer = document.querySelector("#yourDisplay");
const result = document.querySelector("#result");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let empty = [];
let anotherEmpty = [];

console.log(yourAnswer);

rock.addEventListener("click", () => {
  if (empty === []) {
    (yourAnswer.innerHTML += rock.innerHTML).empty.push();
  }
  empty = [];
  empty.push(rock.innerHTML);
  yourAnswer.innerHTML = "Your Answer: ";
  yourAnswer.innerHTML += empty;
  computer();
  console.log(empty);
});

paper.addEventListener("click", () => {
  if (empty === []) {
    (yourAnswer.innerHTML += paper.innerHTML).empty.push();
  }
  empty = [];
  empty.push(paper.innerHTML);
  yourAnswer.innerHTML = "Your Answer: ";
  yourAnswer.innerHTML += empty;
  computer();
  console.log(empty);
});

scissors.addEventListener("click", () => {
  if (empty === []) {
    (yourAnswer.innerHTML += scissors.innerHTML).empty.push();
  }
  empty = [];
  empty.push(scissors.innerHTML);
  yourAnswer.innerHTML = "Your Answer: ";
  yourAnswer.innerHTML += empty;
  computer();
  console.log(empty);
});

function computer() {
  anotherEmpty.push(rock.innerHTML, paper.innerHTML, scissors.innerHTML);
  let getRandom = Math.floor(Math.random() * 3);
  let displayRandom = anotherEmpty[getRandom];
  computerAnswer.innerHTML = "Computer's Answer: ";
  computerAnswer.innerHTML += displayRandom;
  resultuh();
}

function resultuh() {
  if (
    computerAnswer.innerHTML === "Computer's Answer: " + rock.innerHTML &&
    yourAnswer.innerHTML === "Your Answer: " + paper.innerHTML
  ) {
    result.innerHTML = "Result: ";
    result.innerHTML += "You Win!";
  }
  if (
    computerAnswer.innerHTML === "Computer's Answer: " + rock.innerHTML &&
    yourAnswer.innerHTML === "Your Answer: " + rock.innerHTML
  ) {
    result.innerHTML = "Result: ";
    result.innerHTML += "Draw!";
  }
  if (
    computerAnswer.innerHTML === "Computer's Answer: " + rock.innerHTML &&
    yourAnswer.innerHTML === "Your Answer: " + scissors.innerHTML
  ) {
    result.innerHTML = "Result: ";
    result.innerHTML += "You Lose!";
  }
  if (
    computerAnswer.innerHTML === "Computer's Answer: " + paper.innerHTML &&
    yourAnswer.innerHTML === "Your Answer: " + scissors.innerHTML
  ) {
    result.innerHTML = "Result: ";
    result.innerHTML += "You Win!";
  }
  if (
    computerAnswer.innerHTML === "Computer's Answer: " + paper.innerHTML &&
    yourAnswer.innerHTML === "Your Answer: " + rock.innerHTML
  ) {
    result.innerHTML = "Result: ";
    result.innerHTML += "You Lose!";
  }
  if (
    computerAnswer.innerHTML === "Computer's Answer: " + paper.innerHTML &&
    yourAnswer.innerHTML === "Your Answer: " + paper.innerHTML
  ) {
    result.innerHTML = "Result: ";
    result.innerHTML += "Draw!";
  }
  if (
    computerAnswer.innerHTML === "Computer's Answer: " + scissors.innerHTML &&
    yourAnswer.innerHTML === "Your Answer: " + paper.innerHTML
  ) {
    result.innerHTML = "Result: ";
    result.innerHTML += "You Lose!";
  }
  if (
    computerAnswer.innerHTML === "Computer's Answer: " + scissors.innerHTML &&
    yourAnswer.innerHTML === "Your Answer: " + scissors.innerHTML
  ) {
    result.innerHTML = "Result: ";
    result.innerHTML += "Draw!";
  }
  if (
    computerAnswer.innerHTML === "Computer's Answer: " + scissors.innerHTML &&
    yourAnswer.innerHTML === "Your Answer: " + rock.innerHTML
  ) {
    result.innerHTML = "Result: ";
    result.innerHTML += "You Win!";
  }
}
