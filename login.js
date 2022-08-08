let getSubmitBtn = document.querySelector("#submit");
let getEmail = document.querySelector("#email").value.trim();
let getPassword = document.querySelector(".password1").value.trim();
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// console.log(getEmail);
// console.log(getPassword);

getSubmitBtn.addEventListener("click", () => {
    if (getEmail.match(regexEmail)) {
        console.log(true);
    }
    else {
        console.log(false);
    }
})
// getSubmitBtn.addEventListener("click", (e) => {
//     function validateMail() {
//         if (getEmail.match(regexEmail)) {
//             // e.preventDefault();
//            console.log(true);
//         }
//         console.log(false);
//     }
//     validateMail()
// })

// getSubmitBtn.addEventListener("submit", (e) => {
// getSubmitBtn.addEventListener("keydown",(e)=>{
// // console.log(e.keyCode);
// if(e.keyCode===13){
//     if (getUsername.value !== "" || getPassword.value !== "") {
//         e.preventDefault();
//     }
// }
// });
// e.keyCode===13 key code*****
