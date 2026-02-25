console.log("TRADES PAGE RUNNING");

// AUTH CHECK

const user = JSON.parse(localStorage.getItem("aemoUser"));

if (!user) {
  window.location.href = "login.html";
}

// BACK BUTTON

document.getElementById("backBtn").addEventListener("click", () => {
  window.location.href = "dashboard.html";
});

// DEMO TRADE DATA

const demoTrades = [
  {
    date: "2026-02-10",
    pair: "NGN → GHS",
    amount: "₦250,000",
    status: "Success",
  },
  {
    date: "2026-02-14",
    pair: "KES → NGN",
    amount: "KSh 85,000",
    status: "Pending",
  },
  {
    date: "2026-02-18",
    pair: "ZAR → GHS",
    amount: "R 12,000",
    status: "Success",
  },
];

// RENDER TABLE

const table = document.getElementById("tradeTable");

demoTrades.forEach((trade) => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${trade.date}</td>
    <td>${trade.pair}</td>
    <td>${trade.amount}</td>
    <td class="${
      trade.status === "Success" ? "status-success" : "status-pending"
    }">
      ${trade.status}
    </td>
  `;

  table.appendChild(row);
});
