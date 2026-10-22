import { useState } from "react";

export default function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? "";
      const response = await fetch(`${apiBaseUrl}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        setError(
          response.status === 401
            ? "The username or password is incorrect."
            : "Sign in failed. Please try again.",
        );
        return;
      }

      onLoginSuccess();
    } catch {
      setError("Could not reach the authentication server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
          <button className="login-button" disabled={isSubmitting} type="submit">
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </section>
    </main>
  );
}
