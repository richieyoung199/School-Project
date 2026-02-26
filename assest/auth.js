console.log("AUTH.JS RUNNING");

const loginForm = document.getElementById("loginForm");

if (!loginForm) {
  console.error("❌ loginForm not found");
} else {
  console.log("✅ loginForm found");
}

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("loginEmail");
  const passwordInput = document.getElementById("loginPassword");

  if (!emailInput || !passwordInput) {
    alert("Login inputs not found");
    return;
  }

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  console.log("Submitting login", { email, passwordLength: password.length });

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      console.log("Login response status", res.status);
      return res.json();
    })
    .then((data) => {
      console.log("Login response data", data);
      if (data.error) {
        alert(data.error);
      } else {
        localStorage.setItem("aemoUser", JSON.stringify(data));
        window.location.href = "dashboard.html";
      }
    })
    .catch((err) => {
      console.error("Fetch error", err);
      alert("Server error");
    });
});
