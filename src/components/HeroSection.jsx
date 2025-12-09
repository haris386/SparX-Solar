"use client";

import { MdKeyboardArrowRight } from "react-icons/md";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-start"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#26384e]/90 to-black/30"></div>

      {/* Content */}
      <div className="relative w-[90%] mx-auto text-white max-w-[1400px] pt-24 md:pt-28 lg:pt-32">
        <div className="w-full md:w-[55%] lg:w-[45%] space-y-6 mt-[10%]">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[44px] xl:text-[44px] leading-relaxed">
            Quality Solar Installation.
            <br />
            We're Using Sunlight to Keep The Lights On
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
            Sparx Solar helps homeowners switch to clean energy with trusted
            installation, transparent pricing, and a seamless experience from
            start to finish.
          </p>

          {/* Buttons */}
<div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* Free Quote Button */}
<button
  style={{
    clipPath: "polygon(14.7483% 7.75%, 103.1% 9%, 81.1024% 94.5%, -0.8864% 94.5%)",
  }}
  className="px-6 py-3 bg-[#FA8C3D] text-white font-medium shadow-sm flex items-center gap-2 hover:opacity-90 transition rounded-[12px]"
>
  Free Quote <MdKeyboardArrowRight size={22} />
</button>


            {/* Book Consultation Button */}
           <button
  style={{
    clipPath: "polygon(10.7483% 7.75%, 103.1% 9%, 85.1024% 94.5%, -2.8864% 92.5%)"
  }}
  className="px-6 py-3 bg-white text-black font-medium shadow-sm flex items-center gap-2 hover:bg-gray-200 transition rounded-[12px]"
>
  Book a Consultation <MdKeyboardArrowRight size={22} />
</button>

          </div>
        </div>
      </div>
    </section>
  );
}
