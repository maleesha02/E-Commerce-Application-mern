import { useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function RegisterPage(){

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    async function handleRegister(){

        try{

            await axios.post(
                import.meta.env.VITE_BACKEND_URL + "/api/users  ",
                {
                    firstName : firstName,
                    lastName : lastName,
                    email : email,
                    password : password
                }
            )

            toast.success("Registration Successful")

            navigate("/login")

        }catch(err){

            console.log(err)

            toast.error(
                err.response?.data?.message || "Registration Failed"
            )
        }
    }

    return(
        <div className="w-full h-screen bg-[url('/login.jpg')] bg-center bg-cover flex items-center justify-center">

            <div className="w-[50%] h-full">

            </div>

            <div className="w-[50%] h-full flex items-center justify-center">

                <div className="w-[50%] h-[650px] backdrop-blur-md rounded-[20px] shadow-xl flex flex-col items-center justify-center gap-[20px]">

                    <h1 className="text-white text-[35px] font-bold mb-[20px]">
                        Register
                    </h1>

                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e)=>{
                            setFirstName(e.target.value)
                        }}
                        className="w-[300px] h-[50px] border border-blue-100 rounded-[20px] px-[20px] bg-transparent text-white outline-none"
                    />

                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e)=>{
                            setLastName(e.target.value)
                        }}
                        className="w-[300px] h-[50px] border border-blue-100 rounded-[20px] px-[20px] bg-transparent text-white outline-none"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        className="w-[300px] h-[50px] border border-blue-100 rounded-[20px] px-[20px] bg-transparent text-white outline-none"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        className="w-[300px] h-[50px] border border-blue-100 rounded-[20px] px-[20px] bg-transparent text-white outline-none"
                    />

                    <button
                        onClick={handleRegister}
                        className="w-[300px] h-[50px] bg-blue-400 hover:bg-blue-500 duration-300 text-white rounded-[20px]"
                    >
                        Register
                    </button>

                </div>

            </div>

        </div>
    )
}