
var calculator = {
    displayValue: "0",
    firstNumber : "0",
    done: false,
    operator: null,
    secondNumber : "0"
};

var answer= 0;



var display= document.querySelector('#display');

function press(num){
    display.innerText += num;

} 

function setOP(op){
    calculator.done = true;
    calculator.operator = op;
    calculator.displayValue= display.innerText;
    calculator.firstNumber= display.innerText;
    console.log(calculator);
    display.innerText= "0";
}

function calculate(){
    calculator.secondNumber= display.innerText;
    console.log(calculator);
    newFirst= parseInt(calculator.firstNumber, 10)
    newSecond= parseInt(calculator.secondNumber, 10)
    if (calculator.operator == '+'){
        answer = newFirst + newSecond;
    } else if (calculator.operator == '-'){
        answer= newFirst - newSecond;
    } else if (calculator.operator == '*'){
        answer = newFirst * newSecond;
    } else if (calculator.operator == '/'){
        answer= newFirst / newSecond;
    }
    display.innerText=answer;
    console.log(answer);
}

function clr(){
    document.querySelector('#display').innerText ="0";
}


