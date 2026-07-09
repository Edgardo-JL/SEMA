const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const button =
    document.querySelector(".login-btn");

  button.innerText = "Ingresando...";

  button.style.opacity = ".8";

  setTimeout(() => {

    // Redireccionar al dashboard
    window.location.href = "dashboard.html";

  }, 1500);

});