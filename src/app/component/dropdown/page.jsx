"use client";
import React, { useState } from 'react';
import './style.css'

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

      
        </div>
      )}
    </div>


      </>
    );
};

export default Dropdown;