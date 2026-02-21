import tImage from "../assets/tshers/—Pngtree—vibrant orange short sleeve polo_21809262.png";
import "../assets/styleSheel/heroBar.css"
function HeroSection() {
  return (
   <div className="hero-section">
      <div className="hero-container">

        {/* Left Text */}
        <div className="hero-left">
          <p className="hero-subtitle">
            UPGRADE YOUR STYLE
          </p>

          <div className="hero-title">
            <p>
              DESIGNED T<span className="highlight">O FEEL</span>
            </p>
            <p>
              PURE COMF<span className="highlight">ORT</span>
            </p>
          </div>

          <p className="hero-description">
            Our premium-quality T-shirts are crafted using carefully selected fabrics to deliver unmatched comfort, durability, and a perfect fit for everyday wear.
          </p>
        </div>

        {/* Right Image */}
        <div className="hero-right">
          <img
            src={tImage}
            alt="Hero Image"
            className="hero-image"
          />
        </div>

      </div>
    </div>
  );
}

export default HeroSection;
