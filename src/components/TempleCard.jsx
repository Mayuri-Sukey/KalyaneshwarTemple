import React from 'react'

const TempleCard = ({ image, text }) => {
  // console.log(text);
  return (
    <div className="card_box" style={{ 
      background: `url(${image}) no-repeat center center`,
      backgroundSize: 'cover' 
  }}>
     <span data-text={text}></span>
    </div>
  )
}

export default TempleCard
 