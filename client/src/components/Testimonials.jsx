const Testimonials = () => {
  return (
    <section className="py-12 text-blue-900 sm:py-16 lg:pb-20 lg:pt-0 ">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-6">
        <div className="flex flex-col items-center">
          <div className="text-center mb-5">
            <p className="text-sm sm:text-lg font-medium text-blue-900">
              What clients say about their experience!
            </p>
            <h2 className="mt-4 text-3xl font-bold text-blue-900 sm:text-4xl xl:text-5xl">
              Testimonials
            </h2>
          </div>

          <div className="relative mx-auto mt-10 grid max-w-lg grid-cols-1 gap-10 md:max-w-none lg:grid-cols-3 lg:gap-10">
            <div className="flex flex-col rounded-md border border-blue-600 text-center">
              <div className="relative rounded-md flex flex-1 flex-col bg-white/40 justify-between p-6 lg:py-7 lg:px-5">
                <span className="absolute -left-5 -top-6 rounded-full border border-blue-600 bg-white p-3 text-5xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M7.16 3.5C4.73 5.06 3.55 6.67 3.55 9.36c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.9 0-2.99-1.52-2.99-4.25c0-3.8 1.75-6.53 5.02-8.42L7.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.89 0-2.98-1.52-2.98-4.25c0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div className="flex-1">
                  <p className="border-blue-500 px-10 text-xl font-black">
                    Absolutely recommended!
                  </p>

                  <blockquote className="mt-8 flex-1">
                    <p className="leading-relaxed text-blue-900">
                      Our experience with this AI marketplace has been truly
                      transformative.
                    </p>
                  </blockquote>
                </div>

                <div className="-mx-5 mt-8 px-8 py-1">
                  <div>
                    <p className="text-base font-bold">Dr. Sophia Rodriguez</p>
                    <p className="mt-0.5 text-sm">Chief Data Scientist</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-md border border-blue-600 text-center">
              <div className="relative rounded-md flex flex-1 flex-col bg-white/40 justify-between p-6 lg:py-7 lg:px-5">
                <span className="absolute -left-5 -top-6 rounded-full border border-blue-600 bg-white p-3 text-5xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M7.16 3.5C4.73 5.06 3.55 6.67 3.55 9.36c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.9 0-2.99-1.52-2.99-4.25c0-3.8 1.75-6.53 5.02-8.42L7.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.89 0-2.98-1.52-2.98-4.25c0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div className="flex-1">
                  <p className="border-blue-500 px-10 text-xl font-black">
                    Service was amazing!
                  </p>

                  <blockquote className="mt-8 flex-1">
                    <p className="leading-relaxed text-blue-900">
                      Integration of AI models from this marketplace was
                      seamless and intuitive.
                    </p>
                  </blockquote>
                </div>

                <div className="-mx-5 mt-8 px-8 py-1">
                  <div>
                    <p className="text-base font-bold">Alex Chen</p>
                    <p className="text-blue-90 mt-0.5 text-sm">
                      InnovateTech Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-md border border-blue-600 text-center">
              <div className="relative rounded-md flex flex-1 flex-col bg-white/40 justify-between p-6 lg:py-7 lg:px-5">
                <span className="absolute -left-5 -top-6 rounded-full border border-blue-600 bg-white p-3 text-5xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M7.16 3.5C4.73 5.06 3.55 6.67 3.55 9.36c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.9 0-2.99-1.52-2.99-4.25c0-3.8 1.75-6.53 5.02-8.42L7.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.89 0-2.98-1.52-2.98-4.25c0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div className="flex-1">
                  <p className="border-blue-500 px-10 text-xl font-black">
                    Saved me 1000s of hours!
                  </p>

                  <blockquote className="mt-8 flex-1">
                    <p className="leading-relaxed text-blue-900">
                      Its not just the exceptional models but also the
                      unparalleled support.
                    </p>
                  </blockquote>
                </div>

                <div className="-mx-5 mt-8 px-8 py-1">
                  <div>
                    <p className="text-base font-bold">Emily Johnson</p>
                    <p className="text-blue-90 mt-0.5 text-sm">
                      DataInnovators Ltd.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
