function hide(element){
    var cookieBox=document.querySelector(element);
    cookieBox.remove();
}

function c2f(temp){
    return Math.round(9/5*temp+32);
}

function f2c(temp){
    return Math.round(5/9*(temp-32));
}

function changeTemp(element){
    console.log(element.value);
    for(var i=1; i<9; i++){
        var tempElement= document.querySelector("#temp" +i);
        var temperature= parseInt(tempElement.innerText);
        if(element.value == "C"){
            tempElement.innerText = f2c(temperature);
        } else if (element.value == "F"){
            tempElement.innerText = c2f(temperature);
        }
    }

}