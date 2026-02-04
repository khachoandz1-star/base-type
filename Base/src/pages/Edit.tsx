import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Edit() {
  const API = "http://localhost:3000";
  const { id } = useParams();

  const [title, setTitle] = useState<any>("");
  const [dueDate, setdueDate] = useState<any>("");
  const [priority, setPriority] = useState<any>("");
  const [status, setStatus] = useState<any>("");

  // load dữ liệu cũ
  useEffect(() => {
    const getOne = async () => {

      try {

        const res = await axios.get(`${API}/tasks/${id}`);
        setTitle(res.data.title);
        setdueDate(res.data.dueDate);
        setPriority(res.data.priority);
        setStatus(res.data.status);
      } catch {
        toast.error("Không lấy được dữ liệu");
      }
    };

    if (id) getOne();
  }, [id]);

  // submit update
  const submit = async (e: any) => {
    e.preventDefault();

    try {
      await axios.put(`${API}/tasks/${id}`, {
        title,
        dueDate,
        priority,
        status,
      });

      toast.success("Cập nhật thành công");
    } catch {
      toast.error("Cập nhật thất bại");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6 text-green-700">Chỉnh sửa</h1>

      <form className="space-y-6" onSubmit={submit}>
        <div>
          <label className="block font-medium mb-1">title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">dueDate</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setdueDate(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">status</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Chọn priority</option>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
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
