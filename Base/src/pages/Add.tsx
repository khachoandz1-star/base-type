import axios from "axios";
import type { INotes } from "../interface/Notes";
import toast from "react-hot-toast";
import { useState } from "react";



function Add() {
  const API="http://localhost:3000";

  const [title,setTitle]=useState<any>("");
  const [content,setContent]=useState<any>("");
  const [pinned,setPinned]=useState<any>("");
  const [tag,setTag]=useState<any>("");

  const submit=async(e:any)=>{
    e.preventDefault();

    try{
      await axios.post(`${API}/notes`,{
        title,
        content,
        pinned,
        tag,
      })
      toast.success("Thành công")
    }catch(error){
      toast.error("Thêm k thành công")
    }
  }
  
 
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6 text-green-700">Thêm mới</h1>

      <form className="space-y-6" onSubmit={submit} >
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">title</label>
          <input
            onChange={(e)=>setTitle(e.target.value)}
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          
        </div>

        {/* Age */}
        <div>
          <label className="block font-medium mb-1">content</label>
          <input
          onChange={(e)=>setContent(e.target.value)}
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block font-medium mb-1">pinned</label>
          <input
            onChange={(e)=>setPinned(e.target.value)}
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Major */}
        <div>
          <label className="block font-medium mb-1">tag</label>
          <select
           onChange={(e)=>setTag(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Chọn tag</option>
            <option value="font">font</option>
            <option value="back">back</option>
           
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
