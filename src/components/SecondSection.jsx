const SecondSection = ({progress1, progress2}) => {

  // =====================================
  // TEXT ANIMATION
  // =====================================

  const textProgress = Math.max(
    (progress1 - 0.3) / 0.3,
    0
  );

  const firstSentence = "Energy demand is increasing.";
  const secondSentence = "And Americans are feeling it.";

  const firstWords = firstSentence.split(" ");
  const secondWords = secondSentence.split(" ");

  const totalWords = firstWords.length + secondWords.length;

  const chip1Progress = Math.min(
    Math.max(
      (textProgress - 0.85) / 0.075,
      0
    ),
    1
  );

  const chip2Progress = Math.min(
    Math.max(
      (textProgress - 0.925) / 0.075,
      0
    ),
    1
  );

  // =====================================
  // SECTION 2 EXIT
  //
  // Stay visible while Section 3 starts.
  // Then disappear around 30% → 45%.
  // =====================================

  const section2Opacity = Math.min(
    Math.max(
      (0.20 - progress2) / 0.15,
      0
    ),
    1
  );

  return (
    <section id="section2"
      className="absolute inset-0 z-20 flex h-screen items-center justify-center overflow-hidden px-[24px]"
      style={{
        opacity: section2Opacity,
      }}
    >

      {/* =====================================
          CONTENT
      ===================================== */}

      <div className="relative w-[90%] max-w-5xl text-justify items-center">

        {/* =====================================
            MAIN TEXT
        ===================================== */}
        <h2 className="sm:text-[68px] text-[40px] font-bold text-black leading-tight min-w-[500px]">

          {/* FIRST SENTENCE */}
          <span className="relative inline">

            {firstWords.map((word, index) => {
              const wordProgress = Math.min(
                Math.max(textProgress * totalWords - index, 0),
                1
              );

              return (
                <span
                  key={index}
                  className="inline-block transition-all duration-300"
                  style={{
                    opacity: wordProgress,
                    filter: `blur(${(1 - wordProgress) * 10}px)`,
                    transform: `translateY(${(1 - wordProgress) * 30}px)`,
                  }}
                >
                  {word}
                  {index < firstWords.length - 1 && "\u00A0"}
                </span>
              );
            })}

            {/* DESKTOP UNDERLINE */}
            <span
              className="
                sm:block
                absolute
                left-0
                right-0
                top-[90%]
                sm:h-[10px]
                h-[10px]
                overflow-hidden
                pointer-events-none
              "
            >
              <img
                src="/images/underline-brush.avif"
                alt=""
                className="w-full h-full object-fill"
                style={{
                  clipPath: `inset(0 ${
                    150 - textProgress * 100
                  }% 0 0)`,
                }}
              />
            </span>
            <span
              className="
                lg:hidden
                block
                absolute
                left-0
                right-0
                top-[45%]
                h-[10px]
                w-[160%]
                overflow-hidden
                pointer-events-none
              "
            >
              <img
                src="/images/underline-brush.avif"
                alt=""
                className="w-full h-full object-fill"
                style={{
                  clipPath: `inset(0 ${
                    100 - textProgress * 100
                  }% 0 0)`,
                }}
              />
            </span>

          </span>

          {/* SECOND SENTENCE */}
          <span className="block w-[300px] sm:w-full">
            {secondWords.map((word, index) => {
              const globalIndex = firstWords.length + index;

              const wordProgress = Math.min(
                Math.max(
                  textProgress * totalWords - globalIndex,
                  0
                ),
                1
              );

              return (
                <span
                  key={index}
                  className="inline-block transition-all duration-300"
                  style={{
                    opacity: wordProgress,
                    filter: `blur(${(1 - wordProgress) * 10}px)`,
                    transform: `translateY(${(1 - wordProgress) * 30}px)`,
                  }}
                >
                  {word}
                  {index < secondWords.length - 1 && "\u00A0"}
                </span>
              );
            })}
          </span>

        </h2>


        {/* =====================================
            CHIPS
        ===================================== */}

        <div className="flex">

          <ul
            className="mt-12 flex justify-center gap-4 flex-col sm:flex-row"
            role="list"
          >

            {/* =====================================
                CHIP 1
            ===================================== */}

            <li
              className="relative"
              style={{
                opacity: chip1Progress,
                filter: `blur(${
                  (1 - chip1Progress) * 8
                }px)`,
                transform: `translateY(${
                  (1 - chip1Progress) * 30
                }px)`,
              }}
            >

              <span className="absolute -left-3 -top-3">

                <svg
                  viewBox="0 0 31 31"
                  fill="none"
                  className="h-8 w-8"
                >

                  <circle
                    cx="15.5"
                    cy="15.5"
                    r="15.5"
                    className="fill-red-100"
                  />

                  <path
                    d="M7.92245 22.0343L11.7428 14.9322C12.0933 14.2805 13.0056 14.2221 13.4364 14.8236L15.5896 17.8302C16.0087 18.4153 16.89 18.3795 17.2602 17.7623L22.1105 9.6762"
                    stroke="#9A3412"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M23.3906 12.2383L22.9173 8.76456L19.2267 9.67599"
                    stroke="#9A3412"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                </svg>

              </span>

              <span className="block px-3 py-3 text-[16px] font-semibold text-orange-900 bg-white rounded-xl">
                RISING ENERGY COSTS
              </span>

            </li>

            {/* =====================================
                CHIP 2
            ===================================== */}

            <li
              className="relative flex items-center gap-2"
              style={{
                opacity: chip2Progress,
                filter: `blur(${
                  (1 - chip2Progress) * 8
                }px)`,
                transform: `translateY(${
                  (1 - chip2Progress) * 30
                }px)`,
              }}
            >

              <span className="absolute -left-3 -top-3">

                <svg
                  viewBox="0 0 31 31"
                  fill="none"
                  className="h-8 w-8"
                >

                  <circle
                    cx="15.5"
                    cy="15.5"
                    r="15.5"
                    className="fill-orange-100"
                  />

                  <path
                    d="M7.92245 22.0343L11.7428 14.9322C12.0933 14.2805 13.0056 14.2221 13.4364 14.8236L15.5896 17.8302C16.0087 18.4153 16.89 18.3795 17.2602 17.7623L22.1105 9.6762"
                    stroke="#9A3412"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M23.3906 12.2383L22.9173 8.76456L19.2267 9.67599"
                    stroke="#9A3412"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                </svg>

              </span>

              <span className="block px-3 py-3 text-[16px] font-semibold text-orange-900 bg-white rounded-xl">
                INCREASED POWER OUTAGES
              </span>

            </li>

          </ul>

        </div>
      </div>

    </section>
  );
};

export default SecondSection;