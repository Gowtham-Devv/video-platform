import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../Slice/counterSlice';
import { login, logout } from '../Slice/authSlice';
import PImg from "../Assets/Images/profile.png";
import "../Styles/Profile.css";

function Profile() {
  const videosWatched = useSelector((state) => state.counter.value);
  const points = videosWatched * 5;
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userData = useSelector((state) => state.auth.userData);

  const handleLogin = () => {
    const user = {
      name: 'John Doe',
      location: 'New York',
    };
    dispatch(login(user));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!isLoggedIn) {
    return (
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }


  return (
    <main id='Profile'>
      <div className="container-fluid">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center mt-5">
              <h1> Profile</h1>
            </div>
          </div>
          <div className="row d-flex flex-row align-items-center justify-content-center mt-5">
            <div className="col-lg-9 d-flex flex-row align-items-center justify-content-around">
              <div className="col-lg-6 mt-5 d-flex flex-row align-items-center justify-content-center">
                <img src={PImg} alt="" />
              </div>
              <div className="col-lg-6 mt-5 d-flex flex-column align-items-center justify-content-center ">
                <div className="Info d-flex flex-column gap-2 mb-5">
                <h3>Name: {userData.name}</h3> 
                <h3>Location: {userData.location}</h3>
                </div>
                <div className="Info1 d-flex flex-row gap-5 mb-5">
                  <p>Videos Watched: {videosWatched}</p>
                  <p>Points Earned: {points}</p>
                </div>
                <div>
                  <button onClick={() => dispatch(reset())} className='px-5 py-2  rounded-5 bg-danger  text-white'>
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
