console.log("Register JS Loaded");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userRegisterForm");

  if (!form) {
    console.error("Register form still missing!");
    return;
  }

  console.log("Register form found");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;

    if (!name || !email || !password || !confirm) {
      alert("Fill all fields");
      return;
    }

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    const data = {
      name,
      email,
      password,
      role: "user",
    };

    try {
      const res = await fetch("https://aemo-backend.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Account created successfully!");
        window.location.href = "login.html";
      } else {
        alert(result.error || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      alert("Backend not running");
    }
  });
});
