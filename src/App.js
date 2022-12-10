import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <main>
        <Dictionary defaultKeyword="peace" />
      </main>

      <footer>
        <p>Open-source code by Natalia Ivantsova</p>
      </footer>
    </div>
  );
}

export default App;
