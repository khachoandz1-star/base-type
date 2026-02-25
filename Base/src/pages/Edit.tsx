import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";


function Edit() {
 const API="http://localhost:3000";
 const {id}=useParams();

 const [title,setTitle]=useState<any>("");
 const [content,setContent]=useState<any>("");
 const [pinned,setPinned]=useState<any>("");
 const [tag,setTag]=useState<any>("");

 useEffect(()=>{
  const getOne = async()=>{
    try{
      const res=await axios.get(`${API}/notes/${id}`);
      setTitle(res.data.title);
      setContent(res.data.const);
      setPinned(res.data.pinned);
      setTag(res.data.tag);

    }catch(error){
      toast.error("Không lấy đc dữ liệu")
    }
  }
  if(id) getOne();
 },[id])

 const submit = async(e:any)=>{
  e.prevetDefault();

  try{
    await axios.put(`${API}/notes/${id}`,{
      title,
      content,
      pinned,
      tag,
    })
    toast.success("Thay đổi thành công")
  }catch{
    toast.error("Lỗi ko thành công")
  }
 }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6 text-green-700">Chỉnh sửa</h1>

      <form className="space-y-6" onSubmit={submit}>
        <div>
          <label className="block font-medium mb-1">title</label>
          <input
            type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}

            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">content</label>
          <input
            type="text"
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">pinned</label>
          <input
            type="text"
            value={pinned}
            onChange={(e)=>setPinned(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">tag</label>
          <select
            value={tag}
             onChange={(e)=>setTag(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Chọn tag</option>
            <option value="font">font</option>
            <option value="back">back</option>

          </select>
        </div>

        <button
          type="submit"
          className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default Edit;
