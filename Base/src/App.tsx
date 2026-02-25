import { Toaster } from "react-hot-toast";
import { Route,Routes, Link } from "react-router-dom";
import List from "./pages/List";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
  return (
    <>
      <nav className="bg-green-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            <strong>App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/notes/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/notes/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/notes/signin" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="/notes/signup" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Hello Word!</h1>
        <p className="text-lg text-gray-600">Ứng dụng quản lý dữ liệu</p>
      </div>

      <Routes>
        <Route path="/notes/list" element={<List/>}/>
        <Route path="/notes/add" element={<Add/>}/>
        <Route path="/notes/edit/:id" element={<Edit/>}/>
        <Route path="/notes/signup" element={<Signup/>}/>
        <Route path="/notes/signin" element={<Signin/>}/>
      </Routes>

      <Toaster />
    </>
  );
}

export default App;