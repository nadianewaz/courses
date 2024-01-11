"use client"
import React, { useState } from 'react';

// ****** Paid status declaration ****** 
interface PaidstatusProps {
  updatePaidstatusChange: (paidstatus: string) => void;
}

const Radio: React.FC<PaidstatusProps> = ( {updatePaidstatusChange} ) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event : any) => {
        setSelectedOption(event.target.value);
        updatePaidstatusChange(event.target.value);
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