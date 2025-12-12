"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-16 px-4 pb-6">
      <div className="w-[98%] md:w-[90%] mx-auto flex flex-col gap-4">

        {/* Top Row: Logo + Social */}
        <div className="flex items-center justify-between flex-wrap gap-6">
          {/* Logo */}
          <img 
            src="/logos/sparXSolar-header.png"
            alt="SparX Solar"
            className="w-40 md:w-72"
          />

          {/* Follow Us */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <h3 className="text-[#303F52] text-xl font-[400] mr-24">Follow Us</h3>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FA8C3D] rounded-md flex items-center justify-center">
                <img src="/icons/fb.png" className="w-5 h-5" alt="Facebook" />
              </div>
              <div className="w-10 h-10 bg-[#FA8C3D] rounded-md flex items-center justify-center">
                <img src="/icons/twitter.png" className="w-5 h-5" alt="Twitter" />
              </div>
              <div className="w-10 h-10 bg-[#FA8C3D] rounded-md flex items-center justify-center">
                <img src="/icons/linkedIn.png" className="w-5 h-5" alt="LinkedIn" />
              </div>
              <div className="w-10 h-10 bg-[#FA8C3D] rounded-md flex items-center justify-center">
                <img src="/icons/insta.png" className="w-5 h-5" alt="Instagram" />
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2">

{/* Left Column */}
<div className="bg-[#FFF6EF] p-8 text-[#303F52] border-b-2 border-[#FA8C3D]">
  <p className="text-base md:text-[25px] leading-relaxed">
    Powering your home with clean, reliable solar energy while helping you save 
    money and build a sustainable future.
  </p>
</div>

{/* Right Column */}
<div className="bg-[#FFF8DA] p-8 border-b-2 border-[#FA8C3D]">
  <div className="flex justify-between w-full">
    {/* Left Menu */}
    <ul className="text-[#303F52] text-base md:text-lg space-y-2">
      <li>About</li>
      <li>Committment</li>
      <li>Services</li>
    </ul>

    {/* Right Menu */}
    <ul className="text-[#303F52] text-base md:text-lg text-right space-y-2">
      <li>Why Chose Us</li>
      <li>Our Process</li>
    </ul>
  </div>
</div>

        </div>

        {/* Bottom Text */}
        <p className="text-center text-[#303F52] text-sm md:text-base">
          © 2012 - 2025 Sparx Solar, Inc.
        </p>
      </div>
    </footer>
  );
}
