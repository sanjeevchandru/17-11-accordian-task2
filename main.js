var btns=document.querySelectorAll(".btn");
    console.log(open);

btns.forEach(function(e){
    var details=e.nextElementSibling;
    var rotate=e.lastElementChild;
    e.addEventListener("click",function(){
        details.classList.add("view");
        rotate.style.transform="rotate(90deg)";

    })
})

