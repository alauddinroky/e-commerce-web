import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); // Get the id from the route parameters
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const ref = useRef(null);

  // Access the items from Redux store
  const items = useSelector((state) => state.item.items);

  useEffect(() => {
    // Find the product in the items
    const foundProduct = items.find((item) => item.id.toString() === id);
    const recommended = items.filter(
      (item) => item.category === foundProduct.category
    );

    if (foundProduct) {
      setProduct(foundProduct);
      setRecommendedProducts(recommended);
      document.title = foundProduct.name;
      document
        .querySelector('meta[name="description"]')
        .setAttribute("content", foundProduct.description);
    } else {
      console.error("Product not found");
      document.title = "No product found";
    }
    setLoading(false);
  }, [id, items]); // Depend on `id` and `items`

  const topRecommended = recommendedProducts.slice(0, 3);

  const changeImage = (e) => {
    const src = e.target.src;
    ref.current.src = src;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={product.image}
              alt="Product"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-md mb-4"
              id="mainImage"
              ref={ref}
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              <img
                src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Thumbnail 1"
                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={(e) => changeImage(e)}
              />
              <img
                src="https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Thumbnail 2"
                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={(e) => changeImage(e)}
              />
              <img
                src="https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Thumbnail 3"
                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={(e) => changeImage(e)}
              />
              <img
                src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Thumbnail 4"
                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={(e) => changeImage(e)}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">SKU: WH1000XM4</p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">${product.price}</span>
              <span className="text-gray-500 line-through">$399.99</span>
            </div>
            <div className="flex items-center mb-4">
              {/* five star rating icon */}
              <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
            </div>
            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Color:</h3>
              <div className="flex space-x-2">
                {Array.isArray(product.colors) ? (
                  product.colors.map((color, index) => (
                    <button
                      key={index}
                      className="w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
                      style={{ backgroundColor: color }}
                      aria-label={`Color: ${color}`}
                    ></button>
                  ))
                ) : (
                  <p className="text-gray-500">No colors available</p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                defaultValue="1"
                className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div className="flex space-x-4 mb-6">
              <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                {/* cart icon goes here */}
                Add to Cart
              </button>
              <button className="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                {/* heart icon goes here */}
                Wishlist
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {Array.isArray(product.features) &&
                product.features.length > 0 ? (
                  product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))
                ) : (
                  <p>Sorry! no feature added.</p>
                )}

                {/* {Array.isArray(product.features) ? (
                  product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))
                ) : (
                  <p>Sorry! no feature added.</p>
                )} */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="xl:mt-8 xl:block">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            People also bought
          </h3>
          <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
            {topRecommended.map((item, index) => (
              <div
                className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                key={index}
              >
                <a href="#" className="overflow-hidden rounded">
                  <img
                    className="mx-auto h-44 w-44 object-cover"
                    src={item.image}
                    alt="imac image"
                  />
                </a>
                <div>
                  <Link
                    to={`/product/${item.id}`}
                    href="#"
                    className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                  >
                    {item.name}
                  </Link>
                  <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400 line-clamp-3">
                    {item.description}
                  </p>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    <span className="line-through"> $399,99 </span>
                  </p>
                  <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                    ${item.price}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2.5">
                  <button
                    data-tooltip-target="favourites-tooltip-1"
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="favourites-tooltip-1"
                    role="tooltip"
                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                  >
                    Add to favourites
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <svg
                      className="-ms-2 me-2 h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                      />
                    </svg>
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
