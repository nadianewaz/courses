"use client"
import React, { useState } from 'react';
import {  addCourses } from '../../../../api/type';

// *** declaring table type *** 
 export interface Table {
    table : addCourses[]
 }
 



 // *** Delete button handle  *** 
 const handleSubmit1 = (id: string) => {
    fetch(`http://localhost:5000/updateCourse/${id}`, {
      method: "UPDATE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data) );
  };





 
 // *** Delete button handle  *** 
const handleSubmit = (id: string) => {
    fetch(`http://localhost:5000/deleteCourse/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data) );
  };

  

// *** Table component *** 
const Table : React.FC<Table> = ({ table }) => {
    return (
    <>
        <div className="overflow-x-auto py-8">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>SL</th>
                        <th>Id</th>
                        <th>Created By</th>
                        <th>Updated By</th>
                        <th>Name (Eng)</th>
                        <th>Name (Bng)</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {table?.map((val, idx)=> (
                        <tr key={idx}>
                            <td>{idx}</td>
                            <td>{val.id}</td>
                            <td>{val.created_by}</td>
                            <td>{val.updated_by}</td>
                            <td>{val.name_en}</td>
                            <td>{val.name_bn}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => handleSubmit1(val.id)} >Edit</button>
                                <button className="btn btn-error ml-5" onClick={() => handleSubmit(val.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
        </div>
    </>
    );
};

export default Table;