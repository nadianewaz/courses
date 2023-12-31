"use client";
import React  from "react";
import { useState, useEffect } from "react";
import AddCourse from "./component/add_course/page";
import Table from "./component/table/page";
import Add from "./add/page";

export default  function Home() {
  const [table, setTable] = useState([]);

const loadInfo = () => {
  fetch("http://localhost:5000/readCourse")
    .then((res) => res.json())
    .then((data) => setTable(data));
};
useEffect(() => {
  loadInfo();
}, []);
console.log("data",table);
  return (
   <>
    <div className="max-w-4xl mx-auto">
      <div className="text-center flex flex-col">
        <h1 className="text-2xl font-bold py-5">CRUD</h1>
        <AddCourse></AddCourse>
        <Table table={table}></Table>
      </div>
    </div>
    <Add></Add>
    
   
   </>
  )
}
