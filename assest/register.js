console.log("REGISTER USER JS RUNNING");

const form = document.getElementById("userRegisterForm");

if (!form) {
  console.error("❌ userRegisterForm not found");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  fetch("http://localhost:3000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      password,
      role: "trader",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        alert("Account created successfully");
        window.location.href = "login.html";
      } else {
        alert(data.error);
      }
    });
});
