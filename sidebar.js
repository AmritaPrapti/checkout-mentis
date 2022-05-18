let button = document.getElementById("order-summary");
let content = document.getElementsByClassName("hidden-height")
let arrow = document.getElementsByClassName("arrow-down")
let cartText = document.getElementsByClassName("btn-text")

 button.addEventListener('click', function () {
    content[0].classList.toggle("appear")
    if(content[0].classList.contains("appear")) {
        content[0].style.maxHeight = content[0].scrollHeight + "px";
        arrow[0].style.transform = "rotate(180deg)";
        // console.log(cartText);
        cartText[0].innerHTML = "Hide order summary"
    }
    else {
        content[0].style.maxHeight = 0;
        arrow[0].style.transform = "rotate(0deg)";
        cartText[0].innerHTML = "Show order summary"
    }
    
});

