
var calculator = {
    answer: "0",
    firstNumber : "0",
    operator: null,
    secondNumber : "0"
};

var answer= 0;



var display= document.querySelector('#display');
var decimal= document.getElementById('decimal');

function press(num){
    if(display.innerText=="0" || calculator.answer>0){
        display.innerText ="";
    }
    if(num== "."){
        decimal.disabled = true;
    }
    calculator.answer="0";
    display.innerText += num;
} 

function setOP(op){
    calculator.operator = op;
    calculator.firstNumber= display.innerText;
    console.log(calculator);
    display.innerText= "0";
    decimal.disabled = false;
}

function calculate(){
    calculator.secondNumber= display.innerText;
    console.log(calculator);
    newFirst= parseFloat(calculator.firstNumber);
    newSecond= parseFloat(calculator.secondNumber);
    if (calculator.operator == '+'){
        answer = (newFirst.toFixed(8) *100000000 + newSecond.toFixed(8)* 100000000) / 100000000;
    } else if (calculator.operator == '-'){
        answer= (newFirst.toFixed(8) *100000000 - newSecond.toFixed(8)* 100000000) / 100000000;
    } else if (calculator.operator == '*'){
        answer = (newFirst.toFixed(8) *100000000 * newSecond.toFixed(8)* 100000000) / 100000000;
    } else if (calculator.operator == '/'){
        answer= (newFirst.toFixed(8) *100000000 / newSecond.toFixed(8)* 100000000) / 100000000;
    }
    display.innerText=answer;
    calculator.answer=answer;
    console.log(calculator);
    console.log(answer);
}

function clr(){
    document.querySelector('#display').innerText ="0";
    calculator.answer="0";
    calculator.firstNumber="0";
    calculator.operator= null;
    calculator.secondNumber= "0";
    console.log(calculator);
}


