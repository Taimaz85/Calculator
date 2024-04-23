document.querySelector("#add").addEventListener('click', () => {
    document.querySelector("#operand").value = "+";
});
document.querySelector("#sub").addEventListener('click', () => {
    document.querySelector("#operand").value = "-";
});
document.querySelector("#mul").addEventListener('click', () => {
    document.querySelector("#operand").value = "*";
});
document.querySelector("#div").addEventListener('click', () => {
    document.querySelector("#operand").value = "/";
});

// this is an alternative way to achieve the above functionality
// comment this in and comment out the code above to try it out
/* 
const operands = document.querySelectorAll(".operand");
operands.forEach(oper => {
    oper.addEventListener('click', (event) => {
        document.querySelector('#operand').value=event.target.innerText;
    })
})
 */


document.getElementById("calc").addEventListener('click',function() {
    let number1 = parseInt(document.querySelector("#number1").value);
    let number2 = parseInt(document.querySelector("#number2").value);

    let operator = document.querySelector("#operand").value;

    let result;
    switch(operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            if (number2 != 0) result = number1 / number2;
            else alert('Error, cannot divide by zero');
            break;
        default:
            alert('Please select a valid operator');
    }

    document.querySelector("#result").value = result;
});
