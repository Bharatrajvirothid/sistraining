import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AnotherCarousel = () => {
  const [slider, setSlider] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  async function getAllValues() {
    const jsonData = [
      {
        slider_image:
          "https://demo.themedraft.net/wp/doctio/wp-content/uploads/2022/06/home-1-slider-2.jpg",
      },
      {
        slider_image:
          "https://demo.themedraft.net/wp/doctio/wp-content/uploads/2022/06/home-1-slider-1.jpg",
      },
      {
        slider_image:
          "https://i.pinimg.com/236x/1f/73/0b/1f730b93c7d7dee47040eb80e4ea644b.jpg",
      },
      {
        slider_image: "https://via.placeholder.com/150x100.png?text=Image+4",
      },
      {
        slider_image: "https://via.placeholder.com/150x100.png?text=Image+5",
      },
      {
        slider_image: "https://via.placeholder.com/150x100.png?text=Image+6",
      },
      {
        slider_image: "https://via.placeholder.com/150x100.png?text=Image+7",
      },
      {
        slider_image: "https://via.placeholder.com/150x100.png?text=Image+8",
      },
    ];

    // Duplicating the array to create an infinite loop effect
    setSlider([...jsonData, ...jsonData]);
  }

  useEffect(() => {
    getAllValues();
  }, []);

  // Function to go to the next slide
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Reset currentIndex if it goes out of bounds (loop effect)
  useEffect(() => {
    if (currentIndex >= slider.length / 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0); // Reset index
      }, 500);
    } else if (currentIndex < 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(slider.length / 2 - 4); // Go to the last visible set
      }, 500);
    } else {
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [currentIndex, slider.length]);

  return (
    <Grid
      container
      sx={{ backgroundColor: "#e6e6e6", width: "100vw", margin: 0, padding: 0 }}
    >
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
            width: "100vw",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "10px",
              transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
              transform: `translateX(-${(currentIndex % (slider.length / 2)) * 100}%)`,
              width: "100vw",
              padding: "0 10%",
            }}
          >
            {slider.slice(currentIndex, currentIndex + 4).map((item, index) => (
              <div key={index} style={{ padding: "10px", textAlign: "center" }}>
                <img
                  src={item.slider_image}
                  alt={`Slide ${index}`}
                  style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                />
              </div>
            ))}
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
  );
};

export default AnotherCarousel;
