import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DashBoard from "./components/DashBoard";
import Program from "./components/Program";
import Notice from "./components/Notice";
import StudDashboard from "./components/StudDashboard";
import Profile from "./components/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dash" element={<DashBoard />} />
        <Route path="/prog" element={<Program />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/stud" element={<StudDashboard />} />
        <Route path="/prof" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
