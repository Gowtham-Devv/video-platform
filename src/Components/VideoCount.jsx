import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import "../Styles/VideoCount.css";
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../Slice/counterSlice';
import { toggleClick } from '../Slice/VideoSlice';
import Profile from '../Pages/Profile';

function VideoCount() {
    const dispatch = useDispatch();
    const clickedButtons = useSelector(state => state.video.clickedButtons);

    const handleButtonClick = (videoId) => {
        dispatch(toggleClick(videoId));
        dispatch(increment());
    };

    useEffect(() => {

        const savedClickedButtons = JSON.parse(localStorage.getItem('clickedButtons'));
        const savedCounter = JSON.parse(localStorage.getItem('counter'));

        if (savedClickedButtons) {
            Object.keys(savedClickedButtons).forEach(videoId => {
                if (savedClickedButtons[videoId]) {
                    dispatch(toggleClick(videoId));
                }
            });
        }

        if (savedCounter) {
            for (let i = 0; i < savedCounter; i++) {
                dispatch(increment());
            }
        }
    }, [dispatch]);

    const VideoApi = [
        {
            id: "1",
            title: "Big Buck Bunny",
            thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
            duration: "8:18",
            uploadTime: "May 9, 2011",
            views: "24,969,123",
            author: "Vlc Media Player",
            videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
            subscriber: "25254545 Subscribers",
            isLive: true
        },
        {
            id: "2",
            title: "The first Blender Open Movie from 2006",
            thumbnailUrl: "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
            duration: "12:18",
            uploadTime: "May 9, 2011",
            views: "24,969,123",
            author: "Blender Inc.",
            videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            description: "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
            subscriber: "25254545 Subscribers",
            isLive: true
        },
        {
            id: "3",
            title: "For Bigger Blazes",
            thumbnailUrl: "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
            duration: "8:18",
            uploadTime: "May 9, 2011",
            views: "24,969,123",
            author: "T-Series Regional",
            videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            description: "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
            subscriber: "25254545 Subscribers",
            isLive: true
        },
        {
            id: "4",
            title: "For Bigger Escape",
            thumbnailUrl: "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
            duration: "8:18",
            uploadTime: "May 9, 2011",
            views: "24,969,123",
            author: "T-Series Regional",
            videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            description: " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
            subscriber: "25254545 Subscribers",
            isLive: false
        },
        {
            id: "5",
            title: "Big Buck Bunny",
            thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
            duration: "8:18",
            uploadTime: "May 9, 2011",
            views: "24,969,123",
            author: "Vlc Media Player",
            videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
            subscriber: "25254545 Subscribers",
            isLive: true
        },
        {
            id: "6",
            title: "For Bigger Blazes",
            thumbnailUrl: "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
            duration: "8:18",
            uploadTime: "May 9, 2011",
            views: "24,969,123",
            author: "T-Series Regional",
            videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            description: "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
            subscriber: "25254545 Subscribers",
            isLive: false
        },
        {
            id: "7",
            title: "For Bigger Escape",
            thumbnailUrl: "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
            duration: "8:18",
            uploadTime: "May 9, 2011",
            views: "24,969,123",
            author: "T-Series Regional",
            videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            description: " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
            subscriber: "25254545 Subscribers",
            isLive: true
        },
        {
            id: "8",
            title: "The first Blender Open Movie from 2006",
            thumbnailUrl: "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
            duration: "12:18",
            uploadTime: "May 9, 2011",
            views: "24,969,123",
            author: "Blender Inc.",
            videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            description: "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
            subscriber: "25254545 Subscribers",
            isLive: false
        }
    ];

    return (
        <main id='VideoCount'>
            <div className="container-fluid bg-gray">
                <div className="container">
                    <div className="row w-100 mb-5">
                        <div className="col-12 flex-column align-items-center">
                            <h3 className='mt-5 fs-1 text-center'>Watch Videos Earn Points</h3>
                        </div>
                    </div>
                    <div className="row VideoRow">
                        {VideoApi.map(video => (
                            <div className="col-lg-3 VideoContent w-100 d-flex flex-column align-items-center bg-dark mb-1 text-white" key={video.id}>
                                <div className="Title text-center mb-3 mt-3">
                                    <h4>{video.title}</h4>
                                </div>
                                <div className='VideoPlayers'>
                                    <ReactPlayer  url={video.videoUrl} className='ReactPlayer' controls width={"100%"} height={"auto"} />
                                </div>
                                <div className='subscriber d-flex align-items-center gap-5 mt-3'>
                                    <p>Views: {video.views}</p>
                                    <button onClick={() => handleButtonClick(video.id)} style={{ backgroundColor: clickedButtons[video.id] ? 'green' : 'red' }}>
                                        {clickedButtons[video.id] ? 'Video Watched' : 'Video Not Watched'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default VideoCount;
