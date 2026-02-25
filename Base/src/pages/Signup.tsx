function Signup() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6 text-green-700">Đăng ký</h1>

      <form className="space-y-6">
        {/* Username */}
        <div>
          <label className="block font-medium mb-1">Username</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block font-medium mb-1">Confirm Password</label>
          <input
            type="password"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
}

export default Signup;