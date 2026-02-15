import { useNavigate } from 'react-router-dom';
import Logo from '../assets/AVANTIO_Logo.png'
import heart from '../assets/icons/heart.png'
import cart from '../assets/icons/shopping-cart.png'
import user from '../assets/icons/user.png'
function NavigationBar() {
  useNavigate();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between h-14 px-8 py-4 shadow-md bg-[#dbb456] mt-5">

      {/* Logo */}
      <img src={Logo} alt="Avantio Logo" className="w-20"  onClick={handleNavigate}/>

      {/* Menu */}
      <div className="flex gap-8 font-medium text-gray-700">
        <p className="cursor-pointer hover:text-black">Home</p>
        <p className="cursor-pointer hover:text-black">Service</p>
        <p className="cursor-pointer hover:text-black">Projects</p>
        <p className="cursor-pointer hover:text-black">About Us</p>
      </div>

      {/* Icons */}
      <div className="flex gap-5">
        <img src={heart} alt="Heart Icon" className="w-8 h-8 cursor-pointer" />
        <img src={cart} alt="Cart Icon" className="w-8 h-8 cursor-pointer" />
        <img src={user} alt="User Icon" className="w-8 h-8 cursor-pointer" />
      </div>

    </div>
  )
}


export default NavigationBar
