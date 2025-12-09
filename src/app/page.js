"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhySparXSolar from "@/components/WhySparXSolar";
import OurCommitment from "@/components/OurCommitment";
import WhyChooseSparXSolar from "@/components/WhyChooseSparXSolar";
import OurProcess from "@/components/OurProcess";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhySparXSolar />
      <OurCommitment />
      <WhyChooseSparXSolar />
      <OurProcess />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

// <div
//       style={{
//         borderRadius: "10px",
//         overflow: "hidden",
//         display: "inline-block",
//       }}
//     >
//       <a
//         href="https://nextjs.org/docs"
//         target="_blank"
//         style={{
//           padding: "0.8rem 1.5rem",
//           background: "black",
//           color: "white",
//           textDecoration: "none",
//           fontSize: "1rem",
//           display: "inline-block",
//           clipPath:
//             "polygon(13.7483% 7.75%, 103.6258% 9%, 81.1024% 90.5%, -2.88641% 90.5%)",
//         }}
//       >
//         Learn Next.js
//       </a>
//     </div>