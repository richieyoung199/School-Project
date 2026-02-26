console.log("SERVER STARTING...");

const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database
const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error("DB Error:", err);
  } else {
    console.log("Database connected");
  }
});

// Create users table
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT,
    role TEXT
  )
`);

// ================= REGISTER =================

app.post("/register", (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }

  // Check if email exists
  db.get("SELECT id FROM users WHERE email = ?", [email], (err, user) => {
    if (user) {
      return res.status(409).json({
        error: "Account already exists. Please login.",
      });
    }

    // Insert user
    db.run(
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      [name, email, password, role],
      function (err) {
        if (err) {
          return res.status(500).json({
            error: "Registration failed",
          });
        }

        res.json({
          success: true,
        });
      },
    );
  });
});

// ================= LOGIN =================

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: "Missing login details",
    });
  }

  db.get(
    "SELECT id, name, email, role FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, user) => {
      if (!user) {
        return res.status(401).json({
          error: "Wrong email or password",
        });
      }

      res.json({
        success: true,
        user,
      });
    },
  );
});

// Test route
app.get("/test", (req, res) => {
  res.send("Backend working");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
