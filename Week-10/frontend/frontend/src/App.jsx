import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import MainLayout from "./Layout/MainLayout";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./Layout/AppLayout";
import { useEffect } from "react";
import { getUser } from "./api/authapi";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "./store/slices/authSlice";


function App() {
  const [count, setCount] = useState(0);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [auth,setIsauth] = useState(true);

  const fetchUser = async () => {
    try {
      // setIsauth(true);
      const data = await getUser();
      console.log("data-", data, data.data.data.userDetails);
      console.log("this is call from app.jsx");
      
      dispatch(
        setUser({
          name: data.data.data.userDetails.name,
          email: data.data.data.userDetails.email,
          _id: data.data.data.userDetails._id,
        }),
      );      
    } catch (error) {
      console.log("error while -", error.message);
    }
    finally{
      setIsauth(false);
    }

  };

  useEffect(() => {
    console.log("prev user -", user);
    fetchUser();
  }, []);

  if(auth){
    return <h1>Loading....</h1>
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
