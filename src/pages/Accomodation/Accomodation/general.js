import React, { useState, useEffect } from 'react';
import img1 from './assets/Toilet.jpeg';
import img2 from './assets/11bedroom.jpeg';
import img3 from './assets/DSC_9649.jpeg';
import img4 from './assets/Locker.jpeg';
import img7 from './assets/Hall18cot.jpeg';
import img5 from './assets/DSC_9651.jpeg';
import img6 from './assets/DSC_9652.jpeg';
import img8 from './assets/Triple_bed_AC.jpeg';
import img9 from './assets/DSC_8859.jpeg';
import img10 from './assets/DSC_8878.jpeg';
import img11 from './assets/Triple_bed_non_AC1.jpeg';
import img12 from './assets/DSC_8853.jpeg';
import img13 from './assets/TripleAC.jpeg';
import img14 from './assets/DSC_8974.jpeg';
import img15 from './assets/DSC_8958.jpeg';
import img16 from './assets/DSC_8967.jpeg';
import img17 from './assets/TripleNONAC.jpeg';

const data = [
    {
      locationName: "Sai Bhakta Niwas (Distance from temple -1.3Km)",
      rooms: [
        {
          no: "01", roomType: "NON AC", roomDescription: "3 beds attached non AC rooms", minCap: 3, maxCap: 5, rate: 200, remark: "Locker deposit ₹100.\nChaddar deposit ₹200.\nMattress ₹10.\nChaddar ₹10.", roomImages: "View Room", images: [img1, img2]
        },
        {
          no: "02", roomType: "AC", roomDescription: "6 beds attached room with AC", minCap: 6, maxCap: 8, rate: "", remark: "", images: []
        },
        {
          no: "03", roomType: "NON AC", roomDescription: "11 beds attached room non AC", minCap: 2, maxCap: 11, rate: "", remark: "", roomImages: "View Room", images: [img1, img2]
        },
        {
          no: "04", roomType: "HALL", roomDescription: "Big hall, floor beds and non-attached bathrooms", minCap: 40, maxCap: 50, rate: "", remark: "", images: []
        },
        {
          no: "05", roomType: "HALL", roomDescription: "Big hall floor bed with attached bathroom", minCap: 40, maxCap: 50, rate: "", remark: "", images: []
        },
        {
          no: "06", roomType: "LOCKER", roomDescription: "Lockers provided with common bathroom", minCap: 1, maxCap: 1, rate: "", remark: "", roomImages: "View Room", images: [img4]
        }
      ]
    },
    {
      locationName: "Sai Ashram Dharmashala (Distance from temple-550Meters)",
      rooms: [
        {
          no: "01", roomType: "DORMITORY", roomDescription: "Dormitory", minCap: 1, maxCap: 1, rate: "", remark: "", roomImages: "", images: []
        },
        {
          no: "02", roomType: "SD-HALL", roomDescription: "Hall of 10-18 devotee", minCap: 10, maxCap: 18, rate: 20, remark: "", roomImages: "View Room", images: [img7, img6, img5, img3]
        }
      ]
    },
    {
      locationName: "Dwarawati (Distance from temple-0.5Km)",
      rooms: [
        {
          no: "01", roomType: "AC-WESTERN", roomDescription: "3 beds AC room", minCap: 3, maxCap: 5, rate: 900, remark: "Floor mattress will be provided for extra persons", roomImages: "View Room", images: [img8, img9,img10],
        },
        {
          no: "02", roomType: "NON AC-WESTERN", roomDescription: "AC-WESTERN", minCap: 3, maxCap: 5, rate: 500, remark: "", roomImages: "View Room", images: [img11, img9,img10]
        },
        {
          no: "03", roomType: "NON AC-INDIAN", roomDescription: "3 beds non AC", minCap: 3, maxCap: 5, rate: 500, remark: "", roomImages: "View Room", images: [img11, img9,img12]
        }
      ]
    },
    {
      locationName: "Sai Ashram Bhaktniwas (Distance from temple-1.7Km)",
      rooms: [
        {
          no: "01", roomType: "AC", roomDescription: "3 beds AC room", minCap: 3, maxCap: 5, rate: 600, remark: "Floor mattress will be provided for extra persons", roomImages: "View Room", images: [img13, img14,img15,img16]
        },
        {
          no: "02", roomType: "NON AC", roomDescription: "3 beds non AC room", minCap: 3, maxCap: 5, rate: 250, remark: "", roomImages: "View Room", images: [img17, img9, img12]
        }
      ]
    },
    {
      locationName: "Sai Niwas (Distance from temple-3.2Km)",
      rooms: [
        {
          no: "01", roomType: "AC WESTERN", roomDescription: "", minCap: 2, maxCap: 2, rate: 800, remark: "Floor mattress will be provided for extra persons ₹200. per head", roomImages: "", images: [img6]
        }
      ]
    },
    {
      locationName: "Sai Udyan (Distance from temple-250Meters)",
      rooms: [
        {
          no: "01", roomType: "NON AC", roomDescription: "", minCap: 10, maxCap: 15, rate: 250, remark: "Locker deposit ₹100.", roomImages: "", images: [img1, img2]
        },
        {
          no: "02", roomType: "NON AC", roomDescription: "", minCap: 8, maxCap: 10, rate: 150, remark: "", roomImages: "", images: [img3, img4]
        },
        {
          no: "03", roomType: "HALL", roomDescription: "", minCap: 30, maxCap: 30, rate: 600, remark: "", roomImages: "", images: [img5, img6]
        },
        {
          no: "04", roomType: "LOCKERS", roomDescription: "Lockers provided with common bathroom facility", minCap: 1, maxCap: 1, rate: 10, remark: "", roomImages: "", images: [img1]
        }
      ]
    },
    {
      locationName: "Shanti Niketan (Distance from temple-100Meters)",
      rooms: [
        {
          no: "01", roomType: "NON AC", roomDescription: "", minCap: 3, maxCap: 4, rate: 200, remark: "", roomImages: "", images: [img2, img3]
        },
        {
          no: "02", roomType: "NON AC", roomDescription: "", minCap: 6, maxCap: 7, rate: 300, remark: "", roomImages: "", images: [img4, img5, img6]
        }
      ]
    },
    {
      locationName: "Bus Stand (Distance from temple-450Meters)",
      rooms: [
        {
          no: "01", roomType: "NON AC", roomDescription: "", minCap: 4, maxCap: 6, rate: 300, remark: "", roomImages: "", images: [img1, img2]
        },
        {
          no: "02", roomType: "NON AC", roomDescription: "", minCap: 10, maxCap: 10, rate: 500, remark: "", roomImages:"", images: [img3, img4]
        },
        {
          no: "03", roomType: "HALL", roomDescription: "", minCap: 25, maxCap: 25, rate: 800, remark: "", roomImages: "", images: [img5, img6]
        },
        {
          no: "04", roomType: "HALL", roomDescription: "", minCap: 15, maxCap: 15, rate: 600, remark: "", roomImages: "", images: [img1, img2]
        }
      ]
    }
  ];
  

