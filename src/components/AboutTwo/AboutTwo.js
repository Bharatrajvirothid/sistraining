import React from 'react';

const AboutTwo = () => {
  const sectionStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
  };

  const statisticsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#ff4757',
    padding: '40px',
    color: 'white',
    textAlign: 'center',
    borderRadius: '8px',
    marginBottom: '40px',
    flexWrap: 'wrap'
  };

  const statItemStyle = {
    flex: 1,
  };

  const statIconStyle = {
    fontSize: '2rem',
    marginBottom: '10px',
    display: 'block',
  };

  const statHeadingStyle = {
    fontSize: '2.5rem',
    marginBottom: '5px',
  };

  const statTextStyle = {
    fontSize: '1rem',
  };

  const servicesStyle = {
    textAlign: 'center',
    marginBottom: '40px',
  };

  const serviceCardsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    flexWrap: 'wrap',
  };

  const serviceCardStyle = {
    flex: 1,
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  };

  const serviceCardHoverStyle = {
    transform: 'translateY(-10px)',
  };

  const serviceIconStyle = {
    fontSize: '2rem',
    color: '#ff4757',
    marginBottom: '10px',
    display: 'block',
  };

  const serviceHeadingStyle = {
    fontSize: '1.5rem',
    marginBottom: '10px',
  };

  const serviceTextStyle = {
    fontSize: '1rem',
    marginBottom: '15px',
  };

  const readMoreStyle = {
    color: '#ff4757',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  const responsiveStyles = {
    padding: '40px',
    margin: '0 80px',
  };

  return (
    <div style={sectionStyle}>
      {/* Statistics Section */}
      <div style={statisticsStyle}>
        <div style={statItemStyle}>
          <i style={statIconStyle} className="icon-doctor"></i>
          <h3 style={statHeadingStyle}>568+</h3>
          <p style={statTextStyle}>Professional Doctors</p>
        </div>
        <div style={statItemStyle}>
          <i style={statIconStyle} className="icon-lab"></i>
          <h3 style={statHeadingStyle}>963+</h3>
          <p style={statTextStyle}>Digital Laboratory</p>
        </div>
        <div style={statItemStyle}>
          <i style={statIconStyle} className="icon-experience"></i>
          <h3 style={statHeadingStyle}>38+</h3>
          <p style={statTextStyle}>Years Of Experience</p>
        </div>
        <div style={statItemStyle}>
          <i style={statIconStyle} className="icon-award"></i>
          <h3 style={statHeadingStyle}>463+</h3>
          <p style={statTextStyle}>Winning Awards</p>
        </div>
      </div>

      {/* Services Section */}
      <div style={servicesStyle}>
        <h2>Service We Provide</h2>
        <div style={serviceCardsStyle}>
          <div style={serviceCardStyle}>
            <i style={serviceIconStyle} className="icon-neuro"></i>
            <h3 style={serviceHeadingStyle}>Neuro Surgery</h3>
            <p style={serviceTextStyle}>Sit consectetur adipiscin elit sed do eiusmod tempor</p>
            <a href="#" style={readMoreStyle}>Read More</a>
          </div>
          <div style={serviceCardStyle}>
            <i style={serviceIconStyle} className="icon-dental"></i>
            <h3 style={serviceHeadingStyle}>Dental Surgery</h3>
            <p style={serviceTextStyle}>Sit consectetur adipiscin elit sed do eiusmod tempor</p>
            <a href="#" style={readMoreStyle}>Read More</a>
          </div>
          <div style={serviceCardStyle}>
            <i style={serviceIconStyle} className="icon-plastic"></i>
            <h3 style={serviceHeadingStyle}>Plastic Surgery</h3>
            <p style={serviceTextStyle}>Sit consectetur adipiscin elit sed do eiusmod tempor</p>
            <a href="#" style={readMoreStyle}>Read More</a>
          </div>
          <div style={serviceCardStyle}>
            <i style={serviceIconStyle} className="icon-heart"></i>
            <h3 style={serviceHeadingStyle}>Heart Surgery</h3>
            <p style={serviceTextStyle}>Sit consectetur adipiscin elit sed do eiusmod tempor</p>
            <a href="#" style={readMoreStyle}>Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
