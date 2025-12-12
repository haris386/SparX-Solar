"use client";

import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


export default function Testimonials() {
  const testimonials = [
    {
      text: "Switching to Sparx Solar was the best decision for our home. From the first consultation, their team showed professionalism, knowledge, and genuine care for our energy needs. They guided us through every step — from planning and permits to installation — and made sure we understood the system. Now, we enjoy reliable, clean solar energy that reduces our electricity bills and supports a greener future. The entire process was transparent, stress-free, and customer-focused. I highly recommend Sparx Solar to anyone considering solar energy.",
      name: "Ali Khan, Homeowner",
    },
    {
      text: "Sparx Solar made the transition to solar energy seamless. Their transparent pricing and expert guidance made it simple. The installation team was professional and thorough, and they ensured everything was explained clearly. Our energy bills have decreased significantly, and we are proud to be using clean energy.",
      name: "Sara Ahmed, Homeowner",
    },
    // Add more testimonials if needed
  ];

  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full  flex justify-center px-4">
      <div className="w-[98%] md:w-[80%] flex flex-col lg:flex-row gap-8 items-center">
        {/* Left Column: Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src="/images/testimonials.png"
            alt="Customer Testimonials"
            className="rounded-[20px] w-[85%] h-auto object-cover"
          />
        </div>

        {/* Right Column: Testimonials */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          {/* Heading + Slider Buttons */}
          <div className="flex justify-between items-end">
            <h2 className="text-3xl md:text-[36px] font-[300] text-[#303F52] custom-lh">
              Customer <span className="block">Testimonials</span>
            </h2>
            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                className="p-2 bg-[#FA8C3D] rounded-[5px] text-white hover:opacity-90 transition"
              >
                <MdKeyboardArrowLeft size={24} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 bg-[#FA8C3D] rounded-[5px] text-white hover:opacity-90 transition"
              >
                <MdKeyboardArrowRight size={24} />
              </button>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="bg-[#FFD1B133] p-10">
            <p className="text-[#303F52] text-base md:text-[15px] mb-12 leading-relaxed">
              {testimonials[current].text}
            </p>
            <p className="mt-4 text-[#303F52] font-bold">{testimonials[current].name}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
