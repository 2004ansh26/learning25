import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

export const ApiPost = () => {
    const {register,handleSubmit}=useForm()
    const submitHandler=async(data)=>{
        const res=await axios.post("https://node5.onrender.com/user/user",data);
        
        if(res.status==201){
            alert("data saved successfully...")
        }
        console.log(res.data);
    }
  return (
    <div>
        <h1>ApiPost</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <label>Name</label>
            <input type="text" {...register("name")} id="" />
            <br />
            <label>age</label>
            <input type="text" {...register("age")} id="" />
            <br />
            <label>email</label>
            <input type="text" {...register("email")} id="" />
            <br />
            <label>active</label>
            <input type="text" {...register("active")} id="" />
            <br />
            <input type="submit" value="submit" />
        </form>
    </div>
  )
}
