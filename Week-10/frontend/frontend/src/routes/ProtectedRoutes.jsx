import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getUser } from "../api/authapi";
import { setUser } from "../store/slices/authSlice";

function ProtectedRoutes() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchUser = async()=>{
            try {
                const data = await getUser();
                console.log("data-",data,data.data.data.userDetails);

                dispatch(setUser({
                    name : data.data.data.userDetails.name,
                    email: data.data.data.userDetails.email,
                    _id: data.data.data.userDetails._id
                }))

            } catch (error) {
                console.log("error while -",error.message);
                
            }
        }
        console.log("prev user -" , user);
        
        fetchUser();

        console.log("after user -", user);
        
    },[])

    console.log("user - ", user);
    
    return (
        <>
        <h1>Hellow</h1>
        
        <Outlet />
        </> 
    );
}

export default ProtectedRoutes;
