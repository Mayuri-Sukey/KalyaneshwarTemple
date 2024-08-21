import React from 'react';
import "./BookTable.css"
import Navbar from '../../components/Navbar'
import Social from '../../components/social-icon/Social'
import Footer from '../../components/Footer'
import regimg from "../../assets/images/templeimgregulation.jpg";


const books = [
  { id: 1, name: 'SHRI SAICHARITRA', language: 'MARATHI', price: '₹113.00' },
  { id: 2, name: 'SHRI LEELAAMRUT', language: 'MARATHI', price: '₹44.00' },
  { id: 3, name: 'SAI AVATAR & KARYA', language: 'MARATHI', price: '₹19.00' },
  { id: 4, name: 'SAIBABA AARATI', language: 'MARATHI', price: '₹5.00' },
  { id: 5, name: 'SAINATH STAVANMANJIRI', language: 'MARATHI', price: '₹3.00' },
  { id: 6, name: 'FOUR ADHYAY', language: 'MARATHI', price: '₹7.00' },
  { id: 7, name: 'SAI ELEVANTH ADHYAY', language: 'MARATHI', price: '₹5.00' },
  { id: 8, name: 'SAI BHAJAN MALA', language: 'MARATHI', price: '₹62.00' },
  { id: 9, name: 'CHILDRAN\'S SAIBABA', language: 'MARATHI', price: '₹7.00' },
  { id: 10, name: 'GURUPATH ABHANG', language: 'MARATHI', price: '₹3.00' },
  { id: 11, name: 'SAI SATYACHARITRA', language: 'MARATHI', price: '₹130.00' },
  { id: 12, name: 'KHAPARDE DIARY', language: 'MARATHI', price: '₹10.00' },
  { id: 13, name: 'SAIBODH', language: 'MARATHI', price: '₹94.00' },
  { id: 14, name: 'SHILADHI', language: 'MARATHI', price: '₹10.00' },
  { id: 15, name: 'SHIKVAN & TATVADNYAN', language: 'MARATHI', price: '₹19.00' },
  { id: 16, name: 'SAI CHARITRA DELUXE', language: 'MARATHI', price: '₹250.00' },
  { id: 17, name: 'SAI CHARITRA BHAVARTH (1)', language: 'MARATHI', price: '₹200.00' },
  { id: 18, name: 'SAI CHARITRA BHAVARTH (2)', language: 'MARATHI', price: '₹200.00' },
  { id: 19, name: 'SHRI SAICHARITRA', language: 'HINDI', price: '₹62.00' },
  { id: 20, name: 'SHRI SAICHARITRA POTHI', language: 'HINDI', price: '₹100.00' },
  { id: 21, name: 'SHRI LEELAAMRUT', language: 'HINDI', price: '₹30.00' },
  { id: 22, name: 'SAINATH STAVANMANJIRI', language: 'HINDI', price: '₹5.00' },
  { id: 23, name: 'SAI BHAJAN MALA', language: 'HINDI', price: '₹44.00' },
  { id: 24, name: 'CHILDRAN\'S SAIBABA', language: 'HINDI', price: '₹10.00' },
  { id: 25, name: 'KHAPARDE DIARY', language: 'HINDI', price: '₹31.00' },
  { id: 26, name: 'SAIBABA AARATI', language: 'HINDI', price: '₹13.00' },
  { id: 27, name: 'DOHAVALI SAAR', language: 'HINDI', price: '₹94.00' },
  { id: 28, name: 'FOUR ADHYAY', language: 'HINDI', price: '₹15.00' },
  { id: 29, name: 'SAILEELA MONTHLY BOOK', language: 'HINDI', price: '₹45.00' },
  { id: 30, name: 'SHRI SAICHARITRA', language: 'ENGLISH', price: '₹50.00' },
  { id: 31, name: 'SAINATH STAVANMANJIRI', language: 'ENGLISH', price: '₹5.00' },
  { id: 32, name: 'CHILDRAN\'S SAIBABA', language: 'ENGLISH', price: '₹7.00' },
  { id: 33, name: 'SAIBABA SHIRDI PRADHAAN', language: 'ENGLISH', price: '₹13.00' },
  { id: 34, name: 'KHAPARDE DIARY', language: 'ENGLISH', price: '₹11.00' },
  { id: 35, name: 'CHITRAVALI', language: 'ENGLISH', price: '₹7.00' },
  { id: 36, name: 'SAIBABA AARATI', language: 'ENGLISH', price: '₹19.00' },
  { id: 37, name: 'SHRI SAMARTH SAICHARITRA', language: 'ENGLISH', price: '₹169.00' },
  { id: 38, name: 'SHRI SAICHARITRA', language: 'GUJRATHI', price: '₹62.00' },
  { id: 39, name: 'SAI LEELAMRUT', language: 'GUJRATHI', price: '₹31.00' },
  { id: 40, name: 'SAIBABA AARATI', language: 'GUJRATHI', price: '₹10.00' },
  { id: 41, name: 'SAINATH STAVANMANJIRI', language: 'GUJRATHI', price: '₹5.00' },
  { id: 42, name: 'CHILDRAN\'S SAIBABA', language: 'GUJRATHI', price: '₹15.00' },
  { id: 43, name: 'SAIBODH', language: 'GUJRATHI', price: '₹88.00' },
  { id: 44, name: 'SHIVKAVN & TATVADNYAN', language: 'GUJRATHI', price: '₹35.00' },
  { id: 45, name: 'SAI AVATAR & KARY', language: 'GUJRATHI', price: '₹34.00' },
  { id: 46, name: 'SHILADHI', language: 'GUJRATHI', price: '₹14.00' },
  { id: 47, name: 'SAI SATYACHARITRA', language: 'GUJRATHI', price: '₹150.00' },
  { id: 48, name: 'FOUR ADHYAY', language: 'GUJRATHI', price: '₹20.00' },
  { id: 49, name: 'SHRI SAICHARITRA', language: 'KANNADA', price: '₹75.00' },
  { id: 50, name: 'CHILDRAN\'S SAIBABA', language: 'KANNADA', price: '₹10.00' },
  { id: 51, name: 'SAINATH STAVANMANJIRI', language: 'KANNADA', price: '₹5.00' },
  { id: 52, name: 'SAIBABA AARATI', language: 'KANNADA', price: '₹25.00' },
  { id: 53, name: 'SAI CHARITRA POTHI', language: 'KANNADA', price: '₹150.00' },
  { id: 54, name: 'SHRI SAICHARITRA', language: 'TELUGU', price: '₹60.00' },
  { id: 55, name: 'SAIBABA AARATI', language: 'TELUGU', price: '₹19.00' },
  { id: 56, name: 'CHILDRAN\'S SAIBABA', language: 'TELUGU', price: '₹7.00' },
  { id: 57, name: 'TELAGU POTHI (MANI AMMA)', language: 'TELUGU', price: '₹125.00' },
  { id: 58, name: 'MATHRU SAI', language: 'TELUGU', price: '₹46.00' },
  { id: 59, name: 'TELAGU POTHI (VIMAL SHARMA)', language: 'TELUGU', price: '₹163.00' },
  { id: 60, name: 'SAINATH STAVANMANJIRI', language: 'TELUGU', price: '₹5.00' },
  { id: 61, name: 'KHAPARDE DIARY', language: 'TELUGU', price: '₹31.00' },
  { id: 62, name: 'SHRI SAICHARITRA', language: 'TAMIL', price: '₹90.00' },
  { id: 63, name: 'CHILDRAN\'S SAIBABA', language: 'TAMIL', price: '₹10.00' },
  { id: 64, name: 'KHAPARDE DIARY', language: 'TAMIL', price: '₹30.00' },
  { id: 65, name: 'SAIBABA AARATI', language: 'TAMIL', price: '₹14.00' },
  { id: 66, name: 'SHRI SAICHARITRA', language: 'SINDHI', price: '₹100.00' },
  { id: 67, name: 'SAIBABA AARATI', language: 'SINDHI', price: '₹7.00' },
  { id: 68, name: 'SHRI SAICHARITRA', language: 'BENGALI', price: '₹87.00' },
  { id: 69, name: 'FOUR ADHYAY', language: 'BENGALI', price: '₹13.00' },
  { id: 70, name: 'SAIBABA AARATI', language: 'BENGALI', price: '₹10.00' },
  { id: 71, name: 'SAINATH STAVANMANJIRI', language: 'BENGALI', price: '₹10.00' },
  { id: 72, name: 'SHRI SAICHARITRA', language: 'ORIYA', price: '₹65.00' },
  { id: 73, name: 'SAIBABA AARATI', language: 'ORIYA', price: '₹10.00' },
  { id: 74, name: 'SHRI SAICHARITRA', language: 'PUNJABI', price: '₹98.00' },
  { id: 75, name: 'SAIBABA AARATI', language: 'PUNJABI', price: '₹10.00' },
  { id: 76, name: 'SAINATH STAVANMANJIRI', language: 'PUNJABI', price: '₹5.00' },
  { id: 77, name: 'SHRI SAICHARITRA', language: 'MALYALAM', price: '₹87.00' },
  { id: 78, name: 'SAI SATYACHARITRA', language: 'MALYALAM', price: '₹125.00' },
  { id: 79, name: 'SHRI SAICHARITRA', language: 'AASAMI', price: '₹50.00' },
  { id: 80, name: 'SAIBABA AARATI', language: 'AASAMI', price: '₹15.00' },
  { id: 81, name: 'SAINATH STAVANMANJIRI', language: 'GERMAN', price: '₹22.00' },
  { id: 82, name: 'SAIBABA AARATI', language: 'GERMAN', price: '₹23.00' },
  { id: 83, name: 'SHRI SAICHARITRA', language: 'URDU', price: '₹63.00' },
  { id: 84, name: 'SHRI SAICHARITRA', language: 'KOKANI', price: '₹131.00' },
  { id: 85, name: 'SHRI SAICHARITRA', language: 'NEPALI', price: '₹67.00' }
];

