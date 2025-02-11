import React, { useEffect, useState } from "react";
import "./CustomCarousel.css";
import { Grid, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import image from "../../Assets/Images/Types_of_Welders_for_Home_Use.webp";
import { motion } from "framer-motion";
import img from "../../Assets/Images/Certified Logo.jpg"
const CustomCarousel = () => {
  const [slider, setSlider] = useState([]);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [paragraphVisible, setParagraphVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);

  async function getAllValues() {
    const jsonData = [
      {
        slider_heading: "Southern Inspection Services Private limited.",
        slider_paragraph: "We’ve 25 Years of experience in Training and Certification in NDT.",
        slider_image: image
      },
      {
        slider_heading: "Certified NDT Courses",
        slider_paragraph: "Get certified in Non-Destructive Testing techniques.",
        slider_image: "https://demo.themedraft.net/wp/doctio/wp-content/uploads/2022/06/home-1-slider-1.jpg",
      },
      {
        slider_heading: "Welding Inspection Services",
        slider_paragraph: "Our professional welding inspection ensures high standards and safety.",
        slider_image: "https://i.pinimg.com/236x/1f/73/0b/1f730b93c7d7dee47040eb80e4ea644b.jpg",
      },
    ];

    setSlider(jsonData);
  }

  useEffect(() => {
    getAllValues();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
    resetVisibility(); // Reset visibility for the next slide
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slider.length) % slider.length);
    resetVisibility(); // Reset visibility for the next slide
  };

  const resetVisibility = () => {
    setHeadingVisible(false);
    setParagraphVisible(false);
    setButtonsVisible(false);

    setTimeout(() => {
      setHeadingVisible(true);
    }, 500); // Heading appears after 0.5 seconds

    setTimeout(() => {
      setParagraphVisible(true);
    }, 1000); // Paragraph appears after 1 second

    setTimeout(() => {
      setButtonsVisible(true);
    }, 1500); // Buttons appear after 1.5 seconds
  };

  // Trigger visibility on first render
  useEffect(() => {
    resetVisibility();
  }, [currentIndex]);

  return (
    <div>

<img 
  src={img} 
  style={{
    position: "absolute",
    top: "155px",
    left: "33px",
    width: "100px", // Adjust as needed
    height: "auto",
    zIndex: 10 // Keep it above background elements
  }} 
/>

    <div>
       <div className="moving-text">
       Southern Inspection Services Private Ltd is an accredited course provider with ACP No. 1037 for NEBOSH (UK) – IGC.IO
</div>

    
    
    <Grid container sx={{ backgroundColor: "#e6e6e6", width: "100vw", margin: 0, padding: 0 }}>
      <Grid item xs={12} className="carousel-container">
        <button
          style={{
            borderRadius: "50%",
            backgroundColor: "#e12454",
            height: "60px",
            width: "60px",
            position: "absolute",
            top: "50%",
            left: "20px",
            transform: "translateY(-50%)",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={prevSlide}
        >
          <ArrowBackIcon style={{ color: "#fff", fontSize: "36px" }} />
        </button>

        <div
          className="carousel"
          style={{
            backgroundImage: `url(${slider[currentIndex]?.slider_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "80vh",
            width: "100vw",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingLeft: "10%",
            textAlign: "left",
          }}
        >
          <div className="text-box" style={{ padding: "20px", maxWidth: "600px", marginLeft: "50px" }}>
  {headingVisible && (
    <h1
      style={{
        color: "white",
        fontSize: "clamp(24px, 5vw, 40px)", // Increased font size
        fontWeight: "bold",
        margin: "0",
        lineHeight: "1",
        whiteSpace: "nowrap", // Ensure text remains in a single line
        overflow: "visible", // Allow full text to be displayed
        textOverflow: "clip", // Prevent ellipsis from appearing
      }}
    >
      {slider[currentIndex]?.slider_heading}
    </h1>
  )}


  {paragraphVisible && (
    <p
      style={{
        fontSize: "clamp(16px, 2vw, 22px)", // Responsive paragraph size
        marginTop: "10px",
        color: "black",
        fontWeight: "bold"
      }}
    >
      {slider[currentIndex]?.slider_paragraph}
    </p>
  )}

  {/* Buttons Section */}
  {buttonsVisible && (
    <div style={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
      <Button
        style={{
          backgroundColor: "#e12454",
          color: "#fff",
          borderRadius: "50px",
          padding: "10px 20px",
          fontSize: "clamp(14px, 1.5vw, 16px)", // Responsive button size
          fontWeight: "bold",
          marginRight: "20px",
        }}
      >
        Our Services
      </Button>
      <Button
        className="vibrating-button" // Add the class here
        style={{
          backgroundColor: "#4CAF50",
          color: "#fff",
          borderRadius: "50%",
          padding: "10px",
          minWidth: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PlayCircleIcon style={{ fontSize: "36px" }} />
      </Button>
    </div>
  )}
</div>

        </div>

        <button
          style={{
            borderRadius: "50%",
            backgroundColor: "#e12454",
            height: "60px",
            width: "60px",
            position: "absolute",
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={nextSlide}
        >
          <ArrowForwardIcon style={{ color: "#fff", fontSize: "36px" }} />
        </button>
      </Grid>
    </Grid>
    </div>
    </div>
  );
};

export default CustomCarousel;
