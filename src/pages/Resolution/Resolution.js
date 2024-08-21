import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NewsComponent from "../../components/NewsComponent";
import templeimg from "../../assets/images/templeimgregulation.jpg";
import "./Resolution.css";
import resolutiondata from "./ResolutionData.json";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import calender from "../../assets/images/calender.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
};

const Resolution = () => {
  const [Resolution, setResolution] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedResolution, setSelectedResolution] = useState(null);

  useEffect(() => {
    setResolution(resolutiondata);
  }, []);

  console.log("Resolution data : ", Resolution);

  const handleOpen = (resolution) => {
    setSelectedResolution(resolution);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Navbar />
      <div
        className="about-background"
        style={{ backgroundImage: `url(${templeimg})` }}
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
          <span> Home &#9654; About Sanathan &#9654; Resolution</span>
        </div>
        <div className="adhok-head">
          <h1>Resolutions of Board of Management</h1>
        </div>
      </div>
      <div className="regulation-container">
        <div className="regulation-left">
          <div className="resolution-cont">
            <div className="resolution-sub-cont">
              <h4>SSST, Shirdi Resolutions of Board of Management</h4>
              <div className="reso-card-p-p">
                {/* Card */}
                {Resolution.map((data, index) => (
                  <div className="resolution-card-parent" key={index}>
                    <div
                      className="resolution-card"
                      onClick={() => handleOpen(data)}
                    >
                      {data.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="regulation-right">
          <NewsComponent />
        </div>
      </div>
      <Footer />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Box
          sx={{
            ...style,
            flexDirection: { xs: "column", md: "row" }, // Change flex direction on small screens
          }}
        >
          {selectedResolution &&
            selectedResolution.months &&
            selectedResolution.months.map((monthData, index) => (
              <Card sx={{ maxWidth: 400, marginBottom: 4 }} key={index}>
                <CardActionArea>
                  <CardContent>
                    <Box display="flex" alignItems="center">
                      <Box
                        component="img"
                        sx={{
                          height: 25,
                          width: 25,
                          marginRight: 1,
                        }}
                        alt="Calendar"
                        src={calender}
                      />
                      <Typography gutterBottom variant="h6" component="div">
                        {monthData.month}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      <ul>
                        {monthData &&
                          monthData.dates &&
                          monthData.dates.map((dateData, index) => (
                            <li>
                              <a href="">{dateData.date}</a>
                            </li>
                          ))}
                      </ul>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
        </Box>
      </Modal>
    </div>
  );
};

export default Resolution;
