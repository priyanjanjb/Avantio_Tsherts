import TshirtImage from "../assets/tshers/Free Kids T-Shirt Mockup_03.png";
import "../assets/styleSheets/login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <div className="login-page">
      <div className="login-card">

        {/* Left side */}
        <div className="login-left">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Hi Welcome Back!
            </h2>
            <h1 className="text-4xl font-bold text-black mt-2">
              Sign in to <br/>account
            </h1>
          </div>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Username or Email Address"
              className="login-input"
            />

            <input
              type="password"
              placeholder="Password"
              className="login-input"
            />

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Remember me</span>
              </label>

              <a href="#" className="text-yellow-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="login-btn" onClick={(e) => {
              e.preventDefault();
              handleNavigate("/");
            }}>
              Log in
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <button onClick={() => handleNavigate("/signup")} className="text-yellow-600 hover:underline">
              Create an account
            </button>
          </p>
        </div>

        {/* Right side */}
        <div className="login-right relative">
          {/* Shadow overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none"></div>

          <img
            src={TshirtImage}
            alt="Tshirt Mockup"
            className="login-img relative z-10"
          />
        </div>

      </div>
    </div>
  );
}

export default Login;