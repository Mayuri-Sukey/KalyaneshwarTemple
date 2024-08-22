import React, { useState, useEffect } from 'react';
import "../ImageModal.css";
import img1 from "../assets/kalyneshwar/mandirimage1.3.avif"
import img2 from "../assets/kalyneshwar/mandirImage3.3.jpg"
import img3 from "../assets/kalyneshwar/headerlogo4.jpg"

const CaroselSection = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0); // Initialize with a state

    const modalimages = [
        img1,
 
        img3,
    ];
 
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % modalimages.length);
        }, 4000); // 4 seconds delay
        return () => clearInterval(interval);
    }, [modalimages.length]);

    return (
        <div className="image-modal">
            {/* Images */}
            {modalimages.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Mandir Image ${index + 1}`}
                    className={`modal-image ${
                        index === currentImage ? 'show' : 'hide'
                    }`}
                />
            ))}
        </div>
    );
};

export default CaroselSection;
