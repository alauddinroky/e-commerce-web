import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/itemReducer";
import CartCard from "../components/CartCard";

function Cart() {
  const data = useSelector((state) => state.item.cart);
  return (
    <div>
      {/* <ProductCard /> */}
      <CartCard data={data} removeCart={removeFromCart} />
    </div>
  );
}

function ProductCard() {
  const data = useSelector((state) => state.item.cart);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {console.log(data)}
      {data &&
        data.map((item, index) => {
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
                onClick={() => dispatch(removeFromCart(item.id))}
                className="py-1 px-3 border-2 border-gray-600 hover:border-gray-900 hover:scale-105 rounded-lg"
              >
                Remove from Cart
              </button>
            </div>
          );
        })}
    </div>
  );
}
export default Cart;
