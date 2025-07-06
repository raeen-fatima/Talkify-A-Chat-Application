import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
// later: ChatPage, GroupChatPage
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage"; 
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <Router>
      {/* Define userId before using it in the routes if needed */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Add chat routes later */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<Dashboard currentUserId={1} />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
