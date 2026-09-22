import { useEffect, useState } from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";
import SeventhSection from "./SeventhSection";

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

  const progress2to4 = Math.min(Math.max((scrollY - screenHeight * 2) / screenHeight, 0), 1);

  // =====================================
  // Third → Fourth
  // 300vh → 400vh
  // =====================================

  const progress4 = Math.min(Math.max((scrollY - screenHeight * 3) / screenHeight, 0), 1);

  // =====================================
  // Fourth → Fifth
  // 400vh → 500vh
  // =====================================

  const progress4to6 = Math.min(Math.max((scrollY - screenHeight * 4) / screenHeight, 0), 1);

  // =====================================
  // Component Progress
  // 500vh → 600vh
  // =====================================

  const progress6 = Math.min(Math.max((scrollY - screenHeight * 5) / screenHeight, 0), 1);

  // =====================================
  // Outofviewport
  // 600vh → 700vh
  // =====================================

  const progress6to8 = Math.min(Math.max((scrollY - screenHeight * 6) / screenHeight, 0), 1);

  // =====================================
  // Fifth -> Sixth
  // 700vh → 800vh
  // =====================================

  const progress8 = Math.min(Math.max((scrollY - screenHeight * 7) / screenHeight, 0), 1);

  // =====================================
  // Outofviewport
  // 800vh → 900vh
  // =====================================

  const progress8to10 = Math.min(Math.max((scrollY - screenHeight * 8) / screenHeight, 0), 1);

  // =====================================
  // Sixth -> Seventh
  // 900vh → 1000vh
  // =====================================

  const progress10 = Math.min(Math.max((scrollY - screenHeight * 9) / screenHeight, 0), 1);

  // =====================================
  // Outofviewport
  // 900vh → 1000vh
  // =====================================

  const progress11 = Math.min(Math.max((scrollY - screenHeight * 10) / screenHeight, 0), 1);

  return (
        <main
          className="
            relative
            h-[1000vh]
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
          progress3={progress2to4}
        />

        {/* =====================================
            SECTION 4
        ===================================== */}

        <FourthSection
          progress3={progress2to4}
          progress4={progress4}
          progress5={progress4to6}
        />

        {/* =====================================
            SECTION 5
        ===================================== */}

        <FifthSection 
          progress4={progress4}
          progress5={progress4to6}
          progress6={progress6}
          progress7={progress6to8}
        />

        {/* =====================================
            SECTION 6
        ===================================== */}

        <SixthSection
          progress7={progress6to8}
          progress8={progress8}
          progress9={progress8to10}
        />

        {/* =====================================
            SECTION 7
        ===================================== */}

        <SeventhSection
          progress9={progress8to10}
          progress10={progress10}
          progress11={progress11}
        />

      </div>
    </main>
  );
};

export default ScrollSections;