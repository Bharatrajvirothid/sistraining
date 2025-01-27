    import React, { useState } from "react";
    import { NavLink } from "react-router-dom";
    import { Badge, IconButton } from '@mui/material';
    import CloseIcon from '@mui/icons-material/Close';
    import MenuIcon from '@mui/icons-material/Menu';
    import SearchIcon from '@mui/icons-material/Search';
    import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
    import "./Navbar.css";


    const Navbar = () => {
      const [showMenu, setShowMenu] = useState(false);

      const toggleMenu = () => {
        setShowMenu(!showMenu);
      };

      const closeMenuOnMobile = () => {
        if (window.innerWidth <= 1150) {
          setShowMenu(false);
        }
      };

      return (
        <header className="header">
          <nav className="nav container">
            <NavLink to="/" className="nav__logo">
              <img src="http://sistraining.in/wp-content/uploads/2018/01/sis-logo.png" alt="Logo" className="nav__logo-img" /> sistraining
            </NavLink>

            <div
              className={`nav__menu ${showMenu ? "show-menu" : ""}`}
              id="nav-menu"
            >
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
                  <NavLink
                    to="/department"
                    className="nav__link"
                    onClick={closeMenuOnMobile}
                  >
                    Courses
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    to="/doctors"
                    className="nav__link"
                    onClick={closeMenuOnMobile}
                  >
                    Inspection Services  Resourcing
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    to="/shop"
                    className="nav__link"
                    onClick={closeMenuOnMobile}
                  >
                   Schedules   online e Learning
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

            {/* Search, Cart and Contact Us */}
            <div className="nav__icons">
              {/* <IconButton className="nav__search-icon">
                <SearchIcon />
              </IconButton>
              <IconButton className="nav__cart-icon">
                <Badge badgeContent={0} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton> */}
              <NavLink to="/contact-us" className="nav__cta">
                Contact Us <span className="cta__icon">+</span>
              </NavLink>
            </div>

            <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
              <MenuIcon />
            </div>
          </nav>
        </header>
      );
    };

    export default Navbar;
