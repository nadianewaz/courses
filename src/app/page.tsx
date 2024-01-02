"use client";
import React  from "react";
import { useState, useEffect } from "react";
import AddCourse from "./component/add_course/page";
import Add from "./add/page";
import Course from "./table/page";
import Table from "./table/page";


export default  function Home() {
  const [table, setTable] = useState([]);

const loadInfo = () => {
  fetch("http://localhost:5000/readCourse")
    .then((res) => res.json())
    .then((data) => setTable(data));
};

    // useEffect(() => {
    // loadInfo();
    // }, []);

console.log("data",table);
  return (
   <>
    <div className="max-w-4xl mx-auto">
      <div className="text-center flex flex-col">
        <h1 className="text-2xl font-bold py-8">CRUD</h1>

       {/* **** Add Course button ****  */}
        <AddCourse></AddCourse>

        {/* **** Table component ****  */}
        <Table table={table}></Table>

      </div>
    </div>

   
    
   
   </>
  )
}
