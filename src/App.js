
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './pages/login';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
