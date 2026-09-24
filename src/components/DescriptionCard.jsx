function DescriptionCard({ title, description, href, image }) {
  return (
    <a
      href={href}
      className="group -mx-2 flex items-start gap-4 rounded p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground"
    >
      {image && (
        <span className="relative block aspect-video w-30 shrink-0 overflow-hidden rounded bg-surface-default">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </span>
      )}

      <span className="min-w-0 py-0.5">
        <span className="flex items-center lg:text-lg font-medium text-gray-900 sm:text-[16px]">
          {title}

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
            className="ml-1 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>

        <span className="mt-1 block text-sm text-gray-600 transition-colors duration-300 group-hover:text-black">
          {description}
        </span>
      </span>
    </a>
  );
}

export default DescriptionCard;