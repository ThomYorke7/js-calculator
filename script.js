const buttons = Array.from(document.getElementsByTagName("button"));
const overallOperation = document.getElementById("operation");
const currentOperation = document.getElementById("display");
let operation = [];

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

function percentage(a) {
    return a / 100;
}

function roundNumber(num, dec) {
    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
}



function recognizeOperator(operator, a, b) {
    switch (operator) {
        case "+":
            operation.length = 0;
            operation.push(add(a, b));
            console.log(operation);
            break;
        case "-":
            operation.length = 0;
            operation.push(subtract(a, b));
            console.log(operation);
            break;
        case "x":
            operation.length = 0;
            operation.push(multiply(a, b));
            console.log(operation);
            break;
        case "/":
            operation.length = 0;
            operation.push(divide(a, b));
            console.log(operation);
            break;
    }
}




function operate() {
    if (operation.length >= 3) {
        let operator = operation[1];
        let a = parseInt(operation[0]);
        let b = parseInt(operation[2]);
        recognizeOperator(operator, a, b);
    }
}


function extractOperation(string) {
    let arr = string.split(/(\D)/g);
    if (operation.length == 0) {
        operation.push(...arr)
    }
    else {
        operation.push(...arr.slice(-2));
        operate();
    }
    console.log(arr);
    console.log(operation)
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
                    if (!currentOperation.textContent.includes(".")) {
                        overallOperation.textContent += e.target.textContent;
                        currentOperation.textContent = e.target.textContent;
                    };
                    break;
                case "+":
                    if (!currentOperation.textContent.includes("+")) {
                        extractOperation(overallOperation.textContent);
                        overallOperation.textContent += e.target.textContent;
                        currentOperation.textContent = e.target.textContent;
                    };
                    break;
                case "-":
                    if (!currentOperation.textContent.includes("-")) {
                        extractOperation(overallOperation.textContent);
                        overallOperation.textContent += e.target.textContent;
                        currentOperation.textContent = e.target.textContent;
                    };
                    break;
                case "x":
                    if (!currentOperation.textContent.includes("x")) {
                        extractOperation(overallOperation.textContent);
                        overallOperation.textContent += e.target.textContent;
                        currentOperation.textContent = e.target.textContent;
                    };
                    break;
                case "/":
                    if (!currentOperation.textContent.includes("/")) {
                        extractOperation(overallOperation.textContent);
                        overallOperation.textContent += e.target.textContent;
                        currentOperation.textContent = e.target.textContent;
                    };
                    break;
                default:
                    overallOperation.textContent += e.target.textContent;
                    currentOperation.textContent = e.target.textContent;
                // extractOperation(overallOperation.textContent)
                // // operation.push(overallOperation.textContent.split(/(\D)/g))
                // console.log(operation);
                // operate();
            }
        })
    }
}

populateDisplay();
