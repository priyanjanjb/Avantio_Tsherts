import { useNavigate } from "react-router-dom";
import bgImage from "../assets/logo/AVANTIO_Logo_without_Name.png"
import logo from "../assets/logo/AVANTIO_Logo.png"

import "../assets/styleSheets/signup.css";

function Signup() {
  const navigate = useNavigate();
  
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="signup-page">
      <div className="signup-card">

        {/* LEFT IMAGE */}
        <div className="signup-left">
          <img src={bgImage} alt="Background design" />
        </div>

        {/* RIGHT FORM */}
        <div className="signup-right">

          {/* Header */}
          <div className="signup-header">
            <img src={logo} className="signup-logo" />
            <p className="text-sm text-gray-500 cursor-pointer">
              English (US)
            </p>
          </div>

          <h2 className="text-xl text-gray-600 mb-2">
            Hello customers!
          </h2>

          <h1 className="text-4xl font-bold mb-8">
            Create new <br /> account ↓
          </h1>

          <div className="space-y-4">
            <input type="text" placeholder="Username" className="signup-input" />
            <input type="email" placeholder="Email Address" className="signup-input" />

            <div className="signup-row">
              <input type="password" placeholder="Password" className="signup-input" />
              <input type="password" placeholder="New Password" className="signup-input" />
            </div>

            <button className="signup-btn" onClick={() =>handleNavigate("/login")}>
              Create an account
            </button>
          </div>

          <p className="signup-footer">
            Already have an account?
            <button onClick={() => handleNavigate("/login")} className="signup-link">Sign in</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;