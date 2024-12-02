import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "../src/views/HomeView.jsx";
import RegisterView from "../src/views/RegisterView.jsx";
import LoginView from "../src/views/LoginView.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
