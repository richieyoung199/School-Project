// FORCE MODAL CLOSED ON LOAD
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("tradeModal").classList.add("hidden");
});

// BUY / SELL

const buyBtn = document.getElementById("buyBtn");
const sellBtn = document.getElementById("sellBtn");

buyBtn.addEventListener("click", () => {
  buyBtn.classList.add("active");
  sellBtn.classList.remove("active");
});

sellBtn.addEventListener("click", () => {
  sellBtn.classList.add("active");
  buyBtn.classList.remove("active");
});

// FILTERS

const filterBtn = document.getElementById("filterBtn");
const extraFilters = document.getElementById("extraFilters");

filterBtn.addEventListener("click", () => {
  extraFilters.classList.toggle("hidden");
});

// MODAL SYSTEM

const modal = document.getElementById("tradeModal");
const amountInput = document.getElementById("tradeAmount");
const escrowText = document.getElementById("escrowText");

const cancelBtn = document.getElementById("cancelTrade");
const confirmBtn = document.getElementById("confirmTrade");

// OPEN MODAL (FOR ALL TRADE BUTTONS)

const tradeBtns = document.querySelectorAll(".trade-btn");

tradeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    amountInput.value = "";
    escrowText.textContent = "";
  });
});

// ESCROW MESSAGE

amountInput.addEventListener("input", () => {
  if (amountInput.value > 0) {
    escrowText.textContent =
      "⚠ Your money will be exchanged for AEMO Coin. Do not release until you have been credited.";
  } else {
    escrowText.textContent = "";
  }
});

// CANCEL

cancelBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// CONFIRM

confirmBtn.addEventListener("click", () => {
  const amount = amountInput.value;

  if (!amount || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  alert(`Trade started!\nAmount: ${amount}\nFunds locked in escrow.`);

  modal.classList.add("hidden");
});
