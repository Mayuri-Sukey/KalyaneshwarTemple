import React, { useState } from 'react';
// import './flipcard.css'; // Import the CSS file
import img1 from "./assets/sai-ashram.jpg";
import img2 from "./assets/dwarawati.jpg";
import img3 from "./assets/bhakta-niwas-new.jpg";

const CardFlip = () => {
    const cards = [
        { 
          id: 1, 
          img: img1, 
          title: "Sai Ashram", 
          videoLink: "https://youtu.be/EFU4LZG-AKs", 
          bookLink: "https://online.sai.org.in/#/login",
          content: "It consists of 1536 rooms and can accommodate 9000 devotees. Out of which, 1152 are common rooms with attached bath room and 384 are A.C. rooms. In addition, there is a common services block with a restaurant for devotees. It also has an Open Air Theatre (OAT) to accommodate about 2000 devotees for Sai Kirtans, Bhajans and other cultural programs. The OAT is also designed to accommodate Saibaba Palkhis and Padayatris. Paid Darshan pass facility is available from 06:00 AM to 21:00 PM on reception counter. During Festival and heavy rush period temporary accommodation facility for 1000 SAI devotees is provided in SAI ASHRAM SHATABDI PENDOL situated inside premises."
        },
        { 
          id: 2, 
          img: img2, 
          title: "Dwarawati", 
          videoLink: "https://youtu.be/aaq7pHsDCBw", 
          bookLink: "https://online.sai.org.in/#/login",
          content: "It is the latest accommodation among the three. It has 334 rooms, dormitories & large rooms to accommodate small groups or families of six to ten people. It also have 80 AC Rooms . This complex is also well equipped with the facilities like the parking space, 24 hr. Water supply, electricity supply (with full capacity generator back-up) & the security. It is also equipped with the solar hot water system. Paid darshan pass facility is available from 06:00 AM to 21:00 PM on reception counter."
        },
        { 
          id: 3, 
          img: img3, 
          title: "Bhakta Niwas", 
          videoLink: "https://youtu.be/Fow39S9HbX4?si=cNykW-6hYruYz_vb", 
          bookLink: "https://online.sai.org.in/#/login",
          content: "It is the biggest accommodation complex consisting 542 rooms of various categories. Free bus service, shuttling between the New Bhakta Niwas & the mandir complex is provided round the clock. This complex is well equipped with the parking space, canteen facility, 24 Hr. Water, electricity supply (with full capacity generator back-up) and the security. It is also equipped with the solar hot water system. Paid darshan pass facility is available from 06:00 AM to 21:00 PM on reception counter."
        }
      ];
      

  const [flipped, setFlipped] = useState(Array(cards.length).fill(false));

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <div className="CardFlip_content">
  
      <h1 className="CardFlip_heading">Shri Saibaba Sansthan Trust, Shirdi Accommodation live availability as of time today <a className="link" href="http://103.21.67.21:90/room-availability"><span>Click Here</span></a></h1>
      <p className="CardFlip_description">Shri Saibaba Sansthan, Shirdi offers various accommodation options such as Sai Ashram, Dwarawati, and New Bhakta Niwas which provides a pleasant stay at affordable prices. Book your stay online from below links.</p>
      {cards.map((card, index) => (
      
      <div 
          className={`CardFlip_card ${flipped[index] ? 'flipped' : ''}`} 
          key={card.id} 
          onClick={() => handleFlip(index)}
        >
        <div className="CardFlip_front">
            <div className="CardFlip_front-content">
              <img src={card.img} alt={card.title} className="CardFlip_front-image" />
              <h1 className="CardFlip_front-heading">{card.title}</h1>
              <div className="CardFlip_buttons">
                <div className="CardFlip_button-wrapper1">
                  <a href={card.videoLink} target="_blank" rel="noopener noreferrer" className="CardFlip_btn1 outline1">Watch Video</a>
                  <a href={card.bookLink} target="_blank" rel="noopener noreferrer" className="CardFlip_btn1 fill1">Book Online</a>
                </div>
              </div>
            </div>
          </div>
          <div className="CardFlip_back">
            <div className="CardFlip_back-content">
              <p>{card.content}</p>
              {/* <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardFlip;
