# OAuth Test

## Tiktok

`https://www.tiktok.com/v2/auth/authorize?
client_key=YOUR_CLIENT_KEY
&redirect_uri=YOUR_REDIRECT_URI
&response_type=code
&scope=user.info.basic
&state=123
&code_challenge=YOUR_CODE_CHALLENGE
&code_challenge_method=S256`

`POST https://open.tiktokapis.com/v2/oauth/token/
Headers:
Content-Type: application/x-www-form-urlencoded
Body:
client*key=sbawghsufdcifeh30u
&client_secret=your_client_secret
&code=authorization_code_dari_callback
&grant_type=authorization_code
&redirect_uri=http://localhost:3000/auth/callback
&code_verifier=abc123DEF-.*~456ghiJKL <!-- Ganti dengan code_verifier Anda -->`

- buat code challenge dan code verify dari file generate.js.
- setting redirect_uri sesuai url backend
