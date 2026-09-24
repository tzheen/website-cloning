import { useState, useEffect} from "react"
import DescriptionCard from "./DescriptionCard"
import ContentCard from "./ContentCard";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShowNavbar(false);
            } else if (currentScrollY < lastScrollY) {
                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY);
            };

            window.addEventListener("scroll", handleScroll);

            return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isPricingOpen, setIsPricingOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [isUtilitiesOpen, setIsUtilitiesOpen] = useState(false);
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);
    const isAnyMenuOpen =
            isProductsOpen ||
            isPricingOpen ||
            isResourcesOpen ||
            isUtilitiesOpen ||
            isCompanyOpen;

    useEffect(() => {
        if (isAnyMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isAnyMenuOpen]);

    useEffect(() => {
        if (!isMobileMenuOpen) {
            setIsProductsOpen(false);
            setIsPricingOpen(false);
            setIsResourcesOpen(false);
            setIsUtilitiesOpen(false);
            setIsCompanyOpen(false);
        }
    }, [isMobileMenuOpen]);
        


  return (
    <nav className={`left-0 right-0 z-50 antialiased transition-[background-color,transform] relative w-full ${isAnyMenuOpen || isMobileMenuOpen ? "bg-[#F0eeeB]" : "bg-transparent"} ${showNavbar ? "translate-y-0" : "-translate-y-full"} duration-500 ease-out
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
        <div className={`max-w-[1376px] mx-auto px-5 sm:px6 md:px-8 h-[60px] md:h-[69px] flex items-center justify-between gap-4 ${isAnyMenuOpen || isMobileMenuOpen ? "text-black" : "text-white"}`}>
            <div className="flex items-center gap-4 lg:gap-8">
                <div className="flex shrink-0 items-center gap-3">
                    <a className="inline-flex min-h-11 shrink-0 touch-manipulation items-center transition-opacity duration-150 hover:opacity-80">
                        <div>Logo</div>
                    </a>
                </div>
                <ul className="hidden lg:flex items-center gap-1">
                    <li onMouseEnter={() => setIsProductsOpen(true)} onMouseLeave={() => setIsProductsOpen(false)}>
                        <button aria-expanded={isProductsOpen} aria-controls="fullnav-panel-products" className="inline-flex items-center gap-1 rounded px-3.5 py-2 text-body-lg font-medium transition-colors duration-300 ease-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground text-text-inverse hover:bg-white/10">
                            Products
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            className={`shrink-0 transition-transform duration-200 ${
                                isProductsOpen ? "rotate-180" : ""
                            }`}
                            >
                            <path d="m6 9 6 6 6-6" />
                            </svg>                        
                        </button>
                    </li>
                    <li onMouseEnter={() => setIsPricingOpen(true)} onMouseLeave={() => setIsPricingOpen(false)}>
                        <button aria-expanded={isPricingOpen} aria-controls="fullnav-panel-pricing" className="inline-flex items-center gap-1 rounded px-3.5 py-2 text-body-lg font-medium transition-colors duration-300 ease-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground text-text-inverse hover:bg-white/10">
                            Pricing
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            className={`shrink-0 transition-transform duration-200 ${
                                isPricingOpen ? "rotate-180" : ""
                            }`}
                            >
                            <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>
                    </li>
                    <li onMouseEnter={() => setIsResourcesOpen(true)} onMouseLeave={() => setIsResourcesOpen(false)}>
                        <button aria-expanded={isResourcesOpen} aria-controls="fullnav-panel-resources" className="inline-flex items-center gap-1 rounded px-3.5 py-2 text-body-lg font-medium transition-colors duration-300 ease-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground text-text-inverse hover:bg-white/10">
                            Resources
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            className={`shrink-0 transition-transform duration-200 ${
                                isResourcesOpen ? "rotate-180" : ""
                            }`}
                            >
                            <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>
                    </li>
                    <li onMouseEnter={() => setIsUtilitiesOpen(true)} onMouseLeave={() => setIsUtilitiesOpen(false)}>
                        <button aria-expanded={isUtilitiesOpen} aria-controls="fullnav-panel-utilities" className="inline-flex items-center gap-1 rounded px-3.5 py-2 text-body-lg font-medium transition-colors duration-300 ease-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground text-text-inverse hover:bg-white/10">
                            Utilities
                        </button>
                    </li>
                    <li onMouseEnter={() => setIsCompanyOpen(true)} onMouseLeave={() => setIsCompanyOpen(false)}>
                        <button aria-expanded={isCompanyOpen} aria-controls="fullnav-panel-company" className="inline-flex items-center gap-1 rounded px-3.5 py-2 text-body-lg font-medium transition-colors duration-300 ease-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground text-text-inverse hover:bg-white/10">
                            Company
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            className={`shrink-0 transition-transform duration-200 ${
                                isCompanyOpen ? "rotate-180" : ""
                            }`}
                            >f
                            <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-2">
                <a href="https://account.basepowercompany.com/sign-in" className="text-[#1E4D2B] hover:text-[#102A17] touch-manipulation items-center justify-center gap-2 font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground disabled:pointer-events-none select-none whitespace-nowrap bg-transparent border border-text-inverse text-text-inverse hover:border-brand-primary-subtle hover:text-brand-primary-subtle disabled:border-text-disabled disabled:text-text-muted py-2 px-3 rounded-lg text-body-md min-h-11 hidden lg:inline-flex text-[14px]">Sign in</a>
                <a href="/get-started" className="bg-[#B2DD79] hover:bg-[#D6F0B4] rounded-lg text-[#1E4D2B] text-[14px] font-semibold px-4 py-3 cursor-pointer hidden lg:inline-flex">Get Core</a>
                <button
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                aria-controls="_r26R_0_"
                className="
                    lg:hidden
                    flex
                    size-10
                    shrink-0
                    touch-manipulation
                    items-center
                    justify-center
                    rounded-full
                    text-text-inverse
                    transition-colors
                    duration-200
                    hover:bg-white/10
                    active:bg-white/20
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-brand-primary-foreground
                "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M4 5h16" />
                        <path d="M4 12h16" />
                        <path d="M4 19h16" />
                    </svg>
                </button>
            </div>
        </div>
        <div data-open={isAnyMenuOpen}>
            <div onMouseEnter={() => setIsProductsOpen(true)} onMouseLeave={() => setIsProductsOpen(false)} id="fullnav-panel-products" className={`absolute top-full left-0 right-0 z-50 bg-surface-default transition-[opacity,visibility] duration-300 ${isProductsOpen ? "opacity-100 visible" : "opacity-0 invisible"} bg-white`}>
                <div className="max-w-[1376px] mx-auto px-4 md:px-8 py-8 ">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="min-w-0 px-8 first:pl-0 last:pr-0 flex-1 border-r border-gray-300 pl-4">
                            <div>
                                <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-brand-primary-foreground">
                                    Reliable Power
                                </p>
                                <ul className="flex flex-col gap-3">
                                    <li>
                                        <DescriptionCard
                                            href="/core"
                                            title="Base Core"
                                            description="Our next-generation home battery — backup power and savings, available in Texas and Illinois."
                                            image="/images/base-core.jpg"
                                        />
                                    </li>
                                    <li>
                                        <DescriptionCard
                                            href="/how-it-works"
                                            title="How it works"
                                            description="Good for your home. Good for the grid."
                                        />
                                    </li>
                                    <li>
                                        <DescriptionCard
                                            href="/get-started"
                                            title="Get started"
                                            description="Ready to power your home with clean, renewable energy?"
                                        />
                                    </li>
                                    <li>
                                        <DescriptionCard
                                            href="/get-started"
                                            title="With a portable generator"
                                            description="Turn your portable into a standby."
                                        />
                                    </li>
                                    <li>
                                        <DescriptionCard
                                            href="/get-started"
                                            title="Calculate backup duration"
                                            description="Find out how long your Base battery would last in a power outage."
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="min-w-0 px-8 first:pl-0 last:pr-0 flex-1 border-r border-gray-300 pl-4">
                            <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-brand-primary-foreground">
                                Affordable Power
                            </p>
                            <ul>
                                <li>
                                    <DescriptionCard
                                        href="/energy"
                                        title="Energy"
                                        description="Available in Texas where homeowners have the power to choose their energy providers."
                                        image="/images/energy.jpg"
                                    />
                                </li>
                                <li>
                                    <DescriptionCard
                                        href="/get-started"
                                        title="Compare your bill"
                                        description="Base vs. other Texas energy providers."
                                    />
                                </li>
                                <li>
                                    <DescriptionCard
                                        href="/get-started"
                                        title="Base Energy for Business"
                                        description="Custom plans for business across Texas."
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="min-w-0 px-8 first:pl-0 last:pr-0 flex-1 pl-4">
                            {isProductsOpen && <ContentCard />}
                        </div>
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setIsPricingOpen(true)} onMouseLeave={() => setIsPricingOpen(false)} id="fullnav-panel-pricing" className={`absolute top-full left-0 right-0 z-50 bg-surface-default transition-[opacity,visibility] duration-300 ${isPricingOpen ? "opacity-100 visible" : "opacity-0 invisible"} bg-white`}>
                <div className="max-w-[1376px] mx-auto px-4 md:px-8 py-8 ">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="min-w-0 px-8 first:pl-0 last:pr-0 flex-1 border-r border-gray-300 pl-4">
                            {isPricingOpen && <ContentCard />}
                        </div>
                        <div className="col-span-2">
                            <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-brand-primary-foreground">
                                Pricing by product
                            </p>
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <DescriptionCard
                                        href="/pricing"
                                        title="Energy"
                                        description="Available in Texas where homeowners have the power to choose their energy providers."
                                        image="/images/base-core.jpg"
                                    />
                                </li>
                                <li>
                                    <DescriptionCard
                                        href="/pricing"
                                        title="Home Backup"
                                        description="Home backup that works with select utilities."
                                        image="/images/base-core.jpg"
                                    />
                                </li>
                                <li>
                                    <DescriptionCard
                                        href="/pricing"
                                        title="Energy + Backup"
                                        description="Save on energy. Never lose power."
                                        image="/images/base-core.jpg"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setIsResourcesOpen(true)} onMouseLeave={() => setIsResourcesOpen(false)} className={`absolute top-full left-0 right-0 z-50 bg-surface-default transition-[opacity,visibility] duration-300 ${isResourcesOpen ? "opacity-100 visible" : "opacity-0 invisible"} bg-white`}>
                <div className="max-w-[1376px] mx-auto px-4 md:px-8 py-8 ">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="min-w-0 px-8 first:pl-0 last:pr-0 flex-1 border-r border-gray-300 pl-4">
                            <div className="group overflow-hidden rounded-[20px]">
                                <img
                                    src="/images/jj-watt-home.jpg"
                                    alt="The official power company of JJ Watt's home"
                                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                />
                            </div>
                            <p className="mt-4 text-md font-semibold text-gray-800">
                                The official power company of JJ Watt's home.
                            </p>
                        </div>
                        <div className="col-span-2">
                            <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-brand-primary-foreground">
                                Resources
                            </p>
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <DescriptionCard
                                        href="https://help.basepowercompany.com/"
                                        title="Help center"
                                        description="Member support and FAQs."
                                        image="/images/base-core.jpg"
                                    />
                                </li>
                                <li>
                                    <DescriptionCard
                                        href="https://www.basepowercompany.com/reviews"
                                        title="Reviews"
                                        description="4.8 out of 5 on Google."
                                        image="/images/base-core.jpg"
                                    />
                                </li>
                                <li>
                                    <DescriptionCard
                                        href="https://www.basepowercompany.com/stories"
                                        title="Stories"
                                        description="How Texans save and protect."
                                        image="/images/base-core.jpg"
                                    />
                                </li>
                                <li>
                                    <DescriptionCard
                                        href="https://www.basepowercompany.com/blog"
                                        title="Blog"
                                        description="Updates and news."
                                        image="/images/base-core.jpg"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setIsCompanyOpen(true)} onMouseLeave={() => setIsCompanyOpen(false)} id="fullnav-panel-company" className={`absolute top-full left-0 right-0 z-50 bg-surface-default transition-[opacity,visibility] duration-300 ${isCompanyOpen ? "opacity-100 visible" : "opacity-0 invisible"} bg-white`}>
                <div className="max-w-[1376px] mx-auto px-4 md:px-8 py-8 ">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="min-w-0 px-8 first:pl-0 last:pr-0 flex-1 border-r border-gray-300 pl-4">
                            <div>
                                <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-brand-primary-foreground">
                                    Base Power
                                </p>
                                <ul className="flex flex-col gap-3">
                                    <li>
                                        <DescriptionCard
                                            href="/get-started"
                                            title="About Base"
                                            description="Our mission and team."
                                        />
                                    </li>
                                    <li>
                                        <DescriptionCard
                                            href="/get-started"
                                            title="Press"
                                            description="Media coverage and announcements"
                                        />
                                    </li>
                                    <li>
                                        <DescriptionCard
                                            href="/get-started"
                                            title="Inside Base"
                                            description="Exploring technical challenges."
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="min-w-0 px-8 first:pl-0 last:pr-0 flex-1 border-r border-gray-300 pl-4">
                            <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-brand-primary-foreground">
                                Careers
                            </p>
                            <ul>
                                <li>
                                    <DescriptionCard
                                        href="/energy"
                                        title="Careers"
                                        description="For engineers, operations and creatives."
                                    />
                                </li>
                                <li>
                                    <DescriptionCard
                                        href="/get-started"
                                        title="Field careers"
                                        description="For electricians installing the future of power."
                                    />
                                </li>
                                <li>
                                    <DescriptionCard
                                        href="/get-started"
                                        title="All open roles"
                                        description="View current openings."
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="min-w-0 px-8 first:pl-0 last:pr-0 flex-1 border-r border-gray-300 pl-4">
                            <div className="group overflow-hidden rounded-[20px]">
                                <img
                                    src="/images/jj-watt-home.jpg"
                                    alt="The official power company of JJ Watt's home"
                                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                />
                            </div>
                            <p className="mt-4 text-md font-semibold text-gray-800">
                                Join the charge
                            </p>
                            <span className="mt-1 block text-sm text-gray-600 transition-colors duration-300 group-hover:text-black">
                                We need smart people solving hard problems.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {isMobileMenuOpen && (
            <div
                className="
                    lg:hidden
                    absolute
                    top-full
                    left-0
                    right-0
                    z-50
                    h-[calc(100vh-60px)]
                    bg-white
                    text-black
                    overflow-y-auto
                "
            >
                <div className="px-4 py-4">

                    {/* Products */}
                    <div className="border-b border-gray-200">
                        <button
                            type="button"
                            onClick={() =>
                                setIsProductsOpen(!isProductsOpen)
                            }
                            className="
                                flex
                                w-full
                                items-center
                                justify-between
                                py-3
                                text-left
                                text-[16px]
                            "
                        >
                            <span>Products</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`transition-transform duration-200 ${
                                    isProductsOpen
                                        ? "rotate-180"
                                        : ""
                                }`}
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>

                        {isProductsOpen && (
                            <div className="max-w-[1376px] pb-5">
                                <div className="flex flex-col gap-6">
                                    <div className="min-w-0 px-8 first:pl-0 last:pr-0 flex-1 pl-4">
                                        <div>
                                            <p className="mb-4 inline-flex items-center gap-2 text-[12px] text-[#1E4D2B] font-bold uppercase tracking-[0.12em] text-brand-primary-foreground">
                                                Reliable Power
                                            </p>
                                            <ul className="flex flex-col gap-3">
                                                <li>
                                                    <DescriptionCard
                                                        href="/core"
                                                        title="Base Core"
                                                        description="Our next-generation home battery — backup power and savings, available in Texas and Illinois."
                                                        image="/images/base-core.jpg"
                                                    />
                                                </li>
                                                <li>
                                                    <DescriptionCard
                                                        href="/how-it-works"
                                                        title="How it works"
                                                        description="Good for your home. Good for the grid."
                                                    />
                                                </li>
                                                <li>
                                                    <DescriptionCard
                                                        href="/get-started"
                                                        title="Get started"
                                                        description="Ready to power your home with clean, renewable energy?"
                                                    />
                                                </li>
                                                <li>
                                                    <DescriptionCard
                                                        href="/get-started"
                                                        title="With a portable generator"
                                                        description="Turn your portable into a standby."
                                                    />
                                                </li>
                                                <li>
                                                    <DescriptionCard
                                                        href="/get-started"
                                                        title="Calculate backup duration"
                                                        description="Find out how long your Base battery would last in a power outage."
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="min-w-0 px-8 first:pl-0 last:pr-0 flex-1 pl-4">
                                        <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-brand-primary-foreground">
                                            Affordable Power
                                        </p>
                                        <ul>
                                            <li>
                                                <DescriptionCard
                                                    href="/energy"
                                                    title="Energy"
                                                    description="Available in Texas where homeowners have the power to choose their energy providers."
                                                    image="/images/energy.jpg"
                                                />
                                            </li>
                                            <li>
                                                <DescriptionCard
                                                    href="/get-started"
                                                    title="Compare your bill"
                                                    description="Base vs. other Texas energy providers."
                                                />
                                            </li>
                                            <li>
                                                <DescriptionCard
                                                    href="/get-started"
                                                    title="Base Energy for Business"
                                                    description="Custom plans for business across Texas."
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        {isProductsOpen && <ContentCard />}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Pricing */}
                    <div className="border-b border-gray-200">
                        <button
                            type="button"
                            onClick={() =>
                                setIsPricingOpen(!isPricingOpen)
                            }
                            className="
                                flex
                                w-full
                                items-center
                                justify-between
                                py-3
                                text-left
                                text-[16px]
                            "
                        >
                            <span>Pricing</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`transition-transform duration-200 ${
                                    isPricingOpen
                                        ? "rotate-180"
                                        : ""
                                }`}
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>

                        {isPricingOpen && (
                            <div className="max-w-[1376px] pb-5">
                                <div className="flex flex-col gap-6">
                                    <div className="col-span-2">
                                        <p className="mb-4 inline-flex items-center gap-2 text-[12px] text-[#1E4D2B] font-bold uppercase tracking-[0.12em] text-brand-primary-foreground">
                                            Pricing by product
                                        </p>
                                        <ul className="flex flex-col gap-3">
                                            <li>
                                                <DescriptionCard
                                                    href="/pricing"
                                                    title="Energy"
                                                    description="Available in Texas where homeowners have the power to choose their energy providers."
                                                    image="/images/base-core.jpg"
                                                />
                                            </li>
                                            <li>
                                                <DescriptionCard
                                                    href="/pricing"
                                                    title="Home Backup"
                                                    description="Home backup that works with select utilities."
                                                    image="/images/base-core.jpg"
                                                />
                                            </li>
                                            <li>
                                                <DescriptionCard
                                                    href="/pricing"
                                                    title="Energy + Backup"
                                                    description="Save on energy. Never lose power."
                                                    image="/images/base-core.jpg"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        {isPricingOpen && <ContentCard />}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Resources */}
                    <div className="border-b border-gray-200">
                        <button
                            type="button"
                            onClick={() =>
                                setIsResourcesOpen(!isResourcesOpen)
                            }
                            className="
                                flex
                                w-full
                                items-center
                                justify-between
                                py-3
                                text-left
                                text-[16px]
                            "
                        >
                            <span>Resources</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`transition-transform duration-200 ${
                                    isResourcesOpen
                                        ? "rotate-180"
                                        : ""
                                }`}
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>

                        {isResourcesOpen && (
                            <div className="max-w-[1376px] pb-5">
                                <div className="flex flex-col gap-6">
                                    <div>
                                        <p className="mb-4 inline-flex items-center gap-2 text-[12px] text-[#1E4D2B] font-bold uppercase tracking-[0.12em] text-brand-primary-foreground">
                                            Resources
                                        </p>
                                        <ul className="flex flex-col gap-3">
                                            <li>
                                                <DescriptionCard
                                                    href="https://help.basepowercompany.com/"
                                                    title="Help center"
                                                    description="Member support and FAQs."
                                                    image="/images/base-core.jpg"
                                                />
                                            </li>
                                            <li>
                                                <DescriptionCard
                                                    href="https://www.basepowercompany.com/reviews"
                                                    title="Reviews"
                                                    description="4.8 out of 5 on Google."
                                                    image="/images/base-core.jpg"
                                                />
                                            </li>
                                            <li>
                                                <DescriptionCard
                                                    href="https://www.basepowercompany.com/stories"
                                                    title="Stories"
                                                    description="How Texans save and protect."
                                                    image="/images/base-core.jpg"
                                                />
                                            </li>
                                            <li>
                                                <DescriptionCard
                                                    href="https://www.basepowercompany.com/blog"
                                                    title="Blog"
                                                    description="Updates and news."
                                                    image="/images/base-core.jpg"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="group overflow-hidden rounded-[20px]">
                                            <img
                                                src="/images/jj-watt-home.jpg"
                                                alt="The official power company of JJ Watt's home"
                                                className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                            />
                                        </div>
                                        <p className="mt-4 text-md font-semibold text-gray-800">
                                            The official power company of JJ Watt's home.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Utilities */}
                    <div className="border-b border-gray-200">
                        <a
                            href="/utilities"
                            className="
                                flex
                                w-full
                                py-3
                                text-[16px]
                            "
                            onClick={() =>
                                setIsMobileMenuOpen(false)
                            }
                        >
                            Utilities
                        </a>
                    </div>

                    {/* Company */}
                    <div className="border-b border-gray-200">
                        <button
                            type="button"
                            onClick={() =>
                                setIsCompanyOpen(!isCompanyOpen)
                            }
                            className="
                                flex
                                w-full
                                items-center
                                justify-between
                                py-3
                                text-left
                                text-[16px]
                            "
                        >
                            <span>Company</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`transition-transform duration-200 ${
                                    isCompanyOpen
                                        ? "rotate-180"
                                        : ""
                                }`}
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>

                        {isCompanyOpen && (
                            <div className="max-w-[1376px] pb-5">
                                <div className="flex flex-col gap-6">
                                    <div className="min-w-0 flex-1">
                                        <div>
                                            <p className="mb-4 inline-flex items-center gap-2 text-[12px] text-[#1E4D2B] font-bold uppercase tracking-[0.12em] text-brand-primary-foreground">
                                                Base Power
                                            </p>
                                            <ul className="flex flex-col gap-3">
                                                <li>
                                                    <DescriptionCard
                                                        href="/get-started"
                                                        title="About Base"
                                                        description="Our mission and team."
                                                    />
                                                </li>
                                                <li>
                                                    <DescriptionCard
                                                        href="/get-started"
                                                        title="Press"
                                                        description="Media coverage and announcements"
                                                    />
                                                </li>
                                                <li>
                                                    <DescriptionCard
                                                        href="/get-started"
                                                        title="Inside Base"
                                                        description="Exploring technical challenges."
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="mb-4 inline-flex items-center gap-2 text-[12px] text-[#1E4D2B] font-bold uppercase tracking-[0.12em] text-brand-primary-foreground">
                                            Careers
                                        </p>
                                        <ul>
                                            <li>
                                                <DescriptionCard
                                                    href="/energy"
                                                    title="Careers"
                                                    description="For engineers, operations and creatives."
                                                />
                                            </li>
                                            <li>
                                                <DescriptionCard
                                                    href="/get-started"
                                                    title="Field careers"
                                                    description="For electricians installing the future of power."
                                                />
                                            </li>
                                            <li>
                                                <DescriptionCard
                                                    href="/get-started"
                                                    title="All open roles"
                                                    description="View current openings."
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="group overflow-hidden rounded-[20px]">
                                            <img
                                                src="/images/jj-watt-home.jpg"
                                                alt="The official power company of JJ Watt's home"
                                                className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                            />
                                        </div>
                                        <p className="mt-4 text-md font-semibold text-gray-800">
                                            Join the charge
                                        </p>
                                        <span className="mt-1 block text-sm text-gray-600 transition-colors duration-300 group-hover:text-black">
                                            We need smart people solving hard problems.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Bottom buttons */}
                    <div className="flex flex-col gap-3 pt-8 pb-8">
                        <a
                            href="/get-started"
                            className="
                                flex
                                min-h-12
                                items-center
                                justify-center
                                rounded-lg
                                bg-[#B2DD79]
                                px-4
                                text-[16px]
                                font-semibold
                                text-[#1E4D2B]
                            "
                            onClick={() =>
                                setIsMobileMenuOpen(false)
                            }
                        >
                            Get Core
                        </a>
                        <a
                            href="https://account.basepowercompany.com/sign-in"
                            className="
                                flex
                                min-h-12
                                items-center
                                justify-center
                                rounded-lg
                                border
                                border-[#1E4D2B]
                                px-4
                                text-[16px]
                                font-semibold
                                text-[#1E4D2B]
                            "
                            onClick={() =>
                                setIsMobileMenuOpen(false)
                            }
                        >
                            Sign in
                        </a>
                    </div>
                </div>
            </div>
        )}
    </nav>
    
  )
}

export default Navbar