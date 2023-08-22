import React, { useEffect } from "react";
import Product from "./Product";

function Products({ products }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  max-w-7xl mx-auto gap-4 px-2 sm:px-0">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
