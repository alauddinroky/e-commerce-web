// src/components/WishlistButton.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/actions/wishlistActions";
import { selectWishlistItems } from "../redux/selectors/wishlistSelectors";

const WishlistButton = ({ product }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(selectWishlistItems);
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <button onClick={handleWishlistToggle}>
      {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
    </button>
  );
};

export default WishlistButton;
