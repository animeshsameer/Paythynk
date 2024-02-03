import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="overflow-x-hidden">
      <div className="relative mx-auto max-w-screen-xl py-12 sm:py-16 lg:pt-20 xl:pb-0">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mt-5 sm:mt-10">
            <h1 className="mt-5 inline max-w-sm text-3xl font-bold leading-snug text-gray-900 sm:text-6xl sm:leading-snug lg:text-7xl lg:leading-snug">
              A marketplace for
              <span className="text-blue-600 block">AI models</span>
            </h1>

            <div className="mt-10 sm:mb-20 flex items-center justify-center">
              <Link
                to="/marketplace"
                className="group flex sm:max-w-[140px] max-w-[120px] cursor-pointer items-center justify-center rounded-md bg-blue-600 sm:px-6 px-4 sm:py-2 py-1 text-white transition"
              >
                <span className="group flex w-full items-center justify-center rounded py-1 text-center font-bold">
                  {" "}
                  Explore
                </span>
                <svg
                  className="flex-0 ml-4 h-6 w-6 transition-all group-hover:ml-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
