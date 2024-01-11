"use client"
import React, { useEffect, useState } from 'react';
import { addCourse} from '../../../api/type';


// *** declaring table type *** 
 export interface Table {
   table : addCourse[]
 }
 
// *** Table component *** 
const Table : React.FC<Table> = ({ }) => {
const [courses, setCourses] = useState<any>([]);

const loadInfo = () => {
    fetch("http://localhost:5000/readCourse")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  };
    
    // ***=== table data render ==*** 
    useEffect(()=> {
        loadInfo() 
        }, []);


     // *** Update button handle  *** 
    const handleUpdate = (id: string) => {
        fetch(`http://localhost:5000/updateCourse/${id}`, {
        method: "UPDATE",
        })
        .then((res) => res.json())
        .then((data) => console.log(data) );
    };

    // *** Delete button handle  *** 
    const handleDelete = (id: string) => {
        fetch(`http://localhost:5000/deleteCourse/${id}`, {
        method: "DELETE",
        }).then((res) => {
            console.log(res);
            setCourses(courses.filter((t: { id: string; })=>t.id != id))
           
        });
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
                        {courses?.map((val:any, idx:number)=> (
                        <tr key={idx}>
                            <td>{idx}</td>
                            <td>{val.id}</td>
                            <td>{val.created_by}</td>
                            <td>{val.updated_by}</td>
                            <td>{val.name_en}</td>
                            <td>{val.name_bn}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => handleUpdate(val.id)} >Edit</button>
                                <button className="btn btn-error ml-5" onClick={() => handleDelete(val.id)}>Delete</button>
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