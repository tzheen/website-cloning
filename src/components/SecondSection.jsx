const SecondSection = ({ progress }) => {
  return (
    <section
      className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 text-white"
      style={{
        opacity: progress,
        transform: `translateY(${(1 - progress) * 10}px)`,
      }}
    >
      <div className="text-center">
        <h2 className="text-5xl font-bold">
          Second Section
        </h2>

        <p className="mt-6">
          This content appears from the blurred background.
        </p>
      </div>
    </section>
  );
};

export default SecondSection;