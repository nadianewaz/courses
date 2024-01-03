"use client";

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateForm() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date : any) => {
    setSelectedDate(date);
  };

//   const handleSubmit = (e : any ) => {
//     e.preventDefault();
//     console.log('Selected Date:', selectedDate);
//   };

  return (

    // <form onSubmit={handleSubmit}>
    //   <label htmlFor="datePicker">Select a date:</label>
    //   <DatePicker
    //     selected={selectedDate}
    //     onChange={handleDateChange}
    //     dateFormat="MM/dd/yyyy" // Customize date format if needed
    //   />
    //   <button type="submit">Submit</button>
    // </form>

    <>
    
    <label htmlFor="datePicker">Select a date:</label>
      <DatePicker
        onChange={handleDateChange}
      
      />
    
    
    
    </>

  );
}

export default DateForm;
