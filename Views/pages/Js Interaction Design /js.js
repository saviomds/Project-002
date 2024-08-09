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
const example2 = document.querySelector(".example2");
const example3 = document.querySelector(".example3");

example.textContent = `
// Define function
function showMessage() {
    alert("Hello from JavaScript!");
}
// Calling function
showMessage();`;

example2.textContent = `
// Var
function example() {
    console.log(x); // undefined (due to hoisting)
    var x = 10;
    if (true) {
        var x = 20; // Same variable as above, re-declared
        console.log(x); // 20
    }
    console.log(x); // 20
}
example();

// Let
function example2() {
    // console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 10;
    if (true) {
        let x = 20; // Different variable, block scoped
        console.log(x); // 20
    }
    console.log(x); // 10
}
example2();
`;

example3.textContent = `
function example() {
    const x = 10;
    // x = 20; // TypeError: Assignment to constant variable.
    if (true) {
        const x = 20; // Different variable, block scoped
        console.log(x); // 20
    }
    console.log(x); // 10
}
example();
`;
