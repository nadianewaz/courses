'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link';



const AddCourse = () => {
    const router = useRouter()
    return (
        <>
         {/* <button className='btn btn-success'> Add Courses </button>     */}

        {/* <button type="button" onClick={() => router.push('/Add')}>    
         Add Courses
        </button>  */}

        <Link href="/add">  Add Courses </Link>

         
        </>
    );
};

export default AddCourse;