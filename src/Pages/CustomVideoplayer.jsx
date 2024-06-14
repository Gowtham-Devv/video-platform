import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    nextVideo,
    showComments,
    closeWebsite,
    showNotification,
    hideNotification,
} from '../Redux/actions';

const CustomVideoPlayer = () => {
    const videoRef = useRef(null);
    const dispatch = useDispatch();
    const notification = useSelector(state => state.notification);
    const [tapCount, setTapCount] = useState(0);
    const [holding, setHolding] = useState(false);
    const tapTimeoutRef = useRef(null);

    const handleTap = (event) => {
        event.preventDefault(); // Prevent default behavior

        const rect = videoRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        setTapCount(prev => prev + 1);
        clearTimeout(tapTimeoutRef.current);

        tapTimeoutRef.current = setTimeout(() => {
            if (tapCount === 1) {
                // Single tap
                if (x > rect.width * 0.75 && y < rect.height * 0.25) {
                    // Top right corner
                    navigator.geolocation.getCurrentPosition((position) => {
                        const { latitude, longitude } = position.coords;
                        const weatherApiKey = '3a0b1ac4ae2077a356754876cebafa34';
                        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}`)
                            .then(response => response.json())
                            .then(data => {
                                const temperature = (data.main.temp - 273.15).toFixed(1);
                                dispatch(showNotification(`Location: ${latitude.toFixed(2)}, ${longitude.toFixed(2)}, Temperature: ${temperature}°C`));
                                setTimeout(() => {
                                    dispatch(hideNotification());
                                }, 3000);
                            });
                    });
                } else if (x > rect.width * 0.33 && x < rect.width * 0.66 && y > rect.height * 0.33 && y < rect.height * 0.66) {
                    // Center of the screen
                    if (videoRef.current.paused) {
                        videoRef.current.play().catch((error) => console.error('Error playing video:', error));
                    } else {
                        videoRef.current.pause();
                    }
                }
            } else if (tapCount === 2) {
                // Double tap
                if (x > rect.width / 2) {
                    videoRef.current.currentTime += 10; // Move 10 seconds forward
                } else {
                    videoRef.current.currentTime -= 10; // Move 10 seconds backward
                }
            } else if (tapCount === 3) {
                // Triple tap
                if (x > rect.width * 0.66) {
                    // Cannot close the window/tab, so this action is now a no-op
                    console.log('Close website action not allowed by browser');
                } else if (x < rect.width * 0.33) {
                    dispatch(showComments());
                } else {
                    dispatch(nextVideo());
                }
            }

            setTapCount(0);
        }, 300);
    };

    const handleMouseDown = (event) => {
        event.preventDefault(); // Prevent default behavior

        const rect = videoRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;

        setHolding(true);
        setTimeout(() => {
            if (holding) {
                if (x > rect.width / 2) {
                    videoRef.current.playbackRate = 2.0; // 2X speed
                } else {
                    videoRef.current.playbackRate = 0.5; // 0.5X speed
                }
            }
        }, 500);
    };

    const handleMouseUp = () => {
        setHolding(false);
        videoRef.current.playbackRate = 1.0; // Normal speed
    };

    const handleMouseLeave = () => {
        setHolding(false);
        videoRef.current.playbackRate = 1.0; // Normal speed
    };

    return (
        <div id="videoContainer">
            <video ref={videoRef}
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                controls
                onClick={handleTap}
                onDoubleClick={(e) => e.preventDefault()} // Prevent full screen on double-click
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onError={(e) => console.error('Error loading video:', e)} // Error handling for video load issues
            ></video>
            {notification && <div id="notification">{notification}</div>}
        </div>
    );
};

export default CustomVideoPlayer;
