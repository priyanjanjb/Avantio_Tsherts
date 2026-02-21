import bgImage from "../assets/logo/AVANTIO_Logo.png"
import logo from "../assets/logo/AVANTIO_Logo.png"

function Signin() {
    const handleNavigate = () => {
        
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      
      {/* Card Container */}
      <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden flex">

        {/* LEFT BACKGROUND IMAGE */}
        <div className="hidden md:block w-1/2 relative">
          <img
            src={bgImage}
            alt="Background design"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center relative">

          {/* Logo */}
          <div className="flex justify-between items-center mb-8">
            <img src={logo} className="h-6" />
            <p className="text-sm text-gray-500 cursor-pointer">
              English (US)
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-xl text-gray-600 mb-2">
            Hello customers!
          </h2>

          <h1 className="text-4xl font-bold mb-8">
            Create new <br /> account ↓
          </h1>

          {/* Inputs */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full border rounded-lg px-4 py-3 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-3 outline-none"
            />

            <div className="flex gap-4">
              <input
                type="password"
                placeholder="Password"
                className="w-1/2 border rounded-lg px-4 py-3 outline-none"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-1/2 border rounded-lg px-4 py-3 outline-none"
              />
            </div>

            <button className="w-full bg-[#d4b46a] text-white py-3 rounded-lg mt-2 hover:opacity-90" onClick={handleNavigate}>
              Create an account
            </button>
          </div>

          {/* Footer */}
          <p className="text-center mt-6 text-gray-600">
            Already have an account?
            <span className="text-[#d4b46a] cursor-pointer ml-1">
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signin
