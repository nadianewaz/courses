// 'use client'
// import React, { useState } from "react";
// import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";


// export default function App() {
//   const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Dhaka"]));

//   const [items, setItems] = useState(["Dhaka", "Chittagong", "Sylhet", "Barishal"]);

//   const selectedValue = React.useMemo(
//     () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
//     [selectedKeys]
//   );

 
//   const handleSelectionChange = (keys : any) => {
//     setSelectedKeys(keys);
  
//   };

//   return (
//     <Dropdown>
//       <DropdownTrigger>
//         <Button 
//           variant="bordered" 
//           className="capitalize btn m-8"
//         >
//           {selectedValue}
//         </Button>
//       </DropdownTrigger>
//       <DropdownMenu 
      
//         aria-label="Single selection example"
//         variant="flat"
//         disallowEmptySelection
//         selectionMode="single"
//         selectedKeys={selectedKeys}
//         onSelectionChange={handleSelectionChange}
//       >
//          {items.map((item) => (
//           <DropdownItem className="p-3" key={item}> {item}</DropdownItem>
//         ))}
//       </DropdownMenu>
//     </Dropdown>
//   );
// }
