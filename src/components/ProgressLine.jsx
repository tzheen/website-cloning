const ProgressLine = ({ progress }) => {
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

    // Determine which feature is currently active
    const activeIndex = Math.min(
        Math.floor(progress / 0.25),
        features.length - 1
    );

    return (
        <ol className="relative mt-4.5 h-100">
            {features.map((feature, index) => {

                // Is this the currently active title?
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
                            ${
                                isActive
                                    ? "pb-8"
                                    : "pb-2"
                            }
                        `}
                    >
                        {/* Connecting line */}
                        {index < features.length && (
                            <span
                                className={`
                                    absolute
                                    -left-5
                                    top-0
                                    w-1.5
                                    h-full
                                    transition-all
                                    duration-300
                                    ${
                                        progress >= index * 0.25
                                            ? "bg-[#ED6C30]"
                                            : "bg-gray-300"
                                    }
                                    ${
                                        index === 0 ? "rounded-t-2xl" : ""
                                    }
                                    ${
                                        index === features.length -1 ? "rounded-b-2xl" : ""
                                    }
                                `}
                            />
                        )}

                        {/* Text */}
                        <div className="pt-1">
                            <h3
                                className={`
                                    font-bold
                                    leading-tight
                                    transition-all
                                    duration-500
                                    ${
                                        isActive
                                            ? "text-[#1E4D2B] text-[20px]"
                                            : "text-[#54524F] text-[16px]"
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
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-4"
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

