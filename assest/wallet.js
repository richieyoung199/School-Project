console.log("WALLET PAGE RUNNING");

// AUTH CHECK
const user = JSON.parse(localStorage.getItem("aemoUser"));

if (!user) {
  window.location.href = "login.html";
}

// DEMO BALANCE SYSTEM

const balanceEl = document.getElementById("balanceAmount");

// Demo balance (random for realism)
const demoBalance = (Math.random() * 5000 + 500).toFixed(2);

balanceEl.textContent = demoBalance;

// BACK BUTTON

const backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", () => {
  window.location.href = "dashboard.html";
});
