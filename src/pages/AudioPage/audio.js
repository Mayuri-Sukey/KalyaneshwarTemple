import React, { useState } from "react";
import "./audio.css";
import { FiPlay, FiPause, FiDownload } from "react-icons/fi";
import music from "./songss/108_namavali.mp3";
import music2 from "./songss/Adhyay_02.mp3";
import music3 from "./songss/Adhyay_03.mp3";
import music4 from "./songss/Adhyay_04.mp3";
import music5 from "./songss/Adhyay_05.mp3";
import music6 from "./songss/Adhyay_06.mp3";
import sai from "./assets/sai.jpg";
import Navbar from "../../components/Navbar";
import Social from "../../components/social-icon/Social";
import Footer from "../../components/Footer";
// import regimg from "../../assets/images/templeimgregulation.jpg";
import pujaImage from "../../assets/images/pujaImage.jpg"

const MusicPlayer = () => {
  const songsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [audioState, setAudioState] = useState({ url: null, playing: false });

  const songs = [
    {
      title: "SAI-POTHI-CH-01",
      artist: "Marathi-Ovi",
      genre: "Marathi-Ovi",
      url: music,
    },
    {
      title: "SAI-POTHI-CH-02",
      artist: "Marathi-Ovi",
      genre: "Marathi-Ovi",
      url: music2,
    },
    {
      title: "SAI-POTHI-CH-03",
      artist: "Marathi-Ovi",
      genre: "Marathi-Ovi",
      url: music3,
    },
    {
      title: "SAI-POTHI-CH-04",
      artist: "Marathi-Ovi",
      genre: "Marathi-Ovi",
      url: music4,
    },
    {
      title: "SAI-POTHI-CH-05",
      artist: "Marathi-Ovi",
      genre: "Marathi-Ovi",
      url: music5,
    },
    {
      title: "SAI-POTHI-CH-06",
      artist: "Marathi-Ovi",
      genre: "Marathi-Ovi",
      url: music6,
    },
    {
      title: "SAI-POTHI-CH-09",
      artist: "Marathi-Ovi",
      genre: "Marathi-Ovi",
      url: "music7",
    },
    {
      title: "SAI-POTHI-CH-10",
      artist: "Marathi-Ovi",
      genre: "Marathi-Ovi",
      url: "music8",
    },
    {
      title: "SAI-POTHI-CH-11",
      artist: "Marathi-Ovi",
      genre: "Marathi-Ovi",
      url: "music9",
    },

    // Hindi
    {
      title: "Sai Pothi Dohawali Ch - 1",
      artist: "Hindi",
      genre: "Hindi",
      url: "music11",
    },
    {
      title: "Sai Pothi Dohawali Ch - 2",
      artist: "Hindi",
      genre: "Hindi",
      url: "music22",
    },
    {
      title: "Sai Pothi Dohawali Ch - 3",
      artist: "Hindi",
      genre: "Hindi",
      url: "music23",
    },
    {
      title: "Sai Pothi Dohawali Ch - 4",
      artist: "Hindi",
      genre: "Hindi",
      url: "music24",
    },
    {
      title: "Sai Pothi Dohawali Ch - 5",
      artist: "Hindi",
      genre: "Hindi",
      url: "music25",
    },
    {
      title: "Sai Pothi Dohawali Ch - 6",
      artist: "Hindi",
      genre: "Hindi",
      url: "music26",
    },
    {
      title: "Sai Pothi Dohawali Ch - 7",
      artist: "Hindi",
      genre: "Hindi",
      url: "music27",
    },
    {
      title: "Sai Pothi Dohawali Ch - 8",
      artist: "Hindi",
      genre: "Hindi",
      url: "music28",
    },
    {
      title: "Sai Pothi Dohawali Ch - 9",
      artist: "Hindi",
      genre: "Hindi",
      url: "music29",
    },
    {
      title: "Sai Pothi Dohawali Ch - 10",
      artist: "Hindi",
      genre: "Hindi",
      url: "music10",
    },

    // Marathi
    { title: "Sai Pothi Ch - 1", artist: "Marathi", genre: "Marathi", url: "" },
    { title: "Sai Pothi Ch - 2", artist: "Marathi", genre: "Marathi", url: "" },
    { title: "Sai Pothi Ch - 3", artist: "Marathi", genre: "Marathi", url: "" },
    { title: "Sai Pothi Ch - 4", artist: "Marathi", genre: "Marathi", url: "" },
    { title: "Sai Pothi Ch - 5", artist: "Marathi", genre: "Marathi", url: "" },
    { title: "Sai Pothi Ch - 6", artist: "Marathi", genre: "Marathi", url: "" },
    { title: "Sai Pothi Ch - 7", artist: "Marathi", genre: "Marathi", url: "" },
    { title: "Sai Pothi Ch - 8", artist: "Marathi", genre: "Marathi", url: "" },
    { title: "Sai Pothi Ch - 9", artist: "Marathi", genre: "Marathi", url: "" },
    {
      title: "Sai Pothi Ch - 10",
      artist: "Marathi",
      genre: "Marathi",
      url: "",
    },

    // Tamil
    {
      title: "Sai Satcharitra - Tamil - Ch - 1",
      artist: "Artist Name",
      genre: "Tamil",
      url: "",
    },
    {
      title: "Sai Satcharitra - Tamil - Ch - 2",
      artist: "Artist Name",
      genre: "Tamil",
      url: "",
    },
    {
      title: "Sai Satcharitra - Tamil - Ch - 3",
      artist: "Artist Name",
      genre: "Tamil",
      url: "",
    },
    {
      title: "Sai Satcharitra - Tamil - Ch - 4",
      artist: "Artist Name",
      genre: "Tamil",
      url: "",
    },
    {
      title: "Sai Satcharitra - Tamil - Ch - 5",
      artist: "Artist Name",
      genre: "Tamil",
      url: "",
    },
    {
      title: "Sai Satcharitra - Tamil - Ch - 6",
      artist: "Artist Name",
      genre: "Tamil",
      url: "",
    },
    {
      title: "Sai Satcharitra - Tamil - Ch - 7",
      artist: "Artist Name",
      genre: "Tamil",
      url: "",
    },
    {
      title: "Sai Satcharitra - Tamil - Ch - 8",
      artist: "Artist Name",
      genre: "Tamil",
      url: "",
    },
    {
      title: "Sai Satcharitra - Tamil - Ch - 9",
      artist: "Artist Name",
      genre: "Tamil",
      url: "",
    },
    {
      title: "Sai Satcharitra - Tamil - Ch - 10",
      artist: "Artist Name",
      genre: "Tamil",
      url: "",
    },

    // Telugu
    {
      title: "Sai Satcharitra - Telugu - Upodhgatham",
      artist: "Artist Name",
      genre: "Telugu",
      url: "",
    },
    {
      title: "Sai Satcharitra - Telugu - Ch - 1",
      artist: "Artist Name",
      genre: "Telugu",
      url: "",
    },
    {
      title: "Sai Satcharitra - Telugu - Ch - 2",
      artist: "Artist Name",
      genre: "Telugu",
      url: music,
    },
    {
      title: "Sai Satcharitra - Telugu - Ch - 3",
      artist: "Artist Name",
      genre: "Telugu",
      url: music,
    },
    {
      title: "Sai Satcharitra - Telugu - Ch - 4",
      artist: "Artist Name",
      genre: "Telugu",
      url: music,
    },
    {
      title: "Sai Satcharitra - Telugu - Ch - 5",
      artist: "Artist Name",
      genre: "Telugu",
      url: music,
    },
    {
      title: "Sai Satcharitra - Telugu - Ch - 6",
      artist: "Artist Name",
      genre: "Telugu",
      url: music,
    },
    {
      title: "Sai Satcharitra - Telugu - Ch - 7",
      artist: "Artist Name",
      genre: "Telugu",
      url: music,
    },
    {
      title: "Sai Satcharitra - Telugu - Ch - 8",
      artist: "Artist Name",
      genre: "Telugu",
      url: music,
    },
    {
      title: "Sai Satcharitra - Telugu - Ch - 9",
      artist: "Artist Name",
      genre: "Telugu",
      url: music,
    },
    //other
    {
      title: "Stairway to Heaven",
      artist: "Led Zeppelin",
      genre: "Other",
      url: "/music/stairway_to_heaven.mp3",
    },
    {
      title: "Smells Like Teen Spirit",
      artist: "Nirvana",
      genre: "Other",
      url: "/music/smells_like_teen_spirit.mp3",
    },
    {
      title: "Imagine",
      artist: "John Lennon",
      genre: "Other",
      url: "/music/imagine.mp3",
    },
    {
      title: "Billie Jean",
      artist: "Michael Jackson",
      genre: "Other",
      url: "/music/billie_jean.mp3",
    },
    {
      title: "Hotel California",
      artist: "Eagles",
      genre: "Other",
      url: "/music/hotel_california.mp3",
    },
    {
      title: "Like a Rolling Stone",
      artist: "Bob Dylan",
      genre: "Other",
      url: "/music/like_a_rolling_stone.mp3",
    },
    {
      title: "Comfortably Numb",
      artist: "Pink Floyd",
      genre: "Other",
      url: "/music/comfortably_numb.mp3",
    },
    {
      title: "Hey Jude",
      artist: "The Beatles",
      genre: "Other",
      url: "/music/hey_jude.mp3",
    },
    {
      title: "Born to Run",
      artist: "Bruce Springsteen",
      genre: "Other",
      url: "/music/born_to_run.mp3",
    },
  ];
  const genres = [
    "All",
    "Marathi-Ovi",
    "Hindi",
    "Marathi",
    "Tamil",
    "Telugu",
    "Other",
  ];

  const filteredSongs = songs.filter(
    (song) => selectedGenre === "All" || song.genre === selectedGenre
  );

  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs = filteredSongs.slice(indexOfFirstSong, indexOfLastSong);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1); // Reset pagination to first page when genre changes
  };

  const handlePlayPause = (url) => {
    if (audioState.playing && audioState.url === url) {
      pauseSong();
    } else {
      playSong(url);
    }
  };

  const playSong = (url) => {
    const audioPlayer = document.getElementById("audio-player");
    audioPlayer.src = url;
    audioPlayer.play();
    setAudioState({ url: url, playing: true });
  };

  const pauseSong = () => {
    const audioPlayer = document.getElementById("audio-player");
    audioPlayer.pause();
    setAudioState({ ...audioState, playing: false });
  };

  return (
    <>
   

 
<Navbar/>
<Social/>


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
           <span> Home &#9654; Sai Temple &#9654; Puja
</span>
       </div>
       <div className="places-head">
           <h1>Sai Darshan Video
</h1>
       </div>
   </div>

<div className='audio-Section'>
      
    
      <div className="audio-container">
        <header className="audio-header">
          {/* <div className="title">Music Player</div> */}
          <div className="audio-button-container">
            {genres.map((genre, index) => (
              <button
                key={index}
                className={`audio-genre-button ${
                  selectedGenre === genre ? "active" : ""
                }`}
                onClick={() => handleGenreChange(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        </header>
        <div className="audio-main-content">
          <div className="audio-song-list">
            {currentSongs.map((song, index) => (
              <div className="audio-song-item" key={index}>
                <div className="audio-song-info">
                  <img
                    src={sai}
                    alt="Album Cover"
                    className="audio-album-cover"
                  />
                  <div>
                    <div className="audio-song-title">{song.title}</div>
                    <div className="audio-song-artist">{song.artist}</div>
                  </div>
                </div>
                <div className="audio-song-actions">
                  <a
                    className="audio-button"
                    onClick={() => handlePlayPause(song.url)}
                  >
                    {audioState.playing && audioState.url === song.url ? (
                      <FiPause className="audio-icon" />
                    ) : (
                      <FiPlay className="audio-icon" />
                    )}
                  </a>
                  <a href={song.url} download className="audio-button">
                    <FiDownload className="audio-icon" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="audio-foter">
          <Pagination
            songsPerPage={songsPerPage}
            totalSongs={filteredSongs.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          <div className="audio-pagination-info">
            Showing {Math.min(indexOfFirstSong + 1, filteredSongs.length)}-
            {Math.min(indexOfLastSong, filteredSongs.length)} of{" "}
            {filteredSongs.length} songs
          </div>
        </div>
        <audio id="audio-player" controls style={{ display: "none" }}></audio>
      </div>
      </div>
      <Footer />
    </>
  );
};

function Pagination({ songsPerPage, totalSongs, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalSongs / songsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    const maxPages = 3;
    const totalPages = pageNumbers.length;
    const pages = [];

    if (totalPages <= maxPages) {
      return pageNumbers.map((number) => (
        <a
          href="#"
          key={number}
          className={`audio-pagination-link ${
            currentPage === number ? "active" : ""
          }`}
          onClick={() => paginate(number)}
        >
          {number}
        </a>
      ));
    }

    const ellipsis = <span className="audio-pagination-link">...</span>;

    if (currentPage <= maxPages) {
      pages.push(
        ...pageNumbers.slice(0, maxPages).map((number) => (
          <a
            href="#"
            key={number}
            className={`audio-pagination-link ${
              currentPage === number ? "active" : ""
            }`}
            onClick={() => paginate(number)}
          >
            {number}
          </a>
        )),
        ellipsis,
        <a
          href="#"
          key={totalPages}
          className={`audio-pagination-link ${
            currentPage === totalPages ? "active" : ""
          }`}
          onClick={() => paginate(totalPages)}
        >
          {totalPages}
        </a>
      );
    } else if (currentPage > totalPages - maxPages) {
      pages.push(
        <a
          href="#"
          key={1}
          className={`audio-pagination-link ${
            currentPage === 1 ? "active" : ""
          }`}
          onClick={() => paginate(1)}
        >
          1
        </a>,
        ellipsis,
        ...pageNumbers.slice(totalPages - maxPages).map((number) => (
          <a
            href="#"
            key={number}
            className={`audio-pagination-link ${
              currentPage === number ? "active" : ""
            }`}
            onClick={() => paginate(number)}
          >
            {number}
          </a>
        ))
      );
    } else {
      pages.push(
        <a
          href="#"
          key={1}
          className={`audio-pagination-link ${
            currentPage === 1 ? "active" : ""
          }`}
          onClick={() => paginate(1)}
        >
          1
        </a>,
        ellipsis,
        ...pageNumbers.slice(currentPage - 2, currentPage + 1).map((number) => (
          <a
            href="#"
            key={number}
            className={`audio-pagination-link ${
              currentPage === number ? "active" : ""
            }`}
            onClick={() => paginate(number)}
          >
            {number}
          </a>
        )),
        ellipsis,
        <a
          href="#"
          key={totalPages}
          className={`audio-pagination-link ${
            currentPage === totalPages ? "active" : ""
          }`}
          onClick={() => paginate(totalPages)}
        >
          {totalPages}
        </a>
      );
    }

    return pages;
  };

  return (
    <nav className="audio-pagination">
      <a
        href="#"
        className={`audio-pagination-link ${
          currentPage === 1 ? "disabled" : ""
        }`}
        onClick={() => paginate(currentPage - 1)}
      >
        Previous
      </a>
      {renderPageNumbers()}
      <a
        href="#"
        className={`audio-pagination-link ${
          currentPage === pageNumbers.length ? "disabled" : ""
        }`}
        onClick={() => paginate(currentPage + 1)}
      >
        Next
      </a>
    </nav>
  );
}

export default MusicPlayer;
