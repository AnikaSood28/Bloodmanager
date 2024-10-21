import React, { useState } from 'react';
import axios from 'axios';
import './PetHealthTracking.css'; // Import CSS for styling

const PetHealthTracking = () => {
  const [dogName, setDogName] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [vaccinationRecords, setVaccinationRecords] = useState('');
  const [success, setSuccess] = useState(false); // State to control success popup visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Handle form submission (send data to MongoDB)
      const response = await axios.post('/api/pets', {
        dogName,
        medicalHistory,
        vaccinationRecords,
      });

      console.log('Response:', response.data);
      setSuccess(true); // Show success popup on successful submission
      // Clear form fields
      setDogName('');
      setMedicalHistory('');
      setVaccinationRecords('');
    } catch (error) {
      console.error('Error submitting data:', error);
      // Optionally handle error here
    }
  };

  return (
   
    <div className="pet-health-tracking">
      {success && <div className="popup">Successfully Submitted!</div>} {/* Success popup */}
      <h1>Track Your Dog's Health</h1>
      <form className="health-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="dogName">Dog's Name</label>
          <input
            type="text"
            id="dogName"
            value={dogName}
            onChange={(e) => setDogName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="medicalHistory">Medical History</label>
          <textarea
            id="medicalHistory"
            value={medicalHistory}
            onChange={(e) => setMedicalHistory(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="vaccinationRecords">Vaccination Records</label>
          <textarea
            id="vaccinationRecords"
            value={vaccinationRecords}
            onChange={(e) => setVaccinationRecords(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
      
      <div className="animated-bone"></div>
     
      
    </div>
  );
};

export default PetHealthTracking;
