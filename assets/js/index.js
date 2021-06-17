const form = document.querySelector("form");
const email = form.querySelector("input[type='email']");
const error = document.querySelector(".email");

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateEmail(email.value)) {
        error.classList.remove("error");
    } else {
        error.classList.add("error");
    };
});