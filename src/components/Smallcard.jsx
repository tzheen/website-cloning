const Smallcard = ({ progress, smallText, isSmall }) => {


  const cardOpacity = Math.max(1 - progress * 3, 0);

  const smoothScrollTo = (target, duration = 1000) => {
    const start = window.scrollY;
    const distance = target - start;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(0, start + distance * eased);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const scrollDown = () => {
    smoothScrollTo(window.innerHeight * 0.7, 3000);
  };
;

  return (
    <div
      className={`transition-transform duration-500 ease-in-out absolute inset-0 z-50 flex items-center justify-center sm:justify-start sm:pl-[66px] -translate-y-50 sm:translate-y-0 ${isSmall ? "sm:translate-y-[200px]" : ""}`}
      style={{
        opacity: cardOpacity,
      }}
    >
    <a
      onClick={smallText}
      className="
        -translate-y-15
        box-border
        w-fit
        min-h-[52px]
        text-white
        justify-center
        items-center
        px-3
        text-[18px]
        leading-none
        inline-flex
        -rotate-[1.5deg]
        cursor-pointer 
        mb-3
      "
      style={{
        fontFamily: '"Dahlia Blues", cursive',
        borderStyle: "solid",
        borderWidth: "0 20px 0 17px",
        borderImageSource: "url('/images/tape.avif')",
        borderImageSlice: "0 85 0 70 fill",
        borderImageRepeat: "stretch",
      }}
    >
      Meet
    </a>
      <span className={`transition-transform duration-500 ease-in-out absolute z-50 text-white font-bold sm:text-[88px] text-[48px] items-center flex flex-col leading-none ${isSmall ? "sm:-translate-x-20 sm:scale-[0.6] translate-y-5 sm:translate-y-0" : "translate-y-5"}`}>
          Base Core
         <p
          className="
            sm:
            inline-block
            pt-1
            font-['Dahlia_Blues','cursive']
            sm:text-[38px]
            text-[22px]
            text
            leading-none
            text-white
            -rotate-2
          "
          style={{
            transform: isSmall
              ? "sm:-translateY(-24px)"
              : "sm:translateY(12px)",
            opacity: isSmall ? 1 : 0,
            transition: "transform 300ms ease-out, opacity 300ms ease-out",
            transitionDelay: "400ms",
          }}
        >
          Built for all season
        </p>
      </span>
      <a
        onClick={scrollDown}
        className={`absolute z-50 pointer-events-auto flex items-center justify-center
          w-[226px]
          bg-[#B2DD79] hover:bg-[#D6F0B4]
          rounded-lg
          text-[#1E4D2B] text-[16px] font-semibold
          px-4 py-3
          cursor-pointer
          transition-transform duration-500 ease-in-out
          ${isSmall ? "sm:translate-y-18 translate-y-24" : "translate-y-24"}
        `}
      >        
        <span className="shrink-0">Learn More</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="rotate-90 ml-2 shrink-0 translate-y-0 opacity-100 transition-all duration-300 ease-in-out group-hover:translate-y-1 group-hover:opacity-100"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>

    </div>

  )
}

export default Smallcard