# Hello World authentication API

Requires Java 17 and Maven. Start the API from this directory with:

```powershell
mvn spring-boot:run
```

The React development server proxies `/api` requests to `http://localhost:8080`.
Start it separately from the project root with `npm run dev`.

`POST /api/auth/login` accepts JSON with `username` and `password`. The demo
account is `kiran` / `kiran`; valid credentials return HTTP 200, and invalid
credentials return HTTP 401. Set `APP_CORS_ALLOWED_ORIGIN` to the deployed
frontend's origin when hosting the API separately, and set
`VITE_API_BASE_URL` in the frontend hosting environment to the API base URL.

This hardcoded account is for local learning only. Do not use this
authentication implementation for a public or production app.
