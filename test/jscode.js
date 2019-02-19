function calc()
{   
    var operand1 = parseInt(document.getElementById('operand1').value); 

    var operand2 = parseInt(document.getElementById('operand2').value);

    var oper = document.getElementById('operators').value;

    if (oper === '+') {
        var operand2 = document.getElementById('result').value = operand1 + operand2;
    }
    else if (oper === '-'){
        var operand2 = document.getElementById('result').value =  operand1 + operand2;
    }
    else if (oper === '/'){
        var operand2 = document.getElementById('result').value =  operand1 + operand2;
    }
    else if (oper === '*'){
        var operand2 = document.getElementById('result').value =  operand1 + operand2;
    
    }
 
    
 
}