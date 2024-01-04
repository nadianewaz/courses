"use client"
import React, { useState } from 'react';

const Radio = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event : any) => {
        setSelectedOption(event.target.value);
      };
    

    return (
        <>
    <div>

    <p> Paid Status: {selectedOption}</p>

      <label>
        <input
          type="radio"
          value="Paid"
          checked={selectedOption === 'Paid'}
          onChange={handleOptionChange}
        />
        Paid
      </label>
      <label>
        <input
          type="radio"
          value="Unpaid"
          checked={selectedOption === 'Unpaid'}
          onChange={handleOptionChange}
        />
        Unpaid
      </label>
    </div>

       
            
        </>
    );
};

export default Radio;