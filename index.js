
// get navbbar element 
const navbarEl = document.getElementsByClassName("nav-bar")[0];

// let heightBottomContainer = bottomContainerEl.offsetTop

// get bottom element 
const bottomContainerEl = document.getElementsByClassName("bottom-container")[0];
// const navbarEl = document.querySelector(".nav-bar")[0];

// console.log(bottomContainerEl.offsetTop);

// add event listener to detect scrolling event
window.addEventListener("scroll", ()=>{
    // if distance you've scrolled is greater than distance to start of bottom element minus height of navbar and any margin then change color of navbar and text
    if(window.scrollY > (bottomContainerEl.offsetTop-navbarEl.offsetHeight -50)){

        // add class to navbar so css elements listed in acitve class are overriden
        navbarEl.classList.add("active");
        
    }
    else{
        // remove it when you scroll back up 
        navbarEl.classList.remove("active");
    }
    // console.log(window.scrollY);
})