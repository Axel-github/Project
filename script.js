function calculate() {
    var input = document.getElementById("input").value;
    var result = eval(input);
    document.getElementById("output").innerHTML = result;
  }

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