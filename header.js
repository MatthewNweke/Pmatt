let hamburgger = document.querySelector(".hamburgger");
let backDrop = document.querySelector(".backdrop");
let getNavLinks = document.querySelector("ul");

//  Toggle button
function showContent() {
    if (getNavLinks.style.display==="block") {
        getNavLinks.style.display= "none";
        hamburgger.innerHTML=" &#9776";
    } else {
        hamburgger.innerHTML=" &#x2715";
        getNavLinks.style.display= "block";
    }
}
hamburgger.addEventListener("click", () => {
    if (getNavLinks.style.display === "none") {
        backDrop.style.display = "none";
    }
    else {
        backDrop.style.display = "block";
    }
});
 
// removing feature-link default
let changeLinkDefault = document.querySelector(".feature a");
changeLinkDefault.addEventListener("click", (e) => {
    e.preventDefault();
});
   
// backdrop
backDrop.addEventListener("click", ()=>{
    getNavLinks.style.display = "none";
    backDrop.style.display = "none";
    hamburgger.innerHTML=" &#9776";
});




