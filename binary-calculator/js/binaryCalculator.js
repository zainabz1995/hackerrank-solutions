var opr = "";
function action(e) {
    /* Older IE browsers have a srcElement property,
        but other browsers have a 'target' property; 
        Set btn to whichever exists. */
    var btn = e.target || e.srcElement;
    /* Get the clicked element's innerHTML */
    //document.getElementById(btn.id).innerHTML++;
    if(btn.id=="btnClr")
    {
        document.getElementById("res").innerHTML = "";
    }
    else {
     document.getElementById("res").innerHTML += document.getElementById(btn.id).innerHTML;   
    }
}

function calculate(e) {
    var btn = e.target || e.srcElement;
    //document.getElementById(btn.id).innerHTML++;
    my_expr = document.getElementById("res").innerHTML;
    operands = my_expr.split(opr);
    let expression = "";
    expression = operands[0] + opr + operands[1];
    /*for(let i=0; i<operands.length; i++) {
        expression+=operands[i]+opr;
        
    } */
    document.getElementById("res").innerHTML = eval(expression);
}

function operation(e) {
    var btn = e.target || e.srcElement;
    opr = document.getElementById(btn.id).innerHTML;
    document.getElementById("res").innerHTML += document.getElementById(btn.id).innerHTML;
}
            
/* Set each button to call action(e) when clicked */
document.getElementById('btn0').onclick = action;
document.getElementById('btn1').onclick = action;
document.getElementById('btnClr').onclick = action;
document.getElementById('btnEql').onclick = calculate;

document.getElementById('btnSum').onclick = operation;
document.getElementById('btnSub').onclick = operation;
document.getElementById('btnMul').onclick = operation;
document.getElementById('btnDiv').onclick = operation;

