let scrollContainer = document.querySelector(".image-gallery");
let backBtn = document.getElementById("back");
let forwardBtn = document.getElementById("forward")



scrollContainer.addEventListener("wheel",(evt) =>{
    evt.preventDefault()
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "smooth";

})

backBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += -900;
})

forwardBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
})