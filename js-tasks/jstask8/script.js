document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear all previous error messages
    document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

    let isValid = true;

    function showError(id, message) {
      document.getElementById(id + "Error").textContent = message;
      isValid = false;
    }

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const rePassword = document.getElementById("rePassword").value;
    const age = document.getElementById("age").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const state = document.getElementById("state").value.trim();
    const country = document.getElementById("country").value;
    const declaration = document.getElementById("declaration").checked;

    if (firstName.length < 2) showError("firstName", "POOR");
    if (lastName.length < 2) showError("lastName", "POOR");
    if (!email.includes("@") || email.length < 5) showError("email", "POOR");
    if (password.length < 6) showError("password", "POOR");
    if (rePassword !== password) showError("rePassword", "POOR OR MISMATCH");
    if (isNaN(age) || age < 1 || age > 120) showError("age", "POOR");
    if (!/^\d{10}$/.test(phone)) showError("phone", "POOR");
    if (address.length < 5) showError("address", "POOR");
    if (state.length < 2) showError("state", "POOR");
    if (!country) showError("country", "Please select a country");
    if (!declaration) alert("Please accept the declaration.");

    if (isValid) {
      alert("Form submitted successfully!");
      this.reset();
    }
  });
