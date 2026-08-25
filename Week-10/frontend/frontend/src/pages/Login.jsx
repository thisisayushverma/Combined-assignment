import React, { useState } from "react";
import { loginUser } from "../api/authapi";
import {useNavigate}  from "react-router-dom"
import {toast} from "react-hot-toast"

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // API Call Example //
    //  try { // const response = await axios.post( // "http://localhost:5000/api/auth/login", // formData // ); // // console.log(response.data); // } catch (error) { // console.error(error); // }

    try {
      const response = await loginUser(formData);
      console.log("response - ",response );
      const token = response.headers.getAuthorization();
      console.log("token -",response.headers.getAuthorization());
      sessionStorage.setItem("token",token.split(" ")[1]);
      toast.success("Login successful!");
      navigate('/')
    } catch (error) {
      console.log("error -",error.response.data);
       toast.error(
        error.response?.data?.error ||
        "Login failed"
      )

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-2">ShelfLife</h1>
        <p className="text-gray-500 text-center mb-8">
          Track household inventory effortlessly
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm mt-6 text-gray-600">
          Don't have an account?
          <span className="text-green-600 cursor-pointer ml-1" onClick={()=> navigate('/register')}>Register</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
