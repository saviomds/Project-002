document.addEventListener("DOMContentLoaded", () => {
  const menuCheckbox = document.querySelector(".menu-checkbox");

  const clickSound = document.getElementById("click-sound");

  menuCheckbox.addEventListener("change", () => {
    if (menuCheckbox.checked) {
      clickSound.play();
    } else {
      clickSound.play();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const linkToPage = document.getElementById("linkToPage");
  const clickSound = document.getElementById("click-sound");

  linkToPage.addEventListener("click", (event) => {
    // Play the sound
    clickSound.play();

    // Add a small delay to ensure the sound plays before navigating
    event.preventDefault(); // Prevent the default action (for demonstration)
    setTimeout(() => {
      window.location.href = linkToPage.href; // Navigate after sound plays
    }, 200); // Delay should be slightly longer than the sound duration
  });
});
