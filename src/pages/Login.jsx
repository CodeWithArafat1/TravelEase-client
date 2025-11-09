import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import BtnLoader from "../components/shared/loader/BtnLoader";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      if (email === "test@example.com" && password === "password") {
        // Success
        localStorage.setItem("isLoggedIn", "true");
        navigate("/");
      } else {
        setError("Invalid email or password");
      }
      setLoading(false);
    }, 1500);
  };

  const handleGoogleLogin = async () => {
    const createUser = await signInWithPopup(auth, provider);
    console.log(createUser.user);
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="relative z-10 w-full max-w-md px-4">
        <div className=" dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl shadow-sm border border-gray-300/50 dark:border-slate-700/50 overflow-hidden ">
          <div className="relative">
            <div className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold   mb-2">Welcome Back</h1>
                <p className="text-sm ">Sign in to your TravelEase account</p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleLogin} className="space-y-6">
                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium ">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="h-5 w-5 " />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg  focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium ">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="h-5 w-5 " />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg  focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <FaEyeSlash className="h-5 w-5 " />
                      ) : (
                        <FaEye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                    <p className="text-sm text-red-600 dark:text-red-400">
                      {error}
                    </p>
                  </div>
                )}

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                    />
                    <span className="ml-2 text-sm ">Remember me</span>
                  </label>
                  <a
                    href="#"
                    className="text-sm text-emerald-600 hover:text-emerald-500 transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full cursor-pointer py-3 px-4 bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-semibold rounded-lg   transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? <BtnLoader text="Sign ing..." /> : "Sign in"}
                </button>
              </form>

              {/* Divider */}

              <div className="relative flex justify-center text-sm divider">
                <span className="px-4 ">Or</span>
              </div>

              <button
                onClick={handleGoogleLogin}
                className="w-full cursor-pointer py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-3"
              >
                <FcGoogle className="w-5 h-5" />
                <span className="font-medium">Login with Google</span>
              </button>

              {/* Sign Up Link */}
              <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-6">
                Don't have an account?{" "}
                <Link
                  to="/auth/register"
                  className="font-medium text-emerald-600 hover:text-emerald-500 transition-colors"
                >
                  Sign up for free
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
