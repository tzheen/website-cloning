const ThirdSection = ({ progress }) => {
    const rows = 3;
    const cols = 5;

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

    const revealProgress = Math.min(progress / revealEnd, 1);

    // =====================================
    // Phase 2
    // Pieces combine: 60 → 100%
    // =====================================

    const combineProgress = Math.min(Math.max((progress - revealEnd) / (1 - revealEnd), 0), 1);

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

    return (
        <section className="h-screen overflow-hidden bg-[#f0eeeb]">

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
        </section>
    );
};

export default ThirdSection;