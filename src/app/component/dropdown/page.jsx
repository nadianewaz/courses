"use client";
import React, { useState } from 'react';
import './css/style.css'


const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
    

    return (
        <>

    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        Dropdown Button
      </button>
      {isOpen && (
        <div className="dropdown-content">
           <p>Dropdown Content Here</p>
      
        </div>
      )}
    </div>


      </>
    );
};

export default Dropdown;