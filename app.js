// TOGGLE SWITCH FUNCTION
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "dark");
  }
}
toggleSwitch.addEventListener("change", switchTheme, false);

// GETTING ELEMENTS
let mainDisplay = document.querySelector(".display-two");
let secondDisplay = document.querySelector(".display-one");

//FUNCTION TO DISPLAY BUTTONS
appendToDisplay = (value) => {
  // Reset the flag when an operator is added
  if (value === "+" || value === "-" || value === "*" || value === "/") {
    decimalAdded = false;
  }

  // Check if the value is a decimal point
  if (value === ".") {
    // Allow the decimal point only if it hasn't been added before
    if (!decimalAdded) {
      mainDisplay.value += value;
      decimalAdded = true;
    }
  } else {
    // For other values, just append them to the display
    mainDisplay.value += value;
  }
};

// FUNCTION TO CLEAR DISPLAY
clearDisplay = () => {
  mainDisplay.value = "";
  secondDisplay.value = "";
};

// FUNCTION TO DELETE THE LAST VALUE
backSpace = () => {
  let currentValue = document.querySelector(".display-two").value;
  mainDisplay.value = currentValue.slice(0, -1);
};

//FUNCTION TO CALCULATE
calculation = () => {
  //move the values up so evaluation can be shown below
  secondDisplay.value = mainDisplay.value;

  var expression = document.querySelector(".display-two").value;
  var result;

  try {
    // Use the Function constructor to create a function from the expression
    var calculate = new Function("return " + expression);
    result = calculate();
    document.querySelector(".display-two").value = result;
  } catch (error) {
    document.querySelector(".display-two").value = "Error";
  }
};
