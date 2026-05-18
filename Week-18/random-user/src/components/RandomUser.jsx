import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RandomUser.css'; // Import the external CSS file

const RandomUser = () => {
  const [page,setPage] = useState(1);
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);

  const fetchData = async ()=>{
    try {
      setLoading(true);
      console.log("hii");
      let url = `https://randomuser.me/api?page=${page}&results=10`;
      let response = await axios.get(url);
      setData(prev => {
        let initArray = prev;
        initArray.push(...response.data.results);
        return initArray;
      });
      console.log("data",data);
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  }

  console.log(data);
  
  useEffect(()=>{
    console.log("hello");
    
    fetchData();
  },[page])

  return (
    // <div className="random-user-container">
    //  <h1>RandomUser</h1>
    //  <div className='users-list'> 
    //     {data.map(((item,ind) =>{
    //       return <div key={ind} className='user-card'>
    //         <img
    //           src={item.picture.medium}
    //           alt={`${item.name.first} ${item.name.last}`}
    //           className="user-image"
    //         />
    //         <h2>
    //           {item.name.first} {item.name.last}
    //         </h2>
    //       </div>
    //     }))}
    //  </div>
    //   {loading && <p className="loading-text">Loading...</p>}
    //  <button className='load-more-button' onClick={()=> setPage(prev =>prev +1)}>Load more user</button>
    // </div>
     <div className="random-user-container">
      <h1>Random Users</h1>
      <div className="users-list">
        {data.map((user, index) => (
          <div key={index} className="user-card">
            <img
              src={user.picture.medium}
              alt={`${user.name.first} ${user.name.last}`}
              className="user-image"
            />
            <h2>
              {user.name.first} {user.name.last}
            </h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
      {loading && <p className="loading-text">Loading...</p>}
      <button className="load-more-button" onClick={()=> setPage(prev =>prev +1)}>
        Load More Users
      </button>
    </div>
  );
};


// function Card(props) {
//     const {name,url} = props
//   return (
//     <div className='{backgroundColor:blue,border:1px solid black,padding:10px}'>
//       <image src/>
//     </div>
//   )
// }

export default RandomUser;
