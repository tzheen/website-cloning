import { useEffect, useState } from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

const ScrollSections = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance = window.innerHeight;
      const scrollY = window.scrollY;

      const value = Math.min(scrollY / scrollDistance, 1);

      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <section className="relative h-[200vh]">
        
        <div className="sticky top-0 h-screen overflow-hidden">
          <FirstSection progress={progress} />
          <div
            className="absolute inset-0 bg-[#f0eeeb] bg-[radial-gradient(#6b728020_1px,transparent_1px)] bg-[length:13px_13px]"
            style={{
              opacity: progress,
            }}
          />
          <SecondSection progress={progress} />
        </div>

      </section>

      {/* other sections */}
      <section>
        Other content here
      </section>

    </main>
  );
};

export default ScrollSections;