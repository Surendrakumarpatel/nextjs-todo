"use client";
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';

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
    <header>
      <div className='flex flex-col md:flex-row p-5 items-center justify-between bg-gray-500/10 rounded-b-2xl'>
        <div className='flex space-x-2 items-center'>
          <img width={"50px"} src="https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png" alt="logo" />
          <h1 className='font-bold text-lg'>EPICCHECK</h1>
        </div>
        <div className='flex mt-10 md:mt-0 w-full md:w-auto items-center space-x-4'>
          <form className='flex items-center space-x-5 bg-white shadow-md p-2 flex-1 md:flex-initial rounded-md'>
            <CiSearch size={"24px"} color="gray" />
            <input placeholder='Search...' className='flex-1 outline-none font-medium py-2 text-md' />
            <button className='bg-[#3493E9] hidden text-white px-4 py-1 rounded-md'>Search</button>
          </form>
          <Avatar name="Patel Programmer" size="50" round={true} />
        </div>

      </div>
      <div className='flex space-x-4 items-center text-center bg-white shadow-lg py-5 px-2 w-fit mx-auto'>
        <Avatar name="Patel Programmer" size="30" round={true}/>
        <p className=' italic'>Hello Mr, Patel now you can create your first cpiccheck</p>
      </div>

    </header>
  )
}

export default Navbar