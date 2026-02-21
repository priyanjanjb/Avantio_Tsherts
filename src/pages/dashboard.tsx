import shirtImage from "../assets/tshers/—Pngtree—vibrant orange short sleeve polo_21809262.png";
import NavigationBar from "../components/NavigationBar";
import "../assets/styleSheets/dashBoard.css";

function EditSection() {
  return (
    <div className="edit-section">
      <NavigationBar />

      {/* Main Layout */}
      <div className="edit-main">

        {/* ================= LEFT CUSTOMIZE PANEL ================= */}
        <div className="customize-panel">

          {/* Dark Vertical Menu */}
          <div className="vertical-menu">
            <div className="vertical-menu-item"></div>
            <div className="vertical-menu-item"></div>
            <div className="vertical-menu-item"></div>
            <div className="vertical-menu-item"></div>
          </div>

          {/* Main Customize Content */}
          <div className="customize-content">
            <h2 className="customize-title">
              Customize
            </h2>

            {/* Options Grid */}
            <div className="options-grid">
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={i} className="option-item"></div>
              ))}
            </div>

            {/* Text Bars */}
            <div className="text-bars">
              <div className="text-bar-lg"></div>
              <div className="text-bar-md"></div>
              <div className="text-bar-sm"></div>
            </div>

          </div>
        </div>

        {/* ================= CENTER PRODUCT ================= */}
        <div className="product-center">
          <img
            src={shirtImage}
            alt="T-shirt"
            className="product-image"
          />

          <button className="product-button">
            360°
          </button>
        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div className="right-panel">
          <div className="right-panel-item"></div>
          <div className="right-panel-item"></div>
          <div className="right-panel-item"></div>
        </div>

      </div>
    </div>
  );
}

export default EditSection;