function togglePasswordVisibility() {
  var passwordInput = document.getElementById("forPassword");
  var icon = document.getElementById("passwordToggle");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
}

document.getElementById("signupLink").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
  document.getElementById("Login-Signup").innerHTML = "Sign up";
});

document.getElementById("loginLink").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("Login-Signup").innerHTML = "log in";
});
