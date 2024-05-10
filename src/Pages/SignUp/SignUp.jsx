import NavbarWithoutLogin from "../../Components/Share/NavbarWithoutLogin";
import { useState } from "react";
import loginImage from "../../../src/assets/images/login/login.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Signup } from "../../../Fireabse/Authonication";
const SignUp = () => {
  // Sign UP Handeler
  //
  const SignUpHandeler = (e) => {
    e.preventDefault();
    const Email = e.target.email.value;
    const Password = e.target.password.value;
    const User = { Email, Password };
    if (Password.length < 8) {
      toast.error("Password must be at least 7 characters long");
    } else {
      Signup(User.Email, User.Password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      toast.success("Sign Up Successfully");
    }
  };
  //
  //
  // Password Show Hide
  const [show_Password, Set_Password_Status] = useState(true);
  //
  //
  return (
    <div className="md:mx-20">
      <NavbarWithoutLogin />
      <div className="hero min-h-screen bg-base-100">
        <div className="flex  justify-around items-center gap-10">
          <div className="hidden sm:block lg:contents">
            <img src={loginImage} alt="img" />
          </div>
          <div className=" shadow-2xl bg-transparent ">
            <form className="card-body" onSubmit={SignUpHandeler}>
              <h1 className="text-4xl font-bold">Sign up now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  id="Name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
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
                  Sign up
                </button>
                <Toaster />
              </div>
            </form>
            <div className="p-5">
              <p className="text-center text-sm">
                Already have an account?{" "}
                <Link to="/user/sign-in" className="text-orange-600 underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
// Compare this snippet from src/Pages/SignUp/SignUp.jsx:
