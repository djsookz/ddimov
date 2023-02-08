import "./App.css";
import Begining from "./components/Begining";
import ScrollToTop from "./components/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import Thanks from "./components/Thanks";

function App() {
  return (
    <div id="App">
      <Routes>
        <Route path="/" element={<Begining />} />
        <Route path="thanks" element={<Thanks />} />
      </Routes>
    </div>
  );
}

export default App;
