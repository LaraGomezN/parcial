import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginFull from './components/LoginFull';
import Footer from './components/Footer';


export default function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginFull />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}



