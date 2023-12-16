"use client";
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
const Navbar = () => {
  const router = useRouter();
  const logoutHandler = async () => {
    try {
      const res = await axios.get("/api/users/logout");
      console.log(res);
      toast.success(res.data.message);
      router.push("/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);

    }
  }
  return (
    <div>
      <button onClick={logoutHandler} className='bg-[#2C444E] text-white px-2 py-1 rounded-md'>Logout</button>
    </div>
  )
}

export default Navbar