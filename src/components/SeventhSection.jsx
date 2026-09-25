import { useState, useEffect } from "react";
import SignUpStep from "./SignUpStep";

const SeventhSection = ({ progress8, progress9, progress10, progress11}) => {
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleResize = () => {
      setIsMd(mediaQuery.matches);
    };

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const translateY = isMd ? (progress11 <= 0 ? 100 - progress9 * 100 : -progress11 * 100) : (progress10 <= 0 ? 100 - progress8 * 100 : -progress10 * 100);
  const activeProgress = isMd ? progress10 : progress8;
  const listProgress = Math.min(
    Math.max((activeProgress - 0.1) / 0.6, 0),
    1
  );
  const buttonProgress = Math.min(
    Math.max((listProgress - 0.9) / 0.1, 0),
    1
  );

  return (
    <section
      className="absolute inset-0 z-[80] flex h-screen items-center justify-center overflow-hidden"
      style={{
        transform: `translateY(${translateY}%)`,
      }}
    >  
        <div className="relative w-7xl flex flex-col px-[22px]">
            <h2 className="md:text-[40px] text-[32px] text-[#1e4d2b] font-semibold md:mb-[108px] mb-[40px] leading-tight md:w-auto w-[300px]">How to get Base Core for your home:</h2>
            <div>
                <SignUpStep progress={listProgress} />
            </div>
            <div className="mt-[28px] flex items-center justify-center">
                <a
                    className="
                        bg-[#B2DD79]
                        hover:bg-[#D6F0B4]
                        rounded-lg
                        text-[#1E4D2B]
                        text-[16px]
                        font-semibold
                        px-4
                        py-3
                        cursor-pointer
                    "
                    style={{
                        opacity: buttonProgress,
                        transform: `translateY(${20 - buttonProgress * 20}px)`,
                    }}
                >
                    See your pricing
                </a>
            </div>
        </div>


    </section>
  )
}

export default SeventhSection