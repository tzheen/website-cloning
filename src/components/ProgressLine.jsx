import { useEffect, useState } from "react";

const ProgressLine = ({ progress }) => {
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
        <ol className="relative mt-4.5 h-100">

            {/* CONTINUOUS LINE */}
            <span
                className="
                    absolute
                    -left-5
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
                            flex
                            gap-5
                            transition-all
                            duration-500
                            ${isActive ? "pb-10" : "pb-0"}
                        `}
                    >
                        <div className="pt-1">

                            <h3
                                className={`
                                    font-bold
                                    leading-tight
                                    transition-all
                                    duration-500
                                    ${
                                        isActive
                                            ? "text-[20px] text-[#1E4D2B]"
                                            : "text-[16px] text-[#54524F]"
                                    }
                                `}
                            >
                                {feature.title}
                            </h3>

                            <p
                                className={`
                                    mt-2
                                    text-base
                                    leading-relaxed
                                    text-black/70
                                    transition-all
                                    duration-500
                                    ${
                                        isActive
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-4 opacity-0"
                                    }
                                `}
                            >
                                {feature.body}
                            </p>

                        </div>
                    </li>
                );
            })}
        </ol>
    );
};

export default ProgressLine;