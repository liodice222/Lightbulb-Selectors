// Write your code here
lightbulb1 = document.querySelector('#lightbulb1');
lightbulb2 = document.querySelector("#lightbulb2");
lightbulb3 = document.querySelector("#lightbulb3");
const subtitle = document.querySelector(".subtitle");

count = 0;
lightbulb1.addEventListener("click", function(){
    count ++;
    lightbulb1.classList.toggle("active");
    subtitle.innerHTML = `Count ${count}`;
})

lightbulb2.addEventListener("click", function(){
    count ++;
    lightbulb2.classList.toggle("active");
    subtitle.innerHTML = `Count ${count}`;
})

lightbulb3.addEventListener("click", function(){
    count ++;
    lightbulb3.classList.toggle("active");
    subtitle.innerHTML = `Count ${count}`;
})