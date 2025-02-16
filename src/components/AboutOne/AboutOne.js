import React from 'react';
import image from '../../Assets/Cortec Middle East leads in providing top-tier….jpg'

const AboutOne = () => {
  return (
    <div style={styles.container}>
      {/* Left Column */}
      <div style={styles.leftColumn}>
        <h5 style={styles.subHeading}>About Sis</h5>
        <h1 style={styles.mainHeading}>
        SIS is an ISO 9001: 2015 certified organisation
        </h1>
        <p style={styles.description}>
         
SIS is one of the global leading  Advanced and Conventional NDT Inspection Services Company
          <span style={styles.highlightText}> Training and Certification in NDT  </span>
           Advanced NDT, Welding  Inspection and Painting Inspection, Health and Safety, Quality Management Systems, Vendor Inspection with Consultancy, SIS is an ISO 9001: 2015 certified organisation.
        </p>

        <p style={styles.description}>
         
        Southern Inspection Services Private limited, Visakhapatnam started its operations with a vision to cater the Industrial Sector in the year 2002 as a proprietary firm initiating with Training and Certification in Non-Destructive Testing serving local, National and International well recognized Organization proving a professional skill development in personnel’s up to more than 10,00,000 Technicians, Engineers, Inspectors, Inspection Engineers and Fresher’s. 
          
        </p>

        <p style={styles.description}>
         
        Upon demand on service category we moved on one step ahead creating a success in Advanced Non-Destructive Testing, Vendor Inspections, Welding & Painting Inspections, Plant Inspection, Asset Integrity Management, Post Weld Heat Treatment, Positive Material Analysis (PMI), Third Party Inspection, Advanced NDT Services (ECT Tube Inspection, PAUT, TOFD, MFL, LRUT), Rope Access NDT and other allied services like supply of NDT and ANDT Technicians, API Inspectors, QA/QC Inspectors, Welding and painting Inspectors, NDT level III,PCN / ISO 9712 Qualified Personnel to meet the Industry requirement for major Turnarounds.
           
         </p>
         <p style={styles.description}>
         
         SIS Founded on 31 Dec 2002, with a vision to cater the needs of individual Personnel Training and Certification –, Industrial Inspection Services, Human Resource Consultancy, 2nd & Third Party & Vendor Inspection, In-service Inspection, Research and Development.                   
         </p>
         <p style={styles.description}>
         
         In 2010 SIS has further stepped by converting the company to a Private Limited Company from a proprietary concern by adding to new Director(s) with a dedicated vision and QHSE policy and certified to an ISO 9001: 2015 QMS certified Organisation for the growth and success of the company and meeting the service requirements of our clientele and personnel.
         </p>

      
      </div>

      {/* Right Column */}
      <div style={styles.rightColumn}>
        <div style={styles.experienceCard}>
          <p style={styles.experienceText}>
            <span style={styles.experienceNumber}>23</span>
            <br />
            Years Of Experience in Training and Certification in NDT.
          </p>
        </div>
        <img src={image} alt="Doctors" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto', // Center the container with space on large screens
    flexWrap: 'wrap',
  },
  leftColumn: {
    flex: 1,
    maxWidth: '600px',
  },
  subHeading: {
    color: '#f65d65',
    fontWeight: 'bold',
    fontSize: '25px',
  },
  mainHeading: {
    color: '#1a1a1a',
    fontSize: '40px',
    fontWeight: 'bold',
    lineHeight: '1.2',
  },
  description: {
    color: '#666',
    fontSize: '16px',
    lineHeight: '1.8',
    marginTop: '20px',
  },
  highlightText: {
    color: '#f65d65',
    fontWeight: 'bold',
  },
  features: {
    marginTop: '30px',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  icon: {
    marginRight: '15px',
    width: '40px',
  },
  featureTitle: {
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '0 0 10px 0',
  },
  featureDescription: {
    color: '#666',
    fontSize: '14px',
  },
  contactInfo: {
    marginTop: '30px',
    display: 'flex',
    alignItems: 'center',
  },
  contactButton: {
    backgroundColor: '#82b440',
    color: '#fff',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  phoneNumber: {
    marginLeft: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  rightColumn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  experienceCard: {
    backgroundColor: '#82b440',
    color: '#fff',
    padding: '30px',
    borderRadius: '10px',
    textAlign: 'center',
    marginBottom: '20px',
    maxWidth: '250px',
  },
  experienceText: {
    fontWeight: 'bold',
    fontSize: '22px',
    lineHeight: '1.5',
  },
  experienceNumber: {
    fontSize: '60px',
  },
  image: {
    width: '100%',
    maxWidth: '350px',
    borderRadius: '10px',
  },
  '@media (max-width: 768px)': {
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
    },
    leftColumn: {
      maxWidth: '100%',
      marginBottom: '30px',
    },
    rightColumn: {
      maxWidth: '100%',
    },
  },
};

export default AboutOne;
