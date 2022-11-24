
// creating an object I can change with the functions
var calculator = {
    answer: "0",
    firstNumber : "0",
    operator: null,
    secondNumber : "0"
};

// variables used globally in functions
var answer= 0;
var display= document.querySelector('#display');
var decimal= document.getElementById('decimal');

// when a input button is pressed, this will
// clear the 0 placeholder from the display,
// disable the decimal button
// if that is the one pushed to keep it from allowing
// more than one decimal,
// and then reset the object answer to 0 
// so that we can clear the 0 for other operands
// and in the end will push the input pressed into the display
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

// this will set the operator to the input from the operator button
// then assign the firstNumber a value within the object
// log for check
// then reset the display to 0
// then enable the decimal so it can be used in a second operand
function setOP(op){
    calculator.operator = op;
    calculator.firstNumber= display.innerText;
    console.log(calculator);
    display.innerText= "0";
    decimal.disabled = false;
}

// this assigns secondNumber a value based on what is in the display
// log check
// parseFloat to make the strings numbers to be able to perform the math
// choose which math to operate based on the value of the object operator
// change the display to the answer
// change the answer value in the object to the answer 
// log checks
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
        answer = ((newFirst.toFixed(8) *100000000)/ 100000000 * (newSecond.toFixed(8)* 100000000)/ 100000000) ;
    } else if (calculator.operator == '/'){
        answer= ((newFirst.toFixed(8) *100000000) / (newSecond.toFixed(8)* 100000000))/ 100000000;
    }
    display.innerText=answer;
    calculator.answer=answer;
    console.log(calculator);
    console.log(answer);
}

// resets the object values and the display and enables the decimal and log checks the result
function clr(){
    document.querySelector('#display').innerText ="0";
    calculator.answer="0";
    calculator.firstNumber="0";
    calculator.operator= null;
    calculator.secondNumber= "0";
    decimal.disabled= false;
    console.log(calculator);
}


