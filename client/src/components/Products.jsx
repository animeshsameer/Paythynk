import { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

function Products() {
  let [loading, setLoading] = useState(true);
  const [aiModels, setAiModels] = useState([]);
  const [displayedModels, setDisplayedModels] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);
  const [isSecondaryModalOpen, setIsSecondaryModalOpen] = useState(false);
  const [newModel, setNewModel] = useState({
    id: "",
    category: "",
    name: "",
    details: "",
    featured: false,
    image: "",
    rating: 0,
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loadMoreVisible, setLoadMoreVisible] = useState(false);

  useEffect(() => {
    setLoading(true);
    // For dev- http://localhost:3005/models
    fetch(import.meta.env.VITE_API_URL)
      .then((response) => response.json())
      .then((data) => {
        const aiModelsData = data.map((item, index) => ({
          id: index + 1,
          category: item.category,
          name: item.name,
          details: item.details,
          featured: index < 3,
          image: item.image,
          rating: index >= data.length - 3 ? 5 : 0,
          code: item.code,
          provider: item.provider,
        }));
        setAiModels(aiModelsData);
        setDisplayedModels(aiModelsData.slice(0, 6));
        if (aiModelsData.length > 6) {
          setLoadMoreVisible(true);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching AI models:", error);
        setLoading(false);
      });
  }, []);

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
    if (filterValue === "all") {
      setDisplayedModels(aiModels);
    } else if (filterValue === "featured") {
      const featured = aiModels.filter((model) => model.featured);
      setDisplayedModels(featured);
    } else if (filterValue === "starred") {
      const starred = aiModels.filter((model) => model.rating === 5);
      setDisplayedModels(starred);
    }
  };

  const handleFileChange = (e, fileType) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64Data = reader.result;
        setNewModel({
          ...newModel,
          [fileType]: base64Data,
        });
      };
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "searchQuery") {
      setSearchQuery(value);
      filterModels(value);
    } else {
      setNewModel({
        ...newModel,
        [name]: value,
      });
    }
  };

  const openModal = (model) => {
    setSelectedModel(model);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedModel(null);
    setIsModalOpen(false);
  };

  const openSecondaryModal = (model) => {
    setSelectedModel(model);
    setIsSecondaryModalOpen(true);
  };

  const closeSecondaryModal = () => {
    setIsSecondaryModalOpen(false);
  };

  const filterModels = (query) => {
    let filteredModels = aiModels.filter((model) => {
      if (filter === "all") {
        return true;
      } else if (filter === "featured") {
        return model.featured;
      } else if (filter === "starred") {
        return model.rating === 5;
      }
    });

    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      filteredModels = filteredModels.filter(
        (model) =>
          model.name.toLowerCase().includes(lowerCaseQuery) ||
          model.category.toLowerCase().includes(lowerCaseQuery)
      );
    }

    setDisplayedModels(filteredModels);
  };

  const handleAddModel = () => {
    const newModelWithId = { ...newModel, id: aiModels.length + 1 };
    setAiModels((prevAiModels) => [...prevAiModels, newModelWithId]);
    setDisplayedModels((prevDisplayedModels) => [
      ...prevDisplayedModels,
      newModelWithId,
    ]);
    setNewModel({
      id: "",
      category: "",
      name: "",
      details: "",
      featured: false,
      image: "",
      rating: 0,
    });
    setIsFormOpen(false);
  };

  const handleFeatureModel = (id) => {
    const updatedModels = aiModels.map((model) =>
      model.id === id ? { ...model, featured: !model.featured } : model
    );
    setAiModels(updatedModels);
  };

  const handleRateModel = (id, rating) => {
    const updatedModels = aiModels.map((model) =>
      model.id === id ? { ...model, rating: rating } : model
    );
    setAiModels(updatedModels);
    if (rating === 5) {
      handleFilterChange("all");
    }
  };

  const handleLoadMore = () => {
    const currentLength = displayedModels.length;
    const nextBatch = aiModels.slice(currentLength, currentLength + 6);
    setDisplayedModels((prevDisplayedModels) => [
      ...prevDisplayedModels,
      ...nextBatch,
    ]);
    if (currentLength + nextBatch.length >= aiModels.length) {
      setLoadMoreVisible(false);
    }
  };

  return (
    <div>
      {loading ? (
        // Loading spinner
        <div className="flex justify-center items-center h-screen">
          <PacmanLoader />
        </div>
      ) : (
        <>
          {/* Filter buttons and Search input */}
          <div className="flex items-center justify-between mt-10 mb-4">
            <div className="sm:hidden">
              <select
                className="pr-0 pt-[8px] pb-[8px] pl-[4px] rounded-md bg-gray-200"
                value={filter}
                onChange={(e) => handleFilterChange(e.target.value)}
              >
                <option value="all">All</option>
                <option value="featured">Featured</option>
                <option value="starred">Starred</option>
              </select>
            </div>
            <div className="hidden sm:flex">
              <button
                className={`mx-2 sm:mr-[4px] sm:ml-[2px] lg:ml-20 lg:mt-0 px-4 py-2 rounded-md ${
                  filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
                onClick={() => handleFilterChange("all")}
              >
                All
              </button>
              <button
                className={`sm:ml-[4px] md:mx-2 px-4 py-2 rounded-md ${
                  filter === "featured"
                    ? "bg-blue-900 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => handleFilterChange("featured")}
              >
                Featured
              </button>
              <button
                className={`mx-2 px-4 py-2 rounded-md ${
                  filter === "starred"
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => handleFilterChange("starred")}
              >
                Starred
              </button>
            </div>
            <div className="flex">
              <input
                type="text"
                name="searchQuery"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search"
                className="pl-4 pr-[10px] mr-[10px] h-9 sm:h-12 w-[84px] sm:w-36 lg:h-fit lg:w-80 lg:px-4 lg:py-2 rounded border border-gray-300 text-sm sm:text-base"
              />
              <button
                onClick={() => setIsFormOpen(!isFormOpen)}
                className="px-2 sm:mx-[5px] md:ml-4 md:mr-5 xs:h-10 xs:w-20 sm:h-12 sm:w-32 lg:h-fit lg:w-fit lg:mr-20 lg:px-4 lg:py-2 rounded-md bg-blue-600 text-white text-sm sm:text-base"
                style={{
                  backgroundColor: isFormOpen ? "#E53E3E" : "#0E1240",
                }}
              >
                {isFormOpen ? "Close" : "Add a model?"}
              </button>
            </div>
          </div>

          {/* New Model Form */}
          {isFormOpen && (
            <div className="flex flex-wrap justify-end mb-2">
              <input
                type="text"
                name="category"
                value={newModel.category}
                onChange={handleInputChange}
                placeholder="Category"
                className="mx-1 my-1 lg:mx-2 sm:w-full md:w-full lg:w-32 xl:w-40 px-4 py-2 rounded border border-gray-300"
              />
              <input
                type="text"
                name="name"
                value={newModel.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="mx-1 my-1 lg:mx-2 sm:w-full md:w-full lg:w-32 xl:w-40 px-4 py-2 rounded border border-gray-300"
              />
              <input
                type="text"
                name="details"
                value={newModel.details}
                onChange={handleInputChange}
                placeholder="Details"
                className="mx-1 my-1 lg:mx-2 sm:w-full md:w-full lg:w-32 xl:w-40 px-4 py-2 rounded border border-gray-300"
              />
              <input
                name="code"
                value={newModel.code}
                onChange={handleInputChange}
                placeholder="Code"
                className="mx-1 my-1 lg:mx-2 sm:w-full md:w-full lg:w-32 xl:w-40 px-4 py-2 rounded border border-gray-300"
              />
              <input
                type="file"
                name="image"
                onChange={(e) => handleFileChange(e, "image")}
                className="mx-1 my-1 lg:mx-2 w-[200px] sm:w-[300px] md:w-[334px] lg:w-32 xl:w-40 px-4 py-2 rounded border border-gray-300"
              />
              <button
                onClick={handleAddModel}
                className="mx-2 my-2 p-1 sm:p-2 md:p-3 lg:mx-2 lg:px-4 lg:py-2 rounded-md bg-blue-600 text-white lg:mr-20"
              >
                Add
              </button>
            </div>
          )}

          {/* Displayed models section */}
          <div className="flex flex-wrap justify-center">
            {displayedModels.map((model) => (
              <div
                key={model.id}
                className="flex flex-col m-1 sm:m-2 md:m-4 
                
                sm:h-1/2 sm:w-1/3 md:h-1/2 md:w-1/3 lg:h-full lg:w-80 rounded-lg border border-gray-100 bg-white shadow-md relative"
              >
                {/* Image */}
                <img
                  src={`/images${model.image}`}
                  alt={model.name}
                  className="sm:h-50 sm:w-50 lg:w-80 lg:h-80 object-cover rounded-t-lg"
                />
                {/* Name */}
                <h5 className="sm:text-sm md:text-lg tracking-tight mt-2 text-slate-900">
                  {model.name}
                </h5>

                {/* Category */}
                <span className="sm:text-xs md:text-xs text-gray-600 mt-1">
                  {model.category}
                </span>

                {/* Action buttons */}
                <div className="flex justify-between">
                  {/* Feature button */}
                  <button
                    onClick={() => handleFeatureModel(model.id)}
                    className="absolute top-2 right-2 px-1 py-1 rounded-md text-black text-xs"
                    style={{ backgroundColor: "white" }}
                  >
                    {model.featured ? "Unfeature" : "Feature"}
                  </button>

                  {/* Info button */}
                  <button
                    onClick={() => openModal(model)}
                    className="flex w-1/5 mx-2 my-2 justify-center rounded-md bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300"
                  >
                    Info
                  </button>

                  {/* Rating */}
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`block h-3 w-3 align-middle ${
                          index < model.rating
                            ? "text-yellow-500"
                            : "text-gray-400"
                        } sm:h-4 sm:w-4`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        onClick={() => handleRateModel(model.id, index + 1)}
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          className=""
                        ></path>
                      </svg>
                    ))}
                  </div>

                  {/* Code button */}
                  <button
                    onClick={() => openSecondaryModal(model)}
                    className="flex w-1/5 mx-2 my-2 justify-center rounded-md bg-yellow-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300"
                  >
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {isModalOpen && selectedModel && (
            <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="relative bg-white rounded-3xl p-8 max-w-md w-full mx-4 sm:mx-auto">
                {" "}
                {/* Added max-w-md and mx-4 for small screens */}
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                {/* Model details */}
                <h2 className="text-xl font-semibold mb-4">
                  {selectedModel.name}
                </h2>
                {/* Fixed size image */}
                <div className="flex justify-center items-center">
                  <img
                    src={`/images${selectedModel.image}`}
                    alt={selectedModel.name}
                    className="w-64 h-64 rounded-lg"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <p className="text-gray-700 mt-4">{selectedModel.details}</p>
              </div>
            </div>
          )}

          {/* Secondary Modal */}
          {isSecondaryModalOpen && selectedModel && (
            <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="relative bg-white rounded-3xl p-8 max-w-md w-full mx-4 sm:mx-auto">
                {" "}
                {/* Added max-w-md and mx-4 for small screens */}
                {/* Close button */}
                <button
                  onClick={closeSecondaryModal}
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                {/* Model details */}
                <h2 className="text-xl font-semibold mb-4">
                  {selectedModel.name}
                </h2>
                <div className="relative">
                  <pre
                    className="bg-gray-100 p-4 rounded-md overflow-y-auto max-h-100 text-left"
                    style={{ fontSize: "10px" }}
                  >
                    {selectedModel.code}
                  </pre>
                  <button
                    className="absolute top-1.5 right-2 bg-black hover:bg-blue-500 text-white py-1 px-3 rounded-md"
                    onClick={() => {
                      navigator.clipboard.writeText(selectedModel.code);
                      alert("Code copied to clipboard!");
                    }}
                  >
                    Copy
                  </button>
                </div>
                <h6 className="font-semibold mt-2">
                  Provider- {selectedModel.provider}
                </h6>
              </div>
            </div>
          )}

          {/* Load more button */}
          {loadMoreVisible && (
            <div className="m-8 text-center sm:mt-12">
              <button
                type="button"
                onClick={handleLoadMore}
                className="focus:shadow inline-flex cursor-pointer items-center justify-center rounded text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 ease-in-out hover:text-white"
              >
                <svg
                  className="mr-3 block h-4 w-4 align-middle uppercase tracking-wider"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    className="uppercase"
                  ></path>
                </svg>
                Load more
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Products;
