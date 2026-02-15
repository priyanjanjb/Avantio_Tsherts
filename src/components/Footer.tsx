import facebook from "../assets/icons/facebook-app-symbol.png"
import tiktok from "../assets/icons/tik-tok.png"
import instagram from "../assets/icons/instagram.png"
import twitter from "../assets/icons/twitter.png"
import snapchat from "../assets/icons/snapchat.png"
import logo from "../assets/AVANTIO_Logo.png"

function Footer() {
  return (
    <footer className="bg-[#D9D9D9] py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">

          {/* LOGO SECTION */}
          <div className="md:col-span-2">

            
            <img
              src={logo}
              alt="Avanti Logo"
              className="w-80 mb-4"
            />

            
          </div>

          {/* COLUMN 1 */}
          <div className="space-y-2 text-sm text-gray-700">
            <p className="font-semibold">WEEBLY THEMES</p>
            <p className="cursor-pointer hover:text-black">Pre-sale FAQs</p>
            <p className="cursor-pointer hover:text-black">Customize Order</p>
          </div>

          {/* COLUMN 2 */}
          <div className="space-y-2 text-sm text-gray-700">
            <p className="font-semibold">SERVICES</p>
            <p className="cursor-pointer hover:text-black">Theme Tweaks</p>
          </div>

          {/* COLUMN 3 */}
          <div className="space-y-2 text-sm text-gray-700">
            <p className="font-semibold">ABOUT US</p>
            <p className="cursor-pointer hover:text-black">Contact Us</p>
            <p className="cursor-pointer hover:text-black">Affiliation</p>
            <p className="cursor-pointer hover:text-black">Resources</p>
          </div>

          

        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 my-10"></div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6">
          <SocialIcon><img src={facebook} alt="Facebook" className="w-5 h-5" /></SocialIcon>
          <SocialIcon><img src={tiktok} alt="TikTok" className="w-5 h-5" /></SocialIcon>
          <SocialIcon><img src={instagram} alt="Instagram" className="w-5 h-5" /></SocialIcon>
          <SocialIcon><img src={twitter} alt="Twitter" className="w-5 h-5" /></SocialIcon>
          <SocialIcon><img src={snapchat} alt="Snapchat" className="w-5 h-5" /></SocialIcon>
        </div>

      </div>
    </footer>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition">
      {children}
    </div>
  );
}

export default Footer;
