import React from 'react';

const AboutOne = () => {
  return (
    <div style={styles.container}>
      {/* Left Column */}
      <div style={styles.leftColumn}>
        <h5 style={styles.subHeading}>About Doctio</h5>
        <h1 style={styles.mainHeading}>
          We Caring Your Family Health & Well Being
        </h1>
        <p style={styles.description}>
          Aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo 
          <span style={styles.highlightText}> our services for our patients </span>
          ipsam ab illo inventore veritatis etion and we have 25 years of experience.
        </p>

        {/* Features */}
        <div style={styles.features}>
          <div style={styles.featureItem}>
            <img src="https://i.pinimg.com/236x/d3/78/23/d37823d19ccb3745e1ea7f3f9ea1186c.jpg" alt="Best Medical Care" style={styles.icon} />
            <div>
              <h4 style={styles.featureTitle}>Best Medical Care</h4>
              <p style={styles.featureDescription}>
                Quis autem vel eum iure reprehenderit voluptate velit esse quam nihil molestiae consequatur.
              </p>
            </div>
          </div>
          <div style={styles.featureItem}>
            <img src="https://i.pinimg.com/236x/d3/78/23/d37823d19ccb3745e1ea7f3f9ea1186c.jpg" alt="Modern Diagnostic" style={styles.icon} />
            <div>
              <h4 style={styles.featureTitle}>Modern Diagnostic</h4>
              <p style={styles.featureDescription}>
                Quis autem vel eum iure reprehenderit voluptate velit esse quam nihil molestiae consequatur.
              </p>
            </div>
          </div>
        </div>

        {/* Button and Contact */}
        <div style={styles.contactInfo}>
          <button style={styles.contactButton}>Click Here</button>
          <p style={styles.phoneNumber}>
            <span>+012 (345) 6789</span>
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div style={styles.rightColumn}>
        <div style={styles.experienceCard}>
          <p style={styles.experienceText}>
            <span style={styles.experienceNumber}>25</span>
            <br />
            Years Of Experience in Medical Services
          </p>
        </div>
        <img src="https://i.pinimg.com/236x/d3/78/23/d37823d19ccb3745e1ea7f3f9ea1186c.jpg" alt="Doctors" style={styles.image} />
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
    fontSize: '16px',
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
