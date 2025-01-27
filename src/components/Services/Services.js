import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, Avatar } from '@mui/material';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined'; // Sample icon for service

const services = [
  {
    id: 1,
    title: 'Neuro Surgery',
    description: 'Sit consectetur adipisicin elit sed do eiusmod tempor',
    icon: <MedicalServicesOutlinedIcon sx={{ fontSize: 50, color: '#ff5b5b' }} />,
  },
  {
    id: 2,
    title: 'Dental Surgery',
    description: 'Sit consectetur adipisicin elit sed do eiusmod tempor',
    icon: <MedicalServicesOutlinedIcon sx={{ fontSize: 50, color: '#ff5b5b' }} />,
  },
  {
    id: 3,
    title: 'Plastic Surgery',
    description: 'Sit consectetur adipisicin elit sed do eiusmod tempor',
    icon: <MedicalServicesOutlinedIcon sx={{ fontSize: 50, color: '#ff5b5b' }} />,
  },
  {
    id: 4,
    title: 'Heart Surgery',
    description: 'Sit consectetur adipisicin elit sed do eiusmod tempor',
    icon: <MedicalServicesOutlinedIcon sx={{ fontSize: 50, color: '#ff5b5b' }} />,
  },
];

const ServicesSection = () => {
  return (
    <Box
      sx={{
        py: 8,
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        px: { xs: 2, sm: 3, md: 8 }, // Adjust padding for smaller screens
      }}
    >
      {/* Section Heading */}
      <Typography
        variant="overline"
        sx={{ fontSize: '16px', color: '#ff5b5b', fontWeight: 'bold' }}
      >
        Our Services
      </Typography>
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold', color: '#1C3144', mt: 1, mb: 6 }}
      >
        Service We Provide
      </Typography>

      {/* Grid of Services */}
      <Grid
        container
        spacing={4}
        justifyContent="center" // Center horizontally
        alignItems="center" // Center vertically
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {services.map((service) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={service.id}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card
              sx={{
                p: 3,
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                width: '100%',
                maxWidth: { xs: '280px', sm: '300px', md: '100%' }, // Ensure smaller width on small screens
                textAlign: 'center',
              }}
            >
              <CardContent>
                <Avatar
                  sx={{
                    backgroundColor: 'transparent',
                    width: 60,
                    height: 60,
                    margin: '0 auto 16px',
                  }}
                >
                  {service.icon}
                </Avatar>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', color: '#1C3144', mb: 1 }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#8892A2', mb: 2 }}>
                  {service.description}
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    textTransform: 'none',
                    color: '#ff5b5b',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    '&:hover': {
                      color: '#ff4040',
                    },
                  }}
                >
                  Read More &gt;&gt;
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
