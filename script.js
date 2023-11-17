const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator")
const displayP = document.querySelector(".display p")

let a=0;
let b=0;
let operator="";
operators.forEach((op)=>{
    op.addEventListener("click",(e)=>{
        operator += e.target.innerText;
        console.log(operator)
    })
})
numbers.forEach((number)=>{
    number.addEventListener("click",(e)=>{
        if(operator){
            b+= e.target.innerText;
        }else{
            a+= e.target.innerText
        }
        console.log(a,b)
    })
})