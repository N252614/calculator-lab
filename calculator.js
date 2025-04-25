let history = [];
function add(a, b) {
  if (isNaN(a) || isNaN(b)) {
    console.log("Only numbers.");
    return;
  }
    let result = a + b;
    history.push(a + " + " + b + " = " + result);
    return result;
  }
  function subtract(a, b) {
    if (isNaN(a) || isNaN(b)) {
      console.log("Only numbers.");
      return;
    }
    let result = a - b;
    history.push(a + " - " + b + " = " + result);
    return result;
  }
  function multiply(a, b) {
    if (isNaN(a) || isNaN(b)) {
      console.log("Only numbers.");
      return;
    }
    let result = a * b;
    history.push(a + " * " + b + " = " + result);
    return result;
  }
  function divide(a, b) {
    if (isNaN(a) || isNaN(b)) {
      console.log("Only numbers.");
      return;
    }
    if (b === 0) {
      console.log("Error: Cannot divide by zero!");
      return null;
    }
    let result = a / b;
    history.push(a + " / " + b + " = " + result);
    return result;
  }
  function showHistory() {
    if (history.length === 0) {
      console.log("History is empty.");
    } else {
      console.log("Calculation History:");
      for (let i = 0; i < history.length; i++) {
        console.log(history[i]);
      }
    }
  }