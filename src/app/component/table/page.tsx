import React from 'react';
import {  addCourses } from '../../../../api/type';

// *** declaring table type *** 
 export interface Table {
    table : addCourses[]
 }
// *** Edit button handle  *** 
const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    alert('Button clicked!');
      };


// *** Delete button handle  *** 
 


// *** Table component *** 
const Table : React.FC<Table> = ({ table }) => {
    return (
    <>
        <div className="overflow-x-auto py-8">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {table.map((val, idx)=> (
                        <tr>
                            <td>{idx}</td>
                            <td>{val.id}</td>
                            <td>{val.name_en}</td>
                            <td>
                                <button className="btn btn-warning" onClick="handleButtonClick()">Edit</button>
                                <button className="btn btn-error ml-5">Delete</button>
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