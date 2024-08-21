import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Social from '../../components/social-icon/Social';
import "./Tenders.css";
import pujaImage from "../../assets/images/tender.jpg";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NewsComponent from '../../components/NewsComponent';

const Tenders = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const data = [
    {
      year: 2024,
      total: 124,
      months: [
        { month: 'January', value: 23 },
        { month: 'February', value: 50 },
        { month: 'March', value: 29 },
        { month: 'April', value: 5 },
        { month: 'May', value: 14 },
        { month: 'June', value: 3 },
      ],
    },
    {
      year: 2023,
      total: 364,
      months: [
        { month: 'January', value: 48 },
        { month: 'February', value: 25 },
        { month: 'March', value: 57 },
        { month: 'April', value: 41 },
        { month: 'May', value: 9 },
        { month: 'June', value: 24 },
        { month: 'July', value: 21 },
        { month: 'August', value: 40 },
        { month: 'September', value: 24 },
        { month: 'October', value: 25 },
        { month: 'November', value: 25 },
        { month: 'December', value: 25 },
      ],
    },
    {
      year: 2022,
      total: 407,
      months: [
        { month: 'January', value: 32 },
        { month: 'February', value: 36 },
        { month: 'March', value: 42 },
        { month: 'April', value: 38 },
        { month: 'May', value: 39 },
        { month: 'June', value: 37 },
        { month: 'July', value: 22 },
        { month: 'August', value: 26 },
        { month: 'September', value: 48 },
        { month: 'October', value: 21 },
        { month: 'November', value: 18 },
        { month: 'December', value: 48 },
      ],
    },
    {
      year: 2021,
      total: 275,
      months: [
        { month: 'January', value: 26 },
        { month: 'February', value: 18 },
        { month: 'March', value: 32 },
        { month: 'April', value: 12 },
        { month: 'May', value: 17 },
        { month: 'June', value: 31 },
        { month: 'July', value: 21 },
        { month: 'August', value: 27 },
        { month: 'September', value: 11 },
        { month: 'October', value: 12 },
        { month: 'November', value: 18 },
        { month: 'December', value: 50 },
      ],
    },
    {
      year: 2020,
      total: 222,
      months: [
        { month: 'January', value: 34 },
        { month: 'February', value: 39 },
        { month: 'March', value: 16 },
        { month: 'April', value: 7 },
        { month: 'May', value: 10 },
        { month: 'June', value: 13 },
        { month: 'July', value: 18 },
        { month: 'August', value: 8 },
        { month: 'September', value: 34 },
        { month: 'October', value: 7 },
        { month: 'November', value: 22 },
        { month: 'December', value: 14 },
      ],
    },
    {
      year: 2018,
      total: 363,
      months: [
        { month: 'March', value: 38 },
        { month: 'April', value: 45 },
        { month: 'May', value: 52 },
        { month: 'June', value: 41 },
        { month: 'July', value: 29 },
        { month: 'August', value: 28 },
        { month: 'September', value: 35 },
        { month: 'October', value: 56 },
        { month: 'November', value: 24 },
        { month: 'December', value: 15 },
      ],
    },
  ];

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
          <span> Home &#9654; Sai Temple &#9654; Puja </span>
        </div>
        <div className="places-head">
          <h1>Daily Ritual</h1>
        </div>
      </div>


      <div className='tenderSection'>
     <div className='tendersContaineer'>
<div style={{width:"70%"}}>this is tender</div>

        <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', width: '30%', padding: '20px' }}>
          <div style={{ width: '80%' }}>
            {data.map((yearData, yearIndex) => (
              <Accordion
                key={yearIndex}
                expanded={expanded === `panel${yearIndex}`}
                onChange={handleChange(`panel${yearIndex}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${yearIndex + 1}-content`}
                  id={`panel${yearIndex + 1}-header`}
                >
                  <Typography>{yearData.year} [{yearData.total}]</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography component="div">
                    <ul>
                      {yearData.months.map((monthData, monthIndex) => (
                        <li key={monthIndex}>
                          {monthData.month}[{monthData.value}]
                        </li>
                      ))}
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
               {/* <NewsComponent/> */}
          </div>
       
        </div>
       
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Tenders;
