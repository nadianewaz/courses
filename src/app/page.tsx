import AddCourse from "./component/add_course/page";
import Table from "./component/table/page";

export default function Home() {
  return (
   <>
    <div className="max-w-4xl mx-auto">
      <div className="text-center flex flex-col">
        <h1 className="text-2xl font-bold py-5">CRUD</h1>
        <AddCourse></AddCourse>
        <Table></Table>
        </div>
    </div>
   
   </>
  )
}
