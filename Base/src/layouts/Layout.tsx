import React from 'react'

function Layout() {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">WEB502</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">Danh sách</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Thêm mới</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Đăng ký</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Đăng nhập</a>
          </nav>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        
      </main>
      {/* Footer */}
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          © 2026 WEB502. All rights reserved.
        </div>
      </footer>
    </div>

  )
}

export default Layout