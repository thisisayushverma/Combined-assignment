import React from 'react'
import "../App.css";
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from './AuthSystem';


const Login = ({setUser,setLogin}) => {
  const {isContext,isLoggin,setIsLoggin,userName,setUserName} = useContext(AuthContext);
  // const {set}
  console.log("iscontext",isContext);

  // const finalUserName = userName ?? 

  const [username,setUsername] = useState('')
  const handleLogin = ()=>{
    if(isContext){
      setIsLoggin(true);
      setUserName(username);
      setUsername('');
    }
    else {
      setUser(username);
      setLogin(true);
      setUsername('');
    }
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px', margin: '0 auto' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{display:'flex',gap:'10px' , alignItems:'center'}}> 
            <label  style={{ fontWeight: 'bold' }}>Username</label>
            <input 
              style={{
            padding: '0.5rem',
            // marginLeft:'1rem',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
            onChange={(e)=> setUsername(e.target.value)}
            value={username}
            type='text' placeholder='Enter your username' />
          </div>
          <button 
            onClick={
              handleLogin
            }
          style={{
          backgroundColor: '#3f98b5',
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
            Login
          </button>
        </form>
    </div>
  )
}

export default Login