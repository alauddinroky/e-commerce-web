import React from "react";
import data from "../staticData";
import { addToCart } from "../../redux/itemReducer";
import { useDispatch } from "react-redux";
function ProductCard() {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
      }}
    >
      {data.map((item, index) => {
        return (
          <div key={index} className="w-[25vw] mb-9">
            <h4 className="text-2xl mb-2">{item.name}</h4>
            <div
              style={{
                height: "80%",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-2xl mt-2 mb-2">${item.price}</p>
            <button
              onClick={() => dispatch(addToCart(item))}
              className="py-1 px-3 border-2 border-gray-600 hover:border-gray-900 hover:scale-105 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

function Products() {
  return (
    <div>
      <ProductCard />
    </div>
  );
}

export default Products;
