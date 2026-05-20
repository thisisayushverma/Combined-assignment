import React from 'react'
import { useState } from 'react'
import AppBar from './AppBar';
import "../App.css";
import Home from './Home';
import Login from './Login';
import { createContext } from 'react';

export const AuthContext = createContext(null);
const AuthSystem = () => {
  const [isContext ,setIsContext] = useState(false);
  const [isLoggin,setIsLoggin] = useState(false);
  const [userName,setUserName] = useState('');

  return (
    <AuthContext.Provider value={{isLoggin,setIsLoggin,userName,setUserName,isContext}}>
      <div className='auth-container'>
      <AppBar isloggin={isLoggin} username={userName} setUser={setUserName} setLogin={setIsLoggin}/>
      <div style={{display:'flex',justifyContent:'right', backgroundColor:'gray',padding:'1rem 2rem',gap:'20px'}}>
      <input type='checkbox' value={isContext} onChange={()=>{setIsContext(prev=> !prev)}}/>
      Use Context API : {isContext?"ON":"OFF"}
      </div>
      {
        isLoggin? <Home/> : <Login setUser={setUserName} setLogin={setIsLoggin} /> 
      }
      </div>
    </AuthContext.Provider>
    
  )
}

export default AuthSystem