import React from "react";
import "./LogoStrip.css";

const logos = [
  "/images/docs/azadi.png",
 "/images/docs/bhim_upi.png",
 "/images/docs/digitalindia.png",
 "/images/docs/iyc.png",
 "/images/docs/india.gov.png",
 "/images/docs/swachh_bharat.png",
];

export default function LogoStrip() {
  return (
    <div className="scroll-container">
      <div className="scroll-track">
        {logos.map((src, index) => (
          <img key={index} src={src} alt="logo" />
        ))}
        {}
        {logos.map((src, index) => (
          <img key={index + logos.length} src={src} alt="logo" />
        ))}
      </div>
    </div>
  );
}
