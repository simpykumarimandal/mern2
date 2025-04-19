// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Check if we're on the registration page
  const registrationForm = document.getElementById("registrationForm");
  if (registrationForm) {
    registrationForm.addEventListener("submit", handleRegistration);
  }

  // Check if we're on the view users page
  const userTableBody = document.getElementById("userTableBody");
  if (userTableBody) {
    displayUsers();
  }
});

// Function to handle user registration
function handleRegistration(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const address = document.getElementById("address").value;

  // Create user object
  const user = {
    name: name,
    email: email,
    contact: contact,
    address: address,
  };

  // Get existing users or initialize empty array
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Add new user
  users.push(user);

  // Save to localStorage
  localStorage.setItem("users", JSON.stringify(users));

  // Reset the form
  document.getElementById("registrationForm").reset();

  // Show success message
  alert("User registered successfully!");

  // Optionally redirect to view page
  // window.location.href = 'view.html';
}

// Function to display registered users
function displayUsers() {
  const userTableBody = document.getElementById("userTableBody");
  const noUsersMessage = document.getElementById("noUsers");

  // Get users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Clear existing table rows
  userTableBody.innerHTML = "";

  // Check if there are any users
  if (users.length === 0) {
    noUsersMessage.classList.remove("d-none");
    return;
  }

  // Hide no users message if there are users
  noUsersMessage.classList.add("d-none");

  // Populate table with users
  users.forEach((user) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.contact}</td>
            <td>${user.address}</td>
        `;

    userTableBody.appendChild(row);
  });
}

// Sample data for testing (uncomment to add sample data)
/*
function addSampleData() {
    const sampleUsers = [
        {
            name: 'Shankar',
            email: 'shankar@gmail.com',
            contact: '9686534332',
            address: 'Bangalore, Karnataka'
        }
    ];
    
    localStorage.setItem('users', JSON.stringify(sampleUsers));
}
*/
