import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import ProductSwatch from "./ProductSwatch";
import StarRating from "./StarRating";
import { useApp } from "../context/AppContext";

const ProductListRow = ({ product }) => {
  const { toggleWishlist, isWishlisted, addToCart } = useApp();

  const wishlisted = isWishlisted(product.id);
  const onSale = product.compareAtPrice !== undefined;

  const handleAdd = () => {
    const variant = product.variants.find((v) => v.inStock);

    if (variant) {
      addToCart(product, variant.size, variant.color);
    }
  };

  return (
    <div className="card p-4 flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left">
      <Link to={`/product/${product.id}`} className="shrink-0">
        <ProductSwatch
          product={product}
          className="w-32 h-32 rounded-sm"
        />
      </Link>

      <div className="flex-1 min-w-0">
        <p className="eyebrow">{product.category}</p>

        <Link
          to={`/product/${product.id}`}
          className="font-display text-base font-bold hover:text-brand transition-colors"
        >
          {product.name}
        </Link>

        <StarRating
          rating={product.rating}
          reviewCount={product.reviewCount}
          className="justify-center sm:justify-start my-1.5"
        />

        <p className="text-sm text-muted dark:text-muted-dark line-clamp-2">
          {product.description}
        </p>
      </div>

      <div className="flex flex-col items-center sm:items-end gap-2 shrink-0">
        <div className="flex items-baseline gap-2">
          <span
            className={`font-body font-semibold ${
              onSale ? "price-current" : ""
            }`}
          >
            ${product.price}
          </span>

          {onSale && (
            <span className="price-strike">
              ${product.compareAtPrice}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => toggleWishlist(product.id)}
            aria-label={
              wishlisted
                ? "Remove from wishlist"
                : "Add to wishlist"
            }
            className="p-2 rounded-sm border hairline hover:border-brand transition-colors"
          >
            <Heart
              className={`w-4 h-4 ${
                wishlisted ? "fill-rust text-rust" : ""
              }`}
            />
          </button>

          <button
            onClick={handleAdd}
            className="bg-brand hover:bg-brand-dark text-white text-xs font-semibold uppercase px-4 py-2 rounded-sm transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListRow;