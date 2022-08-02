let getSubmitBtn = document.querySelector("#sub");
let getEmail = document.querySelector("#email");
let getPassword = document.querySelector(".password1");
// let validEmail = "@email.com";
// let validGmail = "gmail.com";
// let validYahooMail = "@yahoomail.com";
// let mails = [validEmail, validGmail, validYahooMail]
// mails.forEach(() => {

// })
// let validEmail=getEmail.endsWith("@email.com").toLowerCase();
// let validGmail=getEmail.endsWith("@gmail.com").toLowerCase();
// let validYahoo=getEmail.endsWith("@yahoomail.com").toLowerCase();

getSubmitBtn.addEventListener("submit", (e) => {
    if (getEmail.value.trim() === ""
        || getPassword.value.trim() === ""
        ||
        (!(getEmail.value.endsWith("@gmail.com")))

    ) {
        // e.preventDefault();
        getSubmitBtn.disabled = true;
    }
});
getSubmitBtn.addEventListener("mouseover", () => {
    if (getEmail.value.trim() !== "" && getPassword.value.trim() !== "") {
        if (getEmail.value.endsWith("@gmail.com")) {
            getSubmitBtn.style.opacity = "1";
            getSubmitBtn.style.fontWeight = "800";
            getSubmitBtn.style.color = "whitesmoke";
            getSubmitBtn.classList.add("changeCursor");
            getSubmitBtn.style.backgroundColor = "rgb(87 171 255)";
            getSubmitBtn.disabled = false;
        }
    }
    if (getEmail.value.trim() === "" || getPassword.value.trim() === "") {
        getSubmitBtn.style.opacity = "0.5";
        getSubmitBtn.classList.remove("changeCursor");
    }
});
// let mails = [validEmail, validGmail, validYahoo];
// mails.forEach((n) => {
//     if (n.endsWith("@gmail.com")
//         || n.endsWith("@getEmail.com") ||
//         n.endsWith("@yahoo,ail.com")) {
//         console.log(getEmail.value);
//     }
//     else {
//         // console.log(n);
//     }
// })
// getEmail.addEventListener("input", () => {
//     // getSubmitBtn.style.opacity = "1";
//     // getSubmitBtn.style.color = "black"
//     getSubmitBtn.style.backgroundColor = "rgb(87 171 255)"
//     getSubmitBtn.classList.add("changeCursor");
// })

// getSubmitBtn.addEventListener("keydown",(e)=>{
// // console.log(e.keyCode);
// if(e.keyCode===13){
//     if (getUsername.value !== "" || getPassword.value !== "") {
//         e.preventDefault();
//     }
// }
// });
// e.keyCode===13 key code*****