const BookTable = () => {
return (
<div>
<Navbar/>
<Social/>

<div
                className="about-background"
                style={{ backgroundImage: `url(${regimg})`,}}
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
                    <span> Home &#9654;   e-Library   &#9654; Price List 
</span>
                </div>
                <div className="places-head">
                    <h1 style={{textAlign:"center", fontSize:"33px"}}>Price List 
</h1>
                </div>
            </div>


<div className='priceList'>
      <div className="BookTable_container">
         
    <h1 className="BookTable_heading">PUBLICATION DEPARTMENT</h1>
    <h2 className="BookTable_subheading">SHRI SAIBABA SANSTHAN TRUST SHIRDI</h2>
        <ul className="BookTable_responsive-table">
          <li className="BookTable_table-header">
            <div className="col">No.</div>
            <div className="col">NAME OF BOOKS</div>
            <div className="col">LANGUAGE</div>
            <div className="col">PRICE</div>
          </li>
  
          {books.map((item, index) => (
            <li className="BookTable_table-row" key={index}>
              <div className="col" data-label="Flight">
                {item.id}
              </div>
              <div className="col" data-label="Carrier">
                {item.name}
              </div>
              <div className="col" data-label="Destination">
                {item.language}
              </div>
              <div className="col" data-label="Departure">
                {item.price}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer/>
      </div>
      </div>
    );
  };
  
  export default BookTable;
  