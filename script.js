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
        displayP.textContent += operator;
    })
})

numbers.forEach((number)=>{
    number.addEventListener("click",(e)=>{
        if(operator){
            if(b=="0"){
                b = e.target.innerText;
                displayP.textContent += e.target.innerText;
            }else if(b!="0"){
                b += e.target.innerText;
                displayP.textContent += e.target.innerText;
            }  
        }else{
            if(a=="0"){
                a = e.target.innerText; 
                displayP.textContent += e.target.innerText;
            }else if(a!="0"){
                a += e.target.innerText;
                displayP.textContent += e.target.innerText;
            }
        }
    })
})

let result;
function calculate(a,b,operator){
    a = Number(a);
    b = Number(b);
    if(operator=="%"){
       result = a%b 
    }else if(operator=="/"){
        if(b==0){
            result = "ERROR! You cannot divide with 0!"
        }else{
            result = a/b
        }
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
            calculate(a,b,operator)
            console.log(`${a} ${operator} ${b} = ${result}`)
            a = result;
            b=0;
            operator="";
            displayP.textContent=result;
        }
    })
})