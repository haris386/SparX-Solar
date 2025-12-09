"use client";

import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function OurCommitment() {
  const boxes = [
    {
      icon: "/icons/transparency.png",
      heading: "Transparency",
      desc: "No secrets here! We want you to be fully informed and in control during this process. With a personal agent dedicated to answer your questions and help walk you through the process from start to finish and even beyond! You will never feel left in the dark!",
    },
    {
      icon: "/icons/transparency.png",
      heading: "Top-quality Service",
      desc: "Guaranteed to receive some of the industry’s best and most durable equipment! Couple that with an installation team with the know-how and experience to provide the professional quality that you and your home deserve!",
    },
    {
      icon: "/icons/transparency.png",
      heading: "Warranty",
      desc: "Experience ease of mind with manufacturer warranties on all solar equipment, as well as a warranty on any roofing work we perform!",
    },
  ];

  return (
    <>
    <section className="flex justify-center py-16">
      {/* Container with 90% width and rounded corners */}
      <div
        className="w-[90%] rounded-[30px] overflow-hidden relative"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(38,56,78,0.8) 40%, rgba(0,0,0,0.2) 100%), url('/images/ourcommitment-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content */}
        <div className="relative z-10 text-white p-6 md:pt-60 md:pb-16 md:pl-16 md:pr-16">
          {/* Top row: heading + subtext + button */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-6">
            <div className="lg:w-[65%] space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-[44px] leading-[1.2]">
                Our Commitment
              </h2>
              <p className="text-lg md:text-xl">
                We Make Going Solar Simple, Fast, and Trustworthy
              </p>
            </div>
            <div>
<button
  style={{
    clipPath: "polygon(14.7483% 7.75%, 103.1% 9%, 81.1024% 94.5%, -0.8864% 94.5%)",
  }}
  className="flex items-center gap-2 px-6 py-3 bg-[#FA8C3D] text-white font-medium rounded-lg hover:opacity-90 transition"
  onClick={() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Contact Us <MdKeyboardArrowRight size={22} />
</button>


            </div>
          </div>

          {/* Boxes row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="bg-white text-black p-6 rounded-[20px] flex flex-col gap-4 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#FA8C3D] rounded-[5px] p-2 flex items-center justify-center w-12 h-12">
                    <Image
                      src={box.icon}
                      alt={box.heading}
                      width={28}
                      height={28}
                    />
                  </div>
                  <h3 className="text-lg font-normal text-[#203145]">{box.heading}</h3>
                </div>
                <p className="text-sm leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="flex justify-center py-16">
  <div className="w-[90%] md:w-[80%] flex flex-col lg:flex-row items-center lg:items-center lg:gap-6 gap-8">
    {/* Left Column: Image */}
    <div className="lg:w-1/2">
<img
        src="/images/guaranteed-jobs.jpg"
        alt="Guaranteed Jobs"
        className="rounded-[20px] w-full lg:w-[80%] h-[500px] md:h-[500px] lg:h-[500px] object-cover"
      />
    </div>

    {/* Right Column: Text + Boxes */}
    <div className="lg:w-1/2 flex flex-col gap-6">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-[36px] leading-[1.2] text-[#303F52]">
        Guaranteed <span className="text-[#FA8C3D] font-bold">15 Jobs</span> <span className="block">Within your first <span className="text-[#FA8C3D] font-bold">90 days</span></span>
      </h2>

      {/* Subtext */}
      <p className="text-lg text-[#303F52]">
        We take full responsibility for your success — that’s why our guarantee is risk-free and performance-based.
      </p>

      {/* Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#FFD1B133] p-4 rounded-[20px] text-[#303F52]">
          If we don’t deliver, we’ll return your money to compensate for your time.
        </div>
        <div className="bg-[#FFD1B133] p-4 rounded-[20px] text-[#303F52]">
          Or we’ll stay on the project at no charge and keep working until the goal is fully met.
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
