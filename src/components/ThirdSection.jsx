const ThirdSection = ({ progress2, progress3 }) => {
    const rows = 3;
    const cols = 5;

    const section3Y = -progress3 * 100;

    const pieces = Array.from({
        length: rows * cols,
    });

    const order = [
        [2, 7],
        [0],
        [9],
        [11],
        [14],
        [8],
        [10],
        [1],
        [5],
        [13],
        [4],
        [6],
        [12],
        [3],
    ];

    // =====================================
    // Phase 1
    // Pieces appear: 0 → 60%
    // =====================================

    const revealEnd = 0.6;

    const revealProgress = Math.min(progress2 / revealEnd, 1);

    // =====================================
    // Phase 2
    // Pieces combine: 60 → 100%
    // =====================================

    const combineProgress = Math.min(Math.max((progress2 - revealEnd) / (1 - revealEnd), 0), 1);

    // =====================================
    // Grid size
    // =====================================

    // 92% → 100%
    const size = 92 + 8 * combineProgress;

    // 16px → 0px
    const gap = 16 * (1 - combineProgress);

    // =====================================
    // Background image opacity
    // =====================================

    // Start showing background when
    // the gap is already close to 0.
    //
    // 0.8 = start around 80% of
    // the combining phase.
    const bgStart = 0.8;

    const bgProgress = Math.min(Math.max((combineProgress - bgStart) / (1 - bgStart), 0), 1);

    const shadowProgress = Math.min(Math.max((progress2 - 0.85) / 0.15, 0), 1);

    const shadowY = 100 * (1 - shadowProgress);

    return (
        <section className="absolute inset-0 z-30 h-screen overflow-hidden"
            style={{
            transform: `translateY(${section3Y}%)`,
        }}>

            {/* =====================================
                FULL IMAGE BACKGROUND
            ===================================== */}

            <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/images/section3.avif')",
                opacity: bgProgress,
            }}
            />

            {/* =====================================
                IMAGE PIECES
            ===================================== */}

            <div
                className="absolute z-30 grid grid-cols-5 grid-rows-3 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                    width: `${size}%`,
                    height: `${size}%`,
                    gap: `${gap}px`,
                }}
            >
                {pieces.map((_, index) => { const row = Math.floor(index / cols);

                    const col = index % cols;

                    // =====================================
                    // Animation order
                    // =====================================

                    const groupIndex = order.findIndex((group) => group.includes(index));

                    const appearAt = (groupIndex + 1) / order.length;

                    // =====================================
                    // Piece animation
                    // =====================================

                    const duration = 0.07;

                    const pieceProgress = Math.min(Math.max((revealProgress - (appearAt - duration)) / duration, 0), 1);

                    // =====================================
                    // Piece opacity
                    // =====================================

                    const opacity = pieceProgress;

                    // =====================================
                    // Piece movement
                    // =====================================

                    const translateY = 20 * (1 - pieceProgress);

                    return (
                        <div
                            key={index}
                            className="relative overflow-hidden"
                            style={{
                                opacity,
                                transform: `translateY(${translateY}px)`,
                            }}
                        >
                            <img
                                src="/images/section3.avif"
                                alt=""
                                className="absolute max-w-none w-screen h-screen object-cover"
                                style={{
                                    left: `-${col * 20}vw`,
                                    top: `-${row * (100 / 3)}vh`,
                                }}
                            />
                        </div>
                    );
                })}
            </div>

            {/* =====================================
                SHADOW FROM BELOW
            ===================================== */}

            <div
                className="absolute bottom-0 left-0 w-full h-[25vh] z-40 pointer-events-none duration-[500ms] flex flex-col"
                style={{
                    transform: `translateY(${shadowY}%)`,
                    background:
                        "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
                }}
            >

                <span
                    className="
                        block
                        mb-[30px]
                        ml-[0.06em]
                        font-['Dahlia_Blues',cursive]
                        text-[30px]
                        font-normal
                        leading-none
                        tracking-normal
                        rotate-[-2deg]
                        origin-left-bottom
                        text-white
                        [text-shadow:0_2px_10px_rgba(0,0,0,0.35)]
                        pl-[66px]
                    "
                    >
                    Meet
                </span>

                {/* Base Core + icon */}
                <div className="flex items-center pl-[66px]">
                    <h2 className="text-white font-bold text-[88px] leading-none">
                        Base Core
                    </h2>

                    <svg
                        className="w-8 h-8 ml-2"
                        viewBox="0 0 41 41"
                        fill="white"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <path d="M41 20.4998C41 31.8218 31.8218 40.9996 20.5002 40.9996C9.17867 40.9996 0 31.8218 0 20.4998C0 9.17778 9.17823 0 20.4998 0C31.8213 0 40.9996 9.17823 40.9996 20.4998H41ZM38.4189 20.5007C38.4189 10.6041 30.3959 2.58114 20.4993 2.58114C10.6028 2.58114 2.57981 10.6037 2.57981 20.5007C2.57981 30.3976 10.6028 38.4202 20.4993 38.4202C30.3959 38.4202 38.4189 30.3972 38.4189 20.5007Z" />

                        <path d="M29.8429 26.6622L29.8194 17.0243L27.3711 26.6613L24.9976 26.6622L22.5515 17.0248L22.5302 26.663L20.2344 26.6564V14.3418H23.9463L26.1946 22.7444L28.4148 14.3445L32.1338 14.3414L32.1334 26.6599L29.8429 26.6622Z" />

                        <path d="M15.0046 26.6602L12.5288 26.6615L12.5292 16.4067L8.86798 16.4036L8.86575 14.3438L18.6529 14.3421L18.652 16.4045L15.0037 16.4049L15.0046 26.6602Z" />
                    </svg>
                </div>

                {/* Description */}
                <p className="text-white text-[18px] pl-[66px]">
                    Built in the USA
                </p>    

            </div>
        </section>
    );
};

export default ThirdSection;