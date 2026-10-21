export default function App() {
  return (
    <main className="welcome">
      <section className="welcome-card" aria-labelledby="welcome-title">
        <span className="welcome-mark" aria-hidden="true">
          R
        </span>
        <p className="eyebrow">Your React app is ready</p>
        <h1 id="welcome-title">Hello, world!</h1>
        <p className="welcome-copy">
          A fresh start for whatever you want to build next.
        </p>
      </section>
    </main>
  );
}
