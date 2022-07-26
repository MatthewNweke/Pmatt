let getSubmitBtn = document.querySelector("#sub");
let getUsername = document.querySelector("#email-username");
let getPassword = document.querySelector(".password1");
getSubmitBtn.addEventListener("click", (e) => {
    if (getUsername.value === "" || getPassword.value === "") {
        e.preventDefault();
    }
});
getSubmitBtn.addEventListener("mouseover",()=>{
    if (getUsername.value !== "" && getPassword.value !== "") {
        getSubmitBtn.classList.add("changeCursor");
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
