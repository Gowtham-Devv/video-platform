import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Video144 from '../Assets/Videos/Video144P.mp4';
import Video240 from '../Assets/Videos/Video240P.mp4';
import Video360 from '../Assets/Videos/Video360.mp4';
import Video480 from '../Assets/Videos/Video480P.mp4';
import Video720 from '../Assets/Videos/Video720P.mp4';
import "../Styles/VideoPlayer.css";

const VideoPlayer = () => {
    const [url, setUrl] = useState(Video144);

    const handleChangeQuality = (event) => {
        const selectedQuality = event.target.value;
        switch (selectedQuality) {
            case '144p':
                setUrl(Video144);
                break;
            case '240p':
                setUrl(Video240);
                break;
            case '360p':
                setUrl(Video360);
                break;
            case '480p':
                setUrl(Video480);
                break;
            case '720p':
                setUrl(Video720);
                break;
            default:
                setUrl(Video720);
        }
    };

    return (
        <main id='VideoPlayer'>
        <div className='container-fluid BgColor'>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <div className="PlayerTitle"><h2>Video Player</h2></div>
                    </div>
                    <div className="col-12 d-flex flex-column align-items-center">
                        <ReactPlayer url={url}   controls/>
                        <div className="form-group mt-2 d-flex align-items-center gap-5 Content">
                            <label htmlFor="qualitySelect" className=''>Select Quality</label>
                            <select id="qualitySelect" className="form-control" onChange={handleChangeQuality}>
                                <option value="144p">144p</option>
                                <option value="240p">240p</option>
                                <option value="360p">360p</option>
                                <option value="480p">480p</option>
                                <option value="720p">720p</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
    );
};

export default VideoPlayer;
