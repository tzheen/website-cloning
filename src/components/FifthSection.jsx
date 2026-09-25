import { useRef, useEffect, useState } from "react";
import ProgressLine from "./ProgressLine";

const FifthSection = ({ progress4, progress5, progress6, progress7 }) => {
  const hasAutoScrolledBack = useRef(false);
  const previousProgress5 = useRef(progress5);
  const previousProgress7 = useRef(progress7);

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

  const translateY = isMd
    ? progress7 <= 0
      ? 100 - progress5 * 100
      : -progress7 * 100
    : progress6 <= 0
      ? 100 - progress4 * 100
      : -progress6 * 100;

  const images = [
    "/images/better-battery-960.avif",
    "/images/better-install-960.avif",
    "/images/better-winter-960.avif",
    "/images/better-hand-960.avif",
  ];

  const activeProgress = isMd ? progress6 : progress5;

  const imageIndex = Math.min(
    Math.floor(activeProgress / 0.25),
    images.length - 1
  );

  const listProgress = Math.min(
    Math.max(activeProgress, 0),
    1
  );

  // Scroll down to next section
  useEffect(() => {
    const scrollingDown = progress7 > previousProgress7.current;

    if (progress7 > 0.8 && scrollingDown) {
      window.scrollTo({
        top: window.innerHeight * 7,
        behavior: "smooth",
      });
    }

    previousProgress7.current = progress7;
  }, [progress7]);

  // Scroll back to previous section on desktop
  useEffect(() => {
    if (isMd) {
      const scrollingUp = progress5 < previousProgress5.current;

      if (
        scrollingUp &&
        progress5 <= 0.9 &&
        progress4 >= 0.9 &&
        !hasAutoScrolledBack.current
      ) {
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
    }
  }, [progress4, progress5, isMd]);

  return (
    <section
      id="section5"
      className="
        absolute
        inset-0
        px-6
        py-4
        z-60
        flex
        h-screen
        items-center
        justify-center
        overflow-hidden
      "
      style={{
        transform: `translateY(${translateY}%)`,
      }}
    >
      <div
        className="
          relative
          w-full
          max-w-[1376px]
          flex
          flex-col
          md:flex-row
          items-center
          md:items-center
          gap-3
          md:gap-[clamp(20px,5vw,80px)]
        "
      >
        {/* =========================
            IMAGE
        ========================= */}
        <div
          className="
            order-1
            md:order-2
            relative
            w-[clamp(180px,34vh,280px)]
            md:w-[clamp(349px,40vw,650px)]
            aspect-square
            shrink-0
            overflow-hidden
            rounded-2xl
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
              bg-no-repeat
              transition-opacity
              duration-2000
            "
            style={{
              backgroundImage: `url('${images[imageIndex]}')`,
            }}
          />

          <div className="absolute inset-0 pointer-events-none" />
        </div>

        {/* =========================
            LEFT / TEXT CONTENT
        ========================= */}
        <div
          className="
            w-[349px]
            order-2
            md:order-1
            md:w-full
            md:flex-1
          "
        >
          {/* TITLE */}
          <h2 className="flex flex-col">
            <span
              className="
                text-[#1E4D2B]
                font-semibold
                text-[clamp(22px,3.3vw,46px)]
                leading-tight
              "
            >
              Better power
            </span>

            <span
              className="
                text-[#1E4D2B]
                font-semibold
                text-[clamp(22px,3.3vw,46px)]
                leading-tight
              "
            >
              starts with Core:
            </span>
          </h2>

          {/* PROGRESS */}
          <div className="mt-3 md:mt-6">
            <ProgressLine progress={listProgress} isMd={isMd} />
          </div>

          {/* BUTTONS */}
          <div
            className="
              flex
              flex-col
              md:flex-row
              mt-4
              md:mt-[clamp(24px,4vw,56px)]
              gap-2
              md:gap-[clamp(12px,2vw,32px)]
            "
          >
            {/* SEE YOUR PRICING */}
            <a
              className="
                bg-[#B2DD79]
                hover:bg-[#D6F0B4]
                rounded-lg
                text-[#1E4D2B]
                text-[13px]
                md:text-[16px]
                font-semibold
                px-4
                py-2
                md:py-3
                cursor-pointer
                whitespace-nowrap
                min-h-10
                md:min-h-11
                flex
                items-center
                justify-center
              "
            >
              See your pricing
            </a>

            {/* GET STARTED */}
            <a
              href=""
              className="
                text-[#1E4D2B]
                hover:text-[#102A17]
                touch-manipulation
                items-center
                justify-center
                gap-2
                font-semibold
                transition-colors
                duration-150
                select-none
                whitespace-nowrap
                bg-transparent
                border
                border-[#1E4D2B]
                py-2
                px-3
                rounded-lg
                min-h-10
                md:min-h-11
                inline-flex
                text-[13px]
                md:text-[14px]
              "
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;