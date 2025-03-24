import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./screens/home";
import Contact from "./screens/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
