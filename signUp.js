const emailAddress = document.querySelector("#email").value;
const submitBtn = document.querySelector("#submit");
// console.log(emailAddress.toLowercase());
submitBtn.addEventListener("submit", (e) => {
    if (!(emailAddress.endsWith("@gmail.com"))) {
        e.preventDefault();
    }
})
