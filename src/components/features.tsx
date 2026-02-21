import { useNavigate } from "react-router-dom";
import shirtImage from "../assets/tshers/Free Kids T-Shirt Mockup_03.png";
import "../assets/styleSheel/feature.css";

function Features() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dashboard");
  };

  return (
    <div className="features-section">
      <div className="features-container">

        {/* LEFT FEATURES */}
        <div className="features-column">
          <Feature
            title="Material"
            text="High quality breathable cotton fabric for maximum comfort."
          />
          <Feature
            title="Construction"
            text="Premium stitching ensuring durability and long lasting wear."
          />
          <Feature
            title="Finishing"
            text="Smooth finishing with reinforced hems and edges."
          />
        </div>

        {/* Shirt Image */}
        <div className="shirt-container">
          <img
            src={shirtImage}
            alt="Shirt"
            className="shirt-image"
            onClick={handleNavigate}
          />

          {/* Badge */}
          <span className="shirt-badge">360°</span>

          {/* Price */}
          <div className="shirt-price">LKR: 5000</div>
        </div>

        {/* RIGHT FEATURES */}
        <div className="features-column">
          <Feature
            title="Sleeve Length"
            text="Perfect sleeve fit designed for comfort and flexibility."
          />
          <Feature
            title="Design Elements"
            text="Modern printed design using high-quality fade-resistant ink."
          />
          <Feature
            title="Fabric Weight"
            text="Lightweight yet durable fabric suitable for all seasons."
          />
        </div>
      </div>
    </div>
  );
}

/* Feature Component */
interface FeatureProps {
  title: string;
  text: string;
}

function Feature({ title, text }: FeatureProps) {
  return (
    <div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-text">{text}</p>
    </div>
  );
}

export default Features;