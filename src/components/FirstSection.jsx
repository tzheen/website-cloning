import { useState } from "react";
import Smallcard from "./Smallcard";
import VideoCard from "./VideoCard";

const FirstSection = ({ progress1}) => {
  const [isSmall, setIsSmall] = useState(false);

  const smallText = () => {
    setIsSmall(prev => !prev);
  };
  // =====================================
  // Section opacity
  // =====================================

const sectionOpacity = Math.max(1 - progress1 * 1.3, 0);

  // =====================================
  // Blur
  // =====================================

  const blur = progress1 * 50;

  // =====================================
  // Background blur image
  // =====================================

  const blurImageOpacity = Math.min(progress1 * 3, 1);

  return (
    <section
      className="inset-0 z-10 h-screen overflow-hidden"
      style={{
        opacity: sectionOpacity,
      }}
    >

      {/* =====================================
          VIDEO
      ===================================== */}

      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/images/video.mp4"
        style={{
          transform: `scale(${1 + progress1 * 0.2})`,
          opacity: isSmall ? 0 : 1,
          transition: "opacity 700ms ease-in-out",
        }}
      />

      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/images/all-seasons.mp4"
        style={{
          transform: `scale(${1 + progress1 * 0.2})`,
          opacity: isSmall ? 1 : 0,
          transition: "opacity 700ms ease-in-out",
        }}
      />

      {/* =====================================
          SMALL CARD
      ===================================== */}

      <Smallcard 
        progress={progress1}
        isSmall={isSmall}
        smallText={smallText}
      />

      {/* =====================================
          BLURRED IMAGE
      ===================================== */}

      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage:
            "url('/images/hero-video-blur.avif')",
          opacity: blurImageOpacity,
        }}
      />

      {/* =====================================
          BLUR OVERLAY
      ===================================== */}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: `blur(${blur}px)`,
        }}
      />
      <VideoCard />

      {/* =====================================
          TOP GRADIENT
      ===================================== */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 via-10% to-transparent pointer-events-none" />

      {/* =====================================
          LEFT GRADIENT
      ===================================== */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 via-30% to-transparent pointer-events-none" />

    </section>
  );
};

export default FirstSection;