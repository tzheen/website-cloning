import { useEffect, useState } from "react";

const ThirdSection = ({ progress2, progress3 }) => {
    // =====================================
    // MOBILE DETECTION
    // =====================================

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");

        const handleResize = () => {
            setIsMobile(mediaQuery.matches);
        };

        handleResize();

        mediaQuery.addEventListener("change", handleResize);

        return () => {
            mediaQuery.removeEventListener("change", handleResize);
        };
    }, []);

    // =====================================
    // IMAGE
    // =====================================

    const sectionImage = isMobile
        ? "/images/section3-tall.avif"
        : "/images/section3.avif";

    // =====================================
    // GRID
    //
    // Desktop: 3 × 5 = 15 pieces
    // Mobile:  4 × 2 = 8 pieces
    // =====================================

    const rows = isMobile ? 4 : 3;
    const cols = isMobile ? 2 : 5;

    const pieces = Array.from({
        length: rows * cols,
    });

    // =====================================
    // SECTION POSITION
    // =====================================

    const section3Y = -progress3 * 100;

    // =====================================
    // PIECE ORDER
    // =====================================

    const desktopOrder = [
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

    const mobileOrder = [
        [0],
        [5],
        [2],
        [7],
        [3],
        [4],
        [1],
        [6],
    ];

    const order = isMobile
        ? mobileOrder
        : desktopOrder;

    // =====================================
    // PHASE 1
    // Pieces appear: 0 → 60%
    // =====================================

    const revealEnd = 0.6;

    const revealProgress = Math.min(
        progress2 / revealEnd,
        1
    );

    // =====================================
    // PHASE 2
    // Pieces combine: 60 → 100%
    // =====================================

    const combineProgress = Math.min(
        Math.max(
            (progress2 - revealEnd) /
                (1 - revealEnd),
            0
        ),
        1
    );

    // =====================================
    // GRID SIZE
    // =====================================

    const size =
        92 + 8 * combineProgress;

    // =====================================
    // GAP
    // =====================================

    const gap =
        (isMobile ? 10 : 16) *
        (1 - combineProgress);

    // =====================================
    // BACKGROUND IMAGE OPACITY
    // =====================================

    const bgStart = 0.8;

    const bgProgress = Math.min(
        Math.max(
            (combineProgress - bgStart) /
                (1 - bgStart),
            0
        ),
        1
    );

    // =====================================
    // SHADOW
    // =====================================

    const shadowProgress = Math.min(
        Math.max(
            (progress2 - 0.85) / 0.15,
            0
        ),
        1
    );

    const shadowY =
        100 * (1 - shadowProgress);

    return (
        <section
            className="
                absolute
                inset-0
                z-30
                h-screen
                overflow-hidden
            "
            style={{
                transform:
                    `translateY(${section3Y}%)`,
            }}
        >

            {/* =====================================
                FULL IMAGE BACKGROUND
            ===================================== */}

            <div
                className="
                    absolute
                    inset-0
                    bg-cover
                    bg-center
                    bg-no-repeat
                "
                style={{
                    backgroundImage:
                        `url('${sectionImage}')`,

                    opacity: bgProgress,
                }}
            />

            {/* =====================================
                IMAGE PIECES
            ===================================== */}

            <div
                className="
                    absolute
                    z-30
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    grid
                "
                style={{
                    width: `${size}%`,
                    height: `${size}%`,

                    gridTemplateColumns:
                        `repeat(${cols}, 1fr)`,

                    gridTemplateRows:
                        `repeat(${rows}, 1fr)`,

                    gap: `${gap}px`,
                }}
            >

                {pieces.map((_, index) => {

                    const row =
                        Math.floor(index / cols);

                    const col =
                        index % cols;

                    // =====================================
                    // ANIMATION ORDER
                    // =====================================

                    const groupIndex =
                        order.findIndex(
                            (group) =>
                                group.includes(index)
                        );

                    const appearAt =
                        (groupIndex + 1) /
                        order.length;

                    // =====================================
                    // PIECE ANIMATION
                    // =====================================

                    const duration =
                        isMobile
                            ? 0.10
                            : 0.07;

                    const pieceProgress =
                        Math.min(
                            Math.max(
                                (
                                    revealProgress -
                                    (appearAt - duration)
                                ) / duration,
                                0
                            ),
                            1
                        );

                    // =====================================
                    // OPACITY
                    // =====================================

                    const opacity =
                        pieceProgress;

                    // =====================================
                    // MOVEMENT
                    // =====================================

                    const translateY =
                        (isMobile ? 15 : 20) *
                        (1 - pieceProgress);

                    // =====================================
                    // IMAGE POSITION
                    // =====================================

                    const imageLeft = isMobile
                        ? `-${col * 50}vw`
                        : `-${col * 20}vw`;

                    const imageTop = isMobile
                        ? `-${row * 25}vh`
                        : `-${row * (100 / 3)}vh`;

                    return (
                        <div
                            key={index}
                            className="
                                relative
                                overflow-hidden
                            "
                            style={{
                                opacity,
                                transform:
                                    `translateY(${translateY}px)`,
                            }}
                        >
                            <img
                                src={sectionImage}
                                alt=""
                                className="
                                    absolute
                                    max-w-none
                                    w-screen
                                    h-screen
                                    object-cover
                                "
                                style={{
                                    left: imageLeft,
                                    top: imageTop,
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
                className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    z-40
                    pointer-events-none
                    flex
                    flex-col
                "
                style={{
                    height: isMobile
                        ? "30vh"
                        : "25vh",

                    transform:
                        `translateY(${shadowY}%)`,

                    background:
                        "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
                }}
            >

                {/* =====================================
                    MEET
                ===================================== */}

                <span
                    className="
                        block
                        font-['Dahlia_Blues',cursive]
                        font-normal
                        leading-none
                        tracking-normal
                        rotate-[-2deg]
                        origin-left-bottom
                        text-white
                        [text-shadow:0_2px_10px_rgba(0,0,0,0.35)]
                    "
                    style={{
                        marginBottom: isMobile
                            ? "20px"
                            : "30px",

                        marginLeft: "0.06em",

                        paddingLeft: isMobile
                            ? "24px"
                            : "66px",

                        fontSize: isMobile
                            ? "24px"
                            : "30px",
                    }}
                >
                    Meet
                </span>

                {/* =====================================
                    BASE CORE
                ===================================== */}

                <div
                    className="
                        flex
                        items-center
                    "
                    style={{
                        paddingLeft: isMobile
                            ? "24px"
                            : "66px",
                    }}
                >
                    <h2
                        className="
                            text-white
                            font-bold
                            leading-none
                        "
                        style={{
                            fontSize: isMobile
                                ? "48px"
                                : "88px",
                        }}
                    >
                        Base Core
                    </h2>

                    <svg
                        className={
                            isMobile
                                ? "w-6 h-6 ml-2"
                                : "w-8 h-8 ml-2"
                        }
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

                {/* =====================================
                    DESCRIPTION
                ===================================== */}

                <p
                    className="text-white"
                    style={{
                        fontSize: isMobile
                            ? "16px"
                            : "18px",

                        paddingLeft: isMobile
                            ? "24px"
                            : "66px",
                    }}
                >
                    Built in the USA
                </p>

            </div>
        </section>
    );
};

export default ThirdSection;