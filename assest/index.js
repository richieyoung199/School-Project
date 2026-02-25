// Get DOM elements
const currencyFilter = document.getElementById("currencyFilter");
const offersContainer = document.getElementById("offersContainer");
const tradeModal = document.getElementById("tradeModal");
const tradeText = document.getElementById("tradeText");

// FILTER LOGIC
currencyFilter.addEventListener("change", function () {
  const value = this.value;

  document.querySelectorAll(".offer-card").forEach((card) => {
    const pair = card.getAttribute("data-pair");

    if (value === "all" || value === pair) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// OPEN DEMO TRADE MODAL
function tradeDemo(pair, trader) {
  tradeText.textContent = `You selected to trade ${pair} with ${trader}.`;
  tradeModal.classList.remove("hidden");
}

// CLOSE MODAL
function closeModal() {
  tradeModal.classList.add("hidden");
}

// CONFIRM DEMO TRADE ACTION
function confirmTrade() {
  alert("Demo: trade action confirmed! (No real transaction.)");
  closeModal();
}

// Login and Signup javaScript
// LOGIN DEMO
// LOGIN (REAL - SQL BACKEND)

// const loginForm = document.getElementById("loginForm");

// if (loginForm) {
//   loginForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const email = document.getElementById("loginEmail").value;
//     const password = document.getElementById("loginPassword").value;

//     fetch("http://localhost:3000/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.error) {
//           alert(data.error);
//         } else {
//           localStorage.setItem("aemoUser", JSON.stringify(data));
//           window.location.href = "dashboard.html";
//         }
//       });
//   });
// }

// // REGISTER DEMO
// const registerForm = document.getElementById("registerForm");

// if (registerForm) {
//   registerForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     fetch("http://localhost:3000/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name,
//         email,
//         password,
//         role: "trader",
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           alert("Account created successfully!");
//           window.location.href = "login.html";
//         } else {
//           alert(data.error);
//         }
//       });
//   });
// }

// // REGISTER CHOICE PAGE logic and javaScript

// // Trader account
// const userForm = document.getElementById("userRegisterForm");

// if (userForm) {
//   userForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     fetch("http://localhost:3000/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name,
//         email,
//         password,
//         role: "trader",
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           window.location.href = "login.html";
//         } else {
//           alert(data.error);
//         }
//       });
//   });
// }

// // Exchanger account
// const exchangerForm = document.getElementById("exchangerRegisterForm");

// if (exchangerForm) {
//   exchangerForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     console.log("REGISTER FORM SUBMITTED");

//     const name = document.getElementById("businessName").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     fetch("http://localhost:3000/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name,
//         email,
//         password,
//         role: "exchanger",
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           window.location.href = "login.html";
//         } else {
//           alert(data.error);
//         }
//       });
//   });
// }
