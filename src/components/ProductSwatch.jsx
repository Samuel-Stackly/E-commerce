import React from "react";

const ProductSwatch = ({
  product,
  className = "",
  image,
}) => {
  const imageSrc = image || product?.image;

  if (imageSrc) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <img
          src={imageSrc}
          alt={product?.name || "product"}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  if (!product) return null;

  const initials = product.name
    .split(" ")
    .filter((word) => word.length > 2)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        background: product.swatch,
      }}
    >
      <span>{initials}</span>
    </div>
  );
};

export default ProductSwatch;