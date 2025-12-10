"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import SkewedButton from "./SkewedButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Our Process", id: "ourprocess" },
    { name: "Services", id: "services", dropdown: true },
    { name: "Locations", id: "locations" },
    { name: "Contact", id: "contact" },
  ];

  return (
    // nav is absolute so it sits on top of the hero
    <nav className="absolute top-4 left-0 w-full z-50 pointer-events-auto">
      {/* centered white navbar with 90% width */}
      <div className="skewed-navbar">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logos/sparXSolar-header.png"
            alt="SparX Solar Logo"
            width={160}
            height={60}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center space-x-10 text-black font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-1 cursor-pointer"
            >
              <a
                href={`#${item.id}`}
                className="hover:text-[#FA8C3D] transition"
              >
                {item.name}
              </a>

              {/* If dropdown, show MdKeyboardArrowDown */}
              {item.dropdown && (
                <MdKeyboardArrowDown size={20} className="mt-[2px]" />
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex lg:mr-[15px]">
          <SkewedButton
            text="Let's Talk"
            color="#FA8C3D"
            textColor="#fff"
            size="medium"
            icon={<MdKeyboardArrowRight size={22} />}
            rounded={true}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu  */}
      {isOpen && (
        <div className="md:hidden absolute left-1/2 top-[calc(4rem+0.5rem)] -translate-x-1/2 w-[90%] bg-white shadow-lg py-6">
          <ul className="flex flex-col items-center justify-center space-y-5 text-black font-medium">
            {menuItems.map((item) => (
              <li key={item.id} onClick={() => setIsOpen(false)}>
                <a
                  href={`#${item.id}`}
                  className="hover:text-[#FA8C3D] transition flex items-center gap-1"
                >
                  {item.name}
                  {item.dropdown && <MdKeyboardArrowDown size={18} />}
                </a>
              </li>
            ))}

            <li>
              <SkewedButton
                text="Let's Talk"
                color="#FA8C3D"
                textColor="#fff"
                size="medium"
                icon={<MdKeyboardArrowRight size={20} />}
                rounded={true}
                onClick={() => {
                  setIsOpen(false);
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
