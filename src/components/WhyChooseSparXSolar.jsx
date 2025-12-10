"use client";

export default function WhyChooseSparXSolar() {
  const boxes = [
    {
      type: "main",
      bg: "#FA8C3D",
      heading: "Why Choose Sparx Solar",
      text: "We design systems that maximize energy production, reduce your bills, and increase your home value.",
    },
    {
      type: "image",
      bgImage: "/images/fast-installation.jpg",
      heading: "Fast Installation",
      text: "From assessment to installation — everything is handled by certified professionals.",
    },
    {
      type: "image",
      bgImage: "/images/premium-quality-panels.jpg",
      heading: "Premium Quality Panels",
      text: "We use Tier-1 panels and high-efficiency inverters to ensure top performance, long-term reliability, and industry-leading energy output.",
    },
    {
      type: "image",
      bgImage: "/images/honest-pricing.png",
      heading: "Honest Pricing",
      text: "No hidden fees. No sales pressure. Just a 100% transparent, honest, and straightforward process from start to finish.",
    },
  ];

  return (
    <section className="flex justify-center py-16">
      <div className="w-[90%] md:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-6">
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`relative rounded-[20px] overflow-hidden flex flex-col justify-end ${
              box.type === "main" ? "bg-[#FA8C3D] text-white h-[400px] p-14" : "h-[300px] md:h-[350px] lg:h-[400px] p-6"
            }`}
            style={
              box.type === "image"
                ? {
                    backgroundImage: `linear-gradient(to top, rgba(38,56,78,0.7), rgba(38,56,78,0.2)), url(${box.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : {}
            }
          >
            <h3
              className={`${
                box.type === "main"
                  ? "text-[36px] lg:text-[45px] leading-[1.2] lg:mb-[10px] text-white font-normal"
                  : "text-xl sm:text-2xl font-semibold text-white"
              }`}
            >
              {box.heading}
            </h3>
            <p
              className={`${
                box.type === "main"
                  ? "text-[20px] lg:text-[25px] text-white font-[300]"
                  : "text-sm sm:text-base text-white font-[300]"
              }`}
            >
              {box.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
