import React, { useState } from "react";
import Cards from "./Cards";

const DataFilterComponent = ({ data }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleCategoryChange = (event) => {
    const { id, checked } = event.target;
    setSelectedCategories((prevCategories) =>
      checked
        ? [...prevCategories, id]
        : prevCategories.filter((category) => category !== id)
    );
  };

  const handleDropdownToggle = (event) => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const filteredData = data
    .filter(
      (item) =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(item.category)
    )
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery) ||
        item.category.toLowerCase().includes(searchQuery) ||
        (Array.isArray(item.tags) &&
          item.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          ))
    );
  // .filter(
  //   (item) =>
  //     !searchQuery ||
  //     (Array.isArray(item.tags) &&
  //       item.tags.some((tag) =>
  //         tag.toLowerCase().includes(searchQuery.toLowerCase())
  //       ))
  // );

  // Extract unique categories from data
  const categories = [...new Set(data.map((item) => item.category))];

  return (
    <div className=" p-4">
      {/* <div className="flex items-center justify-center p-4"> */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        id="dropdownDefault"
        onClick={handleDropdownToggle}
        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        type="button"
      >
        Filter by category
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {isDropdownOpen && (
        <div
          id="dropdown"
          className="z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
        >
          <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
            Category
          </h6>
          <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
            {categories.map((category) => (
              <li key={category} className="flex items-center">
                <input
                  id={category}
                  type="checkbox"
                  checked={selectedCategories.some((item) => item === category)}
                  onChange={handleCategoryChange}
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor={category}
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Cards filteredData={filteredData} />
    </div>
  );
};

export default DataFilterComponent;
