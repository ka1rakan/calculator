const buttons = document.querySelectorAll(".button");
const displayP = document.querySelector(".display p")

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        displayP.innerText = e.target.innerText;
    })
})