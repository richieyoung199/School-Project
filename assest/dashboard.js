const user = JSON.parse(localStorage.getItem("aemoUser"));

if (!user) {
  window.location.href = "login.html";
}

// Demo currency mapping
const currencyMap = {
  Nigeria: "₦",
  Ghana: "₵",
  Kenya: "KSh",
  SouthAfrica: "R",
};

// Demo balance
const currencySymbol = currencyMap[user.country] || "₦";
const balance = 0;

document.getElementById("balanceText").textContent =
  `${currencySymbol}${balance.toLocaleString()}`;

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("aemoUser");
  window.location.href = "login.html";
});
