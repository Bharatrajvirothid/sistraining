import React from 'react';
import { Box, Container, Grid, Typography, Avatar, Button, IconButton } from '@mui/material';
import Slider from 'react-slick';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const testimonials = [
  {
    id: 1,
    name: 'Md Nadim Khan',
    role: 'Web Developer',
    companyLogo: 'https://cdn.logo.com/hotlink-ok/logo-social.png', // replace with actual logo
    feedback: 'Lorem ipsum is a dolor sitae amet consectetur adipisicing elit. Laboriosam as voluptatem and other important quotes.',
    imageUrl: 'https://i.pravatar.cc/100',
  },
  {
    id: 2,
    name: 'Md Nadim Khan',
    role: 'Web Developer',
    companyLogo: 'https://cdn.logo.com/hotlink-ok/logo-social.png',
    feedback: 'Lorem ipsum is a dolor sitae amet consectetur adipisicing elit. Laboriosam as voluptatem and other important quotes.',
    imageUrl: 'https://i.pravatar.cc/101',
  },
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      sx={{
        position: 'absolute',
        top: '50%',
        right: '-25px',
        transform: 'translateY(-50%)',
        backgroundColor: 'red',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#ff4040',
        },
      }}
      onClick={onClick}
    >
      <ArrowForwardIos />
    </IconButton>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      sx={{
        position: 'absolute',
        top: '50%',
        left: '-25px',
        transform: 'translateY(-50%)',
        backgroundColor: 'red',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#ff4040',
        },
      }}
      onClick={onClick}
    >
      <ArrowBackIos />
    </IconButton>
  );
};

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 900, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#fff', textAlign: 'center' }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="overline" sx={{ fontSize: '16px', color: 'red' }}>
            Our Testimonials
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1C3144', mb: 2 }}>
            What Our Patients Say About Our Caring
          </Typography>
        </Box>

        {/* Carousel */}
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <Box key={testimonial.id} sx={{ px: 2 }}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={4}>
                  <Avatar
                    alt={testimonial.name}
                    src={testimonial.imageUrl}
                    sx={{ width: 100, height: 100, mx: 'auto' }}
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <img
                    src={testimonial.companyLogo}
                    alt="company logo"
                    style={{ width: '100px', marginBottom: '16px' }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ fontSize: '16px', color: '#8892A2', mb: 2 }}
                  >
                    {testimonial.feedback}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 'bold', color: '#1C3144', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <span style={{ fontSize: '24px', color: 'red', marginRight: '5px' }}>❝</span>
                    {testimonial.name}
                    <span style={{ fontSize: '24px', color: 'red', marginLeft: '5px' }}>❞</span>
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#8892A2' }}>
                    {testimonial.role}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Slider>

        {/* Dot indicators */}
        <Box sx={{ mt: 4 }}>
          <Button
            variant="outlined"
            sx={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: '2px solid red',
              mr: 1,
              backgroundColor: 'green',
            }}
          ></Button>
          <Button
            variant="outlined"
            sx={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: '2px solid red',
              backgroundColor: 'white',
            }}
          ></Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialCarousel;
