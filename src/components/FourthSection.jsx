const FourthSection = ({ progress3, progress4 }) => {
  const translateY = 100 - progress3 * 100;

  const text = "that automatically powers your home when the lights go out, and saves you money, all while strengthening our grid.";

  const textProgress = Math.max((progress4 - 0.1) / 0.7, 0);  

  const container1Progress = Math.min(
      Math.max((progress4 - 0.7) / 0.1, 0),
      1
  );
  const container2Progress = Math.min(
    Math.max((progress4 - 0.9) / 0.1, 0),
    1
  );

  const words = text.split(" ");

  return (
    <section
      className="absolute inset-0 z-50 flex h-screen items-center justify-center overflow-hidden"
      style={{
        transform: `translateY(${translateY}%)`,
      }}
    >
      <div className="relative w-7xl text-justify">

        {/* =====================================
            MAIN TEXT
        ===================================== */}

        <span className="text-5xl font-bold text-[#1e4d2b]">
          A Texas-sized home battery
        </span>
        <span className="text-5xl font-bold text-[#292826] duration-300 transition">
          {words.map((word, index) => {

            const wordProgress = Math.min(
              Math.max(
                textProgress * words.length - index,
                0
              ),
              1
            );

            return (
              <span
                key={index}
                className="inline-block transition-all duration-300"
                style={{
                  opacity: wordProgress,
                  filter: `blur(${
                    (1 - wordProgress) * 10
                  }px)`,
                  transform: `translateY(${
                    (1 - wordProgress) * 30
                  }px)`,
                }}
              >
                {word}

                {index < words.length - 1 &&
                  "\u00A0"}
              </span>
            );
          })}

        </span>

        <div
          className="relative px-4 py-4"
          style={{
            opacity: container1Progress,
            transform: `translateY(${(1 - container1Progress) * 20}px)`,
          }}
        >
          Base designs, builds, installs, and maintains each Base Core Battery.

          Currently available in Texas and Illinois.

        </div>

                <div
          className="relative px-4 py-4"
          style={{
            opacity: container2Progress,
            transform: `translateY(${(1 - container2Progress) * 20}px)`,
          }}
        >
testing

        </div>



      </div>
    </section>
  );
};

export default FourthSection;