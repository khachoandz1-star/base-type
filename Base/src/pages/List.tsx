import { useEffect, useState } from "react";
import { INotes } from "../interface/Notes";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


function List() {
  const API="http://localhost:3000"
  const[notes,setNotes]=useState<INotes[]>([]);

  useEffect(()=>{
    const getAll=async()=>{
      try{
        const res=await axios.get(`${API}/notes`);
        setNotes(res.data);
        toast.success("Thành công");

      }catch(error){
        toast.success("Không thành công")
      }
    }
    getAll();
  },[])

const Delete=async(id:any)=>{
  try{
    await axios.delete(`${API}/notes/${id}`);
    setNotes(notes.filter(t=> t.id !== id));
    toast.success("Xóa thành công")
  }catch(error){
    toast.error("Xóa k thành công")
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
                content
              </th>
              <th className="px-4 py-2 border border-green-300 text-left">
                pinned
              </th>
              <th className="px-4 py-2 border border-green-300 text-left">
                tag
              </th>
              <th className="px-4 py-2 border border-green-300 text-left">
                action
              </th>
            </tr>
          </thead>

          <tbody>
            {notes.map((item,index)=>
               <tr className="hover:bg-green-50" key={item.id}>
                <td className="px-4 py-2 border border-green-300">{index+1}</td>
                <td className="px-4 py-2 border border-green-300">{item.title}</td>
                <td className="px-4 py-2 border border-green-300">{item.content}</td>
                <td className="px-4 py-2 border border-green-300">{item.pinned}</td>
                <td className="px-4 py-2 border border-green-300">{item.tag}</td>


                <td className="px-4 py-2 border border-green-300">

                  <button onClick={()=>Delete(`${item.id}`)}>Xóa</button>
                  <Link to={`/notes/edit/${item.id}`}>Sửa</Link>
                
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
