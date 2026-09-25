import { useEffect } from "react";
import { useState } from "react";

const SixthSection = ({ progress6, progress7, progress8, progress9 }) => {
  const [gridOn, setGridOn] = useState(true);
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

  const translateY = isMd ? (progress9 <= 0 ? 100 - progress7 * 100 : -progress9 * 100) : (progress8 <= 0 ? 100 - progress6 * 100 : -progress8 * 100);

  const showContent = isMd ? (progress7 >= 0.9) : (progress6 >=0.9);

  useEffect(() => {
    if(isMd){
      if(progress8 > 0.7){
        setGridOn(false);
      }else if(progress8 < 0.3){
        setGridOn(true);
      }
    }else{
      if(progress7 > 0.7){
        setGridOn(false);
      }else if(progress7 < 0.3){
        setGridOn(true);
      }
    }


  },[progress7, progress8]);

  return (
    <section
      className="absolute inset-0 z-[70] flex h-screen items-center justify-center overflow-hidden"
      style={{
        transform: `translateY(${translateY}%)`,
      }}
    >

      {/* =====================================
          SECTION BACKGROUND
      ===================================== */}

      {/* DAY / DEFAULT BACKGROUND */}
      <div
        className={`
          absolute inset-0
          bg-[#f0eeeb]
          bg-[radial-gradient(#6b728020_1px,transparent_1px)]
          bg-[length:13px_13px]
          transition-opacity duration-[1000ms] ease-in-out
          ${gridOn ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* NIGHT / GRID OFF BACKGROUND */}
      <div
        className={`
          absolute inset-0
          bg-[#14552f]
          bg-[radial-gradient(#ffffff20_1px,transparent_1px)]
          bg-[length:13px_13px]
          transition-opacity duration-[1000ms] ease-in-out
          ${gridOn ? "opacity-0" : "opacity-100"}
        `}
      />

      {/* =====================================
          CONTENT
      ===================================== */}

      <div className="relative z-10 flex w-[90vw] max-w-[1250px] md:flex-row flex-col items-center gap-[3vw]">

        {/* IMAGE */}
        <div className="relative aspect-[3/2] md:w-[70%] md:h-auto w-[370px] h-[370px] shrink-0 overflow-hidden rounded-[14px]">

          {/* DAY IMAGE */}
          <img
            src="/images/witness-day-square-674.avif"
            alt="Home during the day"
            className={`
              absolute inset-0
              h-full w-full
              object-cover object-center
              transition-opacity duration-[1200ms]
              ease-in-out
              ${gridOn ? "opacity-100" : "opacity-0"}
            `}
          />

          {/* NIGHT IMAGE */}
          <img
            src="/images/witness-night-square-674.avif"
            alt="Home at night"
            className={`
              absolute inset-0
              h-full w-full
              object-cover object-center
              transition-opacity duration-[1200ms]
              ease-in-out
              ${gridOn ? "opacity-0" : "opacity-100"}
            `}
          />

          {/* =====================================
              GRID SWITCH
          ===================================== */}
          <button
            id="switchButton"
            onClick={() => setGridOn((prev) => !prev)}
            className={`
              absolute right-[15px] top-[15px] z-20
              flex h-[43px] items-center gap-2
              rounded-[8px] bg-white px-[9px]

              transition-all
              duration-[700ms]
              ease-[cubic-bezier(0.34,1.56,0.64,1)]

              ${
                showContent
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-[20px] scale-[0.7] opacity-0"
              }
            `}
          >
            <span className="text-[14px] font-bold text-[#292826]">
              GRID
            </span>

            <div
              className={`
                relative flex h-[30px] w-[67px] items-center
                rounded-full px-[4px]
                transition-colors duration-500
                ${gridOn ? "bg-[#7eaa55]" : "bg-[#9b461d]"}
              `}
            >

              {/* ON */}
              <span
                className={`
                  absolute left-[9px]
                  text-[13px] font-bold
                  transition-opacity duration-300
                  ${gridOn
                    ? "opacity-100 text-[#1e4d2b]"
                    : "opacity-0"
                  }
                `}
              >
                ON
              </span>

              {/* OFF */}
              <span
                className={`
                  absolute right-[9px]
                  text-[13px] font-bold text-white
                  transition-opacity duration-300
                  ${gridOn
                    ? "opacity-0"
                    : "opacity-100"
                  }
                `}
              >
                OFF
              </span>

              {/* WHITE CIRCLE */}
              <div
                className={`
                  absolute top-[4px]
                  h-[22px] w-[22px]
                  rounded-full bg-white
                  shadow-sm
                  transition-transform duration-500
                  ease-[cubic-bezier(0.4,0,0.2,1)]
                  ${gridOn
                    ? "translate-x-[37px]"
                    : "translate-x-0"
                  }
                `}
              />
            </div>
          </button>
        </div>

        {/* =====================================
            TEXT
        ===================================== */}
        <div
          className={`
            relative md:w-[30%]

            transition-all
            duration-[800ms]
            ease-out

            ${
              showContent
                ? "translate-y-0 opacity-100"
                : "translate-y-[40px] opacity-0"
            }
          `}
        >
          {/* GRID ON TEXT */}
          <div
            className={`
              transition-opacity duration-1000 ease-in-out
              ${gridOn ? "opacity-100" : "pointer-events-none opacity-0"}
            `}
          >
            <h2 className="mb-[12px] text-[clamp(32px,2.5vw,38px)] font-semibold leading-[1.08] text-[#1e4d2b]">
              When the grid is up and running:
            </h2>

            <p className="text-[clamp(14px,1.1vw,16px)] leading-[1.35] text-[#5b5a57]">
              Base earns by supporting the grid, not by charging
              you more. During demand spikes, your Base battery
              helps balance your community’s grid: lowering
              prices and improving reliability.
            </p>
          </div>


          {/* GRID OFF TEXT */}
          <div
            className={`
              absolute left-0 top-0 w-full
              transition-opacity duration-1000 ease-in-out
              ${gridOn ? "pointer-events-none opacity-0" : "opacity-100"}
            `}
          >
            <h2 className="mb-[12px] text-[clamp(32px,2.5vw,38px)] font-bold leading-[1.08] text-white">
              When the grid goes down:
            </h2>

            <p className="text-[clamp(14px,1.1vw,16px)] leading-[1.35] text-white">
              Your Base battery automatically backs up your
              home when the grid goes down, delivering days
              of whole-home backup.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SixthSection;