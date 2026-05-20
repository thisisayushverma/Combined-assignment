import React from 'react'
import { useContext } from 'react';
import { AuthContext } from './AuthSystem';

const AppBar = (props) => {
  const {isLoggin,setIsLoggin,userName,setUserName,isContext} = useContext(AuthContext);
  const {isloggin,username,setUser,setLogin} = props;

  const finalLoggin = isLoggin ?? isloggin;
  const handleLogout = ()=>{
    if(finalLoggin){   
      if(isContext){
        setUserName('');
        setIsLoggin(false);
      }
      else{
        setUser('');
        setLogin(false);
      }
    }
  }
  return (
    <div className='app-bar'>
      <h1>
        Auth System Demo
      </h1>

      <div className='userShown'>
         <div>{
          finalLoggin?`Welcome, ${isContext?userName:username}!` :null
    }</div>

        <button className='loginButton' onClick={handleLogout}>
          {finalLoggin?"Logout": "Login"}
        </button>
      </div>
    </div>
  )
}

export default AppBar