
var buttons = document.getElementsByClassName("button");
var display = document.querySelector("#display");
var operand1 = 0;
var operand2 = null;
var operator = null;
// display.innerText = 1;
for(var i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        if(value == '+' || value == '*' || value == '/' || value == '-'){
            operator = value;
            operand1 = parseFloat(display.textContent);
            display.innerText = "";
        }else if(value == '='){
            operand2 = parseFloat(display.textContent);
            var ans = operand1 + operator + operand2;
            display.innerText = eval(ans);
        }else if(value == 'AC'){
            display.innerText = "";
        }

        else{
        display.innerText += value;
            
        }

    });
}
