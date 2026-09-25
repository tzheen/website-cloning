import { useEffect, useState } from "react";

const ProgressLine = ({ progress, isMd }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const features = [
        {
            title: "One of the largest home batteries",
            body: (
                <>
                    <strong>39.2 kWh</strong> in every Base Core, making it one
                    of the largest home batteries available.
                </>
            ),
        },
        {
            title: "Days of backup",
            body: (
                <>
                    Approx. 36-72 hours (1-2 batteries) of backup duration. The
                    number of batteries depends on your region and your home's
                    energy setup.
                </>
            ),
        },
        {
            title: "From Texas summer to Chicago winter",
            body: (
                <>
                    Tested for -22 to 122°F, flash flooding, and
                    submersion-rated to 3 feet.
                </>
            ),
        },
        {
            title: "Affordable pricing",
            body: (
                <>
                    Automatic, whole-home backup without the five-figure cost
                    of a generator or solar.
                </>
            ),
        },
    ];

    useEffect(() => {
        const newIndex = Math.min(
            Math.floor(progress / 0.25),
            features.length - 1
        );

        setActiveIndex(newIndex);
    }, [progress]);

    return (
        <ol className="relative mt-4.5">

            {/* CONTINUOUS LINE */}
            <span
                className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-1.5
                    rounded-2xl
                    bg-gray-300
                "
            >
                <span
                    className="
                        absolute
                        left-0
                        top-0
                        w-full
                        rounded-2xl
                        bg-[#ED6C30]
                        transition-[height]
                        duration-300
                        ease-out
                    "
                    style={{
                        height: `${(activeIndex + 1) * 25}%`,
                    }}
                />
            </span>

            {/* FEATURES */}
            {features.map((feature, index) => {
                const isActive = index === activeIndex;

                return (
                    <li
                        key={index}
                        className={`
                            relative
                            pl-5
                            flex
                            transition-all
                            duration-500
                            ${isActive ? "pb-10" : "pb-8"}
                        `}
                    >
                        <div className="pt-1">

                            <div
                                className={`
                                    transition-all
                                    duration-500
                                    ease-in-out
                                    ${
                                        isActive
                                            ? "-translate-y-1"
                                            : "translate-y-0"
                                    }
                                `}
                            >
                                <h3
                                    className={`
                                        font-bold
                                        leading-tight
                                        transition-all
                                        duration-500
                                        ${
                                            isActive
                                                ? isMd
                                                    ? "text-[20px] text-[#1E4D2B]"
                                                    : "text-[16px] text-[#1E4D2B]"
                                                : "text-[16px] text-[#54524F]"
                                        }
                                    `}
                                >
                                    {feature.title}
                                </h3>

                                <div
                                    className={`
                                        grid
                                        transition-all
                                        duration-500
                                        ease-in-out
                                        ${
                                            isActive
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0"
                                        }
                                    `}
                                >
                                    <div className="overflow-hidden">
                                        <p
                                            className="
                                                mt-2
                                                text-[14px]
                                                leading-relaxed
                                                text-[#292826]
                                            "
                                        >
                                            {feature.body}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </li>
                );
            })}
        </ol>
    );
};

export default ProgressLine;