import React, { useState } from 'react';
import {  addCourses } from '../../../../api/type';

// *** declaring table type *** 
 export interface Table {
    table : addCourses[]
 }
// *** Edit button handle  *** 



  

// *** Table component *** 
const Table : React.FC<Table> = ({ table }) => {
const [clickCount, setClickCount] = useState("");

const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
   
  };

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
                        {table.map((val, idx)=> (
                        <tr>
                            <td>{idx}</td>
                            <td>{val.id}</td>
                            <td>{val.created_by}</td>
                            <td>{val.updated_by}</td>
                            <td>{val.name_en}</td>
                            <td>{val.name_bn}</td>
                            <td>
                                <button className="btn btn-warning" onClick={ handleClick }>Edit</button>
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