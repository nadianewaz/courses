"use client"
import React, { useState } from 'react';

const Add = () => {
  const [formData, setFormData] = useState({
    created_by: '',
    updated_by: '',
    name_en: '',
    name_bng: '',
  });

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
    }).catch((error) => {
        console.error(error);
    });
  }


    return (
        <>
        <div className="max-w-4xl mx-auto">
            <div className="text-center flex flex-col">
                <h1 className="text-2xl font-bold py-5">Fill up this information</h1>
                
 {/* ***** Form ****  */}
         <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12"> 
       


          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="created-by" className="block text-sm font-medium leading-6 text-white-900">
                Created By 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="created_by"
                  id="created_by"
                  autoComplete="given-name"
                 onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="updated-by" className="block text-sm font-medium leading-6 text-white-900">
                Updated By 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  onChange={handleChange}
                  name="updated_by"
                  id="updated-by"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="name_en(eng)" className="block text-sm font-medium leading-6 text-white-900">
              Name (Eng)
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  onChange={handleChange}
                  name="name_en"
                  id="name_en"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="name_bn(bng)" className="block text-sm font-medium leading-6 text-white-900">
              Name (Bng)
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  onChange={handleChange}
                  name="name_bn" 
                  id="name_bn" 
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

           </div>

           <button onClick={handleSubmit} className='btn btn-success mt-12 px-16'>Save</button>
        </div>   

       </div>
    </form>

            
            </div>
        </div>
            
        </>
    );
};

export default Add;