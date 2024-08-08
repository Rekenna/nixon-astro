export default function Breadcrumbs({
  breadcrumbs,
  name,
  href,
}: {
  breadcrumbs: {
    name: string;
    href: string;
  }[];
  name: string;
  href: string;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 lg:mb-8"
    >
      <ol role="list" className="flex items-center space-x-4">
        {breadcrumbs.map((breadcrumb, i) => (
          <li key={i}>
            <div className="flex items-center">
              <a
                href={breadcrumb.href}
                className="mr-4 text-sm font-medium text-gray-500 hover:text-gray-300"
              >
                {breadcrumb.name}
              </a>
              <svg
                viewBox="0 0 6 20"
                aria-hidden="true"
                className="h-5 w-auto text-gray-300"
              >
                <path
                  d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </li>
        ))}
        <li className="text-sm">
          <a
            href={href}
            aria-current="page"
            className="font-medium text-gray-100 hover:text-gray-300"
          >
            {name}
          </a>
        </li>
      </ol>
    </nav>
  );
}
