const operacion = document.getElementById("operacion");
const resultado = document.getElementById("resultado");
const calculadora = document.querySelector(".calc-box");
const buttons = calculadora.querySelector(".buttons-box");

// buttons.addEventListener("click", (e) => {
//   if (e.target.matches("button")) {
//     const key = e.target;
//     const action = key.dataset.action;
//     if (!action) {
//       console.log("Number key");
//     } else if (
//       action === "add" ||
//       action === "minus" ||
//       action === "multiply" ||
//       action === "divide"
//     ) {
//       console.log("Operator key");
//     } else if (action === "decimal") {
//       console.log("Decimal Key");
//     } else if (action === "clear") {
//       console.log("Clear Key");
//     } else if (action == "equal") {
//       console.log("Equal Key");
//     }
//   }
// });

buttons.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    if (action) {
      switch (action) {
        case "add":
          console.log("Add key");
          break;
        case "minus":
          console.log("Minus Key");
          break;
        case "multiply":
          console.log("Multiply Key");
          break;
        case "divide":
          console.log("Divide Key");
          break;
        case "decimal":
          console.log("Decimal key");
          break;
        case "clear":
          console.log("Clear key");
          break;
        case "equal":
          console.log("Equal key");
          break;
      }
    } else {
      console.log("Number key");
      const keyContent = key.textContent;
      const displayedNum = operacion.textContent;
      if (displayedNum === "0") {
        operacion.textContent = keyContent;
      } else {
        operacion.textContent = displayedNum + keyContent;
      }
    }
  }
});
