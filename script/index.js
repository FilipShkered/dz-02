let num1 = prompt('Type the number 1', '');
// num1 = Number(num1); Вариант №1  

let operator = prompt('type operator: + - / *', '');

let num2 = prompt('Type the number 2', '');
// num2 = Number(num2); Вариант №1 

switch (operator) {
    case '+':
        result = Number(num1) + Number(num2); //Вариант №2
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