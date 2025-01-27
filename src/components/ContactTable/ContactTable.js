import React from 'react';

const ContactTable = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  };

  const headingStyle = {
    color: '#333',
  };

  const contactHeadingStyle = {
    color: 'green',
    fontWeight: 'bold',
    marginTop: '10px',
  };

  const addressStyle = {
    fontSize: '14px',
    marginBottom: '15px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  };

  const thTdStyle = {
    padding: '10px',
    border: '1px solid #ddd',
  };

  const thStyle = {
    backgroundColor: '#f2f2f2',
  };

  const footerLinksStyle = {
    marginTop: '20px',
  };

  const footerLinkStyle = {
    color: '#007bff',
    textDecoration: 'none',
  };

  const footerLinkHoverStyle = {
    textDecoration: 'underline',
  };

  // Responsive Styles for small devices
  const responsiveThTdStyle = window.innerWidth <= 768 ? { fontSize: '14px', padding: '8px' } : {};

  const responsiveHeadingStyle = window.innerWidth <= 768 ? { fontSize: '18px' } : { fontSize: '22px' };

  return (
    <div style={containerStyle}>
      <h1 style={{ ...headingStyle, ...responsiveHeadingStyle }}>Southern Inspection Services Pvt Ltd</h1>
      <p style={addressStyle}>
        # 9-16-23/1/1, 1st Floor, CBM Compound, Opp Ramatalkies Bus Stop, Vikram Milk Foods lane, Visakhapatnam.
      </p>

      <h2 style={contactHeadingStyle}>Contact Numbers</h2>

      {/* Training Section */}
      <h3 style={responsiveHeadingStyle}>Training:</h3>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...thTdStyle, ...thStyle }}>Training</th>
            <th style={{ ...thTdStyle, ...thStyle }}>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ ...thTdStyle, ...responsiveThTdStyle }}>Health & Safety (NEBOSH-IGC & IOSH)</td>
            <td style={{ ...thTdStyle, ...responsiveThTdStyle }}>(+91) 77023 46456</td>
          </tr>
          <tr>
            <td style={{ ...thTdStyle, ...responsiveThTdStyle }}>NDT & ANDT (ASNT /ISO 9712/PCN)</td>
            <td style={{ ...thTdStyle, ...responsiveThTdStyle }}>(+91) 98664 40529</td>
          </tr>
          <tr>
            <td style={{ ...thTdStyle, ...responsiveThTdStyle }}>
              Welding & Painting, ISO Certified Courses
            </td>
            <td style={{ ...thTdStyle, ...responsiveThTdStyle }}>
              (+91) 98491 93532<br /> (+91) 98491 93532
            </td>
          </tr>
        </tbody>
      </table>

      {/* Services Section */}
      <h3 style={responsiveHeadingStyle}>Services:</h3>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...thTdStyle, ...thStyle }}>Services</th>
            <th style={{ ...thTdStyle, ...thStyle }}>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ ...thTdStyle, ...responsiveThTdStyle }}>
              Inspection Services, NDT, Vendor, Consultancy, Third Party
            </td>
            <td style={{ ...thTdStyle, ...responsiveThTdStyle }}>
              (+91) 98491 93532<br /> (+91) 98490 54132
            </td>
          </tr>
        </tbody>
      </table>

      {/* Footer Links */}
      <div style={footerLinksStyle}>
        <a href="#" style={footerLinkStyle} onMouseOver={(e) => e.target.style.textDecoration = footerLinkHoverStyle.textDecoration} onMouseOut={(e) => e.target.style.textDecoration = footerLinkStyle.textDecoration}>
          Complaint Form
        </a>{' '}
        |{' '}
        <a href="#" style={footerLinkStyle} onMouseOver={(e) => e.target.style.textDecoration = footerLinkHoverStyle.textDecoration} onMouseOut={(e) => e.target.style.textDecoration = footerLinkStyle.textDecoration}>
          Complaint Procedure
        </a>
      </div>
    </div>
  );
};

export default ContactTable;
