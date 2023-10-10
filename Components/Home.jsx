import React ,{useState,useEffect} from 'react';
import axios from 'axios';

const Home = () => {
    const[userData,setUserData]=useState([]);
    const[token,setToken]=useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI0ZWQxMTNlNmRhMTAwODNhMGNmZDMiLCJpYXQiOjE2OTY5MTg5MTZ9.jf--mLMG0esVhT1H3a6d6MepMl_kMUgeGDG54_vK7_g")
   useEffect(()=>{
fetchData();
    },[])
    const Headers={
        Authorization:token,
        'content-type':'application/json'
    }
    const fetchData=async()=>{
        await axios.get("http://localhost:4000/api/user/getuser",{Headers:Headers})
        .then(res=>setUserData([res.data]))
        .catch((err)=>{
            console.log(err);
        })
    }
  console.log("userData",userData)
    return (
        <div>
            <h1>home comp</h1>
            {userData.map((item,index)=>{
                return(
                    <>
                    <div key={index}>
                       <h3>{item.username}</h3>
                       <h3>{item.email}</h3>

                    </div>
                    </>
                )
            })}
        </div>
    );
};

export default Home;