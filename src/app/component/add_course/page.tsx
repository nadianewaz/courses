'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link';



const AddCourse = () => {
    const router = useRouter()
    return (
        <>
       
         <Link href="/add">
                
            <button className='btn btn-success'>Add Courses</button> 
                
        </Link>

        </>
    );
};

export default AddCourse;