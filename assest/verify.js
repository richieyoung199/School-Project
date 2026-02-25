console.log("VERIFY PAGE RUNNING");

const form = document.getElementById("verifyForm");
const message = document.getElementById("reviewMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Demo simulation
  form.classList.add("hidden");
  message.classList.remove("hidden");

  // Optional redirect later
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 4000);
});
