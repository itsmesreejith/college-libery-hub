const loginForm = document.getElementById("login-form");
const showPassword = document.getElementById("show-password");
const passwordField = document.getElementById("password");

showPassword.addEventListener("click", togglePasswordVisibility);

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Basic validation - you can replace this with your own logic
    if (username === "yourusername" && password === "yourpassword") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

function togglePasswordVisibility() {
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

