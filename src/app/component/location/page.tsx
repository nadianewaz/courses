'use client'
import React, { useState } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";


// ****** Location declaration ****** 
interface LocationProps {
    updateLocation: (location: string) => void;
}

const App: React.FC<LocationProps> = ({updateLocation}) => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Dhaka"]));

  const items: string[] = ["Dhaka", "Chittagong", "Sylhet", "Barishal"];

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(",").replaceAll("_", " "),
    [selectedKeys]
  );

  const handleSelectionChange = (keys : any) => {
    console.log(keys);
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
      { items.length > 0 
         ?
         items.map((item) => (
          <DropdownItem className="p-3" key={item}> {item}</DropdownItem> ?? 'location'
        )) 
        : <DropdownItem className="p-3">location</DropdownItem>}
      </DropdownMenu>
    </Dropdown>
  );
}
export default App; 

