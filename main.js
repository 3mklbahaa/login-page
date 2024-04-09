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

function redirectToMainPage() {
  window.location.href = "mainpage.html"; // Change the URL to the desired destination
}
