import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Profile from './Pages/Profile';
import VideoCount from './Components/VideoCount';
import Navbars from './Components/Navbar';
import UserForm from './Components/UserForm';
import { login, logout } from './Slice/authSlice';
import CustomVideoPlayer from './Pages/CustomVideoplayer';


function App() {
  const [theme, setTheme] = useState('dark');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [accessAllowed, setAccessAllowed] = useState(true);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); 

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const hours = currentTime.getHours();
    if (hours === 13) {
      setAccessAllowed(false);
    } else {
      setAccessAllowed(true);
    }
  }, [currentTime]);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    const storedUserData = localStorage.getItem('userData');
    if (storedLoginStatus === 'true' && storedUserData) {
      dispatch(login(JSON.parse(storedUserData)));
    }
  }, [dispatch]);

  useEffect(() => {
    if (userData) {
      applyTheme(userData.location);
      triggerOTP(userData.location);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userData', JSON.stringify(userData));
    }
  }, [userData]);

  const applyTheme = (userLocation) => {
    const hours = currentTime.getHours();
    const isMorning = hours >= 10 && hours < 12;
    const isSouthernState = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Telangana'].includes(userLocation);

    if (isMorning && isSouthernState) {
      setTheme('white');
    } else {
      setTheme('dark');
    }
  };

  const triggerOTP = (userLocation) => {
    const isSouthernState = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Telangana'].includes(userLocation);
    if (isSouthernState) {
      console.log('Trigger OTP via Email');
    } else {
      console.log('Trigger OTP via Mobile');
    }
  };

  const handleFormSubmit = (data) => {
    dispatch(login(data));
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
  };

  if (!accessAllowed) {
    return <div>Website is under maintenance from 1 PM to 2 PM. Please try again later.</div>;
  }

  if (!isLoggedIn) {
    return <UserForm onSubmit={handleFormSubmit} />;
  }

  return (
    <div className={`app ${theme}`}>
      <BrowserRouter>
        <Navbars onLogout={handleLogout} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/VideoCount' element={<VideoCount />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/CustomVideoPlayer' element={<CustomVideoPlayer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
