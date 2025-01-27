import React, { useState } from 'react';

const AboutThree = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sectionStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '40px',
    flexWrap: 'wrap',
  };

  const contentStyle = {
    flex: 1,
    paddingRight: '20px',
  };

  const accordionStyle = {
    flex: 1,
    paddingLeft: '20px',
  };

  const headingStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#ff4757',
  };

  const subHeadingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const textStyle = {
    fontSize: '1rem',
    marginBottom: '20px',
    lineHeight: '1.6',
  };

  const linkStyle = {
    color: '#ff4757',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  const readMoreStyle = {
    color: '#ff4757',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'block',
    marginTop: '20px',
  };

  const accordionItemStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    marginBottom: '10px',
    borderRadius: '8px',
  };

  const accordionHeaderStyle = {
    padding: '15px 20px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    backgroundColor: '#f9f9f9',
  };

  const accordionBodyStyle = {
    padding: '15px 20px',
    fontSize: '1rem',
    borderTop: '1px solid #ddd',
    display: activeIndex === 0 ? 'block' : 'none',
  };

  return (
    <div style={sectionStyle}>
      {/* Left Content Section */}
      <div style={contentStyle}>
        <h2 style={headingStyle}>Why Choose Us</h2>
        <h3 style={subHeadingStyle}>Have Any Questions? Feel Free To Ask.</h3>
        <p style={textStyle}>
          Sed ut pers piciat is unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi and 
          <a href="#" style={linkStyle}> visit our service page </a> architecto beatae vitae dicta sunt explicabo.
        </p>
        <span style={readMoreStyle}>Read More &gt;&gt;</span>
      </div>

      {/* Accordion Section */}
      <div style={accordionStyle}>
        <div style={accordionItemStyle}>
          <div style={accordionHeaderStyle} onClick={() => toggleAccordion(0)}>
            01. Signals For Customising Website?
            <span>{activeIndex === 0 ? '-' : '+'}</span>
          </div>
          {activeIndex === 0 && (
            <div style={accordionBodyStyle}>
              Content related to customizing websites goes here...
            </div>
          )}
        </div>
        <div style={accordionItemStyle}>
          <div style={accordionHeaderStyle} onClick={() => toggleAccordion(1)}>
            02. Information Architecture Easy?
            <span>{activeIndex === 1 ? '-' : '+'}</span>
          </div>
          {activeIndex === 1 && (
            <div style={accordionBodyStyle}>
              Content about information architecture goes here...
            </div>
          )}
        </div>
        <div style={accordionItemStyle}>
          <div style={accordionHeaderStyle} onClick={() => toggleAccordion(2)}>
            03. Guide To Attracting Clients?
            <span>{activeIndex === 2 ? '-' : '+'}</span>
          </div>
          {activeIndex === 2 && (
            <div style={accordionBodyStyle}>
              Content related to attracting clients goes here...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutThree;
