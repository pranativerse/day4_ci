import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>DevFlow</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="tag">🚀 React + CI_CD Demo</p>

            <h1>
              Build. Test. <span>Deploy.</span>
            </h1>

            <p className="description">
              A simple React frontend created to demonstrate Continuous
              Integration using GitHub and automated testing.
            </p>

            <div className="buttons">
              <button onClick={() => alert("CI Pipeline Demo!")}>
                Get Started
              </button>

              <button className="secondary">Learn More</button>
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <h2>Why CI?</h2>

          <div className="cards">
            <div className="card">
              <h3>🔄 Continuous Integration</h3>
              <p>
                Automatically build and test your project whenever new code
                is pushed.
              </p>
            </div>

            <div className="card">
              <h3>🧪 Automated Testing</h3>
              <p>
                Run tests automatically to detect problems before merging
                changes.
              </p>
            </div>

            <div className="card">
              <h3>⚡ Faster Development</h3>
              <p>
                Find bugs early and make the development process faster and
                more reliable.
              </p>
            </div>
          </div>
        </section>

        <section className="status">
          <h2>Pipeline Status</h2>

          <div className="status-box">
            <div>
              <span className="dot"></span>
              <strong>Build Passed</strong>
            </div>

            <div>
              <span className="dot"></span>
              <strong>Tests Passed</strong>
            </div>

            <div>
              <span className="dot"></span>
              <strong>Ready to Deploy</strong>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 DevFlow | React CI Demo</p>
      </footer>
    </div>
  );
}

export default App;