import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import registerIllustration from "../assets/pages/auth-image.png";
import { useAuth } from "../context/AuthContext.jsx";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { register } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    const result = register({
      name,
      email,
      password,
    });

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
          Register
        </span>
      </div>

      {/* Main Container */}
      <div className="bg-white dark:bg-gray-900 rounded-[10px] shadow-sm dark:shadow-black/40 p-6 md:p-10 transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md flex justify-center">
              <img
                src={registerIllustration}
                alt="Register Illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-[#1ABA1A] mb-1">
                Register
              </h1>
              <p className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 font-semibold">
                Join to us
              </p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">

              {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 dark:bg-red-950/30 dark:border-red-900 px-4 py-2.5 text-sm text-red-600 dark:text-red-400">
                  {error}
                </div>
              )}

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-1.5">
                  Your Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-black dark:text-white outline-none focus:border-[#1ABA1A] transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-1.5">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-black dark:text-white outline-none focus:border-[#1ABA1A] transition-colors"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-1.5">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="w-full px-4 py-2.5 pr-12 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-black dark:text-white outline-none focus:border-[#1ABA1A] transition-colors"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-[#1ABA1A]"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-1.5">
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                    className="w-full px-4 py-2.5 pr-12 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-black dark:text-white outline-none focus:border-[#1ABA1A] transition-colors"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-[#1ABA1A]"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full sm:w-44 py-2.5 bg-[#1ABA1A] hover:bg-[#159a15] text-white font-bold rounded-lg uppercase tracking-wider transition-colors shadow-sm text-sm"
              >
                Register
              </button>

              {/* Login Link */}
              <div className="text-sm text-gray-600 dark:text-gray-400 pt-1">
                Already have an account?{" "}
                <NavLink
                  to="/pages/login"
                  className="text-[#1ABA1A] font-semibold hover:underline"
                >
                  Login
                </NavLink>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;