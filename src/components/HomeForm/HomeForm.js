import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  FormControl,
  TextField,
  Button,
} from '@mui/material';
import CountUp from 'react-countup'; // For number animation
import { useInView } from 'react-intersection-observer'; // For scroll-triggered animation
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ScienceIcon from '@mui/icons-material/Science';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';

const statistics = [
  {
    label: 'Professional Doctors',
    value: 3568,
    icon: <MedicalServicesIcon sx={{ fontSize: 50, color: '#8bc34a' }} />,
  },
  {
    label: 'Digital Laboratory',
    value: 9632,
    icon: <ScienceIcon sx={{ fontSize: 50, color: '#8bc34a' }} />,
  },
  {
    label: 'Years Of Experience',
    value: 38,
    icon: <WorkIcon sx={{ fontSize: 50, color: '#8bc34a' }} />,
  },
  {
    label: 'Winning Awards',
    value: 463,
    icon: <EmojiEventsIcon sx={{ fontSize: 50, color: '#8bc34a' }} />,
  },
];

const AppointmentForm = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#8bc34a',
        padding: '2rem',
        borderRadius: '8px',
        marginTop: '2rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography
        variant="h5"
        sx={{ marginBottom: '1.5rem', color: '#fff', fontWeight: 'bold' }}
      >
        Make an Appointment
      </Typography>
      <FormControl fullWidth sx={{ marginBottom: '1.5rem' }}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: '1.5rem' }}>
        <TextField
          label="Phone Number"
          type="tel"
          fullWidth
          sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
        />
      </FormControl>
      <Button
        variant="contained"
        sx={{ backgroundColor: '#4caf50', color: '#fff', padding: '10px' }}
        fullWidth
      >
        Submit Now
      </Button>
    </Box>
  );
};

const StatisticsSection = () => {
  // Intersection Observer hook to detect when the section is in view
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Box
      ref={ref}
      sx={{
        padding: '3rem',
        backgroundColor: 'rgb(0, 33, 71)',
        color: '#fff',
      }}
    >
      <Grid container spacing={2} alignItems="center"> {/* Reduced spacing between columns */}
        {/* Left Side: Statistics */}
        <Grid item xs={12} md={8}>
          <Grid container columnSpacing={2} rowSpacing={4}> {/* Controlled gap between rows and columns */}
            {statistics.map((stat, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={6}
                sx={{ textAlign: 'center', paddingBottom: '2rem' }} // Adjusted padding for vertical gap
              >
                <Box
                  sx={{
                    marginBottom: '1.5rem',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {stat.icon}
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  {inView ? (
                    <CountUp start={0} end={stat.value} duration={2.5} />
                  ) : (
                    stat.value
                  )}
                  +
                </Typography>
                <Typography variant="h6">{stat.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Right Side: Appointment Form */}
        <Grid item xs={12} md={4}>
          <AppointmentForm />
        </Grid>
      </Grid>
    </Box>
  );
};

const HomeForm = () => {
  return (
    <Box sx={{ padding: '0', backgroundColor: '#f9f9f9' }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Statistics Section */}
        <Grid item xs={12}>
          <StatisticsSection />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeForm;
