const output = document.getElementById("output");
const form = document.getElementById("form");
const button = document.querySelector("button");

// button.addEventListener()

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
  const fName = e.target[0].value;

  output.innerText = fName;
});

// function outer() {
//   let num = 0;
//   return {
//     increment: () => {
//       num++;
//       return num;
//     },
//     decrement: () => {
//       num--;
//       return num;
//     },
//     showCount: () => {
//       console.log(num);
//     },
//   };
// }

// const counterHandler = outer();

// counterHandler.increment();
// counterHandler.increment();
// counterHandler.increment();
// counterHandler.decrement();
// counterHandler.showCount();

// $("p").addClass("blue");
$("p").hover(fn1, fn2);

function fn1() {
  $(this).addClass("blue");
}

function fn2() {
  $(this).removeClass("blue");
}
