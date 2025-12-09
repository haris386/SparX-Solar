"use client";

import { MdKeyboardArrowRight } from "react-icons/md";

export default function Contact() {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-4 px-4"
      style={{ backgroundImage: "url('/images/contact.jpg')" }}
    >
      <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-40 items-start p-0 lg:p-20">
        {/* Left Column: Contact Info */}
        <div className="lg:w-1/2 flex flex-col gap-6 text-white">
          <h2 className="text-4xl md:text-[44px] leading-[1.2] font-[400]">
            Reach <span className="block">Out Today</span>
          </h2>

          <h3 className="text-2xl md:text-[20px] font-[300] mt-10 lg:mt-40 font-[600]">Contact Us</h3>

          <div className="flex flex-col gap-4 text-lg md:text-[14px]">
            <div className="flex items-center gap-4">
              <img src="/icons/phone.png" alt="Phone" className="w-6 h-6" />
              <span>+1 (877) 707 – 7279</span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/icons/mail.png" alt="Email" className="w-6 h-6" />
              <span>info@sparx.solar</span>
            </div>
            <div className="flex items-start gap-4">
              <img src="/icons/address.png" alt="Address 1" className="w-6 h-6 mt-1" />
              <span>3311 W Catalina Dr. Unit A Phoenix, AZ 85017</span>
            </div>
            <div className="flex items-start gap-4">
              <img src="/icons/address.png" alt="Address 2" className="w-6 h-6 mt-1" />
              <span>9087 Arrow Rte. STE 120 Rancho Cucamonga, CA 91730</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
<div className="w-full lg:w-[40%] bg-white p-8 rounded-[20px] shadow-md">

          <h3 className="text-2xl md:text-3xl font-[300] text-[#303F52] mb-2 text-center">
            Let’s Start a Conversation
          </h3>
          <div className="w-[90%] h-[1px] bg-[#FA8C3D] mb-6 m-auto"></div>

          <form className="flex flex-col gap-4">
            
            {/* First / Last Name */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-[#303F52] mb-1">First Name</label>
                <input
                  type="text"
                  className="p-3 rounded-md bg-[#FFF6EF] border border-transparent focus:border-[#FA8C3D] outline-none"
                />
              </div>

              <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-[#303F52] mb-1">Last Name</label>
                <input
                  type="text"
                  className="p-3 rounded-md bg-[#FFF6EF] border border-transparent focus:border-[#FA8C3D] outline-none"
                />
              </div>
            </div>

            {/* Email / Phone */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-[#303F52] mb-1">Email</label>
                <input
                  type="email"
                  className="p-3 rounded-md bg-[#FFF6EF] border border-transparent focus:border-[#FA8C3D] outline-none"
                />
              </div>

              <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-[#303F52] mb-1">Phone</label>
                <input
                  type="tel"
                  className="p-3 rounded-md bg-[#FFF6EF] border border-transparent focus:border-[#FA8C3D] outline-none"
                />
              </div>
            </div>

            {/* Comments */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-[#303F52] mb-1">Comments</label>
              <textarea
                rows={4}
                className="p-3 rounded-md bg-[#FFF6EF] border border-transparent focus:border-[#FA8C3D] outline-none"
                placeholder="Please let us know what's on your mind. Have a question for us? Ask away."
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-[#FA8C3D] text-white rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition"
            >
              Submit <MdKeyboardArrowRight size={22} />
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
