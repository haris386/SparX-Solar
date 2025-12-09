"use client";

export default function OurProcess() {
  return (
    <>
    <section className="w-full bg-[#14273C] py-24 flex justify-center items-center text-center px-4">
      <h2 className="text-[40px] md:text-[55px] leading-[1.2] max-w-[1200px] text-white font-[200]">
        <span className="text-[#FA8C3D]">Sparx Solar</span>{" "}
        <span className="capitalize">
          Brings The Sun’s <span className="block font-[200]">Power To Your Doorstep With</span>{" "}
          <span className="block">Trusted Technology, Transparent</span>{" "}
          <span className="block">Processes, And Unmatched</span> Reliability.
        </span>
      </h2>
    </section>

    <section className="w-full py-24 flex justify-center px-4">
        <div className="w-[90%] md:w-[80%]">
          {/* Top row: Heading and text */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <h2 className="text-3xl md:text-[44px] text-[#303F52] font-[300]">
              Our Process
            </h2>
            <p className="text-lg md:text-[14px] text-[#303F52] max-w-lg">
              At Sparx Solar, we make going solar simple, seamless, and stress-free. From the initial assessment to powering your home with clean energy, we guide you every step of the way.
            </p>
          </div>

          {/* Container with top border */}
          <div className="w-full bg-[#FFD1B133] border-t-4 border-[#FA8C3D] rounded-t-md mt-8"></div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 ">
            {/* Card 1 */}
            <div className="bg-[#FFD1B133] p-6">
              <h3 className="text-[10rem] font-[200] text-black">01</h3>
              <h4 className="text-xl text-[#303F52] mt-2 mb-2">Planning & Permitting</h4>
              <p className="text-[#303F52] text-base">
                We begin by thoroughly inspecting your property and designing a customized solar plan tailored to your energy needs. Then, we handle all necessary approvals from local regulators and your utility company, ensuring a smooth start to your solar journey.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FEDD4433] p-6">
              <h3 className="text-[10rem] font-[200] text-black">02</h3>
              <h4 className="text-xl text-[#303F52] mt-2 mb-2">Installation</h4>
              <p className="text-[#303F52] text-base">
                Next, our expert team prepares your roof, installs high-quality solar panels, and configures the complete electrical layout. We ensure that every component is installed safely, efficiently, and according to industry best practices.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FFD1B133] p-6">
              <h3 className="text-[10rem] font-[200] text-black">03</h3>
              <h4 className="text-xl text-[#303F52] mt-2 mb-2">Approval & Activation</h4>
              <p className="text-[#303F52] text-base">
                Finally, after a comprehensive inspection, we secure PTO (Permission to Operate) from your local utility company. Once approved, your system is connected to the grid, and you can start enjoying clean, reliable, and cost-effective solar energy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
