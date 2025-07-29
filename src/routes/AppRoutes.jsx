import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Jahadi  from '../pages/Jahadi';
import RegisterJahadi from '../pages/RegisterJahadi';
import AboutUs from '../pages/AboutUs';


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jahadi" element={<Jahadi />} />
        <Route path="/RegisterJahadi" element={<RegisterJahadi />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
