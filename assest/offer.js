// OFFERS PAGE JS

const currencyFilter = document.getElementById("currencyFilter");
const offersContainer = document.getElementById("offersContainer");
const tradeModal = document.getElementById("tradeModal");
const tradeText = document.getElementById("tradeText");

// FILTER LOGIC
if (currencyFilter) {
  currencyFilter.addEventListener("change", function () {
    const value = this.value;

    document.querySelectorAll(".offer-card").forEach((card) => {
      const pair = card.getAttribute("data-pair");

      card.style.display = value === "all" || value === pair ? "block" : "none";
    });
  });
}

// OPEN DEMO TRADE MODAL
function tradeDemo(pair, trader) {
  if (!tradeModal || !tradeText) return;

  tradeText.textContent = `You selected to trade ${pair} with ${trader}.`;
  tradeModal.classList.remove("hidden");
}

// CLOSE MODAL
function closeModal() {
  if (tradeModal) tradeModal.classList.add("hidden");
}

// CONFIRM DEMO TRADE ACTION
function confirmTrade() {
  alert("Demo: trade action confirmed! (No real transaction.)");
  closeModal();
}
