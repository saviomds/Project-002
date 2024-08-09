const listDown = document.querySelector(".list-down");
const dropbtn = document.querySelector(".dropbtn");

// Initialize dropdown to be hidden
listDown.style.display = "none";

// Function to toggle the dropdown
function toggleDropdown() {
  if (listDown.style.display === "none") {
    listDown.style.display = "block";
  } else {
    listDown.style.display = "none";
  }
}

// Add click event listener to the button
dropbtn.addEventListener("click", (event) => {
  event.preventDefault();
  toggleDropdown();
});
const example = document.querySelector(".example");

// Define the code content with comments and special characters
const codeContent = `
// Define function
function showMessage() {
    alert("Hello from JavaScript!");
}
// Calling function
showMessage();
`;

// Set the content as text
example.textContent = codeContent;
