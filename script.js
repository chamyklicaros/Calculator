function addition(a,b){
    return a + b;
}

function subtraction(a,b){
    return a - b;
}

function multiplication(a,b){
    return a * b;
}

function division(a,b){
    if (b == 0){
        return "Error: cant divide by zero";
    }

    return a / b;
}

function square(a){
    return a * a;
}

function squareRoot(a){
    if (a < 0){
        return "Error: cant square root a negative number";
    }
    return Math.sqrt(a);
}

function operate(operator, a, b){
    switch(operator){
        case "+": return addition(a, b);
        case "-": return subtraction(a, b);
        case "x": return multiplication(a, b);
        case "/": return division(a, b);
        case "square": return square(a); 
        case "squareRoot": return squareRoot(a);
    }
}


function main(){
    let display = document.getElementById("display");
    const btnNum = document.querySelectorAll(".btn-num");
    const btnOperator = document.querySelectorAll(".btn-operator");
    let input = false;
    let currentInput = "";
    let currentExpression = "";
    let dotUsed = false;
    let operator = "";
    let operationUsed = false;
    let specialOpeatorUsed = false;
    let firstNum = 0;
    let secondNum = 0;

    btnNum.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (input || specialOpeatorUsed) return;
            currentInput += btn.id;
            currentExpression += btn.id;
            display.value = currentExpression;
        });
    });



    btnOperator.forEach((btn) => {
        btn.addEventListener("click", () => {

            switch(btn.id){
                case "clear":
                    currentInput = "";
                    currentExpression = "";
                    operator = "";
                    firstNum = 0;
                    secondNum = "";
                    display.value = currentExpression;
                    input = false;
                    dotUsed = false; 
                    specialOpeatorUsed = false;
                    operationUsed = false;
                       
                    break;
                case "back":
                    if (currentInput.length > 0) {
                        currentInput = currentInput.slice(0, -1);
                    }
                    currentExpression = currentExpression.slice(0, -1);
                    display.value = currentExpression;
                    break;

                case "=":
                secondNum = parseFloat(currentInput);
                let result = operate(operator, firstNum, secondNum);
                display.value = result;
                currentExpression = String(result);
                currentInput = String(result);
                firstNum = result;
                operator = "";
                input = true;
                secondNum = "";
                dotUsed = false;
                operationUsed = false;
                break;

                case "dot":
                    if (dotUsed) return;
                    if (currentInput === "") {
                        currentInput = "0.";
                    } else {
                        currentInput += ".";
                    }
                    dotUsed = true;
                    currentExpression += ".";
                    display.value = currentExpression;
                    break;
            }
            if (operationUsed ) return; 
            switch(btn.id){
                case "plus":
                    firstNum = parseFloat(currentInput);
                    currentInput = "";
                    operator = "+";
                    currentExpression += " + ";  
                    display.value = currentExpression;
                    input = false; 
                    operationUsed = true; 
                    dotUsed = false;
                    break;

                case "minus":
                    firstNum = parseFloat(currentInput);
                    currentInput = "";
                    operator = "-";
                    currentExpression += " - ";  
                    display.value = currentExpression;
                    input = false;
                    dotUsed = false;
                    break;

                case "multiplication":
                    firstNum = parseFloat(currentInput);
                    currentInput = "";
                    operator = "x";
                    currentExpression += " x ";  
                    display.value = currentExpression;
                    input = false;
                    dotUsed = false;
                    break;

                case "Division":
                    firstNum = parseFloat(currentInput);
                    currentInput = "";
                    operator = "/";
                    currentExpression += " / ";  
                    display.value = currentExpression;
                    input = false;
                    dotUsed = false;
                    break;

                case "square":
                    firstNum = parseFloat(currentInput);
                    currentInput = "";
                    operator = "square";
                    currentExpression += " ^2 ";  
                    display.value = currentExpression;
                    input = false;
                    specialOpeatorUsed = true;
                    dotUsed = false;
                    break;
                case "squareRoot":
                     firstNum = parseFloat(currentInput);
                    currentInput = "";
                    operator = "squareRoot";
                    currentExpression += "x^0.5";  
                    display.value = currentExpression;
                    input = false;
                    specialOpeatorUsed = true;
                     dotUsed = false;

                    break;
               
      
            }
        });
    });

    



}

main();