import logo from "./logo.svg";
import "./App.css";

function App() {
  let x = 10;

  return (
    <div>
      <div class="header">
        <a href="https://tribunal.uc.edu/">
          <br />
          <img src="./images/tribunal-logo.png" alt="Tribunal Logo" />
        </a>
      </div>

      <div class="center">
        <header>
          <h1>Hello World times {x}!</h1>
        </header>
      </div>
    </div>
  );
}

export default App;
