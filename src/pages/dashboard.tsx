import React from "react";
import shirtImage from "../assets/—Pngtree—vibrant orange short sleeve polo_21809262.png";
import NavigationBar from "../components/NavigationBar";

function EditSection() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavigationBar />

      {/* Main Layout */}
      <div className="flex p-8 gap-6">

        {/* ================= LEFT CUSTOMIZE PANEL ================= */}
        <div className="w-1/4 bg-[#d9d9d9] shadow rounded overflow-hidden flex">

          {/* Dark Vertical Menu */}
          <div className="w-14 bg-[#5a5a5a] flex flex-col items-center py-4 gap-4">
            <div className="w-8 h-8 bg-gray-300"></div>
            <div className="w-8 h-8 bg-gray-300"></div>
            <div className="w-8 h-8 bg-gray-300"></div>
            <div className="w-8 h-8 bg-gray-300"></div>
          </div>

          {/* Main Customize Content */}
          <div className="flex-1 p-4">

            <h2 className="font-semibold mb-4 text-gray-800">
              Customize
            </h2>

            {/* Options Grid */}
            <div className="grid grid-cols-6 gap-2 mb-4">
              {Array.from({ length: 18 }).map((_, i) => (
                <div
                  key={i}
                  className="h-8 bg-gray-400"
                ></div>
              ))}
            </div>

            {/* Text Bars */}
            <div className="space-y-2">
              <div className="h-3 bg-gray-500 w-3/4"></div>
              <div className="h-3 bg-gray-500 w-2/3"></div>
              <div className="h-3 bg-gray-400 w-1/2"></div>
            </div>

          </div>
        </div>

        {/* ================= CENTER PRODUCT ================= */}
        <div className="w-2/4 flex flex-col items-center justify-center">
          <img
            src={shirtImage}
            alt="T-shirt"
            className="max-h-[500px] object-contain"
          />

          <button className="mt-4 px-5 py-1 border rounded-full bg-white shadow">
            360°
          </button>
        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div className="w-1/4 bg-white shadow p-4 rounded flex flex-col gap-4">
          <div className="h-20 bg-gray-300 rounded"></div>
          <div className="h-20 bg-gray-300 rounded"></div>
          <div className="h-20 bg-gray-300 rounded"></div>
        </div>

      </div>
    </div>
  );
}

export default EditSection;