function calc(){
    var num1=parseInt(document.querySelector('#num1').value);
    var num2=parseInt(document.querySelector('#num2').value);
    var op=document.querySelector('#op').value;
    var calculate;
    if(op=='add'){
        calculate=num1+num2;
    }else if(op=='sub'){
        calculate=num1-num2;
    }else if(op=='mul'){
        calculate=num1*num2;
    }else if(op=='div'){
        calculate=num1/num2;
    }
    
    alert("Answer is "+calculate);
