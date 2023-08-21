import React from "react";
import Product from "./Product";

function Products() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  max-w-7xl mx-auto gap-4 px-2 sm:px-0">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default Products;
