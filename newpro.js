function showContent() {
    let getNavLinks = document.querySelector("ul").style.display;
    if (getNavLinks==="block") {
        document.querySelector("ul").style.display = "none";
        hamburgger.innerHTML=" &#9776";
// jachi's first javascript code
    } else {
        document.querySelector("ul").style.display = "block";
        hamburgger.innerHTML=" &#x2715 ";
    }
}
let changeLinkDefault = document.querySelector(".feature a");
changeLinkDefault.addEventListener("click", (e) => {
    e.preventDefault();
});

var backDrop = document.querySelector(".backdrop");
backDrop.addEventListener("click", () => {
    let ul = document.querySelector("ul");
    ul.style.display = "none";
    backDrop.style.display = "none";
    hamburgger.innerHTML=" &#9776";
});
let hamburgger = document.querySelector(".hamburgger");
hamburgger.addEventListener("click", () => {
    let getNavLinks = document.querySelector("ul").style.display;
    if (getNavLinks == "none") {
        backDrop.style.display = "none";

    }
    else {
        backDrop.style.display = "block";
        
    }
});



