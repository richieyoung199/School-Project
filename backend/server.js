console.log("SERVER FILE LOADED");

const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = new sqlite3.Database("./database.db");

app.use(cors());
app.use(bodyParser.json());

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT NOT NULL
    )
  `);
});

app.post("/register", (req, res) => {
  console.log("🔥 REGISTER ENDPOINT HIT");
  console.log("📦 BODY RECEIVED:", req.body);

  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    console.log("❌ MISSING FIELDS");
    return res.status(400).json({ error: "Missing fields" });
  }

  const sql =
    "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";

  db.run(sql, [name, email, password, role], function (err) {
    if (err) {
      console.log("❌ SQL ERROR:", err.message);
      return res.status(400).json({ error: err.message });
    }

    console.log("✅ USER SAVED WITH ID:", this.lastID);
    res.json({ success: true });
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, user) => {
      if (!user) {
        return res.status(401).json({ error: "Invalid login details" });
      }
      res.json(user);
    },
  );
});

app.get("/test", (req, res) => {
  res.send("AEMO backend is working");
});

app.listen(3000, () => {
  console.log("AEMO backend running on http://localhost:3000");
});
