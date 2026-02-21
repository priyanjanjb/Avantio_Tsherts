import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo/AVANTIO_Logo.png";
import heart from "../assets/icons/heart.png";
import cart from "../assets/icons/shopping-cart.png";
import user from "../assets/icons/user.png";
import "../assets/styleSheel/navBar.css";

function NavigationBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = () => navigate("/");

  return (
    <nav className="navigation-background">
      <div className="nav-container">

        {/* Top Row */}
        <div className="flex justify-between items-center py-1">

          {/* Logo */}
          <img
            src={Logo}
            alt="Avantio Logo"
            onClick={handleNavigate}
            className="nav-logo"
          />

          {/* Desktop Menu */}
          <div className="nav-menu">
            <p className="nav-link">Home</p>
            <p className="nav-link">Service</p>
            <p className="nav-link">Projects</p>
            <p className="nav-link">About Us</p>
          </div>

          {/* Desktop Icons */}
          <div className="nav-icons">
            <img src={heart} alt="Heart" className="nav-icon" />
            <img src={cart} alt="Cart" className="nav-icon" />
            <img src={user} alt="User" className="nav-icon" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="nav-mobile-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="nav-mobile-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

        </div>

        {/* Mobile Menu */}
        <div
          className={`nav-mobile-menu ${
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="nav-mobile-content">
            <p className="nav-link">Home</p>
            <p className="nav-link">Service</p>
            <p className="nav-link">Projects</p>
            <p className="nav-link">About Us</p>

            <div className="nav-mobile-icons">
              <img src={heart} alt="Heart" className="nav-mobile-icon-img" />
              <img src={cart} alt="Cart" className="nav-mobile-icon-img" />
              <img src={user} alt="User" className="nav-mobile-icon-img" />
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default NavigationBar;