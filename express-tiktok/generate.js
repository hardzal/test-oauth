// Contoh di Node.js
const crypto = require("crypto");
const codeVerifier = crypto
  .randomBytes(32)
  .toString("base64")
  .replace(/\+/g, "-")
  .replace(/\//g, "_")
  .replace(/=/g, "");
console.log("code verifier", codeVerifier); // Simpan nilai ini
const codeChallenge = crypto
  .createHash("sha256")
  .update(codeVerifier)
  .digest("base64")
  .replace(/\+/g, "-")
  .replace(/\//g, "_")
  .replace(/=/g, "");
console.log("code challenge", codeChallenge); // Gunakan ini di URL auth
