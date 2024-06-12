const loginForm = document.getElementById("login-form");
const email = document.getElementById("email");
const btnSubmit = document.getElementById("btn-submit");
const error = document.getElementById("error");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value === "alphabeez@gmail.com") {
    location.href = "/index.html";
  } else {
    error.classList.remove("hidden");
  }
});
// email.addEventListener('')
email.addEventListener("input", () => {
  email.classList.remove("bg-red-500", "text-white");
  if (email.value !== "") {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});

const emailOnchangeHandle = () => {
  btnSubmit.disabled = false;
};
