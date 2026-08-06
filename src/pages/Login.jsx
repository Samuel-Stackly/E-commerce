import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import loginIllustration from "../assets/pages/auth-image.png";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const result = login({ email, password });

    if (!result.success) {
      setError(result.error);
      return;
    }

    navigate("/");
  };

  return (
    <div className="w-full max-w-[1300px] mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        <NavLink to="/" className="hover:text-[#1ABA1A]">
          Home
        </NavLink>
        <span className="mx-2">&gt;</span>
        <NavLink to="/pages" className="hover:text-[#1ABA1A]">
          Pages
        </NavLink>
        <span className="mx-2">&gt;</span>
        <span className="text-black dark:text-white font-medium">
          Login
        </span>
      </div>

      {/* Main Container */}
      <div className="bg-white dark:bg-gray-900 rounded-[10px] shadow-sm dark:shadow-black/40 p-6 md:p-10 transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md flex justify-center">
              <img
                src={loginIllustration}
                alt="Login Illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-[#1ABA1A] mb-1">
                Welcome Back
              </h1>
              <p className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 font-semibold">
                Login to continue
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">

              {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 px-4 py-2 text-red-600 dark:text-red-400">
                  {error}
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-transparent focus:outline-none focus:border-[#1ABA1A]"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 pr-12 bg-transparent focus:outline-none focus:border-[#1ABA1A]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#1ABA1A]"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-[#1ABA1A] hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
              >
                Login
              </button>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                New User?{" "}
                <NavLink
                  to="/pages/register"
                  className="text-[#1ABA1A] font-semibold hover:underline"
                >
                  Register
                </NavLink>
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;