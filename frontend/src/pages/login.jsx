import { useState } from "react"
import axios from 'axios'
import { toast } from "react-hot-toast"

export default function LoginPage(){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    async function handleLogin(){
        try{ 
            const response = await axios.post("http://localhost:5000/api/users/login" , {
                email : email,
                password : password
            })
            toast.success("Login successful");
            console.log(response.data);

        }catch(err){
            toast.error(err.response.data.message)
        }
    }
    

    return(
        <div className="w-full h-screen bg-[url('/login.jpg')] bg-center bg-cover flex items-center justify-center">
            <div className="w-[50%] h-full">

            </div>
            <div className="w-[50%] h-full flex items-center justify-center">
                <div className="w-[50%] h-[600px] backdrop-blur-md rounded-[20px] shadow-xl ">
                    <input onChange={
                        (e)=>{
                            setEmail(e.target.value)
                        }
                        
                    } value={email} 
                    className="w-[300px] h-[50px] border border-blue-100 rounded-[20px] mb-[20px] "/>
                    <input onChange={
                        (e)=>{
                            setPassword(e.target.value)
                        }
                    } value={password} 
                    type="password" className="w-[300px] h-[50px] border border-blue-100 rounded-[20px] mb-[20px]"/>
                    <button onClick={handleLogin} className="w-[300px] h-[50px] bg-blue-300 text-white rounded-[20px]">Login</button>
                </div>
            </div>
        </div>
    )
}