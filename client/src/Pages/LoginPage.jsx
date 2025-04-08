import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        navigate("/main");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center min-h-screen px-4">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-md transition-all duration-300 hover:shadow-blue-500/30">
        <h2 className="text-4xl font-extrabold text-center text-white mb-6 drop-shadow-md">
          Login to WooAnime
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-white/20 text-white placeholder-white/60 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-white/20 text-white placeholder-white/60 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-white/80">
          Don't have an account?{" "}
          <span
            className="text-blue-400 cursor-pointer hover:underline"
            onClick={handleSignup}
          >
            Create new account
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
