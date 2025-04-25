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

// Example usage
console.log(add(2, 3));       // 5
console.log(subtract(10, 4)); // 6
console.log(multiply(3, 5));  // 15
console.log(divide(8, 2));    // 4
console.log(add(5, "a")); //Error, only numbers
console.log(divide(9, 0));    // Error, division by zero

showHistory();                // Show all calculations