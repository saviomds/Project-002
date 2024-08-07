function login() {
  const loginButton = document.getElementById("login");
  const errMsg = document.querySelector(".error");
  const successMsg = document.querySelector(".success");

  loginButton.onclick = (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const password = document.querySelector("#password").value.trim();

    errMsg.style.display = "none";
    successMsg.style.display = "none";

    if (name === "" || password === "") {
      errMsg.style.display = "block";
      errMsg.innerHTML = "Please fill all fields.";
    } else {
      // Validation Here backend
      window.location.href = "../Pages/Home.html";
    }
  };
}

document.addEventListener("DOMContentLoaded", () => {
  login();
});
