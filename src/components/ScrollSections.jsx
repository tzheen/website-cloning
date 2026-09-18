import { useEffect, useState } from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";

const ScrollSections = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const screenHeight = window.innerHeight;

  // =====================================
  // First → Second
  // 0vh → 100vh
  // =====================================

  const progress1 = Math.min(Math.max(scrollY / screenHeight, 0), 1);

  // =====================================
  // Second → Third
  // 100vh → 200vh
  // =====================================

  const progress2 = Math.min(Math.max((scrollY - screenHeight) / screenHeight, 0), 1);

  // =====================================
  // Third → Outofviewport
  // 200vh → 300vh
  // =====================================

  const progress3 = Math.min(Math.max((scrollY - screenHeight * 2) / screenHeight, 0), 1);

  // =====================================
  // Second → Third
  // 300vh → 400vh
  // =====================================

  const progress4 = Math.min(Math.max((scrollY - screenHeight * 3) / screenHeight, 0), 1);

  return (
        <main
          className="
            relative
            h-[500vh]
            bg-[#f0eeeb]
            bg-[radial-gradient(#6b728020_1px,transparent_1px)]
            bg-[length:13px_13px]
          "
        >

      {/* =====================================
          FIXED VIEWPORT
      ===================================== */}


      <div className="sticky top-0 h-screen overflow-hidden">

        {/* =====================================
            SECTION 1
        ===================================== */}

        <FirstSection
          progress1={progress1}
        />

        {/* =====================================
            SECTION 2
        ===================================== */}

        <SecondSection
          progress1={progress1}
          progress2={progress2}
        />

        {/* =====================================
            SECTION 3
        ===================================== */}

        <ThirdSection
          progress2={progress2}
          progress3={progress3}
        />

        {/* =====================================
            SECTION 4
        ===================================== */}

        <FourthSection
          progress3={progress3}
          progress4={progress4}
        />

      </div>
    </main>
  );
};

export default ScrollSections;