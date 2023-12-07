// Predefined username and password
const correctUsername = "Sagar";
const correctPassword = "pass123";

function login() {
  const username = document.getElementById("loginuname").value; //get the username from conts correctusername
  const password = document.getElementById("loginpassword").value; //get the username from conts correctpassword

  // Check if the entered username and password match the given values
  if (username === correctUsername && password === correctPassword) {
    // If matched, display a success message and redirect to exam page
    alert("Login successful!")
    window.location.href="exam.html"

  } else {
    // If not matched, display an error message
    alert("Incorrect username or password. Please try again.");
  }
}
