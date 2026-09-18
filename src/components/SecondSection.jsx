const SecondSection = ({ progress, progress2 }) => {
  const text =
    "Energy demand is increasing. And Americans are feeling it.";

  const textProgress = Math.max((progress - 0.3) / 0.3, 0);

  const words = text.split(" ");

  const chip1Progress = Math.min(
    Math.max((textProgress - 0.85) / 0.075, 0),
    1
  );

  const chip2Progress = Math.min(
    Math.max((textProgress - 0.925) / 0.075, 0),
    1
  );

  // =====================================
  // Hide Section 2 when Section 3
  // reaches 40%
  // =====================================

  // Section 2 fades out as Section 3 reaches 30% → 40%
  const section2Opacity = Math.min(Math.max((0.2 - progress2) / 0.1, 0), 1);

  return (
    <section
      className="absolute inset-0 z-10 flex justify-center h-[150vh]"
      style={{
        opacity: section2Opacity,
      }}
    >
      <div className="relative max-w-5xl text-justify w-4xl top-[25%]">
        <h2 className="text-6xl font-bold text-black">
          {words.map((word, index) => {
            const wordProgress = Math.min(
              Math.max(textProgress * words.length - index, 0),
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
                {index < words.length - 1 && "\u00A0"}
              </span>
            );
          })}
        </h2>

        <div
          className="absolute left-0 top-[4%] w-full overflow-hidden"
          style={{
            clipPath: `inset(0 ${
              100 - textProgress * 100
            }% 0 0)`,
          }}
        >
          <img
            src="/images/underline-brush.avif"
            alt=""
            className="block w-full"
          />
        </div>

        <div className="flex">
          <ul
            className="mt-12 flex justify-center gap-4"
            role="list"
          >
            <li
              className="relative rounded-2xl bg-white px-4 py-4"
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
                    fill="currentColor"
                    className="text-red-100"
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

              <span className="block px-2 py-1 text-sm font-medium text-orange-900">
                Rising energy costs
              </span>
            </li>

            <li
              className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2"
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

              <span className="rounded-full px-2 py-1 text-sm font-medium text-yellow-900">
                Increased power outages
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;