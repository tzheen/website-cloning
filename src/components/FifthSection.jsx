import { useRef, useEffect } from "react";
import ProgressLine from "./ProgressLine";

const FifthSection = ({ progress4, progress5, progress6 }) => {
  const translateY = 100 - progress5 * 100;

  const hasAutoScrolledBack = useRef(false);
  const previousProgress5 = useRef(progress5);

  const images = [
    "/images/better-battery-960.avif",
    "/images/better-install-960.avif",
    "/images/better-winter-960.avif",
    "/images/better-hand-960.avif",
  ];

  const imageIndex = Math.min(
      Math.floor(progress6 / 0.25),
      images.length - 1
  );

  const listProgress = Math.min(
      Math.max(progress6, 0),
      1
  );

  useEffect(() => {
    const scrollingUp = progress5 < previousProgress5.current;

    if (
      scrollingUp &&
      progress5 <= 0.9 &&
      progress4 >= 0.9 &&
      !hasAutoScrolledBack.current
    )  {

      hasAutoScrolledBack.current = true;

      window.scrollTo({
        top: window.innerHeight * 4,
        behavior: "smooth",
      });
    }

    if (progress5 > 0) {
      hasAutoScrolledBack.current = false;
    }

    previousProgress5.current = progress5;
  }, [progress4, progress5]);

  return (
    <section
      className="absolute inset-0 z-60 flex h-screen items-center justify-center overflow-hidden"
      style={{
        transform: `translateY(${translateY}%)`,
      }}
    >
      <div className="relative w-7xl flex flex-row gap-20">
        <div className="w-1/2">

          <h2 className="flex flex-col">
            <span className="text-[#1E4D2B] font-semibold text-[46px]">Better power
            </span>
            <span className="text-[#1E4D2B] font-semibold text-[46px]">starts with Core:</span>
          </h2>

          <ProgressLine progress={listProgress} />

          <div className="flex flex-row mt-14 gap-8">
            <a className="bg-[#B2DD79] hover:bg-[#D6F0B4] rounded-lg text-[#1E4D2B] text-[16px] font-semibold px-4 py-3 cursor-pointer">See your pricing</a>
            <a href="" className="text-[#1E4D2B] hover:text-[#102A17] touch-manipulation items-center justify-center gap-2 font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground disabled:pointer-events-none select-none whitespace-nowrap bg-transparent border border-text-inverse text-text-inverse hover:border-brand-primary-subtle hover:text-brand-primary-subtle disabled:border-text-disabled disabled:text-text-muted py-2 px-3 rounded-lg text-body-md min-h-11 hidden lg:inline-flex text-[14px]">Get Started</a>
          </div>
          
        </div>

        <div className="relative w-1/2 overflow-hidden rounded-2xl bg-amber-50">
            {/* Current image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-2000"
                style={{
                    backgroundImage: `url('${images[imageIndex]}')`,
                }}
            />

            <div className="absolute inset-0 pointer-events-none" />
        </div>
      </div>

    </section>
  );
};

export default FifthSection;