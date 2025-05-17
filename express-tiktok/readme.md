# OAuth Test

## Tiktok

GET
`https://www.tiktok.com/v2/auth/authorize?
client_key=YOUR_CLIENT_KEY
&redirect_uri=YOUR_REDIRECT_URI
&response_type=code
&scope=user.info.basic
&state=123
&code_challenge=YOUR_CODE_CHALLENGE
&code_challenge_method=S256`

POST `https://open.tiktokapis.com/v2/oauth/token/
Headers:
Content-Type: application/x-www-form-urlencoded
Body:
client*key=YOUR_CLIENT_KEY
&client_secret=YOUR_CLIENT_SECRET
&code=AUTHORIZATION_CODE_DARI_CALLBACK
&grant_type=authorization_code
&redirect_uri=http://localhost:3000/auth/callback
&code_verifier=YOUR_CODE_VERIFIER`

- buat code challenge dan code verify dari file generate.js.
- setting redirect_uri sesuai url backend
