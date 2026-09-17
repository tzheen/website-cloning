import { useEffect, useState } from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

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

  // First → Second
  const progress1 = Math.min(
    Math.max(scrollY / screenHeight, 0),
    1
  );

  // Second → Third
  const progress2 = Math.min(
    Math.max(
      (scrollY - screenHeight) / screenHeight,
      0
    ),
    1
  );

  return (
    <main className="relative h-[300vh]">

      <div className="sticky top-0 h-screen overflow-hidden">

        <FirstSection progress={progress1} />

        <div
          className="absolute inset-0 bg-[#f0eeeb] bg-[radial-gradient(#6b728020_1px,transparent_1px)] bg-[length:13px_13px]"
          style={{
            opacity: progress1,
          }}
        />

        <SecondSection
          progress={progress1}
        />

        <ThirdSection progress={progress2} />

      </div>

    </main>
  );
};

export default ScrollSections;