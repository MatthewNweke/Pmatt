let getSubmitBtn = document.querySelector("#sub");
let getUsername = document.querySelector("#email-username");
let getPassword = document.querySelector(".password1");
let password2 = document.querySelector("password2");

getSubmitBtn.addEventListener("click", (e) => {
    if (getUsername.value === "" || getPassword.value === "" || password2.value === "") {
        e.preventDefault();
    }
});
getSubmitBtn.addEventListener("mouseover", () => {
    if (getUsername.value !== "" && getPassword.value !== "" && password2.value !== "") {
        getSubmitBtn.classList.add("changeCursor");
    }
});