import TshirtImage from "../assets/tshers/Free Kids T-Shirt Mockup_03.png";
import "../assets/styleSheets/login.css";

function Login() {
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
              Sign in to account
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

            <button type="submit" className="login-btn">
              Log in
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-yellow-600 hover:underline">
              Create an account
            </a>
          </p>
        </div>

        {/* Right side */}
        <div className="login-right">
          <img src={TshirtImage} alt="Tshirt Mockup" />
        </div>

      </div>
    </div>
  );
}

export default Login;