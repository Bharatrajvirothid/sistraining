import React from "react";
import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIcon from "@mui/icons-material/Phone";
import Navbar from "../Navbar/Navbar";

function  Header() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#002147", // Dark blue background
          color: "white", // White text
          padding: "10px 20px", // Padding for the header
        }}
      >
        {/* MUI Grid Container */}
        <Grid
          container
          spacing={2} // Adds space between Grid items
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: "column", md: "row" }} // Column layout on small screens, row on medium and up
        >
          {/* Left Section: Working Hours and Email */}
          <Grid
            item
            xs={12} // Full width on extra small devices
            md={5} // 5/12 width on medium devices
            lg={5} // 5/12 width on large devices
            style={{ display: "flex", alignItems: "center", gap: "15px" }}
          >
            {/* Working Hours */}
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <AccessTimeIcon style={{ color: "#90EE90" }} />
              <span>09:00am - 06:00pm</span>
            </div>

            {/* Vertical Line */}
            <div style={{ color: "white", margin: "0 10px" }}>|</div>

            {/* Email */}
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <EmailIcon style={{ color: "#90EE90" }} />
              <span>training@sistraining.in</span>
            </div>
          </Grid>

          {/* Right Section: Social Media and Phone */}
          <Grid
            item
            xs={12} // Full width on extra small devices
            md={5} // 5/12 width on medium devices
            lg={5} // 5/12 width on large devices
            style={{ display: "flex", justifyContent: "flex-end", gap: "15px" }}
          >
            {/* Social Icons */}
            <div style={{ display: "flex", gap: "10px" }}>
              <FacebookIcon style={{ color: "#90EE90" }} />
              <InstagramIcon style={{ color: "#90EE90" }} />
              <LinkedInIcon style={{ color: "#90EE90" }} />
              <TwitterIcon style={{ color: "#90EE90" }} />
            </div>

            {/* Vertical Line */}
            <div style={{ color: "white", margin: "0 10px" }}>|</div>

            {/* Phone Number */}
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <PhoneIcon style={{ color: "#90EE90" }} />
              <span> +91 9849193532</span>
            </div>
          </Grid>
        </Grid>
      </div>
      <Navbar />
      
    </div>
  );
}

export default Header;
