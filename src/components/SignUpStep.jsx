    import { useEffect, useState } from "react";

    const SignUpStep = ({ progress }) => {
        const steps = [
            {
                title: "See if Base is available in your area",
                body: "Enter your zip code or select your utility to check if Base is available in your area.",
            },
            {
                title: "Learn about your plan",
                body: "We’ll show the Base plan available at your address and your price.",
            },
            {
                title: "Enjoy affordable reliable power",
                body: "Submit a refundable deposit, send a few photos, and get Base Core installed, delivering backup power and savings.",
            },
        ];


        return (
            <ol className="relative flex flex-row">

                {steps.map((step, index) => {

                    const drawProgress = Math.min(
                        Math.max((progress - index * 0.3) / 0.3, 0),
                        1
                    );
                    
                    const circleProgress = Math.min(
                        Math.max((drawProgress - 0.8) / 0.2, 0),
                        1
                    );
                    
                    const bodyProgress = Math.min(
                        Math.max((circleProgress - 0.15) / 0.85, 0),
                        1
                    );

                    return (
                        <li
                            key={index}
                            className="
                                relative
                                flex
                                flex-row
                                ml-20
                                first:ml-0
                                flex-1
                            "
                        >

                            {/* =====================================
                                CURVED ORANGE RULE
                            ===================================== */}
                            <svg
                                viewBox="149 44 19 212"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                preserveAspectRatio="none"
                                className="top-0 w-5 pointer-events-none"
                            >
                                <path
                                    d="M46.189 161.553C58.3867 161.345 70.6266 161.191 82.6133 158.867C120.776 155.148 158.334 150.869 196.547 150.155C215.572 149.797 234.873 150.048 253.67 151.024C257.336 154.132 250.725 155.061 248.351 155.261C228.982 156.892 206.756 155.168 186.983 155.781C141.587 157.188 96.8898 165.033 52.0009 166.516C49.9952 166.583 47.905 166.597 46.0849 165.638C44.7768 164.175 45.1425 162.963 46.1918 161.553L46.189 161.553Z"
                                    fill="#ED6C30"
                                    transform={`matrix(0 ${drawProgress} 1 0 0 0)`}
                                />
                            </svg>

                            {/* =====================================
                                CONTENT
                            ===================================== */}
                            <div
                                className="
                                    transition-all
                                    duration-500
                                    flex
                                    flex-col
                                    pl-[40px]
                                "
                            >
                                {/* =====================================
                                    NUMBER CHIP
                                ===================================== */}
                                <span
                                    className="
                                        z-10
                                        flex
                                        items-center
                                        justify-center
                                        w-[30px]
                                        h-[30px]
                                        rounded-full
                                        font-bold
                                        bg-white
                                        text-[#1e4d2b]
                                    "
                                    style={{
                                        opacity: circleProgress,
                                        transform: `scale(${0.05 + circleProgress * 0.95})`,
                                        transformOrigin: "center center",
                                    }}
                                >
                                    {index + 1}
                                </span>
                                <h3
                                    className={`
                                        mt-2.5
                                        text-[28px]
                                        text-[#1E4D2B]
                                        font-semibold
                                        leading-tight
                                        transition-all
                                        duration-500
                                    `}
                                    style={{
                                        opacity: circleProgress,
                                        transform: `translateY(${10 - circleProgress * 10}px)`,
                                    }}
                                >
                                    {step.title}
                                </h3>

                                <p
                                    className={`
                                        mt-2.5
                                        text-base
                                        leading-relaxed
                                        text-[#54534F]
                                        transition-all
                                        duration-500
                                    `}
                                    style={{
                                        opacity: circleProgress,
                                        transform: `translateY(${10 - bodyProgress * 10}px)`,
                                    }}
                                >
                                    {step.body}
                                </p>
                            </div>

                        </li>
                    );
                })}
            </ol>
        );
    };

    export default SignUpStep;