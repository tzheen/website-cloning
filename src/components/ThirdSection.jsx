const ThirdSection = ({ progress }) => {
    const rows = 3;
    const cols = 5;

    const pieces = Array.from({ length: rows * cols });

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

    return (
        <section className="inset-0 overflow-hidden bg-[#f0eeeb]">
            <div className="absolute z-30 grid w-[92%] h-[92%] grid-cols-5 grid-rows-3 gap-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {pieces.map((_, index) => {
                    const row = Math.floor(index / cols);
                    const col = index % cols;

                    const groupIndex = order.findIndex((group) =>
                        group.includes(index)
                    );

                    const appearAt = (groupIndex + 1) / order.length;

                    const opacity = progress >= appearAt ? 1 : 0;

                    return (
                        <div
                            key={index}
                            className="relative overflow-hidden transition-opacity duration-300"
                            style={{
                                opacity,
                            }}
                        >
                            <img
                                src="/images/section3.avif"
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