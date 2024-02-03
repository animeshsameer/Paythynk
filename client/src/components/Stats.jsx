const Stats = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="lg:mt-5 relative mx-auto flex h-full w-full flex-col items-center justify-center px-4 py-12 backdrop-blur-md sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h2 className="mx-4 px-4 pt-4 mb-8 text-3xl text-blue-600 sm:text-4xl xl:text-5xl">
          Our <span className="font-bold">Stats</span>
        </h2>

        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-y-4 gap-x-8 text-center sm:mt-12 sm:text-left lg:grid-cols-3">
          <div className="bg-white/40 relative mb-3 rounded-3xl border px-12 py-10 text-left shadow backdrop-blur-lg lg:px-12">
            <p className="relative text-3xl font-black text-blue-600 sm:text-5xl">
              25K+
            </p>
            <p className="relative mt-5 text-gray-600">
              AI models deployed on our platform, powering innovation across
              industries worldwide.
            </p>
          </div>

          <div className="bg-white/40 relative mb-3 rounded-3xl border px-12 py-10 text-left shadow backdrop-blur-lg lg:px-12">
            <p className="relative text-3xl font-black text-blue-600 sm:text-5xl">
              51%
            </p>
            <p className="relative mt-5 text-gray-600">
              Model downloads, reflecting the demand for AI solutions among
              global user base.
            </p>
          </div>

          <div className="bg-white/40 relative mb-3 rounded-3xl border px-12 py-10 text-left shadow backdrop-blur-lg lg:px-12">
            <p className="relative text-3xl font-black text-blue-600 sm:text-5xl">
              8529+
            </p>
            <p className="relative mt-5 text-gray-600">
              Experience the power and unlock new opportunities with our
              innovative platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
