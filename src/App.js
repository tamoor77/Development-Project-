import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataEntry from "./pages/DataEntry";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DataEntry />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
