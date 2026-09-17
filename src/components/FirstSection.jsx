const FirstSection = ({ progress }) => {
  return (
    <section
      className="absolute inset-0"
      style={{
        opacity: 1 - progress,
        transform: `scale(${1 + progress * 0.08})`,
      }}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/images/video.mp4"
      />

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-video-blur.avif')",
          opacity: Math.min(progress * 3, 1),
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backdropFilter: `blur(${progress * 50}px)`,
        }}
      />

      {/* Black gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 via-10% to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 via-30% to-transparent" />
    </section>
  );
};

export default FirstSection;