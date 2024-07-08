import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
