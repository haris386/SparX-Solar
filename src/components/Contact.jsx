"use client";

import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import SkewedButton from "./SkewedButton";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formspree.io/f/mnnbqejn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          comments: "",
        });

        // Refresh page after 3 seconds
        setTimeout(() => {
          window.location.reload();
        }, 3000);

      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
<section
  id="contact"
  className="relative w-full bg-cover bg-center bg-no-repeat py-12 px-4  mt-24"
  style={{
    backgroundImage: `linear-gradient(117deg, rgb(0 0 0) 1%, rgb(255 255 255 / 2%) 32%), url('/images/contact.jpg')`,
  }}
>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-40 items-end">
        {/* Left Column */}
        <div className="lg:w-1/2 flex flex-col gap-6 text-white p-5">
          <h2 className="text-4xl md:text-[55px] font-[400] leading-[1.2]">
            Reach <span className="block">Out Today</span>
          </h2>
          <h3 className="text-2xl md:text-[20px] lg:mt-32 font-[600]">Contact Us</h3>

          <div className="flex flex-col gap-4 text-lg md:text-[14px]">
            <div className="flex items-center gap-4">
              <img src="/icons/phone.png" alt="Phone" className="w-5 h-5" />
              <a href="tel:+18777077279">+1 (877) 707 – 7279</a>
            </div>
            <div className="flex items-center gap-4">
              <img src="/icons/mail.png" alt="Email" className="w-5 h-5" />
              <a href="mailto:info@sparx.solar">info@sparx.solar</a>
            </div>
            <div className="flex items-start gap-4">
              <img src="/icons/address.png" alt="Address 1" className="w-5 h-5 mt-1" />
              <span>3311 W Catalina Dr. Unit A Phoenix, AZ 85017</span>
            </div>
            <div className="flex items-start gap-4">
              <img src="/icons/address.png" alt="Address 2" className="w-5 h-5 mt-1" />
              <span>9087 Arrow Rte. STE 120 Rancho Cucamonga, CA 91730</span>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="w-full lg:w-[35%] bg-white p-8 rounded-[20px] shadow-md">
          <h3 className="text-2xl md:text-3xl font-[300] text-[#303F52] mb-2 text-center">
            Let’s Start a Conversation
          </h3>
          <div className="w-[90%] h-[1px] bg-[#FA8C3D] mb-6 mx-auto"></div>

          {submitted ? (
            <p className="text-center text-green-600 font-medium">
              Thank you! We will get back to you soon.
            </p>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* Name Fields */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col w-full lg:w-[48%]">
                  <label className="text-sm font-medium text-[#303F52] mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="p-3 rounded-md bg-[#FFF6EF] border border-transparent focus:border-[#FA8C3D] outline-none"
                  />
                </div>

                <div className="flex flex-col w-full lg:w-[48%]">
                  <label className="text-sm font-medium text-[#303F52] mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="p-3 rounded-md bg-[#FFF6EF] border border-transparent focus:border-[#FA8C3D] outline-none"
                  />
                </div>
              </div>

              {/* Email / Phone */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col w-full lg:w-[48%]">
                  <label className="text-sm font-medium text-[#303F52] mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-3 rounded-md bg-[#FFF6EF] border border-transparent focus:border-[#FA8C3D] outline-none"
                  />
                </div>

                <div className="flex flex-col w-full lg:w-[48%]">
                  <label className="text-sm font-medium text-[#303F52] mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="p-3 rounded-md bg-[#FFF6EF] border border-transparent focus:border-[#FA8C3D] outline-none"
                  />
                </div>
              </div>

              {/* Comments */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-[#303F52] mb-1">Comments</label>
               <textarea
  name="comments"
  value={formData.comments}
  onChange={handleChange}
  rows={4}
  placeholder="Please let us know what's on your mind. Have a question for us? Ask away."
  className="p-3 rounded-md bg-[#FFF6EF] border border-transparent focus:border-[#FA8C3D] outline-none placeholder:text-[14px]"
/>

              </div>

              {/* Submit */}
              <SkewedButton
                text="Submit"
                color="#FA8C3D"
                textColor="#fff"
                size="medium"
                rounded={false}
                icon={<MdKeyboardArrowRight size={22} />}
                type="submit"
              />
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
