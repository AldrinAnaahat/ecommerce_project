import React, { useState } from "react";
import LoginIcon from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email:"",
    password:""
  })
  
  const handleOnChange = (e)=>{
    const {name,value} = e.target
    setData((preve)=>{
        return{
            ...preve,
            [name]:value
        }
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  console.log("data login",data);
  return (
    <section id="login">
      <div className="mx-auto container p-1 py-4">
        <div className="bg-white p-5 w-full max-w-sm mx-auto ">
          <div className="w-20 h-20 mx-auto">
            <img src={LoginIcon} alt="Login Icon" />
          </div>

          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Email :</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="enter email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label>Password :</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="enter pasword"
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => {
                    setShowPassword((preve) => !preve);
                  }}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link to={"/forgot-password"} className="block w-fit ml-auto hover:underline hover:text-orange-600">
                Forget Password ?
              </Link>
            </div>

            <button className="bg-orange-600 hover:bg-orange-800 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
              Login
            </button>
          </form>
          <p className="my-5">Don't have account ? <Link to={'/sign-up'} className="hover:underline text-orange-600">Sign up</Link></p>
         </div>
      </div>
    </section>
  );
};

export default Login;
