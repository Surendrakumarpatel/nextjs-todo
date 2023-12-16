"use client"
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const submitHandler = async () => {
        try {
            const res = await axios.post("/api/users/login", user);
            console.log(res);
            toast.success(res.data.message);
            router.push("/");
        } catch (error: any) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex space-x-4 p-8 bg-white rounded-md shadow-md">
                <div>
                    <h1 className="text-[#2C444E] font-bold text-lg">LOGIN</h1>

                    <div className="flex flex-col mt-5">
                        <input
                            type="email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            placeholder="Email"
                            className="border-2 text-md text-[#2C444E] font-medium border-gray-400 rounded-md px-2 py-[0.30rem] mt-1 outline-[#2C444E]"
                        />
                    </div>
                    <div className="flex flex-col mt-5">
                        <input
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            placeholder="Password"
                            className="border-2 text-md text-[#2C444E] font-medium border-gray-400 rounded-md px-2 py-[0.30rem] mt-1 outline-[#2C444E]"
                        />
                    </div>

                    <button onClick={submitHandler} className="bg-[#2C444E] text-white py-2 w-full mt-10 rounded-md">Login</button>
                    <p className="mt-5">Dont have an account? <Link href="/signup" className="text-blue-600 font-bold">Signup</Link></p>
                </div>
                <div>
                    <img
                        width={"350px"}
                        src="https://img.freepik.com/free-vector/list-concept-illustration_114360-2498.jpg?w=740&t=st=1702737100~exp=1702737700~hmac=1b7b366698ac5359b2fc8d4cf7c0380695d7b7b200d922e9f683922ce6dec98e"
                    />
                </div>


            </div>
        </div>
    )
};

export default LoginPage;
