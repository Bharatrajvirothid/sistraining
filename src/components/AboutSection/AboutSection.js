import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import AddIcon from '@mui/icons-material/Add';

const aboutContent = {
  title: 'Read Something About Doctio Health Care',
  description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi and visit our service page architecto beatae vitae dicta sunt explicabo.',
  buttonText: 'Click Here',
  contact: '+012 (345) 6789',
  services: [
    { name: 'Medicine & Health Care', icon: '/path/to/medicine-icon.png' },
    { name: 'Doctor & Nurse Service', icon: '/path/to/doctor-nurse-icon.png' },
    { name: 'Dental Care Service', icon: '/path/to/dental-icon.png' },
    { name: 'Medical Equipment', icon: '/path/to/medical-equipment-icon.png' },
  ],
  images: [
    'https://i.pinimg.com/236x/c1/18/46/c118468c87e1fdb179b882c10b7ed9d2.jpg',
    'https://i.pinimg.com/236x/c1/18/46/c118468c87e1fdb179b882c10b7ed9d2.jpg',
    'https://i.pinimg.com/236x/c1/18/46/c118468c87e1fdb179b882c10b7ed9d2.jpg',
    'https://i.pinimg.com/236x/c1/18/46/c118468c87e1fdb179b882c10b7ed9d2.jpg', // Additional image
  ],
};

const AboutSection = () => {
  return (
    <Box sx={{ padding: '3rem', backgroundColor: '#f9f9f9' }}>
  <Grid container spacing={4} alignItems="center">
    {/* Left Side: Overlapping Images */}
    <Grid 
      item 
      xs={12} 
      md={6} 
      sx={{ 
        position: 'relative', 
        height: '400px', 
        display: 'flex', 
        justifyContent: { xs: 'center', md: 'flex-start' } // Center images on small screens
      }}
    >
      {/* First Image */}
      <Box
        component="img"
        src={aboutContent.images[0]}
        alt="Doctor 1"
        sx={{
          width: '150px',
          height: '200px',
          position: 'absolute',
          top: '20px',
          left: { xs: 'auto', md: '250px' },  // Auto-center on small screens, fixed on larger
          transform: 'rotate(-15deg)',
          border: '5px solid white',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      />
      {/* Second Image */}
      <Box
        component="img"
        src={aboutContent.images[1]}
        alt="Doctor 2"
        sx={{
          width: '150px',
          height: '200px',
          position: 'absolute',
          top: '60px',
          left: { xs: 'auto', md: '350px' },  // Auto-center on small screens, fixed on larger
          transform: 'rotate(10deg)',
          border: '5px solid white',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      />
      {/* Third Image */}
      <Box
        component="img"
        src={aboutContent.images[2]}
        alt="Doctor 3"
        sx={{
          width: '150px',
          height: '200px',
          position: 'absolute',
          top: '100px',
          left: { xs: 'auto', md: '450px' },  // Auto-center on small screens, fixed on larger
          transform: 'rotate(-10deg)',
          border: '5px solid white',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      />
      {/* Fourth Image */}
      <Box
        component="img"
        src={aboutContent.images[3]}
        alt="Doctor 4"
        sx={{
          width: '150px',
          height: '200px',
          position: 'absolute',
          top: '140px',
          left: { xs: 'auto', md: '550px' },  // Auto-center on small screens, fixed on larger
          transform: 'rotate(5deg)',
          border: '5px solid white',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      />
    </Grid>

    {/* Right Side: Text Content */}
    <Grid item xs={12} md={6}>
      <Typography variant="h6" sx={{ color: 'red', fontWeight: 'bold' }}>About Doctio</Typography>
      <Typography variant="h4" sx={{ fontWeight: 'bold', margin: '1rem 0' }}>
        {aboutContent.title}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '1.5rem' }}>
        {aboutContent.description}
      </Typography>
      <Button variant="contained" color="secondary" endIcon={<AddIcon />}>
        {aboutContent.buttonText}
      </Button>
      <Typography variant="h6" sx={{ marginTop: '2rem', display: 'flex', alignItems: 'center' }}>
        <PhoneIcon sx={{ marginRight: '10px' }} />
        {aboutContent.contact}
      </Typography>

      {/* Services Icons */}
      <Box sx={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {aboutContent.services.map((service, index) => (
          <Box key={index} sx={{ textAlign: 'center' }}>
            <img src={service.icon} alt={service.name} style={{ width: '50px', height: '50px', marginBottom: '0.5rem' }} />
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{service.name}</Typography>
          </Box>
        ))}
      </Box>
    </Grid>
  </Grid>
</Box>




  );
};

export default AboutSection;
