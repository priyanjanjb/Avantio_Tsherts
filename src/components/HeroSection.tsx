import React from 'react'
import tImage from "../assets/—Pngtree—vibrant orange short sleeve polo_21809262.png"

function HeroSection() {
  return (
    <div className=" pt-8 ">
      <div className="container mx-auto  flex flex-col md:flex-row items-center justify-between">

        {/* Left Text */}
        <div className="w-3/4 ">
            <p className="text-lg text-gray-600  mb-4 text-2xl mb-10 font-lato">
                UPGRADE YOUR STYLE
            </p>

            <div className="font-belleza text-[86px] text-gray-800 pl-7 leading-none mb-14 mt-10">
                <p>
                  DESIGNED T<span className="text-[#DEA20E]">O FEEL</span>
                </p>
                <p>
                  PURE COMF<span className="text-[#DEA20E]">ORT</span>
                </p>
            </div>

          <p className="text-lg text-gray-600 max-w-xl">
            Our premium-quality T-shirts are crafted using carefully selected fabrics to deliver unmatched comfort, durability, and a perfect fit for everyday wear.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-start md:w-1/2 ">
          <img
                src={tImage}
                alt="Hero Image"
                className="w-full  h-[550px] md:h-[300px] lg:h-[450px] object-cover"
            />
        </div>

      </div>
    </div>
  )
}

export default HeroSection
