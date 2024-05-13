// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginImg from "../../images/Sign up-rafiki2.png";
import { AuthContext } from "../components/auth/AuthProvider";
import { FcGoogle } from "react-icons/fc";



const Signup = () => {
  const {createUser,googleUser}=useContext(AuthContext) 
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notification, setNotification] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/dashboard";

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if (password !== confirmPassword) {
        setNotification({ type: "error", message: "Passwords do not match" });
      return;
    }
    if(password.length<6){
        setNotification({ type: "error", message: "Passwords must be at least 6 characters" });
        return;
    }
    console.log(email, password);
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setNotification({type:"success", message:"Sign up successful!"});
        console.log(user);
        navigate(from, { replace: true });
      })
        .catch((err) => {
            setNotification({ type: "error", message: "Error! Try again" });
            console.error(err)
      });
  };

  const handleWithGoogle = () => {
    googleUser()
      .then((result) => {
        console.log(result.user);
        setNotification({ type: "success", message: "Sign up successful!"});
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setNotification({ type: "error", message: "Error! Try again" });
        console.log(error);
      });
  };
  const clearNotification = () => {
    setNotification(null);
  };

  return (
    <div className="min-h-screen lg:flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <img src={LoginImg} alt="Login" className="lg:w-[50%] mx-auto" />
      <div className="max-w-md lg:w-[50%] mx-auto space-y-8 lg:mr-[100px]">
        <div>
          <h2 className="mt-6 text-center lg:text-left text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
          {notification && (
            <div
              className={`py-2 px-4 ${
                notification.type === "success" ? "bg-green-500" : "bg-red-500"
              } text-white mt-4`}
            >
              {notification.message}
              <button className="float-right" onClick={clearNotification}>
                X
              </button>
            </div>
          )}
          <div>
            <label htmlFor="username" className="sr-only">
              Full Name
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              autoComplete="fullname"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none sm:text-sm"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none sm:text-sm"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="sr-only">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none sm:text-sm"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2b5838]"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="text-center lg:text-left">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-[#2b5838]">
              Log in
            </Link>
          </p>
        </div>
        <button
          className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-[#A3DEB5] mb-4"
          onClick={handleWithGoogle}
        >
          <FcGoogle className=" text-2xl mx-[10px]" />
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
