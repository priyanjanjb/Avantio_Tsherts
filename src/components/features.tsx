import { useNavigate } from "react-router-dom";
import shirtImage from "../assets/tshers/Free Kids T-Shirt Mockup_03.png";

function Features() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row justify-center items-center min-h-[700px] gap-8">

        {/* LEFT FEATURES (mobile top / desktop left) */}
        <div className="flex flex-col gap-10 md:absolute md:left-10 md:top-24 md:w-64 md:gap-20">
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
        <img
          src={shirtImage}
          alt="Shirt"
          className="w-64 md:w-96 z-10 cursor-pointer"
          onClick={handleNavigate}
        />

        {/* RIGHT FEATURES (mobile bottom / desktop right) */}
        <div className="flex flex-col gap-10 md:absolute md:right-10 md:top-24 md:w-64 md:gap-20">
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

        {/* Badge */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-sm text-gray-700">
          <span className="border px-4 py-1 rounded-full text-xs bg-white shadow">
            360°
          </span>
        </div>

        {/* Price */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gray-300 px-6 py-2 text-sm font-medium shadow">
          LKR: 5000
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
    <div className="text-center md:text-left">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

export default Features;
