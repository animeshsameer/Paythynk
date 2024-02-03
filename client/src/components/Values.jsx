const Values = () => {
  return (
    <section className="w-ful py-10 text-slate-900">
      <div className="container mx-auto w-full max-w-screen-xl">
        <div className="w-full">
          <h2 className="text-center text-3xl font-extrabold">Values</h2>
          <p className="mx-auto mb-4 max-w-xl py-2 text-center text-slate-900 sm:text-lg">
            Our values are the foundation of our company and the driving force!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full p-4 text-center lg:w-1/3">
            <div className="inline-block">
              <hr className="mb-4 h-1.5 w-1/4 bg-blue-600 inline-block" />
              <h3 className="font-sans text-4xl font-light leading-10 inline-block">
                LEAD
              </h3>
            </div>
            <p className="my-5 text-slate-900">
              Cutting-edge AI solutions driving industry evolution and
              innovation.
            </p>
          </div>
          <div className="w-full p-4 text-center lg:w-1/3">
            <div className="inline-block">
              <hr className="mb-4 h-1.5 w-1/4 bg-blue-600 inline-block" />
              <h3 className="font-sans text-4xl font-light leading-10 inline-block">
                GROW
              </h3>
            </div>
            <p className="my-5 text-slate-900">
              Empowering businesses to thrive and scale exponentially.
            </p>
          </div>
          <div className="w-full p-4 text-center lg:w-1/3">
            <div className="inline-block">
              <hr className="mb-4 h-1.5 w-1/4 bg-blue-600 inline-block" />
              <h3 className="font-sans text-4xl font-light leading-10 inline-block">
                HELP
              </h3>
            </div>
            <p className="my-5 text-slate-900">
              Dedicated to exceeding expectations, enriching lives globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
