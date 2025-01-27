import React from 'react';
import { Box, Typography, Grid, FormControl, TextField, Button, MenuItem, Select } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

const AppointmentForm = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        marginTop: { xs: '2rem', md: 0 },
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: '#ff1744', fontWeight: 'bold', marginBottom: '0.5rem' }}
      >
        Book Now
      </Typography>
      <Typography
        variant="h4"
        sx={{ marginBottom: '1.5rem', fontWeight: 'bold', color: '#2d3436' }}
      >
        Make An Appointment To Book Your Seat
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <TextField label="Name" fullWidth />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <TextField label="Email" fullWidth />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Select defaultValue="" displayEmpty>
              <MenuItem value="" disabled>
                Choose A Service
              </MenuItem>
              <MenuItem value={1}>Service 1</MenuItem>
              <MenuItem value={2}>Service 2</MenuItem>
              <MenuItem value={3}>Service 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Select defaultValue="" displayEmpty>
              <MenuItem value="" disabled>
                Select Doctor
              </MenuItem>
              <MenuItem value={1}>Doctor A</MenuItem>
              <MenuItem value={2}>Doctor B</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <TextField label="dd-mm-yyyy" type="date" fullWidth InputLabelProps={{ shrink: true }} />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Select defaultValue="" displayEmpty>
              <MenuItem value="" disabled>
                Select Branch
              </MenuItem>
              <MenuItem value={1}>Branch 1</MenuItem>
              <MenuItem value={2}>Branch 2</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: '2rem' }}>
        <Button
          variant="contained"
          color="success"
          sx={{ padding: '0.8rem 2rem', fontWeight: 'bold' }}
        >
          Send Now
        </Button>
      </Box>
    </Box>
  );
};

const ContactSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f9f9f9',
        padding: '4rem 0',
      }}
    >
      {/* Get in touch section */}
      <Box
        sx={{
          textAlign: 'center',
          marginBottom: '3rem',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: '#ff1744',
            marginBottom: '0.5rem',
            fontSize: { xs: '1.5rem', sm: '2rem' }, // Reduced size for mobile
          }}
        >
          Get In Touch
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            color: '#2d3436',
            marginBottom: '2rem',
            fontSize: { xs: '2rem', sm: '3rem' }, // Reduced size for mobile
          }}
        >
          Feel Free To Contact
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'flex-start', sm: 'center' },
                flexDirection: { xs: 'row', sm: 'column' },
                textAlign: { xs: 'left', sm: 'center' },
                ml: { xs: '1.5rem', sm: 0 }, // Move content left on mobile
              }}
            >
              <PhoneIcon
                sx={{
                  color: '#ff1744',
                  fontSize: { xs: '40px', sm: '50px' }, // Reduced icon size for mobile
                  marginRight: { xs: '1rem', sm: 0 },
                  marginBottom: { sm: '1rem' },
                }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>Phone:</Typography>
                <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>+123 456 789</Typography>
                <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>+987 654 321</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'flex-start', sm: 'center' },
                flexDirection: { xs: 'row', sm: 'column' },
                textAlign: { xs: 'left', sm: 'center' },
                ml: { xs: '1.5rem', sm: 0 }, // Move content left on mobile
              }}
            >
              <LocationOnIcon
                sx={{
                  color: '#ff1744',
                  fontSize: { xs: '40px', sm: '50px' }, // Reduced icon size for mobile
                  marginRight: { xs: '1rem', sm: 0 },
                  marginBottom: { sm: '1rem' },
                }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>Address:</Typography>
                <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>Haltenstrasse, Lugaggia, Switzerland - 6953</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'flex-start', sm: 'center' },
                flexDirection: { xs: 'row', sm: 'column' },
                textAlign: { xs: 'left', sm: 'center' },
                ml: { xs: '1.5rem', sm: 0 }, // Move content left on mobile
              }}
            >
              <EmailIcon
                sx={{
                  color: '#ff1744',
                  fontSize: { xs: '40px', sm: '50px' }, // Reduced icon size for mobile
                  marginRight: { xs: '1rem', sm: 0 },
                  marginBottom: { sm: '1rem' },
                }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>Email:</Typography>
                <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>not@themerraft.com</Typography>
                <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>replay@themerraft.com</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          flexDirection: { xs: 'column', sm: 'row' }, // Column for small screens, row for larger screens
        }}
      >
        {/* Left: Image */}
        <Box
          sx={{
            flex: '1',
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1532009877282-3340270e0529?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="Doctor"
            style={{
              maxWidth: '100%',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          />
        </Box>

        {/* Right: Form */}
        <Box
          sx={{
            flex: '1',
            maxWidth: '600px',
            width: '100%',
            padding: '1rem',
            boxSizing: 'border-box',
          }}
        >
          <AppointmentForm />
        </Box>
      </Box>

    </Box>
  );
};

export default ContactSection;
