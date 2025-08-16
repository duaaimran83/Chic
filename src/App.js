import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import RoomPages from "./components/RoomPages";
import BedroomPage from "./components/BedroomPage";
import DiningRoomPage from "./components/DiningRoomPage";
import LivingRoomPage from "./components/LivingRoomPage";
import RecreationRoomPage from "./components/RecreationRoomPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Router>
      <Header toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/rooms" element={<RoomPages />} />
        <Route path="/bedroom" element={<BedroomPage />} />
        <Route path="/dining-room" element={<DiningRoomPage />} />
        <Route path="/living-room" element={<LivingRoomPage />} />
        <Route path="/recreation-room" element={<RecreationRoomPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;