import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function List() {
  
const API="http://localhost:3000"
const [tasks,setTasks]=useState<any[]>([]);

useEffect(()=>{
  const getTasks = async ()=>{
    try{
      const res=await axios.get(`${API}/tasks`);
      setTasks(res.data)
      toast.success("Thành công")
    }catch(error){
      toast.error("Không thành công")
    }
  }
  getTasks();
},[])

const Delete=async(id:any)=>{
  try{
    await axios.delete(`${API}/tasks/${id}`);
    setTasks(tasks.filter(t=> t.id !== id));
    toast.success("Xóa thành công")
  }catch(error){
    toast.error("Xóa thất bại")
  }
}
  



  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6 text-green-700">Danh sách</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-green-300 rounded-lg">
          <thead className="bg-green-100">
            <tr>
              <th className="px-4 py-2 border border-green-300 text-left">#</th>
              <th className="px-4 py-2 border border-green-300 text-left">
                title
              </th>
              <th className="px-4 py-2 border border-green-300 text-left">
               dueDate
              </th>
              <th className="px-4 py-2 border border-green-300 text-left">
               priority
              </th>
              <th className="px-4 py-2 border border-green-300 text-left">
                status
              </th>
              <th className="px-4 py-2 border border-green-300 text-left">
                action
              </th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((item,index)=>
            <tr className="hover:bg-green-50" key={item.id}>
              <td className="px-4 py-2 border border-green-300">{index+1}</td>
              <td className="px-4 py-2 border border-green-300">{item.title}</td>
              <td className="px-4 py-2 border border-green-300">{item.dueDate}</td>
              <td className="px-4 py-2 border border-green-300">{item.priority}</td>
              <td className="px-4 py-2 border border-green-300">{item.status}</td>

              <td className="px-4 py-2 border border-green-300">

                <button onClick={()=>Delete(`${item.id}`)}>Xóa</button>
                <Link to={`/edit/${item.id}`} className="ml-2">Sửa</Link>

              </td>
            </tr>
            )}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
