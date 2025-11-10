import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import BtnLoader from "../components/shared/loader/BtnLoader";
import { memo, useState } from "react";

import { BiPhotoAlbum } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { createAccount, googleLogin } from "../redux/auth/authSlice";
import toast from "react-hot-toast";

const Register = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(true);
  const [passError, setPassError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // create account
  const handleRegister = async (e) => {
    e.preventDefault();
    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const profileObj = {
      displayName,
      photoURL,
    };
    setPassError("");

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasMinLength = /.{6,}/.test(password);

    if (!hasUpperCase) {
      return setPassError("Password must have at least one uppercase letter.");
    }
    if (!hasLowerCase) {
      return setPassError("Password must have at least one lowercase letter.");
    }
    if (!hasMinLength) {
      return setPassError("Password must be at least 6 characters long.");
    }

    try {
      const result = await dispatch(
        createAccount({ email, password, profileObj })
      );
      if (result) {
        toast.success("Account created successfully!");
        navigate(location.state || "/");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  // google login
  const handleGoogleRegister = async () => {
    const result = await dispatch(googleLogin());
    if (result) {
      navigate(location.state || "/");
      toast.success("Account created successfully!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative z-10 w-full max-w-md px-4">
        <div className=" dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl shadow-sm border border-gray-300/50 dark:border-slate-700/50 overflow-hidden ">
          <div className="relative">
            <div className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold  mb-2">Create Account</h1>
                <p className="text-sm ">
                  Join TravelEase to start your journey
                </p>
              </div>

              <form onSubmit={handleRegister} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium ">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="h-5 w-5 " />
                    </div>
                    <input
                      type="text"
                      name="displayName"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg   focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium ">Photo URL</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <BiPhotoAlbum className="h-5 w-5 " />
                    </div>
                    <input
                      className="w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg  dark:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="https//:example.png"
                      required
                      name="photoURL"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium ">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="h-5 w-5 " />
                    </div>
                    <input
                      type="email"
                      name="email"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg  dark:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium ">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="h-5 w-5 " />
                    </div>
                    <input
                      type={`${showPassword ? "password" : "text"}`}
                      className="w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg  dark:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Enter your password"
                      required
                      name="password"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <FaEyeSlash className="h-5 w-5 " />
                      ) : (
                        <FaEye className="h-5 w-5 " />
                      )}
                    </button>
                  </div>
                </div>

                {passError && (
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                    <p className="text-sm text-red-600 dark:text-red-400">
                      {passError}
                    </p>
                  </div>
                )}

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                    required
                    id="checked"
                  />
                  <label htmlFor="checked" className="ml-2 text-sm ">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-emerald-600 hover:text-emerald-500 transition-colors"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-emerald-600 hover:text-emerald-500 transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer py-3 px-4 bg-linear-to-r from-emerald-500 to-sky-500 text-white font-semibold rounded-lg transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Sign Up
                </button>
              </form>

              <div className="relative flex justify-center text-sm divider">
                <span className="px-4 ">Or Continue with</span>
              </div>

              <button
                onClick={handleGoogleRegister}
                className="w-full cursor-pointer py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg  dark:bg-slate-700/50 backdrop-blur-sm  transition-all duration-200 flex items-center justify-center gap-3"
              >
                <FcGoogle className="w-5 h-5" />
                <span className=" font-medium">Sign up with Google</span>
              </button>

              <p className="text-center text-sm mt-6">
                Already have an account?{" "}
                <Link
                  to="/auth/login"
                  className="font-medium text-emerald-600 hover:text-emerald-500 transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Register);
