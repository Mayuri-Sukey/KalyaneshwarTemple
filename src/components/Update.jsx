import React, { useEffect, useState } from "react";
import { IoIosAlarm } from "react-icons/io";

const DailyUpdate = () => {
  const [latestUpdate, setLatestUpdate] = useState();
  const [upcomingFest, setUpcomingFest] = useState();
  const [dailyProgram, setdailyProgram] = useState();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(
      typeof window !== "undefined" &&
        window.matchMedia("(max-width: 1020px)").matches
    );
    setLatestUpdate([
      {
        data: "“रंगपंचमी” या स्थानिक उत्सव कार्यक्रमाबाबत...",
        hyperlink: "#",
      },
      {
        data: "“गुढीपाडवा” या स्थानिक उत्सव कार्यक्रमाबाबत",
        hyperlink: "#",
      },
      {
        data: "“होळी” या स्थानिक उत्सव कार्यक्रमाबाबत",
        hyperlink: "#",
      },
      {
        data: "वार्षिक भंडारा आणि महाप्रसाद: आगामी श्रावण महिन्यात आयोजित वार्षिक भंडारा आणि महाप्रसादामध्ये सहभागी व्हा. प्रसादासाठी नावनोंदणी लवकरच सुरू होईल.",
        hyperlink: "#",
      },
      {
        data: "“होळी” या स्थानिक उत्सव कार्यक्रमाबाबत",
        hyperlink: "#",
      },
    ]);

    setUpcomingFest([
      {
        data: "श्रावण महिना - २५ जुलै ते २२ ऑगस्ट २०२४: दररोज रुद्राभिषेक, उपवास आणि भक्तिपूर्वक जप यांसह पवित्र श्रावण महिन्यात सहभागी व्हा.",
      },
      {
        data: "नागपंचमी - ६ ऑगस्ट २०२४: भगवान शिवाचे निष्ठावंत अनुयायी, नागदेवतेची विशेष अर्पण आणि पूजाविधींसह पूजा करा.",
      },
      {
        data: "प्रदोष व्रत - पंधरवड्याला एकदा: भगवान शिवाला समर्पित, पंधरवड्यातून एकदा येणाऱ्या पवित्र प्रदोष व्रताचे सायंकाळी प्रार्थना आणि विशेष पूजांसह पालन करा.",
      },
      {
        data: "कार्तिक पौर्णिमा - १५ नोव्हेंबर २०२४: भगवान शिवाच्या सन्मानार्थ विधी आणि भव्य मिरवणूक यांसह पवित्र कार्तिक पौर्णिमेचा सण साजरा करा.",
      },
      {
        data: "महाशिवरात्रि - ८ फेब्रुवारी २०२४: भगवान शिवाला समर्पित रात्रीचे विशेष पूजाविधी, जागरण आणि आध्यात्मिक प्रवचने यांमध्ये सहभागी व्हा.",
      },
    ]);

    setdailyProgram([
      {
        time: "4.45 AM",
        programname: "Temple Open",
      },
      {
        time: "5.00 AM",
        programname: "Bhupali",
      },
      {
        time: "5.15 AM",
        programname: "Kakad Aarti (Morning)",
      },
      {
        time: "5.50 AM",
        programname: "Mangal Snaan In Shivling Mandir",
      },
      {
        time: "4.45 AM",
        programname: "Temple Open",
      },
      {
        time: "6.20 AM",
        programname: `Aarti "Lavthi Vikrali"`,
      },
      {
        time: "6.25 AM",
        programname: "Darshan Begins In Shiv Mandir",
      },
      {
        time: "11.30 AM",
        programname: "Dhuni Pooja With Rice and Ghee In Dwarkamai",
      },
      {
        time: "12.00 PM",
        programname: "Mid-day Aarti",
      },
      {
        time: "4.00 PM",
        programname: "Pothi (Devotional Reading / Study) In Shiv Mandir",
      },
      {
        time: "At sunset",
        programname: "Dhoop Aarti",
      },
      {
        time: "8.30 - 10.00pm PM",
        programname: "Devotional Songs in Shiv Mandir & Cultural Programms",
      },
      {
        time: "10.00 PM",
        programname: "Shej Aarti",
      },
    ]);
  }, []);
  return (
    <div>
      <div className="update-main-div">
        {/* First main cart */}
        <div
          className="update-daily-prog update-innerdivs"
          data-aos="fade-right"
          data-aos-duration={isMobile ? 1500 : 2500}
        >
          <h3 style={{marginTop:"0px", color:"#300d0c",fontSize:"16px"}}>
            <span className="update-alram-ico">
              <IoIosAlarm />{" "}
            </span>
            &nbsp; Daily Programme
          </h3>

          <div className="update-card">
            {/* This is inner div */}
            <div className="update-bg">
              <div className="update-scrolling-container">
                <div className="update-content-daily">
                  {/* map */}

                   {dailyProgram &&
                    dailyProgram.map((data, index) => (
                      <div className="custom_text" key={index}>
                        <div className="update-main-innerdiv">
                          <div className="update-daily-timediv">
                            <h5>{data.time}</h5>
                          </div>
                          <div>
                            <p>{data.programname}</p>
                          </div>
                        </div>
                        <hr />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="update-blob"></div>
          </div> 
        </div>

        {/* Second main cart */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration={isMobile ? 1500 : 2500}
          className="update-upcoming-fest update-innerdivs"
        >
          <h3 style={{marginTop:"0px",color:"#300d0c",fontSize:"16px"}}>
            <span className="update-alram-ico">
              <IoIosAlarm />
            </span>
            &nbsp; Upcoming Festivals
          </h3>
          <div className="update-card">
            <div className="update-bg">
              <div className="update-scrolling-container">
                <div className="update-content">
                  {upcomingFest &&
                    upcomingFest.map((item, index) => (
                      <div key={index} className="custom_text">
                        <p className="update-upcoming-fest">{item.data}</p>

                        <hr />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="update-blob"></div>
          </div>
        </div>

        {/* Third main cart */}
        <div
          data-aos="fade-left"
          data-aos-duration={isMobile ? 1500 : 2500}
          className="update-latest-update update-innerdivs"
        >
          <h3 style={{marginTop:"0px", color:"#300d0c",fontSize:"16px"}}>
            <span className="update-alram-ico">
              <IoIosAlarm />
            </span>{" "}
            &nbsp; Latest Updates
          </h3>
          <div className="update-card">
            <div className="update-bg" >
              <div className="update-scrolling-container">
                <div className="update-content">
                  {latestUpdate &&
                    latestUpdate.map((item, index) => (
                      <div key={index} className="custom_text">
                        <p>
                          <a href={item.hyperlink}>{item.data}</a>
                        </p>
                        <hr />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="update-blob"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyUpdate;
