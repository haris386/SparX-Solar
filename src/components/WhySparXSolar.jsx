"use client";

export default function WhySparXSolar() {
  const boxes = [
    {
      heading: "",
      desc: "Customers face multiple barriers that reduce trust and slow down decision-making",
    },
    {
      heading: "Missing Clear CTAs",
      desc: "The website lacks strong, visible calls-to-action, making it unclear what steps customers should take next.",
    },
    {
      heading: "No Active Social Presence",
      desc: "With little to no social media activity, customers find it hard to validate the brand’s credibility.",
    },
    {
      heading: "Weak Trust Signals",
      desc: "There are not enough trust-building elements such as certifications, testimonials, case studies, or guarantees.",
    },
    {
      heading: "No Instant Communication Channel",
      desc: "Absence of live chat or quick-response options makes customers feel unsupported during their decision-making process.",
    },
    {
      heading: "No Review Ecosystem",
      desc: "There is no structured platform or system where customers can read or share reviews to build trust.",
    },
    {
      heading: "A Negative Indeed Review Ranking First",
      desc: "A single negative review appearing at the top damages first impressions and discourages potential buyers.",
    },
    {
      heading: "No Lead Nurturing System",
      desc: "There is no automated or consistent follow-up process to educate, nurture, and convert leads over time.",
    },
  ];

  return (
    <section className="w-full flex justify-center py-28 bg-white">
      <div className="w-[80%] max-w-[1400px]">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl mb-12 text-[#303F52]">
          Why Sparx Solar{" "}
          <span className="text-[#FA8C3D] block mt-2 font-bold"><span className="text-[#303F52] font-normal">Is</span> “Hard to Buy From”</span>
        </h2>

        {/* Boxes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {boxes.map((box, index) => (
            <div
  key={index}
  className="p-6 rounded-[20px] bg-[#FFF6EF] hover:bg-[#FA8C3D] transition-colors cursor-pointer min-h-[180px] flex flex-col justify-start group"
>
  {box.heading && (
    <h3 className="text-lg font-semibold mb-2 text-[#303F52B2] group-hover:text-white transition-colors">
      {box.heading}
    </h3>
  )}
  <p className="text-sm text-[#303F52B2] group-hover:text-white transition-colors leading-relaxed">
    {box.desc}
  </p>
</div>

          ))}
        </div>
      </div>
    </section>
  );
}