function General() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselVisible, setCarouselVisible] = useState(false);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    if (isCarouselVisible) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isCarouselVisible]);

  const showSlide = (n) => {
    let newSlideIndex = currentSlide + n;
    if (newSlideIndex >= slides.length) newSlideIndex = 0;
    if (newSlideIndex < 0) newSlideIndex = slides.length - 1;
    setCurrentSlide(newSlideIndex);
  };

  const closeCarousel = () => {
    setCarouselVisible(false);
  };

  const handleButtonClick = (images) => {
    setSlides(images);
    setCarouselVisible(true);
    setCurrentSlide(0);
  };

  return (
    <div className="Ac_App">
      <h1 className='General_h1'>ROOMS AVAILABLE FOR BOOKING IN SHIRDI ON COUNTER OF EACH BUILDING</h1>
      <table className="General_responsive-table">
        <thead>
          <tr>
            <th className='.th'>Location Name</th>
            <th className='.th'>No.</th>
            <th className='.th'>Room Type</th>
            <th className='.th'>Room Images</th>
            <th className='.th'>Room Description</th>
            <th className='.th'>Min Cap</th>
            <th className='.th'>Max Cap</th>
            <th className='.th'>Rate per day(₹)</th>
            <th className='.th'>Remark</th>
          </tr>
        </thead>
        <tbody>
          {data.map((location, locIndex) => (
            location.rooms.map((room, roomIndex) => (
              <tr key={`${locIndex}-${roomIndex}`}>
                <td className='.td' data-label="Location Name">{roomIndex === 0 ? location.locationName : ''}</td>
                <td className='.td' data-label="No.">{room.no}</td>
                <td className='.td'data-label="Room Type">{room.roomType}</td>
                <td className='.td' data-label="Room Images">
                {room.roomImages === "View Room" && (
                    <button className='Img' onClick={() => handleButtonClick(room.images)}>{room.roomImages}</button>
                  )}
                </td>

               
                <td className='.td' data-label="Room Description">{room.roomDescription}</td>
                <td className='.td' data-label="Min Cap">{room.minCap}</td>
                <td className='.td' data-label="Max Cap">{room.maxCap}</td>
                <td className='.td' data-label="Rate per day(₹)">{room.rate}</td>
                <td className='.td' data-label="Remark">{room.remark}</td>
              </tr>
            ))
          ))}

          {isCarouselVisible && (
            <>
              <div className=" General_overlay" onClick={closeCarousel}></div>
              <div className=" General_carousel">
                <div className="General_carousel-header">Check Your Rooms</div>
                <span className="General_cancel" onClick={closeCarousel}>&times;</span>
                <span className="General_prev" onClick={() => showSlide(-1)}>&#10094;</span>
                <span className="General_next" onClick={() => showSlide(1)}>&#10095;</span>

                {slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide}
                    className={index === currentSlide ? 'active' : ''}
                    alt={`Slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default General;
