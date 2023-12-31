const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const specials = document.querySelectorAll(".special");
const mainOP = document.querySelector(".main-operation");
const history = document.querySelector(".history");
const clear = document.querySelector("#clear");

let a="0";
let b="0";
let operator="";

operators.forEach((op)=>{
    op.addEventListener("click",(e)=>{
        if(a=="ERROR"){
            a="0";
            operator=e.target.innerText;
            mainOP.textContent = `${a} ${operator}`
        }else{
            if(operator==""){
                operator = e.target.innerText;
                mainOP.textContent += ` ${operator} `;
            }else{
                if(b=="0" || b==""){
                    operator=e.target.innerText;
                    mainOP.textContent = mainOP.textContent.slice(0,mainOP.textContent.length-1)
                    mainOP.textContent += operator;
                }else{
                    calculate(a,b,operator);
                    a=result;
                    b="";
                    operator=e.target.textContent;
                    mainOP.textContent= `${a} ${operator} `;
                }
            }
        }
        
    })
})

numbers.forEach((number)=>{
    number.addEventListener("click",(e)=>{
        clear.textContent="C"
        if(operator){
            if(b=="0"){
                b = e.target.innerText;
                mainOP.textContent += e.target.innerText;
            }else if(b!="0"){
                b += e.target.innerText;
                mainOP.textContent += e.target.innerText;
            }  
        }else{
            if(a=="0" || a=="ERROR"){
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
    if(operator=="÷"){
        if(b==0){
            result = "ERROR"
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
            if(b=="0"){
                mainOP.textContent = a;
                history.textContent = a;
            }else{
                calculate(a,b,operator)
                history.textContent = `${a} ${operator} ${b}`
                a = String(result);
                b="0";
                operator="";
                mainOP.textContent=result;
            }
        }else if(e.target.id=="clear"){
            if(mainOP.textContent!=="0"){
                a="0";
                b="";
                operator="";
                mainOP.textContent = a;
                clear.textContent="AC"
            }else{     
                history.textContent=""
            }  
        }else if(e.target.id=="delete"){
            mainOP.textContent = mainOP.textContent.slice(0, mainOP.textContent.length-1);
            if(a!=="" && operator==""){
                a = a.slice(0,a.length-1)
            }else if(operator!="" && b=="0" || b==""){
                operator = "";
            }else if(operator!="" && b!="0" || b!=""){
                b = b.slice(0,b.length-1)
            }
        }
    })
})
