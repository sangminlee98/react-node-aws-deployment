import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const DOMAIN = import.meta.env.VITE_API_SERVER;
  const [count, setCount] = useState(0);
  const getHello = async () => {
    const greet = document.getElementById("greet") as HTMLElement;
    const res = await (await fetch(`${DOMAIN}/api/hello`)).json();
    greet.innerHTML = JSON.stringify(res);
  };
  useEffect(() => {
    getHello();
  }, []);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          api called: <code id="greet"></code>
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
