import { useState } from "react";

function ContentCard() {
  const [isOpen, setIsOpen] = useState(false);

  const utilities = [
    {
      name: "CenterPoint Energy",
      area: "Greater Houston",
    },
    {
      name: "Oncor",
      area: "Central & North Texas",
    },
    {
      name: "AEP Texas Central",
      area: "Corpus Christi & South Texas",
    },
    {
      name: "AEP Texas North",
      area: "West & Northern Texas",
    },
    {
      name: "Texas–New Mexico Power",
      area: "Gulf Coast & West Texas",
    },
    {
      name: "ComEd",
      area: "Chicago & Northern Illinois",
    },
    {
      name: "Guadalupe Valley EC",
      area: "Guadalupe Valley (electric co-op)",
    },
    {
      name: "CoServ",
      area: "Denton & Collin counties (electric co-op)",
    },
    {
      name: "Farmers EC",
      area: "North Texas (electric co-op)",
    },
    {
      name: "Austin Energy",
      area: "Austin (municipal utility)",
    },
    {
      name: "El Paso Electric",
      area: "El Paso & Far West Texas",
    },
  ];

  return (
    <div className="relative w-full max-w-md">
      {/* Main card */}
      <div className="rounded-[20px] bg-[#14552f] p-6 text-white">
        <h2 className="max-w-[280px] text-2xl font-semibold leading-tight tracking-tight">
          See what Base can offer at your home.
        </h2>

        <p className="mt-4 text-sm leading-5 text-white/90">
          Base availability, pricing, and offers vary by address. Find your
          utility to see what applies to you.
        </p>

        <div className="mt-5">
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="utilities-dropdown"
            onClick={() => setIsOpen((previous) => !previous)}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#b8e879] px-4 py-3 text-base font-semibold text-[#14552f] transition-colors duration-200 hover:bg-[#a9dc68] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            See Base in your area

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>

        <p className="mt-4 text-xs leading-5 text-white/75">
          Base is now serving homeowners across Texas and Illinois.
        </p>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="utilities-dropdown"
          className="absolute left-0 top-full z-20 mt-[-1px] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white text-gray-900 shadow-lg"
        >
          <div className="grid grid-cols-1 gap-x-8 px-4 py-3 sm:grid-cols-2">
            {utilities.map((utility) => (
              <button
                key={utility.name}
                type="button"
                className="rounded-md px-0 py-2 text-left transition-colors hover:bg-gray-50"
                onClick={() => {
                  console.log(`Selected utility: ${utility.name}`);
                  setIsOpen(false);
                }}
              >
                <span className="block text-sm font-medium text-gray-900">
                  {utility.name}
                </span>

                <span className="mt-1 block text-xs text-gray-500">
                  {utility.area}
                </span>
              </button>
            ))}
          </div>

          {/* Bottom action */}
          <button
            type="button"
            className="flex w-full items-center justify-between border-t border-gray-200 px-4 py-4 text-left text-sm font-medium text-[#14552f] transition-colors hover:bg-gray-50"
            onClick={() => {
              console.log("Utility not found");
              setIsOpen(false);
            }}
          >
            <span>I don't see my utility</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default ContentCard;