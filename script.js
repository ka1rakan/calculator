const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const specials = document.querySelectorAll(".special");
const displayP = document.querySelector(".display p");

let a=0;
let b=0;
let operator="";

operators.forEach((op)=>{
    op.addEventListener("click",(e)=>{
        operator = e.target.innerText;
    })
})

numbers.forEach((number)=>{
    number.addEventListener("click",(e)=>{
        if(operator){
            b+= e.target.innerText;
        }else{
            a+= e.target.innerText
        }
    })
})

let result;
function operation(a,b,operator){
    a = Number(a);
    b = Number(b);
    if(operator=="%"){
       result = a%b 
    }else if(operator=="/"){
        result = a/b
    }else if(operator=="x"){
        result = a*b
    }else if(operator=="-"){
        result = a-b
    }else if(operator=="+"){
        result = a+b
    }
}

specials.forEach((special)=>{
    special.addEventListener("click",(e)=>{
        if(e.target.innerText=="="){
            console.log(a,b,operator)
            operation(a,b,operator)
            console.log(result)
            a=0;
            b=0;
            operator="";
        }
    })
})