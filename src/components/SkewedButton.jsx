"use client";

import React, { useEffect, useState } from "react";
import "./SkewedButton.css";

const SkewedButton = ({
  text = "Button",
  color = "#3498db",
  textColor = "#fff",
  size = "medium",
  icon,
  onClick,
  rounded = true,
}) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkWidth();          // run immediately
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  let padding = isMobile ? "8px 15px" : "12px 28px";

  // Desktop responsive override
  if (!isMobile && typeof size === "string" && size.includes("sm:")) {
    const parts = size.split(" ");
    const desktopSize = parts[1].replace("sm:", "");

    const desktopPadding =
      desktopSize === "small"
        ? "8px 20px"
        : desktopSize === "large"
        ? "16px 36px"
        : "12px 28px";

    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty(
        "--skew-button-desktop-padding",
        desktopPadding
      );
    }
  }

  return (
    <button
      className="skewed-button flex items-center justify-center lg:gap-2"
      style={{
        background: color,
        padding,
        color: textColor,
        fontSize: isMobile ? "14px" : "16px",
        borderRadius: rounded ? "5px 15px 5px 15px" : "0px",
      }}
      onClick={onClick}
    >
      <span>{text}</span>
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
};

export default SkewedButton;
