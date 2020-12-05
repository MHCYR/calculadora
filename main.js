const operacion = document.querySelector(".operacion");
const resultado = document.getElementById("resultado");
const calculadora = document.querySelector(".calc-box");
const buttons = calculadora.querySelector(".buttons-box");
const op = ["add", "minus", "multiply"];
let num1 = undefined;
let num2 = undefined;
let state = undefined;

buttons.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = Number(key.textContent);
    const displayedNum = operacion.textContent;
    if (action) {
      switch (action) {
        case "add":
          console.log("Add key");
          num1 = Number(displayedNum);
          operacion.textContent = 0;
          state = op[0];
          break;
        case "minus":
          console.log("Minus Key");
          num1 = Number(displayedNum);
          operacion.textContent = 0;
          state = op[1];
          break;
        case "multiply":
          console.log("Multiply Key");
          num1 = Number(displayedNum);
          operacion.textContent = 0;
          state = op[2];
          break;
        case "decimal":
          console.log("Decimal key");
          operacion.textContent = displayedNum + ".";
          break;
        case "clear":
          console.log("Clear key");
          operacion.textContent = 0;
          resultado.textContent = 0;
          num1 = 0;
          break;
        case "equal":
          console.log("Equal key");
          num2 = Number(displayedNum);
          if (state === "add") {
            resultado.textContent = num1 + num2;
          } else if (state === "minus") {
            resultado.textContent = num1 - num2;
          } else if (state === "multiply") {
            resultado.textContent = num1 * num2;
          }
          operacion.textContent = 0;
          break;
      }
    } else {
      console.log("Number key");
      if (displayedNum === "0") {
        operacion.textContent = keyContent;
      } else {
        operacion.textContent = `${displayedNum}${keyContent}`;
      }
    }
  }
});
