

const firstNumberInput = document.getElementById("firstNumber");
const operationSelect = document.getElementById("operation");
const secondNumberInput = document.getElementById("secondNumber");
const calculateButton = document.getElementById("calculate-button");
const resultLabel = document.getElementById("result");


function adition(a,b){
    return a + b; 
}

function substract(a,b){
    return a - b;
}

function division (a,b){
    if (b === 0) {
        return "На ноль делить нельзя";
    }
    else {
        return a / b;
    }   
}
function multiplication(a,b){
    return a * b;
}


calculateButton.addEventListener("click", () => {
    const firstNumber = parseFloat(firstNumberInput.value);
    const secondNumber = parseFloat(secondNumberInput.value);

    const operation = operationSelect.value;

    let result;
  switch (operation) {
    case "addition":
      result = adition(firstNumber, secondNumber);
      break;
    case "subtraction":
      result = substract(firstNumber, secondNumber);
      break;
    case "multiplication":
      result = multiplication(firstNumber, secondNumber);
      break;
    case "division":
      result = division(firstNumber, secondNumber);
      break;
    default:
      result = 0;
  }

  // Выводим результат на страницу
  resultLabel.textContent = result;
});