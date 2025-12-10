"use client";

import React from "react";
import "./SkewedButton.css";

/**
 * Props:
 * - text: string -> button text
 * - color: string -> background color (default: #3498db)
 * - textColor: string -> text color (default: white)
 * - size: 'small' | 'medium' | 'large' | {padding: string} -> button size
 * - icon: React component -> optional icon displayed after text
 * - onClick: function -> click handler
 * - rounded: boolean -> default true, if false border-radius is removed
 */
const SkewedButton = ({
  text = "Button",
  color = "#3498db",
  textColor = "#fff",
  size = "medium",
  icon,
  onClick,
  rounded = true,
}) => {
  // Set padding based on size
  let padding;
  if (size === "small") padding = "8px 20px";
  else if (size === "large") padding = "16px 36px";
  else if (typeof size === "object" && size.padding) padding = size.padding;
  else padding = "12px 28px"; // default medium

  // Dynamic border-radius
  const borderRadius = rounded ? "10px" : "0px";

  return (
    <button
      className="skewed-button flex items-center justify-center gap-2"
      style={{ background: color, padding, color: textColor, borderRadius }}
      onClick={onClick}
    >
      <span>{text}</span>
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
};

export default SkewedButton;
