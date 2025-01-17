const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const countLable = document.getElementById("countLable");
let count = 0;

increase.onclick = function(){
    count ++;
    countLable.textContent = count;
}

decrease.onclick = function(){
    count --;
    countLable.textContent = count;
}

reset.onclick = function(){
    count = 0;
    countLable.textContent = count;
}