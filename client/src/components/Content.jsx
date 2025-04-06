function Content() {
  return (
    <section className="mx-auto flex max-w-lg flex-col pb-20 px-4 py-8 lg:max-w-screen-xl lg:flex-row">
      <div className="w-full text-center">
        {" "}
        <div className="inline-block pb-8">
          {" "}
          <h2 className="sm:mb-10 max-w-lg text-2xl sm:text-4xl font-bold leading-snug lg:text-4xl lg:leading-snug inline-block">
            {" "}
            About PayThynk
            <span className="text-blue-600">AI</span>
          </h2>
        </div>
        <div className="grid gap-y-12 gap-x-8 lg:grid-cols-2">
          <div>
            <p className="mb-6 border-l-4 border-blue-600 pl-4 text-xl sm:text-2xl leading-10">
              Unrivaled Selection
            </p>
            <p className="text-base sm:text-lg text-gray-800 px-2">
              Explore a vast library of AI models spanning various domains, from
              natural language processing and computer vision to predictive
              analytics and more. Our diverse collection ensures that you will
              find the perfect solution for your specific use case.
            </p>
          </div>
          <div>
            <p className="mb-6 border-l-4 border-blue-600 pl-4 text-xl sm:text-2xl leading-10">
              Seamless Integration
            </p>
            <p className="text-base sm:text-lg text-gray-800 px-2">
              We rigorously vet each AI model on our platform to ensure
              reliability, accuracy, and performance. Rest assured that you are
              accessing top-tier AI solutions that have undergone thorough
              testing and validation.
            </p>
          </div>
          <div>
            <p className="mb-6 border-l-4 border-blue-600 pl-4 text-xl sm:text-2xl leading-10">
              Super Intuitive
            </p>
            <p className="text-base sm:text-lg text-gray-800 px-2">
              Our platform offers seamless integration options, allowing you to
              effortlessly incorporate AI capabilities into your applications,
              products, and workflows. Whether you are a developer or a business
              owner, our intuitive tools make it easy to leverage AI technology.
            </p>
          </div>
          <div>
            <p className="mb-6 border-l-4 border-blue-600 pl-4 text-xl sm:text-2xl leading-10">
              Exceptional Support
            </p>
            <p className="text-base sm:text-lg text-gray-800 px-2">
              At Marketplace-AI, we prioritize customer satisfaction and strive
              to provide exceptional support every step of the way. Our
              dedicated team is here to assist you with any questions, concerns,
              or technical issues you may encounter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
