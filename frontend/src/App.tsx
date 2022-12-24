import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

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
    <BrowserRouter>
      <Link to="/">HOME</Link>
      <Link to="/page1">page1</Link>
      <Link to="/page2">page2</Link>
      <p>
        api call: <code id="greet"></code>
      </p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
