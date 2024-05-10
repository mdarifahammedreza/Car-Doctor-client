import { useState } from "react";
import loginImage from "../../../src/assets/images/login/login.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const Login = () => {


  // Login Handeler
  //
  const LoginHandeler = (e) => {
    e.preventDefault();
    const Email = e.target.email.value;
    const Password = e.target.password.value;
    const User = { Email, Password };
    if(Password.length < 8){
      toast.error("Password must be at least 7 characters long");
    }
  };
  //
  //
  // Password Show Hide
  const [show_Password, Set_Password_Status] = useState(true);
  //
  //
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="flex  justify-around items-center gap-10">
        <div className="hidden sm:block lg:contents">
          <img src={loginImage} alt="img" />
        </div>
        <div className=" shadow-2xl bg-transparent ">
          <form className="card-body" onSubmit={LoginHandeler}>
            <h1 className="text-4xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              id="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div>
                <div className="relative flex">
                  <input
                    type={show_Password ? "text" : "password"}
                    placeholder="password"
                    id="password"
                    className="input input-bordered"
                    required
                  />
                  <div className="absolute right-3 bottom-4">
                    {show_Password ? (
                      <FaEyeSlash
                        onClick={() => Set_Password_Status(!show_Password)}
                        className="cursor-pointer"
                      />
                    ) : (
                      <FaEye
                        onClick={() => Set_Password_Status(!show_Password)}
                        className="cursor-pointer"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="form-control mt-6">
              <button
                className="btn  bg-orange-600 text-white hover:bg-orange-500"
                type="submit">
                Login
              </button>
              <Toaster />
              <Link className="text-xs font-semibold mt-1">
                Forget password?
                <span className="underline  text-blue-600">Click here</span>
              </Link>
            </div>
          </form>
          <div className="p-5">
                <p className="text-center text-sm">
                    Not have an account?{" "}
                    <Link to="/user/sign-up" className="text-orange-600 underline">
                    Sign up
                    </Link>
                </p>  
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
