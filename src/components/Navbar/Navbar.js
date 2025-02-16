import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Badge, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import image from "../../Assets/Images/sis-logo.png"
import "./Navbar.css";
import  {useLottie}  from "lottie-react";
import groovyWalkAnimation from "./../../Assets/Images/Animation - 1738953752217 (1).json";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  const courses = [
    {
      title: "NDT Training Level-I,II & III - ASNT / ISO 9712",
      subCourses: [
        "Visual Inspection",
        "Liquid Penetrant Testing",
        "Magnetic Particle Testing",
        "Ultrasonic Testing",
        "Radiography Testing",
        "Radiography Film Interpretation",
        "NDT Level III Preparatory",
      ],
    },
    {
      title: "Advanced NDT Training. ASNT / ISO 9712",
      subCourses: [
        "Phased Array (PAUT)",
        "Time of Flight Diffraction (TOFD)",
        "Total Focusing Method (TFM)",
        "Eddy Current Tube Testing - ECT, NFT, RFE, MFL, IRIS",
        "Long Range Ultrasonic Testing (LRUT)",
        "Tank Floor MFL",
      ],
    },
    {
      title: "Welding Inspection",
      subCourses: [
        "CSWIP 3.1 Certified Welding Inspector",
        "CSWIP 3.2 Certified Welding Inspector",
        "AWS Certified Welding Inspector",
      ],
    },
    {
      title: "Painting Inspection",
      subCourses: [
        "BGAS Grade 2 Painting Inspector",
        "BGAS Grade 1 Painting Inspector Offshore",
      ],
    },
    {
      title: "NEBOSH IGC",
      subCourses: ["NEBOSH International Health and Safety V 4.0"],
    },
    {
      title: "ISO 9001: 2015 QMS LA",
      subCourses: [
        "IRCA Accredited ISO 9001:2015 QMS Lead Auditor Training and Certification",
      ],
    },
    {
      title: "API Preparation Courses",
      subCourses: [
        "API 510 Pressure Vessel Inspector",
        "API 570 Piping Inspector",
        "API 580 Risk-Based Inspection",
        "API 653 Above Ground Storage Tank Inspector",
        "API 936 Refractory Personnel",
      ],
    },
    {
      title: "Inhouse Training",
      subCourses: [
        "NDT Level II",
        "API Preparatory",
        "ISO 9001:2015 QMS LA",
        "ISO 9712 NDT Level II and III Training",
        "Welding and Painting Inspection Certification Preparatory",
        "Corporate Courses",
        "Tailor-Made Courses",
      ],
    },
  ];

  const inspectionServices = [
    "Advanced NDT Inspection Support",
    "Conventional NDT Inspection Support",
    "API Inspection Support",
    "Vendor Inspection Support",
    "Welding Inspection Support",
  ];

  const resourcing = [
    "API Inspectors Certified to 510,570,580,653,986",
    "QA/ QC Inspectors / Engineers/ Supervisors",
    "Welding Inspectors- CSWIP 3.1/ 3.2 / AWS Certified",
    "Painting Inspectors – NACE;BGAS ,ICORR",
    "Advanced NDT Level III ISO 9712 / PCN/ASNT Certified",
    "Advanced NDT Level II ISO 9712 / PCN / ASNT Certified",
    "Welding Engineers",
    "Supervisors",
    "Welders",
    "Insulators",
    "Pipe Fitters",
    "NDT Technicians Conventional and Advanced",
  ];
  const options = {
    animationData: groovyWalkAnimation,
    loop: true
  };

  const { View } = useLottie(options);

  return (
    <div>
    <header className="header">
     {/* <div>{View}</div> */}
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          <img
            src={image}
            alt="Logo"
            className="nav__logo-img"
          />
        </NavLink>

        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/about-us"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav__item">
              <div className="nav__link">
                Courses
                <ul className="nav__dropdown">
                  {courses.map((course, index) => (
                    <li
                      key={index}
                      className="nav__dropdown-item"
                      onMouseEnter={() => setHoveredCourse(course.title)}
                      onMouseLeave={() => setHoveredCourse(null)}
                    >
                      <NavLink to={`/course${index + 1}`} className="nav__dropdown-link">
                        {course.title}
                      </NavLink>
                      {hoveredCourse === course.title && (
                        <ul className="nav__dropdown-right">
                          {course.subCourses.map((subCourse, subIndex) => (
                            <li key={subIndex}>
                              <NavLink
                                to={`/${subCourse
                                  .toLowerCase()
                                  .replace(/ /g, "-")}`}
                                className="nav__dropdown-link"
                              >
                                {subCourse}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="nav__item">
            <div className="nav__link">
                Inspection Services
                <ul className="nav__dropdown">
                  {inspectionServices.map((service, index) => (
                    <li key={index} className="nav__dropdown-item">
                      <NavLink to={`/inspection-service-${index + 1}`} className="nav__dropdown-link">
                        {service}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="nav__item">
            <div className="nav__link">
                Resourcing
                <ul className="nav__dropdown">
                  {resourcing.map((resource, index) => (
                    <li key={index} className="nav__dropdown-item">
                      <NavLink to={`/resourcing-${index + 1}`} className="nav__dropdown-link">
                        {resource}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="nav__item">
              <NavLink
                to="/schedules"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Schedules
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/online-e-learning"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Online e-Learning
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/blog"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/contact"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <CloseIcon />
          </div>
        </div>

        <div className="nav__icons">
          <NavLink to="/contact-us" className="nav__cta">
            Contact Us <span className="cta__icon">+</span>
          </NavLink>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <MenuIcon />
        </div>
      </nav>
    </header>
    

    </div>

  );
};

export default Navbar;
