import React from 'react'
import {Outlet, useNavigate} from "react-router-dom";
import Navbar from '../components/Navbar';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
function MainLayout() {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    useEffect(()=>{
      // setIsLoading(true);
      console.log("in landing page user details - ",user);
      if(user?.user && user?.user.email && user?.user._id){
        navigate('/dashboard');
      }
      // setIsLoading(false);
    },[])
  return (
    <>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
    </>
    
  )
}

export default MainLayout
