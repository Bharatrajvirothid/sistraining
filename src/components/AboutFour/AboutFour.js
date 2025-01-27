import React from 'react';
import './AboutFour.css'; // CSS file for styling

// DoctorCard Component
const DoctorCard = ({ name, specialization, imageUrl }) => {
  return (
    <div className="doctor-card">
      <img src={imageUrl} alt={name} className="doctor-image" />
      <div className="doctor-info">
        <h3>{name}</h3>
        <p>{specialization}</p>
        <button className="explore-btn">Explore More</button>
      </div>
    </div>
  );
};

// Doctors Component
const AboutFour = () => {
  const doctors = [
    { name: 'Md Nadim Khan', specialization: 'Medicine Specialist', imageUrl: 'https://i.pinimg.com/236x/f5/b2/c0/f5b2c0abacd94bb95dbd6749306e68d6.jpg' },
    { name: 'M Rongila Rongs', specialization: 'Medicine Specialist', imageUrl: 'https://i.pinimg.com/564x/6e/ca/bf/6ecabf099deb74300f706804b7f14f27.jpg' },
    { name: 'Dr Moshur Gulati', specialization: 'Medicine Specialist', imageUrl: 'https://i.pinimg.com/236x/60/04/b5/6004b516ebd470bad9ed379a0083eb02.jpg' },
    { name: 'Mk Jonty Dhoni', specialization: 'Medicine Specialist', imageUrl: 'https://i.pinimg.com/236x/03/cc/ed/03ccedd685f113c370a033d0f7137797.jpg' },
    { name: 'Mk Jonty Dhoni', specialization: 'Medicine Specialist', imageUrl: 'https://i.pinimg.com/236x/80/90/d5/8090d5525a387702b66d0062b8f0716a.jpg' },
    { name: 'Mk Jonty Dhoni', specialization: 'Medicine Specialist', imageUrl: 'https://i.pinimg.com/236x/80/90/d5/8090d5525a387702b66d0062b8f0716a.jpg' }
  ];

  return (
    <div className="doctors-section">
      <h2>Meet Our Team</h2>
      <h3>Our Expert Doctors</h3>
      <div className="doctors-grid">
        {doctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            name={doctor.name}
            specialization={doctor.specialization}
            imageUrl={doctor.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutFour;
