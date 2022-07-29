let getSubmitBtn = document.querySelector("#sub");
let getUsername = document.querySelector("#email-username");
let getPassword = document.querySelector(".password1");

getSubmitBtn.addEventListener("click", (e) => {
    if (getUsername.value.trim() === "" || getPassword.value.trim() === "") {
        e.preventDefault();
    }
});
getSubmitBtn.addEventListener("mouseover",()=>{
    if (getUsername.value.trim() !== "" && getPassword.value.trim() !== "") {
        getSubmitBtn.style.opacity="1";
        getSubmitBtn.classList.add("changeCursor");
    }
    if (getUsername.value.trim() === "" || getPassword.value.trim() === "") {
        getSubmitBtn.style.opacity="0.5";
        getSubmitBtn.classList.remove("changeCursor");
    }
});

// getSubmitBtn.addEventListener("keydown",(e)=>{
// // console.log(e.keyCode);
// if(e.keyCode===13){
//     if (getUsername.value !== "" || getPassword.value !== "") {
//         e.preventDefault();
//     }
// }
// });
// e.keyCode===13 key code*****
