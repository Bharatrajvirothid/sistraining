import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button, Link } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, Email, LocationOn, Phone } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#0A2239', color: '#fff', padding: '2rem 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          
          {/* Logo and Subscription */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" component="div" sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <img src="logo-url-here" alt="Logo" style={{ marginRight: '10px', width: '50px', height: 'auto' }} />
              Doctio
            </Typography>
            <Typography variant="h6" sx={{ fontSize: '1rem', marginBottom: '1rem' }}>
              Subscribe:
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <TextField
                variant="outlined"
                placeholder="Enter Your Email"
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '5px 0 0 5px',
                  width: '100%',
                }}
              />
              <Button
                variant="contained"
                sx={{
                  borderRadius: '0 5px 5px 0',
                  backgroundColor: 'green',
                  '&:hover': { backgroundColor: '#006400' },
                }}
              >
                <Email />
              </Button>
            </Box>
            <Typography variant="body2" sx={{ marginTop: '1rem', color: 'green' }}>
              5M+ Satisfied Clients
            </Typography>
          </Grid>

          {/* About Us */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
              It is a long established fact that the read will be distracted by the readable content.
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Find Us On:
            </Typography>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <Facebook sx={{ cursor: 'pointer', color: '#fff' }} />
              <Twitter sx={{ cursor: 'pointer', color: '#fff' }} />
              <LinkedIn sx={{ cursor: 'pointer', color: '#fff' }} />
              <Instagram sx={{ cursor: 'pointer', color: '#fff' }} />
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              Quick Links
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                <Link href="#" color="inherit" underline="none">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" underline="none">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" underline="none">
                  Department
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" underline="none">
                  Doctors
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" underline="none">
                  FAQ's
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Recent Posts */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              Recent Posts
            </Typography>
            <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
              <img
                src="https://i.pinimg.com/236x/61/bf/13/61bf1369c1d5dd6ac283f3519946ad28.jpg"
                alt="Post"
                style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '5px' }}
              />
              <Box>
                <Typography variant="body2">
                  Study finds link between early stages...
                </Typography>
                <Typography variant="caption" sx={{ color: '#6DBE45' }}>
                  June 10, 2022
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <img
                src="https://i.pinimg.com/236x/f9/b0/12/f9b0121f2b8b09aabc4c5cf89ddce36c.jpg"
                alt="Post"
                style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '5px' }}
              />
              <Box>
                <Typography variant="body2">
                  Every second someone develops the rare...
                </Typography>
                <Typography variant="caption" sx={{ color: '#6DBE45' }}>
                  June 10, 2022
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Contact Us */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <LocationOn sx={{ marginRight: '10px', color: 'green' }} />
              <Typography variant="body2">
                Obere Haltenstrasse, Lugaggia, Switzerland - 6953
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <Email sx={{ marginRight: '10px', color: 'green' }} />
              <Typography variant="body2">no@themedraft.net</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <Email sx={{ marginRight: '10px', color: 'green' }} />
              <Typography variant="body2">replay@themedraft.net</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Phone sx={{ marginRight: '10px', color: 'green' }} />
              <Typography variant="body2">+410 123 456 789</Typography>
            </Box>
          </Grid>

        </Grid>

        {/* Footer Bottom */}
        <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
          <Typography variant="body2">
            &copy; Doctio 2022 | All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
