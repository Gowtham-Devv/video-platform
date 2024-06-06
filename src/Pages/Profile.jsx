import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../Styles/Profile.css";
import { reset } from '../Slice/counterSlice';
import PImg from "../Assets/Images/profile.png";

function Profile() {
  const videosWatched = useSelector((state) => state.counter.value);
  const points = videosWatched * 5;
  const dispatch = useDispatch();

  return (
    <main id='Profile'>
      <div className="container-fluid">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center mt-5">
              <h1> Profile</h1>
            </div>
          </div>
          <div className="row  d-flex flex-row align-items-center justify-content-center">
            <div className="col-lg-9 d-flex flex-row align-items-center justify-content-around">
              <div className="col-lg-6 mt-5  d-flex flex-row align-items-center justify-content-center"><img src={PImg} alt="" /></div>
              <div className="col-lg-6 mt-5  d-flex flex-column align-items-center justify-content-center">
                <div className="Info ">
                  <h3>User Name</h3>
                </div>
                <div className="Info1">
                  <p>Videos Watched: {videosWatched}</p>
                  <p>Points Earned: {points}</p>
                  <div> <button onClick={() => dispatch(reset())}>Reset</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>

















    // <div>
    //   <h2>User Profile</h2>
    //   <div>
    //     <p>Videos Watched: {videosWatched}</p>
    //     <p>Points Earned: {points}</p>
    //   </div>
    // </div>


  );
}

export default Profile;
