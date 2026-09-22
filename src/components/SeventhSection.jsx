import SignUpStep from "./SignUpStep";

const SeventhSection = ({ progress9, progress10, progress11}) => {
    const translateY = progress11 <= 0 ? 100 - progress9 * 100 : -progress11 * 100;
    const listProgress = Math.min(
      Math.max((progress10 - 0.1) / 0.6, 0),
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
        <div className="relative w-7xl flex flex-col -top-1/10">
            <h2 className="text-[40px] text-[#1e4d2b] font-semibold mb-[108px]">How to sign up:</h2>
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