import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Signin() {
  const API="http://localhost:3000";
  const nav=useNavigate();

  const[email,setEmail]=useState<any>("");
  const[password,setPassword]=useState<any>("");

  const submit=async(e:any)=>{
  e.preventDefault();

  try{
    const res=await axios.post(`${API}/signin`,{
      email,
      password,
    })
    localStorage.setItem("token",res.data.token);
    toast.success("Đăng nhập thành công");
    nav("/notes/list");
  }catch(error){
    toast.error("Lỗi đăng nhập k thành công")
  }

  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6 text-green-700">Đăng nhập</h1>

      <form className="space-y-6" onSubmit={submit}>
        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div>
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
             onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
}

export default Signin;