
function animatedForum(){

    const arrwows = document.querySelectorAll(".fa-arrow-right");

    arrwows.forEach(arrow =>{
        arrow.addEventListener("click", () =>{
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement
            const nextForum = parent.nextElementSibling
            
            // Check validate
            if(input.type === "text" && validateUser(input)){
                nextSlide(parent, nextForum);
            }else if(input.type ==="email" && validateEmail(input)){
                 nextSlide(parent, nextForum);
            }else if(input.type === "password" && validateUser(input)){
                nextSlide(parent, nextForum);
            }else{
                parent.style.animation = "shake 0.5s ease"
            }

            parent.addEventListener("animationend", ()=> {
                parent.style.animation = "";
            })
        })
    })
}

function validateUser(user){
    if(user.value.length < 6){
        error("red")
    }
    else{
        error("rgb(87, 189,130)")
        return true;
    }
}

function validateEmail(email){
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(email.value)){
        error("rgb(87, 189,130)")
        return true;
    }else{
        error("red")
    }
}

function error(color){
    document.body.style.backgroundColor = color;
}

function nextSlide(parent, nextForum){
    parent.classList.remove("active");
    parent.classList.add("innactive")
    nextForum.classList.remove("innactive");
    nextForum.classList.add("active")
}
animatedForum();