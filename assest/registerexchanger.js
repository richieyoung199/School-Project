console.log("EXCHANGER REGISTER JS RUNNING");

const exchangerForm = document.getElementById("exchangerRegisterForm");

if (!exchangerForm) {
  console.error("❌ exchangerRegisterForm not found");
}

exchangerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("businessName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  fetch("http://localhost:3000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      password,
      role: "exchanger",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        alert("Exchanger account created");
        window.location.href = "login.html";
      } else {
        alert(data.error);
      }
    });
});
