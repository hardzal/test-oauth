const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Tiktok App");
});

app.get("/auth/callback", (req, res) => {
  const code = req.query.code; // Ambil code dari URL
  res.send(`Authorization code: ${code}`);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
