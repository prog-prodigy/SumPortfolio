document.querySelector("button").addEventListener("click",function(){
    document.body.classList.toggle("nav-open")
})


for(let i=0; i<document.querySelectorAll(".navlink").length; i++){
document.querySelectorAll(".navlink")[i].addEventListener("click",function(){
    document.body.classList.remove  ("nav-open")
})
}
