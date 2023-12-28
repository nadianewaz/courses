"use client";
import React  from "react";
import {  getCreateCourse } from "../../api/api";
import AddCourse from "./component/add_course/page";
import Table from "./component/table/page";
import Add from "./add/page";

export default async function Home() {
const data = await getCreateCourse();

  return (
   <>
    <div className="max-w-4xl mx-auto">
      <div className="text-center flex flex-col">
        <h1 className="text-2xl font-bold py-5">CRUD</h1>
        <AddCourse></AddCourse>
        <Table table={data}></Table>
      </div>
    </div>
    <Add></Add>
   
   </>
  )
}
