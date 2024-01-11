'use client'
import React, { useState } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";


// ****** Location declaration ****** 
interface LocationProps {
    updateLocation: (location: string) => void;
}

const App: React.FC<LocationProps> = ({updateLocation}) => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Dhaka"]));

  const items = ["Dhaka", "Chittagong", "Sylhet", "Barishal"];

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const handleSelectionChange = (keys : any) => {
    setSelectedKeys(keys);
    updateLocation(keys);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="capitalize btn mx-8 px-10 cursor-pointer"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        className="bg-white text-black"
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelectionChange}
      >
         {items.map((item) => (
          <DropdownItem className="p-3" key={item}> {item}</DropdownItem>
        )) ?? 'Location'}
      </DropdownMenu>
    </Dropdown>
  );
}
export default App; 

