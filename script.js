const total = document.getElementById("total"); 
const percent = document.getElementById("percent"); 
const tip = document.getElementById("tip"); 
const submit = document.getElementById("submit"); 

function Multiply() {
    tvalue = total.value;
    pvalue = "0." + percent.value; 

    tip.value = tvalue * pvalue; 
}

submit.addEventListener("click", (e) => {
    Multiply()
    e.preventDefault(); 
    total.value = ""; 
    percent.value = ""; 
})

