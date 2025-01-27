import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"; // Import the arrow icon

const services = [
  {
    title: "Safety Courses",
    description: "Best Medical & Health Care",
    image:
      "https://i.pinimg.com/236x/f9/b0/12/f9b0121f2b8b09aabc4c5cf89ddce36c.jpg", // Replace with your image link
  },
  {
    title: "NDT Courses",
    description: "Best Medical & Health Care",
    image:
      "https://i.pinimg.com/236x/d9/f1/fe/d9f1fe4e32025dceec36395470cf404c.jpg", // Replace with your image link
  },
  {
    title: "Welding Inspection",
    description: "Best Medical & Health Care",
    image:
      "https://i.pinimg.com/236x/61/bf/13/61bf1369c1d5dd6ac283f3519946ad28.jpg", // Replace with your image link
  },
];

const ServicessSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleHover = (index) => {
    setHoveredCard(index);
  };

  const handleHoverOff = () => {
    setHoveredCard(null);
  };

  return (
    <Container sx={{ backgroundColor: "#f9f9f9" }}>
      <Box
        sx={{
          padding: "2rem",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ color: "red", marginBottom: "1rem", fontSize: "2rem" , fontWeight:"bold" }}
        >
          Our Services
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          Service We Provide
        </Typography>
        <Box
          sx={{
            height: "5px",
            width: "90px",
            background:
              "linear-gradient(to right, rgba(0, 128, 0, 1), rgba(0, 128, 0, 0))",
            margin: "0 auto 2rem",
            transition: "background 0.3s ease-in-out",
          }}
        />

        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleHoverOff}
                style={{
                  width: "300px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent style={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    component="div"
                    style={{ fontWeight: "bold" }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                  {/* Show More with transition */}
                  <Box
                    sx={{
                      opacity: hoveredCard === index ? 1 : 0,
                      transition: "opacity 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "red", // Red color for "Show More"
                      marginTop: "10px",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      Show More
                    </Typography>
                    <ArrowForwardIosIcon
                      sx={{
                        fontSize: "12px", // Adjust size of the arrow
                        marginLeft: "5px", // Space between text and icon
                        color: "red",
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ServicessSection;
