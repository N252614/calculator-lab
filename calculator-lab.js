let history = [];

function add(a, b) {
  let result = a + b;
  history.push(a + " + " + b + " = " + result);
  return result;
}

function subtract(a, b) {
  let result = a - b;
  history.push(a + " - " + b + " = " + result);
  return result;
}

function multiply(a, b) {
  let result = a * b;
  history.push(a + " * " + b + " = " + result);
  return result;
}

function divide(a, b) {
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
console.log(add(5, 3));       // 8
console.log(subtract(10, 4)); // 6
console.log(multiply(2, 6));  // 12
console.log(divide(9, 3));    // 3
console.log(divide(5, 0));    // Error
showHistory();                // Show all calculations