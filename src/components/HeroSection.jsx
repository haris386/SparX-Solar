"use client";

import { MdKeyboardArrowRight } from "react-icons/md";
import SkewedButton from "./SkewedButton";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-start"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#26384e]/90 to-black/30"></div>

      {/* Content */}
      <div className="relative w-[90%] mx-auto text-white max-w-[1400px] pt-24 md:pt-28 lg:pt-32 lg:pb-24">
        <div className="w-full md:w-[55%] lg:w-[45%] space-y-6 mt-[10%]">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[44px] xl:text-[44px] custom-lh">
            Quality Solar Installation.
            <br />
            We're Using Sunlight to Keep The Lights On
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-[300]">
            Sparx Solar helps homeowners switch to clean energy with trusted
            installation, transparent pricing, and a seamless experience from
            start to finish.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 pt-4">
 <SkewedButton
        text="Free Quote"
        color="#FA8C3D"
        textColor="#fff"
        size="medium"
        icon={<MdKeyboardArrowRight size={22} />}
        onClick={() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />

      {/* White button with dark text */}
      <SkewedButton
        text="Book Consultation"
        color="white"
        textColor="#303F52"
        size="medium"
        icon={<MdKeyboardArrowRight size={22} />}
        onClick={() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
          </div>
           <div className="button-box">
       
      </div>
        </div>
      </div>
    </section>
  );
}
