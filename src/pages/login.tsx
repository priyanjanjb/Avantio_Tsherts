import TshirtImage from "../assets/tshers/Free Kids T-Shirt Mockup_03.png"; 
//import "../assets/styleSheets/login.css"; 

function login() {
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left side - Login Form */}
        <div className="lg:w-1/2 p-10 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">Hi Welcome Back!</h2>
            <h1 className="text-4xl font-bold text-black mt-2">
              Sign in to account
            </h1>
          </div>

          <form className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Username or Email Address"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox w-4 h-4" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-yellow-600 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-white py-3 rounded-xl font-semibold hover:bg-yellow-500 transition"
            >
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

        {/* Right side - Tshirt Image */}
        <div className="lg:w-1/2 bg-gray-50 flex items-center justify-center p-6">
          <img
            src={TshirtImage}
            alt="Tshirt Mockup"
            className="w-full max-w-sm object-contain"
          />
        </div>
      </div>
    </div>
  );
}


export default login
