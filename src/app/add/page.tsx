"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


const Add = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    created_by: '',
    updated_by: '',
    name_en: '',
    name_bng: '',
  });

 
  

  // **** Form handle **** 
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    console.log("==============================================");
    e.preventDefault();
    
    await fetch("http://localhost:5000/createCourse", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      console.log("==============================================");
      console.log(response);
      router.push('/'); 
    }).catch((error) => {
        console.error(error);
    });
  }


    return (
        <>
        <div className="max-w-4xl mx-auto">
            <div className="text-center flex flex-col">
                <h1 className="text-2xl font-bold py-10">Fill up this information</h1>
                
 {/* ***** Form ****  */}
      <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12 mb-5"> 
       


          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <div className="mt-2">
                <input
                  placeholder='Created By'
                  type="text"
                  name="created_by"
                  id="created_by"
                  autoComplete="given-name"
                 onChange={handleChange}
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <div className="mt-2">
                <input
                 placeholder='Updated By'
                  type="text"
                  onChange={handleChange}
                  name="updated_by"
                  id="updated-by"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
             <div className="mt-2">
                <input
                placeholder='Name (Eng)'
                  type="text"
                  onChange={handleChange}
                  name="name_en"
                  id="name_en"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <div className="mt-2">
                <input
                 placeholder='Name (Bng)'
                  type="text"
                  onChange={handleChange}
                  name="name_bn" 
                  id="name_bn" 
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

           </div>

       
            {/* **** Save Button ****  */}
            <button  className='btn btn-success mt-12 px-16'>Save</button>   
          
     
          </div>   

       </div>
    </form>
            
            </div>
        </div>
            
        </>
    );
};

export default Add;