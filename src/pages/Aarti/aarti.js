import React, { useState, useRef } from 'react';
import { FiMusic, FiPlay, FiPause, FiDownload, FiFileText } from "react-icons/fi";
import './aarti.css';
import Clock from './Clock';
import Navbar from '../../components/Navbar';
import Social from '../../components/social-icon/Social';
import Footer from '../../components/Footer';
import pujaImage from "../../assets/images/pujaImage.jpg"
// import songs from "../../audio/Om_Shri_Sai_Nathay_Namah.mp3";

const Aarti = () => {
    const songLists = {
        list1: {
            heading: "Bhupali Aarti",
            songs: [
                { title: "Song 1 - List 1", artist: "Artist 1", url: "#" },
                { title: "Song 2 - List 1", artist: "Artist 1", url: "#" },
                { title: "Song 3 - List 1", artist: "Artist 1", url: "#" },
            ]
        },
        list2: {
            heading: "Kakad Aarti",
            songs: [
                { title: "Song 1 - List 2", artist: "Artist 2", url: "#" },
                { title: "Song 2 - List 2", artist: "Artist 2", url: "#" },
                { title: "Song 3 - List 2", artist: "Artist 2", url: "#" },
                { title: "Song 4 - List 2", artist: "Artist 2", url: "#" },
                { title: "Song 5 - List 2", artist: "Artist 2", url: "#" },
                { title: "Song 1 - List 2", artist: "Artist 2", url: "#" },
                { title: "Song 2 - List 2", artist: "Artist 2", url: "#" },
                { title: "Song 3 - List 2", artist: "Artist 2", url: "#" },
                { title: "Song 4 - List 2", artist: "Artist 2", url: "#" },
                { title: "Song 5 - List 2", artist: "Artist 2", url: "#" },
                { title: "Song 1 - List 2", artist: "Artist 2", url: "#" },
                { title: "Song 2 - List 2", artist: "Artist 2", url: "#" },
                { title: "Song 3 - List 2", artist: "Artist 2", url: "#" },
            ]
        },
        list3: {
            heading: "Madhyan Aarti",
            songs: [
                { title: "Song 1 - List 3", artist: "Artist 3", url: "#" },
                { title: "Song 2 - List 3", artist: "Artist 3", url: "#" },
                { title: "Song 3 - List 3", artist: "Artist 3", url: "#" },
                { title: "Song 4 - List 3", artist: "Artist 3", url: "#" },
                { title: "Song 5 - List 3", artist: "Artist 3", url: "#" },
                { title: "Song 1 - List 3", artist: "Artist 3", url: "#" },
                { title: "Song 2 - List 3", artist: "Artist 3", url: "#" },
                { title: "Song 3 - List 3", artist: "Artist 3", url: "#" },
                { title: "Song 4 - List 3", artist: "Artist 3", url: "#" },
            ]
        },
        list4: {
            heading: "Dhup Aarti",
            songs: [
                { title: "Song 1 - List 4", artist: "Artist 4", url: "#" },
                { title: "Song 2 - List 4", artist: "Artist 4", url: "#" },
                { title: "Song 3 - List 4", artist: "Artist 4", url: "#" },
                { title: "Song 4 - List 4", artist: "Artist 4", url: "#" },
                { title: "Song 5 - List 4", artist: "Artist 4", url: "#" },
            ]
        },
        list5: {
            heading: "Shej Aarti",
            songs: [
                { title: "Song 1 - List 5", artist: "Artist 5", url: "#" },
                { title: "Song 2 - List 5", artist: "Artist 5", url: "#" },
                { title: "Song 3 - List 5", artist: "Artist 5", url: "#" },
                { title: "Song 4 - List 5", artist: "Artist 5", url: "#" },
                { title: "Song 5 - List 5", artist: "Artist 5", url: "#" },
            ]
        }
    };

    const [activeList, setActiveList] = useState('list1'); // State to track active list
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [playIcon, setPlayIcon] = useState(true); // State to manage play/pause button icon
    const audioRef = useRef(new Audio());

    const handleListChange = (list) => {
        setActiveList(list);
        setCurrentSong(null); 
        setIsPlaying(false);
        audioRef.current.pause(); 
        setPlayIcon(true);
    };

    const handlePlayPause = (song) => {
        if (currentSong === song && isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
            setPlayIcon(true); 
        } else {
            if (currentSong !== song) {
                setCurrentSong(song);
                audioRef.current.src = song.url;
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                    setPlayIcon(false); 
                }).catch((error) => {
                    console.log("Audio playback error:", error);
                    setIsPlaying(false); 
                    setPlayIcon(true); 
                });
            } else {
                audioRef.current.play();
                setIsPlaying(true);
                setPlayIcon(false); 
            }
        }
    };

    return (
        <>
            <Navbar />
            <Social />

            <div
                className="about-background"
                style={{ backgroundImage: `url(${pujaImage})` }}
            ></div>
            <div>
                <marquee behavior="" direction="">
                    🚩
                    <span className="about-marquee">
                        Shri Saibaba Sansthan Trust, Shirdi
                    </span>
                    🚩
                </marquee>
                <div className="about-path">
                    <span> Home &#9654; e-Library &#9654;Aarti Audio
</span>
                </div>
                <div className="places-head">
                    <h1>Aarti Audio
</h1>
                </div>
            </div>

        <div className='ArtiSection'>
            <div className="aarti-container">
                <Clock />
                <div className="responsive-table">
                    <div className='aarti-pop'>
                        <span>Click Below Buttons To Choose Aarti</span>
                    </div>
                    <div className="aarti-buttons">
                        {Object.keys(songLists).map((list, index) => (
                            <div
                                key={index}
                                className={`aarti-button ${activeList === list ? 'active' : ''}`}
                                onClick={() => handleListChange(list)}
                            >
                                <div className="heading">{songLists[list].heading}</div>
                                <div className="time">{["05:00 AM", "05:15 AM", "12:00 PM", "At Sunset", "10:00 PM"][index]}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="aarti-main-content">
                    <div className="aarti-heading">
                        <h1>{songLists[activeList].heading}</h1>
                    </div>
                    <div className="aarti-song-list">
                        {songLists[activeList].songs.map((song, index) => (
                            <div className="aarti-song-item" key={index}>
                                <div className="aarti-song-info">
                                    <div className="aarti-icon-container">
                                        <FiMusic className="aarti-icon" />
                                    </div>
                                    <div>
                                        <div className="aarti-song-title">{song.title}</div>
                                        <div className="aarti-song-artist">{song.artist}</div>
                                    </div>
                                </div>
                                <div className="aarti-song-actions">
                                    <a href={song.url} className="aarti-button">
                                        <FiFileText className="aarti-icon" />
                                    </a>
                                    <button className="aarti-button" onClick={() => handlePlayPause(song)}>
                                        {currentSong === song && isPlaying && !playIcon ? (
                                            <FiPause className="aarti-icon" />
                                        ) : (
                                            <FiPlay className="aarti-icon" />
                                        )}
                                    </button>
                                    <a href={song.url} download className="aarti-button">
                                        <FiDownload className="aarti-icon" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </>
    );
};

export default Aarti;
