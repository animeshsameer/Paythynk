function Connect() {
  return (
    <div className="font-sans text-base text-gray-900 sm:px-10">
      <div className="text-base text-gray-900">
        <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="mx-2 pt-8 text-center md:mx-auto md:w-2/3 md:pb-12">
            <h1 className="mb-4 text-3xl font-black sm:text-5xl xl:text-6xl">
              Contact us
            </h1>
            <div className="text-xs sm:text-xl xl:text-xl my-4">
              <div className="text-gray-900">
                <p>Reach out to us if you have any questions or concerns!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-20 bg-white/40 flex w-full max-w-screen-lg flex-col overflow-hidden rounded-xl text-gray-900 md:flex-row md:border md:shadow-lg">
        <form className="mx-auto w-full max-w-xl border-gray-200 px-5 pt-4 sm:px-10 sm:py-8 md:px-8">
          <div className="mb-4">
            <label
              className="text mb-2 block font-medium text-sm sm:text-base text-left"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
              id="email"
              type="email"
              required=""
            />
          </div>
          <div className="mb-4">
            <label
              className="text mb-2 block font-medium text-sm sm:text-base text-left"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
              id="subject"
              type="subject"
              required=""
            />
          </div>
          <div className="mb-4">
            <label
              className="text mb-2 block font-medium text-sm sm:text-base text-left"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="h-40 w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
              id="message"
              required=""
            ></textarea>
          </div>
          <div className="flex items-center">
            <div className="flex-1 sm:mt-10 md:mt-2">
              {" "}
              <button
                className="rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white hover:bg-blue-700"
                type="submit"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
        <div className="mt-10 bg-blue-600 text-sm sm:text-base px-10 py-8 text-gray-100 md:mt-0 md:ml-auto">
          <div className="">
            <p className="mb-4 font-medium border-b  pb-2">Office Hours</p>
            <p className="mb-4">Monday – Thursday: 08:00 – 16:00</p>
            <p className="mb-4">Friday: 08:00 - 15:00</p>
            <p className="mb-4">Weekend: Closed</p>
            <p className="mb-4">
              Email-{" "}
              <a href="#" className="font-semibold underline">
                marketplace-ai@atlan.com
              </a>
            </p>
            <p className="mb-4">
              Phone:{" "}
              <a href="#" className="font-semibold">
                +91-999999999
              </a>
            </p>
            <hr className="my-2 h-0 border-t border-r-0 border-b-0 border-l-0 border-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
