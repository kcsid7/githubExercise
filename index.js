console.log("hello world!")

const btn = document.querySelector("#clickMe");
const btn2 = document.querySelector("#clickMe2");

const body = document.querySelector("body");


btn.addEventListener("click", function() {
    alert("You clicked me");
})

btn2.addEventListener("click", function() {
    body.style.backgroundColor = "red"
    body.style.color = "white"
    setTimeout(function() {
        body.style.backgroundColor = "teal"
        body.style.color = "black"
    }, 2000)
})