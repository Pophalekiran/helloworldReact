import { useState } from "react";

export default function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (username === "kiran" && password === "kiran") {
      onLoginSuccess();
      return;
    }

    setError("The username or password is incorrect.");
  }

  return (
    <main className="welcome">
      <section className="welcome-card" aria-labelledby="login-title">
        <span className="welcome-mark" aria-hidden="true">
          R
        </span>
        <p className="eyebrow">Welcome back</p>
        <h1 id="login-title">Sign in</h1>
        <p className="welcome-copy">Enter your details to continue.</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            autoComplete="username"
            id="username"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
            required
            value={username}
          />
          <label htmlFor="password">Password</label>
          <input
            autoComplete="current-password"
            id="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            required
            type="password"
            value={password}
          />
          {error && (
            <p className="login-error" role="alert">
              {error}
            </p>
          )}
          <button className="login-button" type="submit">
            Sign in
          </button>
        </form>
      </section>
    </main>
  );
}
