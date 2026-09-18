import Smallcard from "./Smallcard";

const FirstSection = ({ progress1 }) => {
  // =====================================
  // Section opacity
  // =====================================

  const sectionOpacity = Math.max(
    1 - progress1 * 5,
    0
  );

  // =====================================
  // Blur
  // =====================================

  const blur = progress1 * 50;

  // =====================================
  // Background blur image
  // =====================================

  const blurImageOpacity = Math.min(
    progress1 * 3,
    1
  );

  return (
    <section
      className="absolute inset-0 z-10 h-screen overflow-hidden"
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
      />

      {/* =====================================
          SMALL CARD
      ===================================== */}

      <Smallcard />

      {/* =====================================
          BLURRED IMAGE
      ===================================== */}

      <div
        className="absolute inset-0 bg-cover bg-center"
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
        className="absolute inset-0"
        style={{
          backdropFilter: `blur(${blur}px)`,
        }}
      />

      {/* =====================================
          TOP GRADIENT
      ===================================== */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 via-10% to-transparent" />

      {/* =====================================
          LEFT GRADIENT
      ===================================== */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 via-30% to-transparent" />

    </section>
  );
};

export default FirstSection;