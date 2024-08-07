function register() {
  const registerButton = document.getElementById("register");
  const errMsg = document.querySelector(".error");
  const successMsg = document.querySelector(".success");

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  registerButton.onclick = (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#E-mail").value.trim();
    const password = document.querySelector("#password").value.trim();

    errMsg.style.display = "none";
    successMsg.style.display = "none";

    if (!isValidEmail(email)) {
      errMsg.style.display = "block";
      errMsg.innerHTML = "Invalid e-mail address.";
    } else if (name === "" || email === "" || password === "") {
      errMsg.style.display = "block";
      errMsg.innerHTML = "Please fill all fields.";
    } else {
      // Validation Here backend

      successMsg.style.display = "block";
      successMsg.innerHTML = "Successfully, user created.";
    }
  };
}

document.addEventListener("DOMContentLoaded", () => {
  register();
});
