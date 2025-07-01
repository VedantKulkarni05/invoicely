import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import InvoicePage from "./pages/InvoicePage";
import "../src/App.css";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/invoice" element={<InvoicePage />} />
    </Routes>
  );
};

export default App;
