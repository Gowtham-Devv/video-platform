import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './Pages/Profile';
import VideoCount from './Components/VideoCount';
import Navbars from './Components/Navbar';
function App() {
  return (
    <BrowserRouter>
         <Navbars />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/VideoCount' element={<VideoCount />} />
        <Route path='/Profile' element={<Profile />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
