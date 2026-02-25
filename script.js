function addition(a,b){
    return a + b;
}

function subtraction(a,b){
    return a -b;
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

function operate(operator, a,b){

}

function main(){
    let num1 = parseFloat(prompt("Enter first number:"));
    let operator = prompt("Enter operator");

    if (operator == "sqr"){
        alert(square(num1));
        return;
    }
    if (operator == "root"){
        alert(squareRoot(num1));
        return;
    }
    let num2 = parseFloat(prompt("Enter second number:"));

    switch(operator){
        case "+":
            alert(addition(num1,num2));
            break;
        case "-":
            alert(subtraction(num1,num2));
            break;
        case "*":
            alert(multiplication(num1,num2));
            break;
        case "/":
            alert(division(num1,num2));
            break;
        default:
            alert("Invalid operator");
    }

}

main();