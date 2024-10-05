import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componenets/Home";
import DashBoard from "./componenets/DashBoard";
import Program from "./componenets/Program";
import Notice from "./componenets/Notice";
import StudDashboard from "./componenets/StudDashboard";
import Profile from "./componenets/Profile";

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
