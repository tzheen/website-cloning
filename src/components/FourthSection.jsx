
import { useEffect, useRef } from "react";
const FourthSection = ({ progress3, progress4, progress5}) => {
  const translateY = progress5 <= 0 ? 100 - progress3 * 100 : -progress5 * 100;
  const hasAutoScrolled = useRef(false);

  useEffect(() => {
    if (progress5 > 0.1 && !hasAutoScrolled.current) {
      hasAutoScrolled.current = true;

      window.scrollTo({
        top: window.innerHeight * 5.2,
        behavior: "smooth",
      });
    }
    if (progress5 <= 0) {
      hasAutoScrolled.current = false;
    }
  }, [progress5]);

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
        <div className="relative w-7xl">

          <h2 className="text-5xl font-bold text-[#292826] duration-300 transition leading-[1.37] text-[46px]">
            <span className="text-[#1e4d2b]">A Texas-sized home battery&nbsp;</span>
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

          </h2>

          <div
            className="relative py-4 flex flex-col mt-14 gap-7.5"
            style={{
              opacity: container1Progress,
              transform: `translateY(${(1 - container1Progress) * 20}px)`,
            }}
          >
            <span className="text-[#292826] font-semibold text-[28px]">Base designs, builds, installs, and maintains each Base Core Battery.</span>

            <span className="text-[#7f7d7a] font-medium text-[16px]">Currently available in Texas and Illinois.</span>

          </div>

          <div
            className="relative py-4 mt-14 flex flex-row gap-5 items-center"
            style={{
              opacity: container2Progress,
              transform: `translateY(${(1 - container2Progress) * 20}px)`,
            }}
          >
            <a className="bg-[#B2DD79] hover:bg-[#D6F0B4] rounded-lg text-[#1E4D2B] text-[16px] font-semibold px-4 py-3 cursor-pointer">See your pricing</a>
            <a className="text-[#54524F] hover:underline cursor-pointer">Not in your area?  Tell us where to go next ›</a>
          </div>



        </div>
    </section>
  );
};

export default FourthSection;