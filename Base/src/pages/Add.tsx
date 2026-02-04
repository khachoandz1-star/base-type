import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

function Add() {
  const API="http://localhost:3000";

 const [title, setTitle] = useState<any>("");
 const [dueDate,setdueDate]=useState<any>("");
 const [priority,setPriority]=useState<any>("");
 const [status,setStatus]=useState<any>("");
 
 const submit= async(e:any)=>{
  e.preventDefault();
  
  try{
    await axios.post(`${API}/tasks`,{
      title,
      dueDate,
      priority,
      status,
    })

    toast.success("Thêm thành công")
  }catch(error){
  toast.error("Thêm không thành công")
 }
 }

  



  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6 text-green-700">Thêm mới</h1>

      <form className="space-y-6" onSubmit={submit}>
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">title</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e)=>setTitle(e.target.value)}
          />
          
        </div>

        {/* Age */}
        <div>
          <label className="block font-medium mb-1">dueDate</label>
          <input
            type="date"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e)=>setdueDate(e.target.value)}
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block font-medium mb-1">status</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e)=>setStatus(e.target.value)}
          />
        </div>

        {/* Major */}
        <div>
          <label className="block font-medium mb-1">priority</label>
          <select
          onChange={(e)=>setPriority}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Chọn priority</option>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Add;
