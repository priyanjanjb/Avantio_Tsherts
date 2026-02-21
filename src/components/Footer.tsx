import facebook from "../assets/icons/facebook-app-symbol.png";
import tiktok from "../assets/icons/tik-tok.png";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";
import snapchat from "../assets/icons/snapchat.png";
import logo from "../assets/logo/AVANTIO_Logo.png";
import "../assets/styleSheets/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* TOP SECTION */}
        <div className="footer-top">

          {/* LOGO SECTION */}
          <div className="footer-logo-container">
            <img
              src={logo}
              alt="Avantio Logo"
              className="footer-logo"
            />
          </div>

          {/* COLUMNS */}
          <div className="footer-columns">

            {/* COLUMN 1 */}
            <div className="footer-column">
              <p className="footer-column-title">WEEBLY THEMES</p>
              <p className="footer-link">Pre-sale FAQs</p>
              <p className="footer-link">Customize Order</p>
            </div>

            {/* COLUMN 2 */}
            <div className="footer-column">
              <p className="footer-column-title">SERVICES</p>
              <p className="footer-link">Theme Tweaks</p>
            </div>

            {/* COLUMN 3 */}
            <div className="footer-column">
              <p className="footer-column-title">ABOUT US</p>
              <p className="footer-link">Contact Us</p>
              <p className="footer-link">Affiliation</p>
              <p className="footer-link">Resources</p>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* SOCIAL ICONS */}
        <div className="footer-socials">
          <SocialIcon><img src={facebook} alt="Facebook" /></SocialIcon>
          <SocialIcon><img src={tiktok} alt="TikTok" /></SocialIcon>
          <SocialIcon><img src={instagram} alt="Instagram" /></SocialIcon>
          <SocialIcon><img src={twitter} alt="Twitter" /></SocialIcon>
          <SocialIcon><img src={snapchat} alt="Snapchat" /></SocialIcon>
        </div>

      </div>
    </footer>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="social-icon">
      {children}
    </div>
  );
}

export default Footer;