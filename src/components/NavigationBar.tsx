import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo/AVANTIO_Logo.png";
import heart from "../assets/icons/heart.png";
import cart from "../assets/icons/shopping-cart.png";
import user from "../assets/icons/user.png";
import "../assets/styleSheets/navBar.css";

function NavigationBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // mobile menu open
  const [userMenuOpen, setUserMenuOpen] = useState(false); // user dropdown open

  // separate refs for desktop and mobile
  const desktopMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // handle outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;

      const clickedOutsideDesktop =
        desktopMenuRef.current && !desktopMenuRef.current.contains(target);
      const clickedOutsideMobile =
        mobileMenuRef.current && !mobileMenuRef.current.contains(target);

      if (clickedOutsideDesktop && clickedOutsideMobile) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="navigation-background">
      <div className="nav-container">
        {/* Top Row */}
        <div className="flex justify-between items-center py-1">
          {/* Logo */}
          <img
            src={Logo}
            alt="Avantio Logo"
            className="nav-logo cursor-pointer"
            onClick={() => navigate("/")}
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

            {/* Desktop User Dropdown */}
            <div className="relative" ref={desktopMenuRef}>
              <img
                src={user}
                alt="User"
                className="nav-icon cursor-pointer"
                onClick={() => setUserMenuOpen((prev) => !prev)}
              />

              {userMenuOpen && (
                <div className="user-dropdown">
                  <p
                    className="dropdown-item"
                    onClick={() => {
                      navigate("/login");
                      setUserMenuOpen(false);
                    }}
                  >
                    Login
                  </p>
                  <p
                    className="dropdown-item"
                    onClick={() => {
                      navigate("/signup");
                      setUserMenuOpen(false);
                    }}
                  >
                    Sign Up
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="nav-mobile-btn"
            onClick={() => setIsOpen((prev) => !prev)}
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
          className={`nav-mobile-menu ${isOpen ? "max-h-96 pb-4" : "max-h-0"}`}
        >
          <div className="nav-mobile-content">
            <p className="nav-link">Home</p>
            <p className="nav-link">Service</p>
            <p className="nav-link">Projects</p>
            <p className="nav-link">About Us</p>

            <div className="nav-mobile-icons">
              <img src={heart} alt="Heart" className="nav-mobile-icon-img" />
              <img src={cart} alt="Cart" className="nav-mobile-icon-img" />

              {/* Mobile User Dropdown */}
              <div className="relative w-full" ref={mobileMenuRef}>
                <img
                  src={user}
                  alt="User"
                  className="nav-mobile-icon-img cursor-pointer"
                  onClick={() => setUserMenuOpen((prev) => !prev)}
                />

                {userMenuOpen && (
                  <div className="user-dropdown mobile">
                    <p
                      className="dropdown-item"
                      onClick={() => {
                        navigate("/login");
                        setUserMenuOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      Login
                    </p>
                    <p
                      className="dropdown-item"
                      onClick={() => {
                        navigate("/signup");
                        setUserMenuOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      Sign Up
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;