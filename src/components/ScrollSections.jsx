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
    <div className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <FirstSection progress={progress} />
        <SecondSection progress={progress} />
      </div>
    </div>
  );
};

export default ScrollSections;