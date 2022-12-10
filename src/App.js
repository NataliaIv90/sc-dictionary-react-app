import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <main>
        <Dictionary defaultKeyword="peace" />
      </main>

      <footer>
        <p>
          Open-source{" "}
          <a
            href="https://github.com/NataliaIv90/sc-dictionary-react-app"
            target="_blank"
            rel="noreferrer"
          >
            code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/natalia-ivantsova-46017b238/"
            target="_blank"
            rel="noreferrer"
          >
            Natalia Ivantsova
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
