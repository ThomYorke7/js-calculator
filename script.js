/* Global Variables */
const buttons = Array.from(document.getElementsByTagName("button"));
const overallOperation = document.getElementById("operation");
const currentOperation = document.getElementById("display");
let accumulator = [];
let operation = [];


/* Shows the user input on the calculator display */
function populateDisplay() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", (e) => {
            switch (e.target.textContent) {
                case "C":
                    overallOperation.textContent = "";
                    currentOperation.textContent = "";
                    operation.length = 0;
                    break;
                case "Del":
                    overallOperation.textContent = overallOperation.textContent.slice(0, -1);
                    currentOperation.textContent = "";
                    operation.pop();
                    break;
                case ".":
                    if (!currentOperation.textContent.includes(".") && overallOperation.textContent != "") {
                        overallOperation.textContent += e.target.textContent;
                        currentOperation.textContent += e.target.textContent;
                    };
                    break;
                case "+":
                case "-":
                case "x":
                case "/":
                case "^":
                    if (typeof (currentOperation.textContent == "number") && currentOperation.textContent != "") {
                        extractOperation(overallOperation.textContent);
                        overallOperation.textContent += e.target.textContent;
                        currentOperation.textContent = "";
                    };
                    break;
                case "=":
                    if (typeof (currentOperation.textContent == "number") && overallOperation.textContent != "") {
                        extractOperation(overallOperation.textContent);
                        overallOperation.textContent = "";
                        currentOperation.textContent = operation[0];
                    };
                    break;
                default:
                    overallOperation.textContent += e.target.textContent;
                    currentOperation.textContent += e.target.textContent;
            }
        })
    }
}


/* Parses the user input and passes the elements in two different arrays */
function extractOperation(string) {
    accumulator = string.split(/([+x/^=-])/g);
    if (operation.length == 0) {
        operation.push(...accumulator)
    }
    else {
        operation.push(...accumulator.slice(-2));
        operate();
    }
}


/* Sets the operation when the "operation" array has two numbers and an operand */
function operate() {
    if (operation.length >= 3) {
        filteredOperation = operation.filter(el => {
            return el != ""
        })
        let operator = filteredOperation[1];
        let a = parseFloat(filteredOperation[0]);
        let b = parseFloat(filteredOperation[2]);
        recognizeOperator(operator, a, b);
    }
}


/* Recognizes the type of operation needed */
function recognizeOperator(operator, a, b) {
    switch (operator) {
        case "+":
            operation.length = 0;
            operation.push(add(a, b));
            break;
        case "-":
            operation.length = 0;
            operation.push(subtract(a, b));
            break;
        case "x":
            operation.length = 0;
            operation.push(multiply(a, b));
            break;
        case "/":
            operation.length = 0;
            operation.push(divide(a, b));
            break;
        case "^":
            operation.length = 0;
            operation.push(power(a, b));
            break;
    }
}


/* Basic Operations */
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return "Error"
    } else {
        return a / b;
    }
}

function power(a, b) {
    return a ** b;
}


populateDisplay();
