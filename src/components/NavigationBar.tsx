import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/AVANTIO_Logo.png";
import heart from "../assets/icons/heart.png";
import cart from "../assets/icons/shopping-cart.png";
import user from "../assets/icons/user.png";

function NavigationBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <nav className="bg-[#dbb456] shadow-md px-4 md:px-5 mt-3  md:py-1">
      {/* Main Navbar Row */}
      <div className="flex justify-between items-center py-3 md:py-1">
        {/* Logo */}
        <img
          src={Logo}
          alt="Avantio Logo"
          className="w-20 cursor-pointer"
          onClick={handleNavigate}
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium text-gray-700">
          <p className="cursor-pointer hover:text-black">Home</p>
          <p className="cursor-pointer hover:text-black">Service</p>
          <p className="cursor-pointer hover:text-black">Projects</p>
          <p className="cursor-pointer hover:text-black">About Us</p>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-5 items-center">
          <img src={heart} alt="Heart Icon" className="w-8 h-8 cursor-pointer" />
          <img src={cart} alt="Cart Icon" className="w-8 h-8 cursor-pointer" />
          <img src={user} alt="User Icon" className="w-8 h-8 cursor-pointer" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-8 h-8 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 font-medium text-gray-700 pb-3">
          <p className="cursor-pointer hover:text-black">Home</p>
          <p className="cursor-pointer hover:text-black">Service</p>
          <p className="cursor-pointer hover:text-black">Projects</p>
          <p className="cursor-pointer hover:text-black">About Us</p>

          <div className="flex gap-5 mt-2">
            <img src={heart} alt="Heart Icon" className="w-8 h-8 cursor-pointer" />
            <img src={cart} alt="Cart Icon" className="w-8 h-8 cursor-pointer" />
            <img src={user} alt="User Icon" className="w-8 h-8 cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavigationBar;
