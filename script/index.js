const num1 = Number(prompt('Type the number 1', '')); 

const operator = prompt('type operator: + - / *', '');

const num2 = Number(prompt('Type the number 2', ''));

let result;

switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        if (num2 > 0) {
           result = num1 / num2;
        } else {
           result = 'is not divisible by zero';
        }
        break;
    default:
       result = 'select an operator';
}


alert(`${num1} ${operator} ${num2} = ${result}`);