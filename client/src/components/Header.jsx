import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="text-slate-700 container relative mx-auto flex flex-col overflow-hidden sm:p-2 lg:flex-row lg:items-center ">
      <Link
        to="/"
        className="flex items-center whitespace-nowrap text-2xl font-black sm:pt-0.625"
      >
        <span className="mr-2 w-8">
          <img src="" alt="" />
        </span>
        Marketplace<span className="text-blue-600">AI</span>
      </Link>
      <input type="checkbox" className="peer hidden" id="navbar-open" />
      <label
        className="absolute mt-1 right-5 cursor-pointer lg:hidden"
        htmlFor="navbar-open"
      >
        <svg
          className="h-7 w-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
      <nav
        aria-label="Header Navigation"
        className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-auto lg:max-h-full lg:flex-row"
      >
        <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-end lg:space-y-0">
          <li className="lg:mr-12">
            <Link
              to="/about"
              className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
            >
              About
            </Link>
          </li>
          <li className="lg:mr-12">
            <Link
              to="/marketplace"
              className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
            >
              Marketplace
            </Link>
          </li>
          <li className="lg:mr-12">
            <Link
              to="/contact"
              className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
