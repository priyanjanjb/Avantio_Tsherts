import { useNavigate } from "react-router-dom";
import shirtImage from "../assets/tshers/Free Kids T-Shirt Mockup_03.png";

function Features() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative w-full max-w-6xl flex justify-center items-center min-h-[700px]">

        {/* Shirt Image */}
        <img
          src={shirtImage}
          alt="Shirt"
          className="w-96 z-10 cursor-pointer"
          onClick={handleNavigate}
        />

        {/* ================= LEFT SIDE ================= */}

        {/* Material */}
        <div className="absolute left-10 top-24 text-right w-64">
          <Feature
            title="Material"
            text="High quality breathable cotton fabric for maximum comfort."
          />
          <div className="absolute right-[-60px] top-8 w-16 border-t-2 border-gray-400 rotate-[-20deg]" />
        </div>

        {/* Construction */}
        <div className="absolute left-10 top-80 text-right w-64">
          <Feature
            title="Construction"
            text="Premium stitching ensuring durability and long lasting wear."
          />
          <div className="absolute right-[-60px] top-8 w-16 border-t-2 border-gray-400 rotate-[0deg]" />
        </div>

        {/* Bottom Construction */}
        <div className="absolute left-10 bottom-32 text-right w-64">
          <Feature
            title="Finishing"
            text="Smooth finishing with reinforced hems and edges."
          />
          <div className="absolute right-[-60px] top-8 w-16 border-t-2 border-gray-400 rotate-[20deg]" />
        </div>

        {/* ================= RIGHT SIDE ================= */}

        {/* Sleeve Length */}
        <div className="absolute right-10 top-24 w-64">
          <Feature
            title="Sleeve Length"
            text="Perfect sleeve fit designed for comfort and flexibility."
          />
          <div className="absolute left-[-60px] top-8 w-16 border-t-2 border-gray-400 rotate-[20deg]" />
        </div>

        {/* Design Elements */}
        <div className="absolute right-10 top-80 w-64">
          <Feature
            title="Design Elements"
            text="Modern printed design using high-quality fade-resistant ink."
          />
          <div className="absolute left-[-60px] top-8 w-16 border-t-2 border-gray-400 rotate-[0deg]" />
        </div>

        {/* Fabric Weight */}
        <div className="absolute right-10 bottom-32 w-64">
          <Feature
            title="Fabric Weight"
            text="Lightweight yet durable fabric suitable for all seasons."
          />
          <div className="absolute left-[-60px] top-8 w-16 border-t-2 border-gray-400 rotate-[-20deg]" />
        </div>

        {/* ================= BADGE ================= */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-sm text-gray-700">
          <span className="border px-4 py-1 rounded-full text-xs bg-white shadow">
            360°
          </span>
        </div>

        {/* ================= PRICE ================= */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gray-300 px-6 py-2 text-sm font-medium shadow">
          LKR: 5000
        </div>
      </div>
    </div>
  );
}

/* Reusable Feature Component */
interface FeatureProps {
  title: string;
  text: string;
}

function Feature({ title, text }: FeatureProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

export default Features;