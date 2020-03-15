const buttons = Array.from(document.getElementsByTagName("button"));
const overallOperation = document.getElementById("operation");
const currentOperation = document.getElementById("display");
const operation = [];

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
    return a / b;
}

function percentage(a) {
    return a / 100;
}

function recognizeOperator(operator, a, b) {
    switch (operator) {
        case "+":
            operation.length = 0;
            operation.push(add(a, b));
            console.log(operation[0]);
            break;
        case "-":
            console.log(a)
    }
}

function roundNumber(num, dec) {
    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
}

function operate() {
    result = null
    if (operation.length === 3) {
        let operator = operation[1];
        let a = parseInt(operation[0]);
        let b = parseInt(operation[2]);
        recognizeOperator(operator, a, b);
    } else {
        console.log("b")
    }
}


function populateDisplay() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", (e) => {
            switch (e.target.textContent) {
                case "C":
                    overallOperation.textContent = "";
                    currentOperation.textContent = "";
                    break;
                case "Del":
                    overallOperation.textContent = overallOperation.textContent.slice(0, -1);
                    currentOperation.textContent = "";
                    break;
                case ".":
                    if (!overallOperation.textContent.includes(".")) {
                        overallOperation.textContent += e.target.textContent;
                        currentOperation.textContent = e.target.textContent;
                    };
                    break;
                default:
                    overallOperation.textContent += e.target.textContent;
                    currentOperation.textContent = e.target.textContent;
                    operation.push(e.target.textContent)
                    console.log(operation)
                    operate();
            }
        })
    }
}

populateDisplay();

operate();