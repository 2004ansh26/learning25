import axios from 'axios'
import React, { useState } from 'react'

export const Api = () => {
    const [message,setmessage]=useState("")
    const [users,setusers]=useState([])
    const getUserData=async()=>{
        const res=await axios.get("https://node5.onrender.com/user/user");
        console.log(res.data)
        setmessage(res.data.message)
        // console.log(res.data.data)
        // setdata(res.data.data)
        setusers(res.data.data)


    }

  return (

    <div>
        <h2 style={{textAlign:"center"}}>API Fetching</h2> 

        <button onClick={()=>{getUserData()}}>get</button>
        <br />
        {message}
        <table class="table table-black"border={2}>
                    <tr>
                        {/* <th>id</th> */}
                        <th>name</th>
                        <th>age</th>
                        <th>email</th>
                        <th>active</th>
                    </tr>
        {
            users?.map((user)=>{
                return <tr>
                        {/* <td>{user.id}</td> */}
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                        <td>{user.isActive==true?"true":"false"}</td>
                    </tr>
            })
            
        }
        </table>

    </div>
  )
}
