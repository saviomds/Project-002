function errorMsg() {
  const btn = document.getElementById("btn");

  btn.onclick = (e) => {
    e.preventDefault();
    const checkName = document.querySelector("#name").value;

    const errMsg = document.querySelector(".error");
    const SuccessMsg = document.querySelector(".success");
    setTimeout(() => {
      errMsg.style.display = "none";
    }, 3000);
    if (checkName.trim() === "") {
      errMsg.style.display = "block";
      errMsg.innerHTML = "Please enter your E-mail";
    }

    if (checkName !== "") {
      function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      }
      const email = "example@example.com";
      if (!isValidEmail(checkName)) {
        errMsg.style.display = "block";
        errMsg.innerHTML = "Invalid Email";
      } else {
        SuccessMsg.style.display = "block";
        SuccessMsg.innerHTML =
          '<i class="fa-solid fa-spinner spinning"></i>' + " " + "pending....";
        setInterval(() => {
          SuccessMsg.innerHTML =
            "Done" +
            " " +
            '<i class="fa-solid fa-check"></i>' +
            ", Check verification code on mail";
        }, 3000);
      }
    } else {
      SuccessMsg.style.display = "none";
    }
  };
}
document.addEventListener("DOMContentLoaded", () => {
  errorMsg();
});
