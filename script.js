const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const specials = document.querySelectorAll(".special");
const mainOP = document.querySelector(".main-operation");
const history = document.querySelector(".history");

let a="0";
let b="0";
let operator="";

operators.forEach((op)=>{
    op.addEventListener("click",(e)=>{
        if(operator==""){
            operator = e.target.innerText;
            mainOP.textContent += operator;
        }else{
            if(b=="0"){
                operator=e.target.innerText;
                mainOP.textContent = mainOP.textContent.slice(0,mainOP.textContent.length-1)
                mainOP.textContent += operator;
            }else{
                mainOP.textContent="ERROR"
            }
        }
    })
})

numbers.forEach((number)=>{
    number.addEventListener("click",(e)=>{
        if(operator){
            if(b=="0"){
                b = e.target.innerText;
                mainOP.textContent += e.target.innerText;
            }else if(b!="0"){
                b += e.target.innerText;
                mainOP.textContent += e.target.innerText;
            }  
        }else{
            if(a=="0"){
                a = e.target.innerText; 
                mainOP.textContent = e.target.innerText;
            }else if(a!="0"){
                a += e.target.innerText;
                mainOP.textContent += e.target.innerText;
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
            mainOP.textContent=result;
        }else if(e.target.innerText=="C"){
            a="0";
            b="";
            operator="";
            mainOP.textContent = a;
        }
    })
})