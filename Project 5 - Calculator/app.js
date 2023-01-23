// DOM
// Operators
const percentage = document.getElementById('percentage');
const CE = document.getElementById('CE');
const C = document.getElementById('C');
const returnElement = document.getElementById('return');
const fraction = document.getElementById('fraction');
const quadratic = document.getElementById('quadratic');
const squareRoot = document.getElementById('square-root');
const division = document.getElementById('division');
const sum = document.getElementById('sum');
const multiplication = document.getElementById('multiplication');
const difference = document.getElementById('difference');
const negativePositive = document.getElementById('negative-positive');

// Numbers
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const comma = document.getElementById('comma');

// Equal
const equal = document.getElementById('equal');

// output
const output = document.getElementById('output');

// test

// other variables
let expression = [];
let number = [];
expression.push(' ');
let result = '';
let operator = '';



// DOM
// special buttons
CE.addEventListener('click', () =>
{
    expression.pop();
    number = [];
    expression.push(' ')
    output.innerText = expression.join(' ');
})
C.addEventListener('click', () =>
{
    expression = [];
    number = [];

    output.innerText = expression.join(' ');
})
returnElement.addEventListener('click', () =>
{
    if (number.length > 1)
    {
        number.pop();
        
    }
    else
    {
        number = [0];
    }
    expression.pop();
    expression.push(parseFloat(number.join("")));
    output.innerText = expression.join(' ');
})

// Operators
// percentage.addEventListener('click', () =>
// {
//     expression.push(percentage.textContent);
//     output.innerText = expression.join();
// })

fraction.addEventListener('click', () =>
{
    expression[expression.length - 1] = 1/expression[expression.length - 1]
    output.innerText = expression.join(' ');
    number = [];
})
quadratic.addEventListener('click', () =>
{
    expression[expression.length - 1] = (expression[expression.length - 1])**2
    output.innerText = expression.join(' ');
    number = [];
})
squareRoot.addEventListener('click', () =>
{
    expression[expression.length - 1] = (expression[expression.length - 1])**0.5
    output.innerText = expression.join(' ');
    number = [];
})
negativePositive.addEventListener('click', () =>
{
    expression[expression.length - 1] = -(expression[expression.length - 1])
    output.innerText = expression.join(' ');
    number = [];
})
// Normal Operators
division.addEventListener('click', () =>
{
    number = [];
    console.log(expression);
    if (operator !== '')
    {
        console.log(expression);
        operator = division.textContent;
        expression.pop();
        expression.pop();
        expression.push(operator);
        expression.push(" ");
    }
    else
    {
        operator = division.textContent;
        expression.push(operator);
        expression.push(" ");
    }
    output.innerText = expression.join(" ");
})
sum.addEventListener('click', () =>
{
    number = [];
    if (operator !== '')
    {
        operator = sum.textContent;
        expression.pop();
        expression.pop();
        expression.push(operator);
        expression.push(" ");
    }
    else
    {
        operator = sum.textContent;
        expression.push(operator);
        expression.push(" ");
    }
    output.innerText = expression.join(" ");
})
multiplication.addEventListener('click', () =>
{
    number = [];
    if (operator !== '')
    {
        operator = multiplication.textContent;
        expression.pop();
        expression.pop();
        expression.push(operator);
        expression.push(" ");
    }
    else
    {
        operator = multiplication.textContent;
        expression.push(operator);
        expression.push(" ");
    }
    output.innerText = expression.join(" ");
})
difference.addEventListener('click', () =>
{
    number = [];
    if (operator !== '')
    {
        operator = difference.textContent;
        expression.pop();
        expression.pop();
        expression.push(operator);
        expression.push(" ");
    }
    else
    {
        operator = difference.textContent;
        expression.push(operator);
        expression.push(" ");
    }
    output.innerText = expression.join(" ");
})

// numbers
comma.addEventListener('click', () =>
{
    number.push('.');
    expression.pop();
    expression.push(parseFloat(number.join("")));
    output.innerText = expression.join(" ");
})
zero.addEventListener('click', () =>
{
    operator = '';
    number.push(zero.textContent);
    expression.pop();
    expression.push(parseFloat(number.join("")));
    output.innerText = expression.join(" ");
})
one.addEventListener('click', () =>
{
    operator = '';
    number.push(one.textContent);
    expression.pop();
    expression.push(parseFloat(number.join("")));
    output.innerText = expression.join(" ");
})
two.addEventListener('click', () =>
{
    operator = '';
    number.push(two.textContent);
    expression.pop();
    expression.push(parseFloat(number.join("")));
    output.innerText = expression.join(" ");
})
three.addEventListener('click', () =>
{
    operator = '';
    number.push(three.textContent);
    expression.pop();
    expression.push(parseFloat(number.join("")));
    output.innerText = expression.join(" ");
})
four.addEventListener('click', () =>
{
    operator = '';
    number.push(four.textContent);
    expression.pop();
    expression.push(parseFloat(number.join("")));
    output.innerText = expression.join(" ");
})
five.addEventListener('click', () =>
{
    operator = '';
    number.push(five.textContent);
    expression.pop();
    expression.push(parseFloat(number.join("")));
    output.innerText = expression.join(" ");
})
six.addEventListener('click', () =>
{
    operator = '';
    number.push(six.textContent);
    expression.pop();
    expression.push(parseFloat(number.join("")));
    output.innerText = expression.join(" ");
})
seven.addEventListener('click', () =>
{
    operator = '';
    number.push(seven.textContent);
    expression.pop();
    expression.push(parseFloat(number.join("")));
    output.innerText = expression.join(" ");
})
eight.addEventListener('click', () =>
{
    operator = '';
    number.push(eight.textContent);
    expression.pop();
    expression.push(parseFloat(number.join("")));
    output.innerText = expression.join(" ");
})
nine.addEventListener('click', () =>
{
    operator = '';
    number.push(nine.textContent);
    expression.pop();
    expression.push(parseFloat(number.join("")));
    output.innerText = expression.join(" ");
})

// Equal
equal.addEventListener('click', () =>
{
    number = [];
    result = eval(expression.join(' '));
    expression.push(equal.textContent);
    expression.push(" ");
    output.innerText = expression.join(" ");
    expression.push(result.toString());
    output.innerText = expression.join(" ");
    expression = [result];
})


