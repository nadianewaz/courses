"use client";
import { useState } from 'react';

function Date() {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (e : any) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    // Handle form submission with the selectedDate
    console.log('Selected Date:', selectedDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="datePicker"> Date :</label>
      <input
        type="date"
        id="datePicker"
        value={selectedDate}
        onChange={handleDateChange}
        style={{
          marginLeft: '5px',
          padding: '6px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
          
          }}
      />
      <br></br>
     
    </form>
  );
}

export default Date;
